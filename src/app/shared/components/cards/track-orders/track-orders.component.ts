import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../../services/cafe/product.service";
import {Router} from "@angular/router";

export interface ITrackOrderCard {
  name: string;
  user: string;
  price: number;
  time: string;
  id: string;
  status: string;
}

@Component({
  selector: 'app-track-orders',
  templateUrl: './track-orders.component.html',
  styleUrls: ['./track-orders.component.scss'],
})

export class TrackOrdersComponent implements OnInit {
  @Input() trackOrder: ITrackOrderCard;
  constructor(private product: ProductService,
              private router: Router) { }

  ngOnInit(
  ) {}

  async goToCheckStatusStore(name, id, price, user, status) {
    this.product.orderName = name;
    this.product.orderId = id;
    this.product.price = price;
    this.product.user = user;
    this.product.status = status;
    await this.product.changeStatus();
    console.log(this.product.percentage);
    await this.router.navigate(['check-status-store']);
  }

}
