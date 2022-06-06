import { FoodCardComponent } from './food-card/food-card.component';
import { CafeCardComponent } from './cafe-card/cafe-card.component';
import {OrderCardComponent} from './order-card/order-card.component';
import {CartCardComponent} from './cart-card/cart-card.component';
import {CheckoutCardComponent} from './checkout-card/checkout-card.component';
import {FavCardComponent} from './fav-card/fav-card.component';
import {TrackOrdersComponent} from './track-orders/track-orders.component';
// eslint-disable-next-line max-len
export const CARDS_COMPONENTS = [TrackOrdersComponent, FavCardComponent, FoodCardComponent, CafeCardComponent, OrderCardComponent, CartCardComponent, CheckoutCardComponent];

export * from './food-card/food-card.component';
export * from './cafe-card/cafe-card.component';
export * from './order-card/order-card.component';
export * from './cart-card/cart-card.component';
export * from './checkout-card/checkout-card.component';
