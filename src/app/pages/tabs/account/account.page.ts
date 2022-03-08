import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  successMsg = '';
  errorMsg = '';
  query: string;
  searchBtn: boolean;
  searchBar: boolean;
  categories: any[] = [];
  allRestaurants: any[] = [];
  restaurants: any[] = [];
  isLoading: boolean;
  item = {
    // icon: 'search-outline',
    image: 'assets/imgs/sad.png',
    color: 'primary',
    title: 'Sorry! No results found',
    // subTitle: 'No results found'
  };

  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
  ) { }

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
    this.router.navigate(['login']);
  }

  qrCode() {
    this.router.navigate(['qr-code']);
  }

  ngOnInit() {
    this.categories = [
      {id: 'my-cart', cover: 'assets/dishes/2.jpg', name: 'My Cart'},
      {id: 'my-orders', cover: 'assets/dishes/3.jpg', name: 'My Orders'},
      {id: 'favourites', cover: 'assets/dishes/10.jpeg', name: 'Favourites'},
      {id: 'profile', cover: 'assets/dishes/9.jpeg', name: 'Profile'},
      {id: 'start-selling', cover: 'assets/dishes/5.jpeg', name: 'Setup Store'},
      {id: 'update-store', cover: 'assets/dishes/5.jpeg', name: 'Update Store'},
      {id: 'track-orders', cover: 'assets/dishes/5.jpeg', name: 'Track Orders'},
      {id: 'track-sales', cover: 'assets/dishes/5.jpeg', name: 'Track Sales'},
      {id: 'preferences', cover: 'assets/dishes/5.jpeg', name: 'Preferences'},
    ];
  }
    getRoute(route) {
      this.router.navigate([route]);
    }

}
