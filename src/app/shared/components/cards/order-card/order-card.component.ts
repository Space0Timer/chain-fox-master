import { Component, Input } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../../../services/cafe/product.service";

export interface IOrderCard {
  name: string;
  owner: string;
  price: number;
  image: string;
  id: string;
}

@Component({
  selector: 'app-order-card',
  templateUrl: 'order-card.component.html',
})
export class OrderCardComponent {
  @Input() order: IOrderCard;

  constructor(private router: Router,
              private product: ProductService) {
  }

  goToCheckStatusUser(name, id, price, owner) {
    this.product.orderName = name;
    this.product.orderId = id;
    this.product.price = price;
    this.product.owner = owner;
    this.router.navigate(['check-status-user']);
  }
}
