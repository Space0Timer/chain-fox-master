import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth/auth.service';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {IrohaService} from '../../../services/iroha.service';
import {Network} from "@capacitor/network";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit{

  successMsg = '';
  errorMsg = '';
  name = '';
  highlights = [];
  highlightSlideOpts =  {
    slidesPerView: 1.05,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true
  };
  private uid = this.ionicAuthService.getUid();
  private id: any;

  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private _firestore: Firestore,
    public iroha: IrohaService,
    public alertController: AlertController
  ) { }

  async ngOnInit() {
    Network.addListener('networkStatusChange', async status => {
      if (status.connected === false) {
        await this.showAlert('You must have an Internet Connection to use this app. You will be redirected to the login page.');
        await this.router.navigate(['auth-screen']);
      }
    });
    await this.getUserId();
  }

  async showAlert(message) {
    const alert = await this.alertController.create({
      header: 'No Internet Connection',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
  logOut() {
    this.ionicAuthService.logout()
      .then((response) => {
        this.errorMsg = '';
        this.successMsg = 'Logout successful.';
        this.goToLogin();
      }, error => {
        this.errorMsg = error.message;
        this.successMsg = '';
      });
  }

  goToLogin() {
    this.router.navigate(['auth-screen']);
  }

  chat() {
    this.router.navigate(['chat-list']);
  }

  async getUserId() {
    // eslint-disable-next-line no-underscore-dangle
    const docRef = doc(this._firestore, 'users', this.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      this.id = docSnap.data().username.concat('@test');
      this.iroha.wallet.name = '';
      await this.iroha.setName(this.id);
      this.iroha.wallet.balance = '0';
      await this.iroha.setBalance(this.id);
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }


  qrCode() {
    this.router.navigate(['qr-code']);
  }

}
