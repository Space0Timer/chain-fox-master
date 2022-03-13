import {Component, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {IOrderCard} from '../../shared';
import {AuthService} from "../../services/auth/auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ProductService} from "../../services/product.service";
import {doc, Firestore, getDoc} from "@angular/fire/firestore";
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  order: IOrderCard [] = [
  ];
  owner = '';
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

  async addItemsToCart() {
    // eslint-disable-next-line no-underscore-dangle
    const itemIdRef = doc(this._firestore, 'orders/' + this.id);
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
      this.order.push(
        {
          name: dataSnap.name,
          owner: ownerName.name,
          price: dataSnap.price,
          image: dataSnap.imageUrl,
          id: dataSnap.id,
        },
      );
    }
  }
  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }
}
