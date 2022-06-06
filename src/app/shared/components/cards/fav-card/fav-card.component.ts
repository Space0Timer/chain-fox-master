import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../../../../services/store/product.service";
import {AlertController, IonRouterOutlet, ModalController} from "@ionic/angular";
import {ChooseOptionsPage} from "../../modal/choose-options/choose-options.page";


export interface IFavCard {
  name: string;
  owner: string;
  price: number;
  image: string;
  itemId: string;
  ownerId: string;
  id: string;
}

@Component({
  selector: 'app-fav-card',
  templateUrl: './fav-card.component.html',
  styleUrls: ['./fav-card.component.scss'],
})

export class FavCardComponent implements OnInit {
  @Input() fav: IFavCard;
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  constructor(private product: ProductService,
              private alertController: AlertController,
              private modalController: ModalController,
              private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {}

  async openChooseOptionsModal(id, owner) {
    this.product.editOption = true;
    this.product.itemId = id;
    this.product.itemOwner = owner;
    const modal = await this.modalController.create({
      component: ChooseOptionsPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }

  async deleteItem() {
    await this.product.deleteItemFav(this.fav.id);
    setTimeout(() => {
      this.childEvent.emit();
    }, 500);
  }

  async showAlert(message) {
    const alert = await this.alertController.create({
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
