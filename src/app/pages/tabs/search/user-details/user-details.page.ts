import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import { IrohaService } from '../../../../services/iroha.service';
import {AlertController, LoadingController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AvailableResult, BiometryType, Credentials, NativeBiometric} from 'capacitor-native-biometric';

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
    private alertController: AlertController
) {
    this.initForm();
    this.afAuth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
    };

  ngOnInit() {
  }

  initForm() {
    this.form = new FormGroup({
      amount: new FormControl(null, {validators: [Validators.required]}),
      reference: new FormControl(null, {validators: [Validators.required]}), // added email validator also
    });
  }

  changeType() {
    this.type = !this.type;
  }

  biometricAuth() {
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
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loadingController.create({
      message: 'Sending coins...',
    }).then(async overlay => {
      this.loading = overlay;
      this.loading.present();
      // eslint-disable-next-line no-underscore-dangle
    const docRef = doc(this._firestore, 'users', this.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const name = docSnap.data().username.concat('@test');
      this.iroha.wallet.name = '';
      await this.iroha.setName(name);
      this.iroha.wallet.balance = 0;
      await this.iroha.topUp(name, '', '1');
      await this.iroha.payment('admin', '', '1');
      await this.iroha.setBalance(name);
    }
      await this.iroha.sendMoney(this.form.value.reference, this.form.value.amount)
        .then(async d => {
          this.iroha.wallet.balance = '0';
          await this.iroha.setBalance(this.iroha.wallet.name + '@test');
          this.loading.dismiss();
          // eslint-disable-next-line max-len
          await this.showAlert('Transfer Success', 'You have sent RM' + this.form.value.amount + ' to ' + this.iroha.otherWallet.name + '.');
          this.form.reset();
          this.iroha.otherWallet.name = '';
        })
        .catch(e => {
      this.loading.dismiss();
      this.showAlert('Transfer Failed', e);
    });
  });
  }

  back() {
    this.router.navigateByUrl('/tabs/home', {replaceUrl: true});
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

