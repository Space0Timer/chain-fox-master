import { Component, OnInit } from '@angular/core';
import {IrohaService} from "../../services/iroha/iroha.service";
import {AlertController, LoadingController, MenuController} from "@ionic/angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AvailableResult, BiometryType, Credentials, NativeBiometric} from "capacitor-native-biometric";
import {Router} from "@angular/router";
import {doc, Firestore, getDoc} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-scan-pay',
  templateUrl: './scan-pay.page.html',
  styleUrls: ['./scan-pay.page.scss'],
})
export class ScanPayPage implements OnInit {

  form: FormGroup;
  isLoading: boolean;
  type = true;
  private loading: any;
  private currentUser: any;

  constructor(private iroha: IrohaService,
              private alertController: AlertController,
              private loadingController: LoadingController,
              private router: Router,
              private _firestore: Firestore,
              private afAuth: AngularFireAuth,
              private menu: MenuController) {
    this.afAuth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
    this.menu.enable(false);
  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
  }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.form = new FormGroup({
      amount: new FormControl(null, {validators: [Validators.required, Validators.pattern('^(\\d+(\\.\\d{0,2})?|\\.?\\d{1,2})$')]}),
      reference: new FormControl(null, {validators: [Validators.required]}), // added email validator also
    });
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
              reason: 'Scan to verify payments',
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
      await this.pay(this.form.value.reference, this.form.value.amount);
    });
  }

  async pay(message, amount) {
    await this.iroha.payment(this.iroha.result, message, amount)
      .then(async d => {
      this.iroha.wallet.balance = '0';
      await this.iroha.setBalance(this.iroha.wallet.name + '@test');
      this.loading.dismiss();
      // eslint-disable-next-line max-len
      await this.showAlert('Transfer Success', 'You have sent RM' + this.form.value.amount + ' to ' + this.iroha.result.split('@')[0] + '.');
      this.form.reset();
      await this.router.navigate(['tabs']);
    })
      .catch(e => {
        this.loading.dismiss();
        this.showAlert('Transfer Failed', e);
      });
    this.iroha.result = '';
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

  cancel(){
    this.router.navigate(['tabs']);
  }
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
