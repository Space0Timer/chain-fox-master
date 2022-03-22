import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/cafe/product.service';
import {Router} from '@angular/router';
import {doc, Firestore, getDoc} from "@angular/fire/firestore";
import {ICartCard} from "../../shared";
import {AngularFirestore, DocumentData} from "@angular/fire/compat/firestore";
import {AuthService} from "../../services/auth/auth.service";
import {MyCartPage} from "../my-cart/my-cart.page";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})


export class CheckoutPage implements OnInit {

  total = 0;
  checkout: ICartCard [] = [
  ];
  owner = '';
  private id = this.ionicAuthService.getUid();

  constructor(
    private product: ProductService,
    private router: Router,
    private afs: AngularFirestore,
    private _firestore: Firestore,
    private ionicAuthService: AuthService,
  ) { }

  ngOnInit() {
    this.addItemsToCart();
  }

  async addItemsToCart() {
    let data: DocumentData;
    this.total = 0;
    // eslint-disable-next-line no-underscore-dangle
    const itemIdRef = doc(this._firestore, `carts/${(this.id)}`);
    await getDoc(itemIdRef)
      .then(snap =>   { data = snap.data(); delete data.lastUpdate; delete data.id;});
    for (const key in data) {
      console.log(key);
      const idOwnerRef = doc(this._firestore, `idOwner/${(key)}`);
      const idOwnerSnap = await getDoc(idOwnerRef);
      const idOwnerName = idOwnerSnap.data();
      this.owner = idOwnerName.owner;
      console.log(this.owner);
      const ownerRef = doc(this._firestore, `stores/${(this.owner)}`);
      const ownerSnap = await getDoc(ownerRef);
      const ownerName = ownerSnap.data();
      // eslint-disable-next-line no-underscore-dangle
      const dataRef = doc(this._firestore, `stores/${(this.owner)}/items/${(key)}`);
      const docSnap = await getDoc(dataRef);
      const dataSnap = docSnap.data();
      const value = data[key];
      this.checkout.push(
        {
          name: dataSnap.name,
          owner: ownerName.name,
          price: dataSnap.price,
          image: dataSnap.imageUrl,
          id: key,
          quantity: value,
        },
      );
      this.total += dataSnap.price*value;
    }
  }

  back() {
    this.router.navigateByUrl('tabs/home', {replaceUrl: true});
  }

}
