import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {Firestore} from "@angular/fire/firestore";
import {IrohaService} from "../../services/iroha.service";
import {AlertController, LoadingController, MenuController} from "@ionic/angular";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-biometric-login',
  templateUrl: './biometric-login.page.html',
  styleUrls: ['./biometric-login.page.scss'],
})
export class BiometricLoginPage implements OnInit {

  form: FormGroup;
  type = false;
  loading: any;
  isToggled: boolean;
  id = this.authService.getUid();
  private currentUser: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _firestore: Firestore,
    private iroha: IrohaService,
    private loadingController: LoadingController,
    private afAuth: AngularFireAuth,
    private alertController: AlertController,
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

  async ngOnInit() {
    this.isToggled = await this.storage.get('bio-login') !== 'false';
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]})
    });
  }

  async _ionChange(event) {
    console.log(await this.storage.get('bio-login'));
    if (this.isToggled) {
      if (await this.storage.get('bio-login') === 'false') {
        await this.presentPrompt();
      }
    }
    else {
      if (await this.storage.get('bio-login') === 'true') {
        await this.showAlert('Disable Biometric Login', 'Are you sure you want to disable biometric login?');
      }
    }
  }

  changeType() {
    this.type = !this.type;
  }

  async setBiometricLogin() {
    this.authService.reAuth(this.form.value.email, this.form.value.password).then(async r => {
      await this.authService.resetPassword(this.form.value.email)
        .then(async d => {
          await this.showAlert('Authentication Success', 'You ca.');
        })
        .catch(async e => {
          await this.showAlert('Authentication Failed', e);
        });
    })
      .catch(async e => await this.showAlert('Authentication Failed', e));

  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: data => {
            this.isToggled = true;
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: async data => {
            await this.storage.set('bio-login', 'false');
            this.authService.biometricLogin = await this.storage.get('bio-login');
            console.log(this.authService.biometricLogin);
          }
        }
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
            this.isToggled = false;
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: async data => {
            await this.iroha.getAccDetail('sec');
            if (data.password === this.iroha.pw) {
              await this.storage.set('bio-login', 'true');
              this.authService.biometricLogin = await this.storage.get('bio-login');
              console.log(this.authService.biometricLogin);
            }
            else {
              this.isToggled = false;
              await this.showAlert('Verification Failed', 'You entered the wrong password');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  back() {
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
  }
}
