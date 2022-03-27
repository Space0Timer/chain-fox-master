import { Component, Input } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../../../services/cafe/product.service";
import firebase from "firebase/compat/app";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../../../../services/auth/auth.service";
import {IrohaService} from "../../../../services/iroha.service";
import {doc} from "@angular/fire/firestore";

export interface IOrderCard {
  name: string;
  owner: string;
  price: number;
  image: string;
  id: string;
  status: string;
  itemId: string;
  ownerId: string;
  amountPaid: string;
  orderTime: string;
  deliverTime: string;
  quantity: string;
}

@Component({
  selector: 'app-order-card',
  templateUrl: 'order-card.component.html',
})
export class OrderCardComponent {
  @Input() order: IOrderCard;
  private id = this.ionicAuthService.getUid();
  constructor(private router: Router,
              private product: ProductService,
              private afs: AngularFirestore,
              private ionicAuthService: AuthService,
              private iroha: IrohaService) {
  }

  goToCheckStatusUser(name, id, price, owner, ownerId) {
    this.product.orderName = name;
    this.product.orderId = id;
    this.product.price = price;
    this.product.owner = owner;
    this.product.ownerId = ownerId;
    this.router.navigate(['check-status-user']);
  }

}
