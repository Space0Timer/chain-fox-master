import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../../../../services/cafe/product.service";
import {AlertController} from "@ionic/angular";


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
              private alertController: AlertController) { }

  ngOnInit() {}

  async addToCart(name, id, ownerId) {
    this.product.addToCart(id, ownerId);
    await this.showAlert(name + ' (x1) is added to your cart!');
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
