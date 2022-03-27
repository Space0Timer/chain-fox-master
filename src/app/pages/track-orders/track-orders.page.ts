import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {collection, Firestore, getDocs} from "@angular/fire/firestore";
import {AuthService} from "../../services/auth/auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ProductService} from "../../services/cafe/product.service";
import {ITrackOrderCard} from "../../shared/components/cards/track-orders/track-orders.component";

@Component({
  selector: 'app-track-orders-page',
  templateUrl: './track-orders.page.html',
  styleUrls: ['./track-orders.page.scss'],
})
export class TrackOrdersPage implements OnInit {

  trackOrder: ITrackOrderCard [] = [
  ];
  user = '';
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
    await this.product.setOrderStatus('status');
  }

  async addItemsToOrder() {
    const q = collection(this._firestore, `trackOrders/${(this.id)}/activeOrders`);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docs) => {
      console.log(docs.id, ' => ', docs.data());
      this.trackOrder.push(
        {
          name: docs.data().itemName,
          user: docs.data().user,
          userId: docs.data().userId,
          price: docs.data().price,
          time: docs.data().orderTime.toDate(),
          id: docs.data().orderId,
          status: docs.data().status,
          amountPaid: docs.data().amountPaid,
          deliverTime: docs.data().deliverTime
        },
      );
    });
  }
  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }
}
