import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/cafe/product.service';
import {AlertController} from '@ionic/angular';
import {collection, Firestore, getDocs, query} from '@angular/fire/firestore';
import {AuthService} from '../../../../services/auth/auth.service';
import {randomInt} from "crypto";

export interface Form {
  title: string;
  data: Options [] ;
}

export interface Options {
  val: string;
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-choose-options',
  templateUrl: './choose-options.page.html',
  styleUrls: ['./choose-options.page.scss'],
})
export class ChooseOptionsPage implements OnInit {
  public options: Options [] = [];
  public form: Form [] = [];
  selectedOption = new Map<string, string>();
  title = '';
  isLoading = false;
  valueSelected = '';
  quantity = 1;
  private uid = this.ionicAuthService.getUid();
  true = true;


  constructor(private product: ProductService,
              private alertController: AlertController,
              private _firestore: Firestore,
              private ionicAuthService: AuthService) { }

  async ngOnInit() {
    if (this.product.editQuantity !== 0) {
      this.quantity = this.product.editQuantity;
    }
    await this.getOptions();
  }

  async getOptions() {
    // if option changed delete old
    this.product.customOptions = [];
    this.product.customOption = [];
    const dataRef = collection(this._firestore, 'stores/' + this.uid + '/items/' + this.product.itemId.split('@')[0] + '/options');
    const q = query(dataRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docu) => {
      const data = docu.data();
      this.product.customOption = data;
      this.product.customOptions.push({
        name: this.product.customOption.name,
        data: this.product.customOption,
        checked: false
      });
    });
    for (const i in this.product.customOptions) {
      this.title = this.product.customOptions[i].name;
      if (this.title === this.product.customOptions[i].data.name) {
        delete this.product.customOptions[i].data.name;
        for (const j in this.product.customOptions[i].data) {
          console.log(this.product.customOptions[i].data[j]);
          this.options.push({
            val: this.product.customOptions[i].data[j],
            name: this.product.customOptions[i].data[j],
            checked: false
          });
        }
        this.form.push({
          title: this.title,
          data: this.options
        });
        delete this.product.customOptions[i];
        this.options = [];
      }
    }
    console.log(this.form);
  }

  addQuantity() {
    this.quantity += 1;
  }
  reduceQuantity() {
    this.quantity -= 1;
  }
  async addToCart() {
    if (this.valueSelected === '') {
      await this.showAlert('Please pick an option.');
    }
    else {
      await this.product.addToCartModal(this.product.itemId.split('@')[0], this.product.itemOwner, this.quantity, this.selectedOption);
    }
  }

  async showAlert(message) {
    const alert = await this.alertController.create({
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  _ionChange(title, $event) {
    this.valueSelected = $event.detail.value;
    this.selectedOption.set(title, this.valueSelected);
    console.log(this.selectedOption);
  }
}
