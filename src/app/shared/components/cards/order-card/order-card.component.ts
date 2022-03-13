import { Component, Input } from '@angular/core';

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
}
