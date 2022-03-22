import {Component, OnInit} from '@angular/core';
import {IOption} from 'src/app/shared';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {collection, doc, Firestore, getDoc, getDocs, query, setDoc} from '@angular/fire/firestore';
import {ProductService} from '../../../services/cafe/product.service';

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

  constructor(
    private ionicAuthService: AuthService,
    private router: Router,
    private afs: AngularFirestore,
    private _firestore: Firestore,
    private product: ProductService) {}

  ngOnInit(){
    this.addStoreToCafe();
  }

  chat() {
    this.router.navigate(['chat-list']);
  }
  qrCode() {
    this.router.navigate(['qr-code']);
  }

  async addStoreToCafe() {
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
    this.router.navigate(['lunch']);
  }

  goToLogin() {
    this.router.navigate(['auth-screen']);
  }




}
