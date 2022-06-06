import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/store/product.service';
import {Router} from '@angular/router';
import {doc, Firestore, getDoc, setDoc} from "@angular/fire/firestore";
import {ICartCard} from "../../shared";
import {AngularFirestore, DocumentData} from "@angular/fire/compat/firestore";
import {AuthService} from "../../services/auth/auth.service";
import {MyCartPage} from "../my-cart/my-cart.page";
import {MenuController} from "@ionic/angular";
import {StorageService} from "../../services/storage/storage.service";
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
    private menu: MenuController,
    private storage: StorageService
  ) {
    this.menu.enable(false);
  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
  }

  ngOnInit() {
    this.addItemsToCart();
  }

  // get details of orders and display on view for double checking
  async addItemsToCart() {
    let data: DocumentData;
    this.total = 0;
    // eslint-disable-next-line no-underscore-dangle
    const itemIdRef = doc(this._firestore, `carts/${(this.id)}`);
    await getDoc(itemIdRef)
      .then(snap =>   { data = snap.data(); delete data.lastUpdate; delete data.id;});
    for (const key in data) {
      console.log(key);
      const idOwnerRef = doc(this._firestore, `idOwner/${(key.split('@')[0])}`);
      const idOwnerSnap = await getDoc(idOwnerRef);
      const idOwnerName = idOwnerSnap.data();
      this.owner = idOwnerName.owner;
      console.log(this.owner);
      const ownerRef = doc(this._firestore, `stores/${(this.owner)}`);
      const ownerSnap = await getDoc(ownerRef);
      const ownerName = ownerSnap.data();
      // eslint-disable-next-line no-underscore-dangle
      const dataRef = doc(this._firestore, `stores/${(this.owner)}/items/${(key.split('@')[0])}`);
      const docSnap = await getDoc(dataRef);
      const dataSnap = docSnap.data();
      const value = data[key];
      const keys = key.split('@')[1].split('-').slice(0, -1);
      let optionSnap = 0;
      for (const price of keys) {
        // eslint-disable-next-line max-len
        const optionRef = doc(this._firestore, `stores/${(this.owner)}/items/${(key.split('@')[0])}/optionPrice/${(price)}`);
        const optSnap = await getDoc(optionRef);
        optionSnap += Number(optSnap.data().price);
      }
      const paymentDetails = this.product.orderNotePair.get(key);
      const deliveryTime = this.product.orderTimePair.get(key);
      this.checkout.push(
        {
          name: dataSnap.name,
          owner: ownerName.name,
          price: Number(dataSnap.price)+ optionSnap,
          image: dataSnap.imageUrl,
          id: key,
          message: paymentDetails,
          ownerId: this.owner,
          quantity: value,
          deliveryTime
        },
      );
      this.total += (Number(dataSnap.price)+optionSnap)*value;
    }
  }

  back() {
    this.router.navigateByUrl('tabs/home', {replaceUrl: true});
  }

}
