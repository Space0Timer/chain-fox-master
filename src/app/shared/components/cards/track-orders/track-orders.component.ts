import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../../services/cafe/product.service";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../../../../services/auth/auth.service";
import {IrohaService} from "../../../../services/iroha.service";

export interface ITrackOrderCard {
  name: string;
  user: string;
  price: number;
  time: string;
  id: string;
  status: string;
  amountPaid: string;
  userId: string;
  deliverTime: string;
}

@Component({
  selector: 'app-track-orders',
  templateUrl: './track-orders.component.html',
  styleUrls: ['./track-orders.component.scss'],
})

export class TrackOrdersComponent implements OnInit {
  @Input() trackOrder: ITrackOrderCard;
  private id = this.ionicAuthService.getUid();
  constructor(private product: ProductService,
              private router: Router,
              private afs: AngularFirestore,
              private ionicAuthService: AuthService,
              private iroha: IrohaService) { }

  ngOnInit(
  ) {}

  async goToCheckStatusStore(name, id, price, user, status) {
    this.product.orderName = name;
    this.product.orderId = id;
    this.product.price = price;
    this.product.user = user;
    this.product.status = status;
    await this.product.changeStatus('status');
    await this.router.navigate(['check-status-store']);
  }

  async cancelOrder(id, user, userId, paid) {
    await this.afs.collection(`users/${(userId)}/activeOrders`).doc(id).delete();
    await this.afs.collection(`trackOrders/${(this.id)}/activeOrders`).doc(id).delete();
    await this.afs.collection(`trackOrders/${(this.id)}/allOrders`).doc(id).update({
      status: 'cancelled',
    });
    await this.iroha.payment(user, 'refund', paid);
  }
}
