import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.page.html',
  styleUrls: ['./cafe.page.scss'],
})
export class CafePage implements OnInit {
  successMsg = '';
  errorMsg = '';
  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
  ) { }

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
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
  }
}
