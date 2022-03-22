import { Component, OnInit } from '@angular/core';
import {AlertController, AnimationController} from '@ionic/angular';
import {Router} from '@angular/router';
import {doc, Firestore} from "@angular/fire/firestore";
import {ProductService} from "../../services/cafe/product.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  name: string;
  price: string;
  description: string;
  id: string;
  owner: string;
  image: string;

  constructor(
    private animatioCntrl: AnimationController,
    private router: Router,
    private afs: AngularFirestore,
    private _firestore: Firestore,
    private product: ProductService,
    private alertController: AlertController
  ) {

  }

  ngOnInit() {
    this.getItemDetails();
  }

  async addToCart(id, owner) {
    this.product.addToCart(id, owner);
    await this.showAlert(this.product.item.name + ' (x1) is added to your cart!');
  }

  addToFav(id, owner) {
    this.product.addToFav(id, owner);
    this.showAlert(this.product.item.name + ' is added to your favourites!');
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
    this.router.navigate(['lunch']);
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
