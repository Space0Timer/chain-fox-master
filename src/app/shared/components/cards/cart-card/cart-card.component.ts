import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {ProductService} from '../../../../services/store/product.service';
import {Router} from '@angular/router';
import {doc, Firestore, getDoc, getDocs, onSnapshot, query} from '@angular/fire/firestore';
import {AlertController, IonRouterOutlet, ModalController} from '@ionic/angular';
import {NoteComponent} from '../../modal/note/note.component';
import {addDays, addMinutes, format, getHours, getMinutes, parseISO} from 'date-fns';
import {AuthService} from "../../../../services/auth/auth.service";
import {ChooseOptionsPage, Form, Options} from "../../modal/choose-options/choose-options.page";

export interface ICartCard {
  name: string;
  owner: string;
  price: number;
  image: string;
  id: string;
  ownerId: string;
  quantity: string;
  message: string;
  deliveryTime: string;
}

@Component({
  selector: 'app-cart-card',
  templateUrl: 'cart-card.component.html',
  styleUrls: ['cart-card.component.scss']
})

export class CartCardComponent implements OnInit{
  @Input() cart: ICartCard;
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  myDate = addMinutes(new Date(), 510);
  myDateString: string;
  date = 'Not selected.';
  nextWeek = addDays(new Date(), 7).toISOString();
  public options = [];
  selectedOption = new Map<string, string>();
  title = ' ';
  private time: string;
  private uid = this.ionicAuthService.getUid();

  constructor(
    private product: ProductService,
    private router: Router,
    private _firestore: Firestore,
    private routerOutlet: IonRouterOutlet,
    private alertController: AlertController,
    private ionicAuthService: AuthService,
    private modalController: ModalController
  ) {
  }

  async ngOnInit() {
    this.options = [];
    await this.getOptions(this.cart.id);
    this.myDateString = this.myDate.toISOString();
  }

  async openChooseOptionsModal(id, quantity, ownerId) {
    this.product.itemOwner = ownerId;
    console.log(this.product.itemOwner);
    this.product.editOption = true;
    this.product.itemId = id;
    this.product.editQuantity = quantity;
    this.product.currentOption = '';
    for (const key in this.options) {
      console.log(this.options[key],this.options[key].name,this.options[key].val);
      this.product.currentOption = this.product.currentOption + this.options[key].name + this.options[key].val + '-';
    }
    const modal = await this.modalController.create({
      component: ChooseOptionsPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
    await modal.onDidDismiss().then(r=> {
      this.product.editQuantity = 0;
      setTimeout(()=>{this.childEvent.emit();}, 500);
    });
  }

  async getOptions(id) {
    this.product.customOptions = [];
    this.product.customOption = [];
    console.log(id);
    const key = id.split('@')[1];
    id = id.split('@')[0];
    console.log('carts/' + this.uid + '/option/' + id + '/grouping/' + key);
    const dataRef = doc(this._firestore, 'carts/' + this.uid + '/option/' + id + '/grouping/' + key);
    const dataSnap = await getDoc(dataRef);
    const data = dataSnap.data();
    delete data.id;
    for (const keys in data) {
      console.log(keys, data[keys]);
      this.product.customOptions.push({
        name: keys,
        data: data[keys],
        checked: false
      });
    }
    console.log(this.product.customOptions);
    for (const i in this.product.customOptions) {
      this.options.push({
        val: this.product.customOptions[i].data,
        name: this.product.customOptions[i].name,
      });
      }
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
      const modal = await this.modalController.create({
        component: NoteComponent,
        swipeToClose: true,
        presentingElement: this.routerOutlet.nativeEl,
      });
      return await modal.present();
    }

  async dateChanges(date) {
    this.date = date.split('T')[0] + ' ' + date.split('T')[1].substring(0, 5);
    console.log(this.cart.id, this.date);
    await this.product.addTime(this.cart.id, this.date);
  }

    async deleteItem() {
      await this.product.deleteItem(this.cart.id);
      setTimeout(() => {
        this.childEvent.emit();
      }, 500);
    }

  async showAlert(message) {
    const alert = await this.alertController.create({
      header: 'Authentication Failed',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }



}
