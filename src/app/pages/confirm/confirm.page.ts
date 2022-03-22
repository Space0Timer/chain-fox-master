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
import {AlertController, LoadingController} from "@ionic/angular";

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
              private loadingController: LoadingController) {
  }

  async ngOnInit() {
  }


  unlock() {

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
      await this.router.navigateByUrl('tabs/account', {replaceUrl: true});
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

  back() {
    this.router.navigate(['checkout']);
  }


}
