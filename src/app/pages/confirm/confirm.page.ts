/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import {AccessService} from '../../services/auth/access.service';
import {Router} from '@angular/router';
import {IrohaService} from '../../services/iroha.service';
import {doc, Firestore, getDoc, setDoc} from '@angular/fire/firestore';
import {AuthService} from '../../services/auth/auth.service';
import {AngularFirestore, DocumentData} from '@angular/fire/compat/firestore';
import {ProductService} from '../../services/cafe/product.service';
import firebase from 'firebase/compat/app';
import {AlertController, IonRouterOutlet, LoadingController, ModalController} from "@ionic/angular";
import {AvailableResult, BiometryType, Credentials, NativeBiometric} from "capacitor-native-biometric";
import {StoreSalesPage} from "../store-sales/store-sales.page";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  logoutTimer = this.access.logoutTimer.asObservable();
  owner = '';
  total = 0;
  showFallback = true;
  password = '1234'
  hasBiometricAuth = false;
  private id = this.ionicAuthService.getUid();
  private loading: any;

  constructor(private access: AccessService,
              private router: Router,
              private iroha: IrohaService,
              private ionicAuthService: AuthService,
              private _firestore: Firestore,
              private product: ProductService,
              private afs: AngularFirestore,
              private alertController: AlertController,
              private loadingController: LoadingController,
              private modalCtrl: ModalController,
              private routerOutlet: IonRouterOutlet,) {
  }

  async ngOnInit() {
  }


  unlock() {
    NativeBiometric.isAvailable().then(
      async (result: AvailableResult) => {
        const isAvailable = result.isAvailable;
        const isFaceId = result.biometryType == BiometryType.FACE_ID;
        if (isAvailable) {
          // Get user's credentials
          NativeBiometric.getCredentials({
            server: "chainfox",
          }).then((credentials: Credentials) => {
            // Authenticate using biometrics before logging the user in
            NativeBiometric.verifyIdentity({
              reason: "For easy log in",
              title: "Log in",
              subtitle: "Maybe add subtitle here?",
              description: "Maybe a description too?",
            }).then(
              async () => {
                // Authentication successful
                await this.payment();
              },
              (error) => {
                // Failed to authenticate
              }
            );
          });
        } else {
          await this.presentPrompt();
        }
      },
      (error) => {
        // Couldn't check availability
      }
    );

  }

  ionViewDidEnter() {
    this.access.resetLogoutTimer();
  }

  async payment() {
    let data: DocumentData;
    this.loadingController.create({
      message: 'Paying...',
    }).then(async overlay => {
      this.loading = overlay;
      this.loading.present();
      // eslint-disable-next-line no-underscore-dangle
      const itemIdRef = doc(this._firestore, `carts/${(this.id)}`);
      await getDoc(itemIdRef)
        .then(snap => {
          data = snap.data();
          delete data.lastUpdate;
          delete data.id;
        });
      // eslint-disable-next-line guard-for-in
      for (const key in data) {
        const value = data[key];
        // get owner id from item id
        // eslint-disable-next-line no-underscore-dangle
        const idOwnerRef = doc(this._firestore, `idOwner/${(key)}`);
        const idOwnerSnap = await getDoc(idOwnerRef);
        const idOwnerName = idOwnerSnap.data();
        this.owner = idOwnerName.owner;
        // get name of owner
        // eslint-disable-next-line no-underscore-dangle
        const ownerRef = doc(this._firestore, `stores/${(this.owner)}`);
        const ownerSnap = await getDoc(ownerRef);
        const ownerName = ownerSnap.data();
        // find price times value
        const dataRef = doc(this._firestore, `stores/${(this.owner)}/items/${(key)}`);
        const docSnap = await getDoc(dataRef);
        const dataSnap = docSnap.data();
        const price = dataSnap.price;
        const pay = price * value;
        const payString = pay.toString();
        console.log(pay);
        // get owner name
        const nameRef = doc(this._firestore, `users/${(this.owner)}`);
        const nameSnap = await getDoc(nameRef);
        const name = nameSnap.data();
        const dest = name.username;
        // get buyer name
        const unameRef = doc(this._firestore, `users/${(this.id)}`);
        const unameSnap = await getDoc(unameRef);
        const uname = unameSnap.data();
        const src = uname.username;
        // payment
        await this.iroha.payment(dest, '', payString);
        this.iroha.wallet.balance = '0';
        await this.iroha.setBalance(src+'@test');
        // add orders for buyer
        const pushKey = this.afs.createId();
        const orderRef = doc(this._firestore, `users/${(this.id)}/activeOrders/${(pushKey)}`);
        await setDoc(orderRef, {
          itemName: dataSnap.name,
          imageUrl: dataSnap.imageUrl,
          itemId: dataSnap.id,
          owner: ownerName.name,
          ownerId: ownerName.id,
          orderId: pushKey,
          price: price,
          status: 'paid',
          orderTime: firebase.firestore.FieldValue.serverTimestamp()
        });
        // add to all orders for buyer
        const allOrderRef = doc(this._firestore, `users/${(this.id)}/allOrders/${(pushKey)}`);
        await setDoc(allOrderRef, {
          itemName: dataSnap.name,
          imageUrl: dataSnap.imageUrl,
          itemId: dataSnap.id,
          owner: ownerName.name,
          ownerId: ownerName.id,
          orderId: pushKey,
          price: price,
          status: 'paid',
          orderTime: firebase.firestore.FieldValue.serverTimestamp()
        });
        // add orders for stall
        const trackActiveOrderRef = doc(this._firestore, `trackOrders/${(this.owner)}/activeOrders/${(pushKey)}`);
        await setDoc(trackActiveOrderRef, {
          itemName: dataSnap.name,
          imageUrl: dataSnap.imageUrl,
          itemId: dataSnap.id,
          owner: ownerName.name,
          ownerId: ownerName.id,
          orderId: pushKey,
          price: price,
          user: src,
          status: 'paid',
          orderTime: firebase.firestore.FieldValue.serverTimestamp()
        });
        // add all orders for stall
        const trackOrderRef = doc(this._firestore, `trackOrders/${(this.owner)}/allOrders/${(pushKey)}`);
        await setDoc(trackOrderRef, {
          itemName: dataSnap.name,
          imageUrl: dataSnap.imageUrl,
          itemId: dataSnap.id,
          user: src,
          ownerId: ownerName.id,
          orderId: pushKey,
          price,
          status: 'paid',
          orderTime: firebase.firestore.FieldValue.serverTimestamp()
        });
        // add to sales
        const currentDate = new Date();
        const month = currentDate.getUTCMonth() + 1; //months from 1-12
        const day = currentDate.getUTCDate();
        const year = currentDate.getUTCFullYear();
        const trackSales = doc(this._firestore, `trackSales/${(this.owner)}/${(year)}/${(month)}/${(day)}/${(pushKey)}`);
        await setDoc(trackSales, {
          itemName: dataSnap.name,
          imageUrl: dataSnap.imageUrl,
          itemId: dataSnap.id,
          owner: ownerName.name,
          ownerId: ownerName.id,
          orderId: pushKey,
          price,
          day
        });
      }
    }).then(async () => {
      // clear cart
      await this.product.checkoutCart();
      this.loading.dismiss();
      await this.showAlert("Payment Success!", "You can check your purchases in My Orders.");

      await this.router.navigate['my-orders'];
    }).catch( e => {
        this.loading.dismiss();
        this.showAlert("Payment Failure!", e);
    }
    );

  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async pdfAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'No',
          role: "cancel",
          handler: () => {
            console.log('cancel');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.generatePdf();
          }
        },
      ]
    });

    await alert.present();
  }

  async presentPrompt() {
    const alert = await this.alertController.create({
      header: 'User verification',
      inputs: [
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: async data => {
            this.loadingController.create({
              message: 'Verifying...',
            }).then(async overlay => {
              this.loading = overlay;
              this.loading.present();
            await this.iroha.setAccDetail('12345678aA.');
            await this.iroha.getAccDetail('sec');
            if (data.password === this.iroha.pw) {
                this.loading.dismiss();
                await this.payment();

            }
            else {
              this.loading.dismiss();
              await this.showAlert('Verification Failed', 'You entered the wrong password');
              await this.router.navigate(['tabs']);
            }
            });
          }
        }
      ]
    });
    await alert.present();
  }


  generatePdf(){
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(documentDefinition).open();
  }

  back() {
    this.router.navigate(['checkout']);
  }


}
