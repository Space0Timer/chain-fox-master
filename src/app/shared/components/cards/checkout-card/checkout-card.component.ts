import {Component, Input, OnInit} from '@angular/core';
import {ICartCard} from '../cart-card/cart-card.component';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.scss'],
})

export class CheckoutCardComponent implements OnInit {

  @Input() checkout: ICartCard ;
  constructor() { }

  ngOnInit() {}

}
