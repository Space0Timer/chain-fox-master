import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AlertController, LoadingController, MenuController} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import {IrohaService} from '../../../services/iroha/iroha.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {doc, Firestore, getDoc, setDoc} from '@angular/fire/firestore';
import {AvailableResult, BiometryType, Credentials, NativeBiometric} from 'capacitor-native-biometric';
import {StorageService} from "../../../services/storage/storage.service";

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
    // stop the side menu from appearing when there is a side menu icon
    this.menu.enable(false);
  }

// enable side menu to appear on a next page. If the next page does not side menu icon, it will be disabled again
  async ionViewDidLeave() {
    await this.menu.enable(true);
  }

  ngOnInit() {
  }

  // create html form
  initForm() {
    this.form = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
    });
  }

  // change password visibility
  changeType() {
    this.type = !this.type;
  }

  // login with fingerprint or face id
  biometricLogin() {
    NativeBiometric.isAvailable().then(
      (result: AvailableResult) => {
        const isAvailable = result.isAvailable;
        const isFaceId = result.biometryType === BiometryType.FACE_ID;
        if (isAvailable || isFaceId) {
          // Get user's credentials
          NativeBiometric.getCredentials({
            server: 'chainfox',
          }).then((credentials: Credentials) => {
            // Authenticate using biometrics before logging the user in
            NativeBiometric.verifyIdentity({
              reason: 'Verification',
              title: 'Verification',
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

  // function when the login button is pressed
  async onSubmit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.loginIsLoading = true;
      this.authService.login(this.form.value).then(async (data) => {
        const docRef = doc(this._firestore, 'users', this.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // set biometric login credentials
          await this.authService.setBiometricLogin(this.form.value.email, this.form.value.password);
        }
        this.form.reset();
        await this.router.navigate(['tabs']);
      })
        .catch(e => {
          let msg = e;
          if (e.code === 'auth/user-not-found') {
            msg = 'Email not found.';
          } else if (e.code === 'auth/wrong-password') {
            msg = 'Wrong Password';
          }
          this.authService.logout();
          this.authService.loginIsLoading = false;
          this.showAlert('Authentication Failed', msg);
        });
  }

  goToLogin(){
    this.router.navigateByUrl('/auth-screen', {replaceUrl: true});
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
