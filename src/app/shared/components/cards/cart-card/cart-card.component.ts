import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {ProductService} from '../../../../services/cafe/product.service';
import {Router} from '@angular/router';
import {doc, Firestore, onSnapshot} from '@angular/fire/firestore';
import {AlertController, IonRouterOutlet, ModalController} from '@ionic/angular';
import {StoreSalesPage} from '../../../../pages/store-sales/store-sales.page';
import {NoteComponent} from '../../modal/note/note.component';
import {addDays, addMinutes, format, getDay, getHours, getMinutes, parseISO} from 'date-fns';
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
  myDate = addMinutes(new Date(), 510);
  myDateString: string;
  date = 'Not selected.';
  nextWeek = addDays(new Date(), 7).toISOString();
  private time: string;

  constructor(
    private product: ProductService,
    private router: Router,
    private _firestore: Firestore,
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
    private alertController: AlertController
  ) {
  }

  ngOnInit(){
    this.myDateString = this.myDate.toISOString();
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
    this.date = date.split('T')[0] + ' ' + date.split('T')[1].substring(0, 5);;
    await this.product.addTime(id, this.date);
    console.log(this.product.orderTimePair.get(id));
  }

    async deleteItem() {
      await this.product.deleteItem(this.cart.id);
      setTimeout(() => {
        this.childEvent.emit();
      }, 500);
    }



}
