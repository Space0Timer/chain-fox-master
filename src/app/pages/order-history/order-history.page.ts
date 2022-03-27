import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IOrderCard} from '../../shared';
import {AuthService} from '../../services/auth/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {ProductService} from '../../services/cafe/product.service';
import {collection, Firestore, getDocs} from '@angular/fire/firestore';
import {format, parseISO} from 'date-fns';
import {timestamp} from "rxjs/operators";
@Component({
  selector: 'app-my-orders',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {
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

  async ngOnInit() {
    await this.addItemsToOrder();
  }

  async addItemsToOrder() {
    const q = collection(this._firestore, `users/${(this.id)}/allOrders`);
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
          ownerId: docs.data().ownerId,
          status: docs.data().status,
          amountPaid: docs.data().amountPaid,
          deliverTime: docs.data().deliverTime,
          orderTime: docs.data().orderTime,
          quantity: docs.data().quantity
        },
      );
    });
  }

  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }
}
