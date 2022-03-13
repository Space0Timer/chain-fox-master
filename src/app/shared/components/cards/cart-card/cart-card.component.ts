import { Component, Input } from '@angular/core';
import {ProductService} from "../../../../services/product.service";

export interface ICartCard {
  name: string;
  owner: string;
  price: number;
  image: string;
  id: string;
  quantity: string;
}

@Component({
  selector: 'app-cart-card',
  templateUrl: 'cart-card.component.html',
})
export class CartCardComponent {
  @Input() cart: ICartCard;
  constructor(
    private product: ProductService
  ) {
  }

  addToCart() {
    this.product.addToCart(this.cart.id, this.cart.owner);
  }

  removeFromCart() {
    this.product.removeFromCart(this.cart.id);
  }

}
