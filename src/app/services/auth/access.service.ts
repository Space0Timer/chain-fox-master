import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {App, AppState} from '@capacitor/app';

@Injectable({
  providedIn: 'root'
})

export class AccessService {
  logoutTimer = new BehaviorSubject(0);
  // isLocked = true;
  constructor(private platform: Platform,
              private router: Router) {
      App.addListener('appStateChange', (state: AppState) => {
        if (!state.isActive && this.logoutTimer.value > 0) {
          this.lockApp();
    }
    });
  }

  resetLogoutTimer() {
    this.logoutTimer.next(300);
    this.decreaseTimer();
  }

  decreaseTimer() {
    setTimeout(()=> {
      if (this.logoutTimer.value === 0) {
        this.lockApp();
      }
      else {
        this.logoutTimer.next(this.logoutTimer.value - 1);
        this.decreaseTimer();
      }
    }, 1000);
  }

  async lockApp() {
    this.logoutTimer.next(0);
    await this.router.navigate(['tabs']);
  }
}
