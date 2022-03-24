import {Component, Injectable, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {AngularFirestore, DocumentData} from '@angular/fire/compat/firestore';
import {doc, Firestore, getDoc, onSnapshot, query} from '@angular/fire/firestore';
import {ICartCard} from '../../shared';
import {ProductService} from '../../services/cafe/product.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})

export class MyCartPage implements OnInit, OnChanges{

  cart: ICartCard [] = [
  ];
  owner: string;
  public total = 0;
  private id = this.ionicAuthService.getUid();
  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private afs: AngularFirestore,
    private product: ProductService,
    private _firestore: Firestore
  ) { }

  ngOnInit() {
    this.addItemsToCart();
  }

  ngOnChanges(changes: SimpleChanges) {
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
      // get owner id from item id
      const idOwnerRef = doc(this._firestore, `idOwner/${(key)}`);
      const idOwnerSnap = await getDoc(idOwnerRef);
      const idOwnerName = idOwnerSnap.data();
      this.owner = idOwnerName.owner;
      const ownerRef = doc(this._firestore, `stores/${(this.owner)}`);
      const ownerSnap = await getDoc(ownerRef);
      const ownerName = ownerSnap.data();
      // eslint-disable-next-line no-underscore-dangle
      const dataRef = doc(this._firestore, `stores/${(this.owner)}/items/${(key)}`);
      const docSnap = await getDoc(dataRef);
      const dataSnap = docSnap.data();
      const value = data[key];
      console.log(key);
      this.cart.push(
        {
          name: dataSnap.name,
          owner: ownerName.name,
          price: dataSnap.price,
          image: dataSnap.imageUrl,
          id: key,
          quantity: value,
        },
      );
      this.total += dataSnap.price;
    }
  }

  updateQuantity() {
    this.cart = [];
    this.addItemsToCart();
  }

  checkOut() {
    this.router.navigate(['checkout']);
  }

  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }
}
