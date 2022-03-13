import {Component, OnInit} from '@angular/core';
import {staggerFadeAnimation } from 'src/app/services/animations';
import {IOption} from 'src/app/shared';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';
import {StorageService} from 'src/app/services/storage.service';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {collection, doc, Firestore, getDoc, getDocs, query, setDoc} from "@angular/fire/firestore";
import * as firebase from 'firebase/compat';
import {getStorage} from "@angular/fire/storage";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: 'cafe.page.html',
  styleUrls: ['cafe.page.scss'],
  animations: [staggerFadeAnimation],
})
export class CafePage implements OnInit{

  successMsg = '';
  errorMsg = '';

  options: IOption[] = [
  ];

  constructor(
    private ionicAuthService: AuthService,
    private router: Router,
    private storage: StorageService,
    private afs: AngularFirestore,
    private _firestore: Firestore,
    private product: ProductService) {}

  ngOnInit(){
    this.addStoreToCafe();
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
      console.log(doc.id, ' => ', doc.data());
      const data = doc.data();
      this.options.push(
        {
          name: data.name,
          image: data.imageUrl,
          onTap: () => {
            this.product.store.name = data.id;
            this.router.navigate(['lunch']);
          },
        },
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

  goToLogin() {
    this.router.navigate(['auth-screen']);
  }




}
