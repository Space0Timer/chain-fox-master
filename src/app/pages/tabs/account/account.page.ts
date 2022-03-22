import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';
import {IrohaService} from "../../../services/iroha.service";

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

  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private iroha: IrohaService
  ) { }

  chat() {
    this.router.navigate(['chat-list']);
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
    this.router.navigate(['login']);
  }

  qrCode() {
    this.router.navigate(['qr-code']);
  }

  ngOnInit() {
    this.categories = [
      {id: 'my-cart', name: 'My Cart', icon: 'cart-outline'},
      {id: 'my-orders', name: 'My Orders', icon: 'bag-handle-outline'},
      {id: 'favourites', name: 'Favourites', icon: 'heart-outline'},
      {id: 'order-history', name: 'Order History', icon: 'receipt-outline'},
      {id: 'start-selling', name: 'Setup Store', icon: 'storefront-outline'},
      {id: 'update-store', name: 'Update Store', icon: 'construct-outline'},
      {id: 'track-sales', name: 'Track Sales', icon: 'cash-outline'},
      {id: 'track-orders', name: 'Track Orders', icon: 'file-tray-full-outline'},
    ];
  }
    getRoute(route) {
      this.router.navigate([route]);
    }

}
