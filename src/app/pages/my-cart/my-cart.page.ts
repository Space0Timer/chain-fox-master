import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {collection, doc, Firestore, getDoc, getDocs, query} from '@angular/fire/firestore';
import {ICartCard} from '../../shared';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit, OnChanges {
  cart: ICartCard [] = [
  ];
  owner = '';
  total = 0;
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
    this.total = 0;
    // eslint-disable-next-line no-underscore-dangle
    const itemIdRef = doc(this._firestore, 'carts/' + this.id);
    const itemId = await getDoc(itemIdRef);
    const data = itemId.data();
    for (const key in data) {
      this.owner = this.product.item.owner;
      const ownerRef = doc(this._firestore, 'stores/' + this.owner);
      const ownerSnap = await getDoc(ownerRef);
      const ownerName = ownerSnap.data();
      // eslint-disable-next-line no-underscore-dangle
      const dataRef = doc(this._firestore, 'stores/' + this.owner + '/items/' + key);
      const docSnap = await getDoc(dataRef);
      const dataSnap = docSnap.data();
      const value = data[key];
      this.cart.push(
        {
          name: dataSnap.name,
          owner: ownerName.name,
          price: dataSnap.price,
          image: dataSnap.imageUrl,
          id: dataSnap.id,
          quantity: value,
        },
      );
      this.total += dataSnap.price;
    }
  }

  async checkOut() {
    this.router.navigate(['checkout']);
  }

  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }
}
