import { Component, OnInit } from '@angular/core';
import {AlertController, AnimationController, IonRouterOutlet, MenuController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Firestore} from "@angular/fire/firestore";
import {ProductService} from "../../services/store/product.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ChooseOptionsPage} from "../../shared/components/modal/choose-options/choose-options.page";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage {

  name: string;
  price: string;
  description: string;
  id: string;
  owner: string;
  image: string;
  cartIcon = 'Add to Cart';

  constructor(
    private animatioCntrl: AnimationController,
    private router: Router,
    private afs: AngularFirestore,
    private _firestore: Firestore,
    private product: ProductService,
    private alertController: AlertController,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private menu: MenuController
  ) {

    this.menu.enable(false);
  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
    this.name = '';
    this.price = '';
    this.description = '';
    this.owner = '';
    this.id = '';
    this.image = '';
  }

  ionViewDidEnter() {
    this.getItemDetails();
    if (this.product.item.status === 'available') {
      this.cartIcon = 'Add to Cart';
    }
    else if (this.product.item.status === 'sold out') {
      this.cartIcon = 'Sold Out';
    }
  }

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

  async addToFav(id, owner) {
    await this.product.addToFav(id, owner);
    await this.showAlert(this.product.item.name + ' is added to your favourites!');
  }

  getItemDetails() {
    this.name = this.product.item.name;
    this.price = this.product.item.price;
    this.description = this.product.item.description;
    this.owner = this.product.item.owner;
    this.id = this.product.item.id;
    this.image = this.product.item.image;
  }

  back() {
    this.router.navigate(['store']);
  }

  goToCart() {
    this.router.navigate(['my-cart']);
  }
  async showAlert(message) {
    const alert = await this.alertController.create({
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
