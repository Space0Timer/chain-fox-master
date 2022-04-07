import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../services/cafe/product.service";
import {AlertController} from "@ionic/angular";
import {collection, Firestore, getDocs, query} from "@angular/fire/firestore";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-choose-options',
  templateUrl: './choose-options.page.html',
  styleUrls: ['./choose-options.page.scss'],
})
export class ChooseOptionsPage implements OnInit {
  public form = [
    { val: 'Pepperoni', name: 'Pepperoni' },
    { val: 'Sausage', name: 'Sausage' },
    { val: 'Mushroom', name: 'Mushroom' }
  ];

  isLoading = false;
  valueSelected = '';
  private uid = this.ionicAuthService.getUid();

  constructor(private product: ProductService,
              private alertController: AlertController,
              private _firestore: Firestore,
              private ionicAuthService: AuthService) { }

  ngOnInit() {
    this.getOptions();
  }

  async getOptions() {
    this.product.customOptions = [];
    this.product.customOption = [];
    const dataRef = collection(this._firestore, 'stores/' + this.uid + '/items/' + this.product.itemId + '/options');
    const q = query(dataRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docu) => {
      const data = docu.data();
      console.log(data);
      this.product.customOption = data;
      // delete duplicates
      if (this.product.customOptions.length === 0) {
        this.product.customOptions.push({
          name: this.product.customOption.name,
          data: this.product.customOption
        });
      }
      else {
        for (const key in this.product.customOptions) {
          if (this.product.customOptions[key].name !== this.product.customOption.name) {
            this.product.customOptions.push({
              name: this.product.customOption.name,
              data: this.product.customOption
            });
          }
          else {
            this.product.customOptions[key].data = this.product.customOption;
          }
        }
      }
    });
    for (const i in this.product.customOptions) {
      console.log(this.product.customOptions[i].name);
    }
  }
  async addToCart() {
    await this.product.addToCart(this.product.itemId, this.product.itemOwner);
    await this.showAlert(this.product.item.name + ' (x1) is added to your cart!');
  }

  async showAlert(message) {
    const alert = await this.alertController.create({
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
