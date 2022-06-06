import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';
import {IrohaService} from "../../../services/iroha/iroha.service";
import {ProductService} from "../../../services/store/product.service";
import {doc, Firestore, getDoc} from "@angular/fire/firestore";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage{
  successMsg = '';
  errorMsg = '';
  query: string;
  searchBtn: boolean;
  searchBar: boolean;
  categories: any[] = [];
  allRestaurants: any[] = [];
  restaurants: any[] = [];
  isLoading: boolean;
  category: any[] = [];
  private uid = this.ionicAuthService.getUid();


  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private product: ProductService,
    private _firestore: Firestore,
    private alertController: AlertController
  ) { }

  chat() {
    this.router.navigate(['chat-list']);
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

  qrCode() {
    this.router.navigate(['qr-code']);
  }

  async ionViewWillEnter() {
    const userID = doc(this._firestore, `users/${(this.uid)}`);
    const userIDSnap = await getDoc(userID);
    const userIDRole = userIDSnap.data().role;
    if (userIDRole === 'seller') {
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
    } else {
      this.categories = [
        {id: 'my-cart', name: 'My Cart', icon: 'cart-outline'},
        {id: 'my-orders', name: 'My Orders', icon: 'bag-handle-outline'},
        {id: 'favourites', name: 'Favourites', icon: 'heart-outline'},
        {id: 'order-history', name: 'Order History', icon: 'receipt-outline'},
        {id: 'start-selling', name: 'Setup Store', icon: 'storefront-outline'},
      ];
    }

  }
    getRoute(route) {
      this.router.navigate([route]);
    }

}
