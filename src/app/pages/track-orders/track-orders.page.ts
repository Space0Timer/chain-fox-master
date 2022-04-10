import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {collection, Firestore, getDocs, orderBy, query} from "@angular/fire/firestore";
import {AuthService} from "../../services/auth/auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ProductService} from "../../services/cafe/product.service";
import {ITrackOrderCard} from "../../shared/components/cards/track-orders/track-orders.component";
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-track-orders-page',
  templateUrl: './track-orders.page.html',
  styleUrls: ['./track-orders.page.scss'],
})
export class TrackOrdersPage {

  trackOrder: ITrackOrderCard [] = [
  ];
  user = '';
  private id = this.ionicAuthService.getUid();
  private searchedItem: any;
  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private afs: AngularFirestore,
    private product: ProductService,
    private _firestore: Firestore,
    private menu: MenuController
  ) {
    this.menu.enable(false);
  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
  }


  async ionViewWillEnter() {
    this.trackOrder = [];
    await this.addItemsToOrder();
    this.searchedItem = this.trackOrder;
    await this.product.setOrderStatus('status');
  }

  async doRefresh(event) {
    this.trackOrder = [];
    await this.addItemsToOrder();
    this.searchedItem = this.trackOrder;
    await this.product.setOrderStatus('status');
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  _ionChange(event) {
    const val = event.target.value;
    this.searchedItem = this.trackOrder;
    if (val && val.trim() !== '') {
      this.searchedItem = this.searchedItem.filter((item: any) => (item.user.toLowerCase().indexOf(val.toLowerCase()) > -1));
    }
    // this.search.getInputElement().then(item => console.log(item))
  }

  async addItemsToOrder() {
    const q = query(collection(this._firestore, `trackOrders/${(this.id)}/activeOrders`), orderBy('deliverTime', 'desc'));
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
