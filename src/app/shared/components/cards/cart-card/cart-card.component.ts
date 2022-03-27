import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../../../../services/cafe/product.service";
import {Router} from "@angular/router";
import {doc, Firestore, onSnapshot} from "@angular/fire/firestore";
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {StoreSalesPage} from "../../../../pages/store-sales/store-sales.page";
import {NoteComponent} from "../../modal/note/note.component";
import {format, parseISO} from 'date-fns';
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

export class CartCardComponent implements OnInit{
  @Input() cart: ICartCard;
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  myDate: string = new Date().toISOString();

  hourValue = String(new Date().getDate()).replace(/^0+/, '').trim();
  minValue = String((new Date().getMonth() + 1)).replace(/^0+/, '').trim();
  yearValue = (new Date().getFullYear().toString());
  disable = false;

  constructor(
    private product: ProductService,
    private router: Router,
    private _firestore: Firestore,
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
  ) {
  }

  ngOnInit(){
    const currentDate = new Date();
    const futureDate = format(new Date(currentDate.getTime() + 30*60000), 'yyyy-MM-dd');
    const futureTime = format(new Date(currentDate.getTime() + 30*60000), 'HH:mm');
    const futureDateTime = futureDate + 'T'+ futureTime;
    const maxDate = format(new Date(currentDate.getTime() + 10080*60000), 'yyyy-MM-dd HH:mm');
    console.log(futureDateTime);
    console.log(maxDate);
  }
    addToCart() {
      this.product.addToCart(this.cart.id, this.cart.owner);
      setTimeout(()=>{this.childEvent.emit();}, 500);
    }

    removeFromCart(test) {
      this.product.removeFromCart(this.cart.id);
      setTimeout(()=>{this.childEvent.emit();}, 500);

    }

    async openNoteModal(id) {
      this.product.noteId = id;
      const modal = await this.modalCtrl.create({
        component: NoteComponent,
        swipeToClose: true,
        presentingElement: this.routerOutlet.nativeEl,
      });
      return await modal.present();
    }

    async dateChanges(date, id) {
      this.product.time = format(parseISO(date), 'yyyy-MM-dd HH:mm');;
      await this.product.addTime(id, this.product.time);
      console.log(this.product.orderTimePair.get(id));
    }

    async deleteItem() {
      await this.product.deleteItem(this.cart.id);
      setTimeout(() => {
        this.childEvent.emit();
      }, 500);
    }

}
