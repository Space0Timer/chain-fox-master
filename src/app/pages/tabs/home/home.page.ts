import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth/auth.service';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {IrohaService} from '../../../services/iroha.service';
import {Network} from '@capacitor/network';
import {AlertController, MenuController} from '@ionic/angular';
import {FCM} from '@capacitor-community/fcm';
import { PushNotifications } from '@capacitor/push-notifications';
import {SplashScreen} from "@capacitor/splash-screen";
import {ProductService} from "../../../services/cafe/product.service";

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
  features: any[] = [
    {id: 'top-up', name: 'Top Up', icon: 'add-circle-outline', background: 'rgba(27,150,181, 0.1)', page: ''},
    {id: 'list', name: 'View History', icon: 'archive-outline', background: 'rgba(106,100,255, 0.1)', page: ''},
  ];

  private uid = this.ionicAuthService.getUid();
  private id: any;
  private options = [];

  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private _firestore: Firestore,
    public iroha: IrohaService,
    public alertController: AlertController,
    private product: ProductService,
  ) { }

  getRoute(route) {
    this.router.navigate([route]);
  }
  slidesDidLoad(slides) {
    slides.startAutoplay();
  }
  async doRefresh(event) {
    await this.getUserId();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  async ngOnInit() {
    try {
      await PushNotifications.requestPermissions();
      await PushNotifications.register();
      // Enable the auto initialization of the library
      FCM.getToken()
        .then((r) => console.log(` ${r.token}`))
        .catch((err) => console.log(err));
      Network.addListener('networkStatusChange', async status => {
        if (status.connected === false) {
          await this.showAlert('You must have an Internet Connection to use this app. You will be redirected to the login page.');
          await this.router.navigate(['auth-screen']);
        }
      });
    }
    catch(e) {
      console.log(e);
    }
  }
  async ionViewDidEnter() {
    await this.getUserId();
    await SplashScreen.hide();
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
