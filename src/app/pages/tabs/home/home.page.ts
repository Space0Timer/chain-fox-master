import { AfterContentChecked, Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Autoplay, Pagination } from 'swiper';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IrohaService } from 'src/app/services/iroha.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  successMsg = '';
  errorMsg = '';
  name = '';

  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private iroha: IrohaService
  ) { }

  ngOnInit() {
    this.createAccount();
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

  createAccount() {
    this.iroha.getName('admin@mini').
    then((account: string )=> {
      this.name = account;
    });

  }
}
