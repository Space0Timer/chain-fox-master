import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import { IrohaService } from '../../../../services/iroha/iroha.service';
import {AlertController, LoadingController, MenuController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AvailableResult, BiometryType, Credentials, NativeBiometric} from 'capacitor-native-biometric';
import {StorageService} from "../../../../services/storage/storage.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})

export class UserDetailsPage implements OnInit {

  form: FormGroup;
  type = false;
  isLoading: boolean;
  loading: any;
  id = this.ionicAuthService.getUid();
  private currentUser: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _firestore: Firestore,
    private ionicAuthService: AuthService,
    private iroha: IrohaService,
    private loadingController: LoadingController,
    private afAuth: AngularFireAuth,
    private alertController: AlertController,
    private menu: MenuController
) {
    this.initForm();
    this.afAuth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
    this.menu.enable(false);
  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
    this.iroha.otherWallet.name = '';
  }

  ngOnInit() {

  }

  initForm() {
    this.form = new FormGroup({
      amount: new FormControl(null, {validators: [Validators.required, Validators.pattern('^(\\d+(\\.\\d{0,2})?|\\.?\\d{1,2})$')]}),
      reference: new FormControl(null, {validators: [Validators.required]}), // added email validator also
    });
  }

  changeType() {
    this.type = !this.type;
  }

  biometricAuth() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    NativeBiometric.isAvailable().then(
      async (result: AvailableResult) => {
        const isAvailable = result.isAvailable;
        const isFaceId = result.biometryType === BiometryType.FACE_ID;

        if (isAvailable) {
          // Get user's credentials
          NativeBiometric.getCredentials({
            server: 'chainfox',
          }).then((credentials: Credentials) => {
            // Authenticate using biometrics before logging the user in
            NativeBiometric.verifyIdentity({
              reason: 'For easy log in',
              title: 'Log in',
              subtitle: 'Maybe add subtitle here?',
              description: 'Maybe a description too?',
            }).then(
              () => {
                // Authentication successful
                this.onSubmit();
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
      async (error) => {
        // Couldn't check availability
        await this.presentPrompt();
      }
    );
  }

  async onSubmit() {

    const temp = this.iroha.otherWallet.name;
    this.isLoading = true;
    // eslint-disable-next-line no-underscore-dangle
    const docRef = doc(this._firestore, 'users', this.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const name = docSnap.data().username.concat('@test');
      this.iroha.wallet.name = '';
      await this.iroha.setName(name);
    }
    await this.iroha.sendMoney(this.form.value.reference, this.form.value.amount, temp).catch(async e => {
        this.isLoading = false;
        await this.showAlert('Transfer Failed', e);
        await this.router.navigate(['tabs']);
      }
    );
    this.isLoading = false;
  }

  back() {
    this.router.navigateByUrl('/tabs/search', {replaceUrl: true});
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
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
              await this.iroha.getAccDetail('sec');
              if (data.password === this.iroha.pw) {
                this.loading.dismiss();
                await this.onSubmit();
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
}

