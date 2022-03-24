import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import {IrohaService} from '../../../services/iroha.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {AvailableResult, BiometryType, Credentials, NativeBiometric} from 'capacitor-native-biometric';

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
    private _firestore: Firestore
  ) {
    this.initForm();
    this.afAuth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {}

  initForm() {
    this.form = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]})
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
              reason: 'For easy log in',
              title: 'Log in',
              subtitle: 'Maybe add subtitle here?',
              description: 'Maybe a description too?',
            }).then(
              () => {
                // Authentication successful
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
                      await this.iroha.topUp(name, '', '1');
                      await this.iroha.setBalance(name);
                      await this.iroha.payment('admin', '', '1');
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
                      this.showAlert(msg);
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
  onSubmit() {
    if(!this.form.valid) {
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
          await this.iroha.topUp(name, '', '1');
          await this.iroha.setBalance(name);
          await this.iroha.payment('admin', '', '1');
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
          this.showAlert(msg);
        });
    });
  }

  async showAlert(message) {
    const alert = await this.alertController.create({
      header: 'Authentication Failed',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
