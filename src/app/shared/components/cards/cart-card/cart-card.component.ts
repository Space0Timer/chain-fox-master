import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';
import {ProductService} from "../../../../services/cafe/product.service";
import {Router} from "@angular/router";
import {doc, Firestore, onSnapshot} from "@angular/fire/firestore";
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {StoreSalesPage} from "../../../../pages/store-sales/store-sales.page";
import {NoteComponent} from "../../modal/note/note.component";

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
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  myDate: string = new Date().toISOString();
  minTime = '06:30';
  maxTime = '19:30';
  hourValues = ['06','07','08','09','10','11','12','13','14','15','16','17','18','19'];

  constructor(
    private product: ProductService,
    private router: Router,
    private _firestore: Firestore,
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
  ) {
  }

    addToCart() {
      this.product.addToCart(this.cart.id, this.cart.owner);
      setTimeout(()=>{this.childEvent.emit();}, 500);
    }

    removeFromCart() {
      this.product.removeFromCart(this.cart.id);
      setTimeout(()=>{this.childEvent.emit();}, 500);
    }

    async openNoteModal() {
      const modal = await this.modalCtrl.create({
        component: NoteComponent,
        swipeToClose: true,
        presentingElement: this.routerOutlet.nativeEl,
      });
      return await modal.present();
    }

    setTime() {

    }

    deleteItem() {

    }

}
