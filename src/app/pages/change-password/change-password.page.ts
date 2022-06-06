import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Firestore} from "@angular/fire/firestore";
import {IrohaService} from "../../services/iroha/iroha.service";
import {AlertController, IonRouterOutlet, LoadingController, MenuController, Platform} from "@ionic/angular";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
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
    private menu: MenuController,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet
  ) {
    this.afAuth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
    this.initForm();
    this.menu.enable(false);
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        this.router.navigateByUrl('/tabs', {replaceUrl: true});
      }
    });
  }

  async ionViewDidLeave() {
    await this.menu.enable(true);
  }

  ngOnInit() {
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]})
    });
  }

  changeType() {
    this.type = !this.type;
  }

  // verify the user by re-authentication, then only send the reset password email
  async changePassword() {
    this.isLoading = true;
    this.authService.reAuth(this.form.value.email, this.form.value.password).then(async r => {
      await this.authService.resetPassword(this.form.value.email)
        .then(async d => {
          await this.showAlert('Authentication Success', 'Check your email to reset your password.');
          this.isLoading = false;
        })
        .catch(async e => {
          await this.showAlert('Authentication Failed', e);
          this.isLoading = false;
        });
    })
      .catch(async e => {await this.showAlert('Authentication Failed', e);this.isLoading = false;});
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
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
  }
}
