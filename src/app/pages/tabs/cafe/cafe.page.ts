import {Component, OnInit} from '@angular/core';
import {staggerFadeAnimation } from 'src/app/services/animations';
import {IOption} from 'src/app/shared';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';
import {StorageService} from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'cafe.page.html',
  styleUrls: ['cafe.page.scss'],
  animations: [staggerFadeAnimation],
})
export class CafePage{

  successMsg = '';
  errorMsg = '';

  options: IOption[] = [
    {
      name: 'Malay',
      image: 'assets/images/main-reservation.png',
      onTap: () => {
        this.storage.setStorage('path', 'malay');
        this.router.navigate(['lunch']);
      },
    },
    {
      name: 'Chinese',
      image: 'assets/images/main-lunch.png',
      onTap: () => {
        this.storage.setStorage('path', 'chinese');
        this.router.navigate(['lunch']);
      },
    },
    {
      name: 'Indian',
      image: 'assets/images/main-dinner.png',
      onTap: () => {
        this.storage.setStorage('path', 'indian');
        this.router.navigate(['lunch']);
      },
    },
    {
      name: 'Italian',
      image: 'assets/images/main-wine.png',
      onTap: () => {
        this.storage.setStorage('path', 'italian');
        this.router.navigate(['lunch']);
      },
    },
  ];

  constructor(
    private ionicAuthService: AuthService,
    private router: Router,
    private storage: StorageService) {}

  qrCode() {
    this.router.navigate(['qr-code']);
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


}
