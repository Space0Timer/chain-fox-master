import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AlertController, LoadingController, MenuController} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import {IrohaService} from '../../../services/iroha.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {doc, Firestore, getDoc, setDoc} from '@angular/fire/firestore';
import {AvailableResult, BiometryType, Credentials, NativeBiometric} from 'capacitor-native-biometric';
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  type = true;
  isLoading: boolean;
  loading: any;
  private currentUser: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private iroha: IrohaService,
    private afAuth: AngularFireAuth,
    private _firestore: Firestore,
    private menu: MenuController,
    private storage: StorageService
  ) {
    this.initForm();
    this.afAuth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
    this.menu.enable(false);
  }

  async ionViewDidLeave() {
    await this.menu.enable(true);
  }


  ngOnInit() {}

  initForm() {
    this.form = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
    });
  }

  changeType() {
    this.type = !this.type;
  }

  biometricLogin() {
    NativeBiometric.isAvailable().then(
      (result: AvailableResult) => {
        const isAvailable = result.isAvailable;
        const isFaceId = result.biometryType === BiometryType.FACE_ID;

        if (isAvailable) {
          // Get user's credentials
          NativeBiometric.getCredentials({
            server: 'chainfox',
          }).then((credentials: Credentials) => {
            // Authenticate using biometrics before logging the user in
            NativeBiometric.verifyIdentity({
              reason: 'Login',
              title: 'Log in',
              subtitle: 'Maybe add subtitle here?',
              description: 'Maybe a description too?',
            }).then(
              () => {
                const form = {email: credentials.username, password: credentials.password};
                // Authentication successful
                this.loadingController.create({
                  message: 'Logging in...',
                }).then(async overlay => {
                  this.loading = overlay;
                  this.loading.present();
                  this.authService.login(form).then(async (data) => {
                    const docRef = doc(this._firestore, 'users', this.currentUser.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                      const name = docSnap.data().username.concat('@test');
                      this.iroha.wallet.name = '';
                      await this.iroha.setName(name);
                      this.iroha.wallet.balance = 0;
                      await this.iroha.setBalance(name);
                    }
                    this.form.reset();
                    this.loading.dismiss();
                    await this.router.navigateByUrl('/tabs', {replaceUrl: true});
                  })
                    .catch(e => {
                      let msg = e;
                      if(e.code === 'auth/user-not-found') {
                        msg = 'Email not found.';
                      } else if(e.code === 'auth/wrong-password') {
                        msg = 'Wrong Password';
                      }
                      this.loading.dismiss();
                      this.authService.logout();
                      this.showAlert('Authetication Failed', msg);
                    });
                });
              },
              (error) => {
                // Failed to authenticate
              }
            );
          });
        }
      },
      (error) => {
        // Couldn't check availability
      }
    );
  }
  async onSubmit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loadingController.create({
      message: 'Logging in...',
    }).then(async overlay => {
      this.loading = overlay;
      this.loading.present();
      this.authService.login(this.form.value).then(async (data) => {
        const docRef = doc(this._firestore, 'users', this.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const name = docSnap.data().username.concat('@test');
          this.iroha.wallet.name = '';
          await this.iroha.setName(name);
          this.iroha.wallet.balance = 0;
          await this.iroha.topUpVerify(name, '', '1');
          await this.iroha.payment('admin', '', '1');
          await this.iroha.setBalance(name);
          await this.iroha.setAccDetail(this.form.value.password);
          await this.authService.setBiometricLogin(this.form.value.email, this.form.value.password);
        }
        this.form.reset();
        this.loading.dismiss();
        await this.router.navigateByUrl('/tabs', {replaceUrl: true});
      })
        .catch(e => {
          let msg = e;
          if (e.code === 'auth/user-not-found') {
            msg = 'Email not found.';
          } else if (e.code === 'auth/wrong-password') {
            msg = 'Wrong Password';
          }
          this.loading.dismiss();
          this.authService.logout();
          this.showAlert('Authentication Failed', msg);
        });
    });
  }

  async forgotPassword() {
    const alert = await this.alertController.create({
      header: 'Enter your email',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email',
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
            console.log(data.email);
            this.loadingController.create({
              message: 'Verifying...',
            }).then(async overlay => {
              this.loading = overlay;
              this.loading.present();
              await this.authService.resetPassword(data.email)
                .then (async d => {
                  this.loading.dismiss();
                  await this.showAlert('Authentication Success', 'Check your email to reset your password.');
                })
                .catch(async e => {
                  this.loading.dismiss();
                await this.showAlert('Authentication Failed', e);
              });
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }


}
