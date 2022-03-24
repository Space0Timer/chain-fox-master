import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import {SplashScreen} from "@capacitor/splash-screen";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    SplashScreen.hide();
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(() => {
    });
  }
}
