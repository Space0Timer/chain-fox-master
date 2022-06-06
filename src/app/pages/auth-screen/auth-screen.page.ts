import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';
import { SwiperOptions } from 'swiper';
import {IonRouterOutlet, MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@capacitor/splash-screen';
import {StorageService} from '../../services/storage/storage.service';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {App} from '@capacitor/app';

@Component({
  selector: 'app-auth-screen',
  templateUrl: './auth-screen.page.html',
  styleUrls: ['./auth-screen.page.scss'],
})

export class AuthScreenPage implements OnInit {

  options = [];
  segmentValue = '1';
  // image slides settings
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  constructor(private auth: AuthService, private router: Router, private menu: MenuController,
              private storage: StorageService, private _firestore: Firestore,
              private platform: Platform,
              private routerOutlet: IonRouterOutlet) {

    this.menu.enable(false);
    // enable the back button to exit the app on Android devices
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
  }
  slidesDidLoad(slides) {
    slides.startAutoplay();
  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
  }
  async ionViewDidEnter() {
    this.auth.biometricLogin = await this.storage.get('bio-login');
    console.log(this.auth.biometricLogin);
  }

  // get slider image from database
  async getImagesFromFirebase() {
    for (const i of Array(3).keys()) {
      const imageRef = doc(this._firestore, `images/info${(i + 1)}`);
      const imageSnap = await getDoc(imageRef);
      const imageName = imageSnap.data().url;
      this.options.push(imageName);
    }
  }

  async ngOnInit() {
    await this.getImagesFromFirebase();
    await SplashScreen.hide();
  }

  // check if the users switches from login to sign up and vice versa
  segmentChanged(event) {
    this.segmentValue = event.detail.value;
  }

  navigate() {
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
  }

}
