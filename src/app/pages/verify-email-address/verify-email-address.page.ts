import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {AlertController, LoadingController, MenuController} from "@ionic/angular";
import {doc, Firestore, getDoc} from "@angular/fire/firestore";
import {StorageService} from "../../services/storage/storage.service";
import {SplashScreen} from "@capacitor/splash-screen";

@Component({
  selector: 'app-verify-email-address',
  templateUrl: './verify-email-address.page.html',
  styleUrls: ['./verify-email-address.page.scss'],
})
export class VerifyEmailAddressPage implements OnInit {
  isLoading = false;
  isLoading1 = false;
  constructor(private router: Router,
              private ionicAuthService: AuthService,
              private alertController: AlertController,
              private _firestore: Firestore,
              private storage: StorageService,
              private menu: MenuController,) {
  }


  async ionViewDidLeave() {
    await this.menu.enable(true);
  }

  async ionViewDidEnter() {
    this.ionicAuthService.isLoadingSignUp = false;
  }

  async ngOnInit() {
    await this.menu.enable(false);
    await SplashScreen.hide();
  }

  async unlock() {
    this.isLoading = true;
    const docRef1 = doc(this._firestore, 'users', this.ionicAuthService.currentUser.uid);
    const docSnap1 = await getDoc(docRef1);
    const username1 = await this.storage.get(docSnap1.data().username);
    await this.ionicAuthService.reAuth(docSnap1.data().email, username1);
    if (await this.ionicAuthService.checkVerify() === true) {
      this.isLoading = false;
      await this.showAlert('Verification Success', 'Email has been verified! You can now login to your account.');
      await this.router.navigate(['auth-screen']);
    }
    else {
      this.isLoading = false;
      await this.showAlert('Verification Failed', 'Email not yet verified!');
    }
  }

  async switch() {
    await this.router.navigate(['auth-screen']);
  }

  async resend() {
    this.isLoading1 = true;
    await this.ionicAuthService.sendVerificationMail();
    await this.showAlert('Verification mail sent', 'Please check your inbox or junk for new verification mail.');
    this.isLoading1 = false;
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
