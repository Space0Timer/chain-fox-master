import {Component, OnInit} from '@angular/core';
import {IOption} from 'src/app/shared';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {collection, Firestore, getDoc, getDocs, query, setDoc} from '@angular/fire/firestore';
import {ProductService} from '../../../services/store/product.service';
import {AlertController} from "@ionic/angular";

// @ts-ignore
@Component({
  selector: 'app-home',
  templateUrl: 'cafe.page.html',
  styleUrls: ['cafe.page.scss'],
})
export class CafePage implements OnInit{

  successMsg = '';
  errorMsg = '';

  options: IOption[] = [
  ];
  private searchedItem: any;

  constructor(
    private ionicAuthService: AuthService,
    private router: Router,
    private afs: AngularFirestore,
    private _firestore: Firestore,
    private product: ProductService,
    private alertController: AlertController) {}

  async ngOnInit() {
    await this.addStoreToCafe();
    this.searchedItem = this.options;
  }
  async doRefresh(event) {
    await this.addStoreToCafe();
    this.searchedItem = this.options;
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
  chat() {
    this.router.navigate(['chat-list']);
  }
  qrCode() {
    this.router.navigate(['qr-code']);
  }

  async addStoreToCafe() {
    this.options = [];
    // eslint-disable-next-line no-underscore-dangle
    const dataRef = collection(this._firestore, 'stores');
    const q = query(dataRef);
    const querySnapshot = await getDocs(q);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      this.options.push(
        {
          name: data.name,
          image: data.imageUrl,
          id: data.id
        }
      );
    });
  }

  _ionChange(event) {
    const val = event.target.value;
    this.searchedItem = this.options;
    if (val && val.trim() !== '') {
      this.searchedItem = this.searchedItem.filter((item: any) => (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
    }
    // this.search.getInputElement().then(item => console.log(item))
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

  goToLunch(storeName) {
    this.product.store.name = storeName;
    this.router.navigate(['store']);
  }

  goToLogin() {
    this.router.navigate(['auth-screen']);
  }




}
