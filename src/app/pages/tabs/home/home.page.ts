import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth/auth.service';
import {doc, Firestore, getDoc, setDoc} from '@angular/fire/firestore';
import {IrohaService} from '../../../services/iroha/iroha.service';
import {Network} from '@capacitor/network';
import {AlertController, IonRouterOutlet, LoadingController, MenuController, Platform} from '@ionic/angular';
import {FCM} from '@capacitor-community/fcm';
import { PushNotifications } from '@capacitor/push-notifications';
import {SplashScreen} from '@capacitor/splash-screen';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {App} from "@capacitor/app";
import {StorageService} from "../../../services/storage/storage.service";

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
  private image: string;

  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private _firestore: Firestore,
    public iroha: IrohaService,
    public alertController: AlertController,
    private afs: AngularFirestore,
    private loading: LoadingController,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private storage: StorageService
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
  }

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

  async getImagesFromFirebase() {
    for (const i of Array(4).keys()) {
      console.log(`images/promo${(i + 1)}`);
      const imageRef = doc(this._firestore, `images/promo${(i + 1)}`);
      const imageSnap = await getDoc(imageRef);
      const imageName = imageSnap.data().url;
      this.options.push(imageName);
    }
    this.image = this.options.pop();
  }

  async ngOnInit() {
    const docRef = doc(this._firestore, 'users', this.ionicAuthService.currentUser.uid);
    const docSnap = await getDoc(docRef);
    this.id = docSnap.data().username.concat('@test');
    this.iroha.wallet.name = '';
    await this.iroha.setName(this.id);
    await this.iroha.topUpVerify(docSnap.data().username + '@test', '', '1');
    await this.iroha.payment('admin', '', '1');
    const pw = await this.storage.get(docSnap.data().username);
    await this.iroha.setAccDetail(pw, 'sec');
    await PushNotifications.requestPermissions();
    await PushNotifications.register();
    FCM.getToken()
      .then(async (r) => {
        await this.afs.collection(`users`).doc(this.ionicAuthService.currentUser.uid).update({
          fcm: r.token,
        });
      });
  }
  async ionViewWillEnter() {


    await this.getImagesFromFirebase();
    this.ionicAuthService.loginIsLoading = false;
    try {
      // Enable the auto initialization of the library
      Network.addListener('networkStatusChange', async status => {
        if (status.connected === false) {
          // eslint-disable-next-line max-len
          await this.showAlert('No Internet Connection', 'You must have an Internet Connection to use this app. You will be redirected to the login page.');
          await this.router.navigate(['auth-screen']);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
  async ionViewDidEnter() {
    await this.getUserId().catch(async e => {
      await SplashScreen.hide();
      await this.showAlert('Server Error', 'Reason:' + e);
      this.goToLogin();
    });
    await SplashScreen.hide();
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async showAlertLogOut(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: async data => {
            this.logOut();
          }
        }
      ]
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
