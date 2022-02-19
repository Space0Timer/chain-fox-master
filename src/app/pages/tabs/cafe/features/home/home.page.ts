import {Component, OnInit} from '@angular/core';
import {AppRoutes, NavigationService, staggerFadeAnimation} from 'src/app/pages/tabs/cafe/core';
import {IOption} from 'src/app/shared';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [staggerFadeAnimation],
})
export class HomePage implements OnInit{

  successMsg = '';
  errorMsg = '';

  options: IOption[] = [
    {
      name: 'Malay',
      image: 'assets/images/main-reservation.png',
      onTap: () => {},
    },
    {
      name: 'Chinese',
      image: 'assets/images/main-lunch.png',
      onTap: () => {
        this.navigationService.navigateTo(AppRoutes.lunch);
      },
    },
    {
      name: 'Indian',
      image: 'assets/images/main-dinner.png',
      onTap: () => {},
    },
    {
      name: 'Italian',
      image: 'assets/images/main-wine.png',
      onTap: () => {},
    },
  ];

  constructor(private navigationService: NavigationService,
  private ionicAuthService: AuthService,
              private router: Router,) {}

  ngOnInit() {
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
