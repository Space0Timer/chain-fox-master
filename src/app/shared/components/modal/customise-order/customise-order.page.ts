import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertController, ModalController} from '@ionic/angular';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AuthService} from '../../../../services/auth/auth.service';
import {CustomOptions, ProductService} from "../../../../services/cafe/product.service";


@Component({
  selector: 'app-customise-order',
  templateUrl: './customise-order.page.html',
  styleUrls: ['./customise-order.page.scss'],
})
export class CustomiseOrderPage implements OnInit {
  customOptions: CustomOptions [] = [];
  isLoading = false;
  type = false;
  name = 'Not set';
  public form: FormGroup;
  private optionCount = 1;
  private keys: any;

  constructor(private formBuilder: FormBuilder,
              private modalController: ModalController,
              private product: ProductService,
              private alertController: AlertController){
    let keyLength;
    if (this.product.customOption.length === 0) {
      this.form = formBuilder.group({
        1: ['', Validators.required]
      });
    } else {
      const temp = new Map<string, string>();
      this.name = this.product.customOption.name;
      for (const key in this.product.customOption) {
        if (key !== 'name') {
          temp.set(key, this.product.customOption[key]);
        }
      }
      const keys = [...temp.keys()];
      const group = {};
      for (let i = 0; i < keys.length; i++) {
        group[`${keys[i]}`] = [temp.get(`${keys[i]}`), Validators.required];

      }
      this.optionCount = keys.length + 1;
      group[`${this.optionCount}`] = ['', Validators.required];
      console.log(group);
      this.form = formBuilder.group(group);
      this.product.customOption = [];
      this.product.customOptions = [];
    }
   }


  ngOnInit(){
  }

  async addName() {
    const alert = await this.alertController.create({
      header: 'Customisation name',
      inputs: [
        {
          name: 'name',
          placeholder: 'Enter name',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: async data => {
            this.name = data.name;
          }
        }
      ]
    });
    await alert.present();
  }
  addControl(){
    this.optionCount++;
    this.form.addControl(String(this.optionCount), new FormControl('', Validators.required));
  }

  removeControl(control){
    this.form.removeControl(control.key);
  }

  submitRequest() {
    this.product.customOptions = [];
    this.product.customOption = [];
    if (this.name !== 'Not set') {
      const optionCount = this.optionCount;
      this.isLoading = true;
      delete this.form.value[optionCount];
      this.form.value.name = this.name;
      this.product.customOption = this.form.value;
      console.log(this.product.customOption);
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
      this.isLoading = false;
    }
    else {
      this.showAlert('Invalid name', 'Please set the name of your customisation.');
    }
  }

  async back() {
    this.product.customNew = true;
    await this.modalController.dismiss();
  }
  async showAlert(header,message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

}


