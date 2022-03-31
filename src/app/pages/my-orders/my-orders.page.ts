import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IOrderCard} from '../../shared';
import {AuthService} from "../../services/auth/auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ProductService} from "../../services/cafe/product.service";
import {collection, Firestore, getDocs, orderBy, query} from "@angular/fire/firestore";
import {format, parseISO} from 'date-fns';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  order: IOrderCard [] = [
  ];
  owner = '';
  isEmpty = true;
  private id = this.ionicAuthService.getUid();
  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private afs: AngularFirestore,
    private product: ProductService,
    private _firestore: Firestore
  ) { }

  async ngOnInit() {
    await this.addItemsToOrder();
  }

  async addItemsToOrder() {
    const q = query(collection(this._firestore, `users/${(this.id)}/activeOrders`), orderBy('deliverTime', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docs) => {
      console.log(docs.id, ' => ', docs.data());
      this.order.push(
        {
          name: docs.data().itemName,
          owner: docs.data().owner,
          price: docs.data().price,
          image: docs.data().imageUrl,
          id: docs.data().orderId,
          itemId: docs.data().itemId,
          status: docs.data().status,
          ownerId: docs.data().ownerId,
          amountPaid: docs.data().amountPaid,
          deliverTime: docs.data().deliverTime,
          orderTime: docs.data().orderTime,
          quantity: docs.data().quantity
        },
      );
      this.isEmpty = false;
    });


  }

  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }
}
