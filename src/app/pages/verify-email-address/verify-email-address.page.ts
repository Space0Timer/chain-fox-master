import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {AlertController, LoadingController, MenuController} from "@ionic/angular";
import {doc, Firestore, getDoc} from "@angular/fire/firestore";
import {StorageService} from "../../services/storage.service";
import {SplashScreen} from "@capacitor/splash-screen";

@Component({
  selector: 'app-verify-email-address',
  templateUrl: './verify-email-address.page.html',
  styleUrls: ['./verify-email-address.page.scss'],
})
export class VerifyEmailAddressPage implements OnInit {
  isLoading = false;
  constructor(private router: Router,
              private ionicAuthService: AuthService,
              private alertController: AlertController,
              private _firestore: Firestore,
              private storage: StorageService,
              private menu: MenuController) {
    this.menu.enable(false);
  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
  }


  async ngOnInit() {
    await SplashScreen.hide();
  }

  async unlock() {
    this.isLoading = true;
    const docRef1 = doc(this._firestore, 'users', this.ionicAuthService.currentUser.uid);
    const docSnap1 = await getDoc(docRef1);
    const username1 = await this.storage.get(docSnap1.data().username);
    await this.ionicAuthService.reAuth(docSnap1.data().email, username1);
    if (await this.ionicAuthService.checkVerify() === true) {
      await this.router.navigate(['tabs']);
    }
    else {
      this.isLoading = false;
      await this.showAlert('Email not yet verified!');
    }
  }

  async switch() {
    await this.router.navigate(['auth-screen']);
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
