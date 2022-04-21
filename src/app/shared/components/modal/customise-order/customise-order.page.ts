import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertController, ModalController} from '@ionic/angular';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AuthService} from '../../../../services/auth/auth.service';
import {CustomOptions, ProductService} from "../../../../services/cafe/product.service";
import {doc, Firestore, getDoc, setDoc} from "@angular/fire/firestore";
import {Auth} from "@angular/fire/auth";
import firebase from "firebase/compat";
import {StorageService} from "../../../../services/storage.service";


@Component({
  selector: 'app-customise-order',
  templateUrl: './customise-order.page.html',
  styleUrls: ['./customise-order.page.scss'],
})
export class CustomiseOrderPage{
  customOptions: CustomOptions [] = [];
  isLoading = false;
  type = false;
  name = 'Not set';
  group = {};
  public form: FormGroup;
  private optionCount = 1;
  private addValue = false;
  private uid = this.ionicAuthService.getUid();
  private prices = new Map<string, number>();

  constructor(private formBuilder: FormBuilder,
              private modalController: ModalController,
              private product: ProductService,
              private alertController: AlertController,
              private _firestore: Firestore,
              private ionicAuthService: AuthService,
              private storage: StorageService){

   }

  ionViewWillEnter() {
    this.init();
    this.product.customOption = [];
    this.product.customOptions = [];
  }

  async init() {
    if (this.product.customNew === true) {
      this.form = this.formBuilder.group({
        1: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$'), Validators.maxLength(10), Validators.minLength(6)]]
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
      for (let i = 0; i < keys.length; i++) {
        // eslint-disable-next-line max-len
        this.group[`${keys[i]}`] = [temp.get(`${keys[i]}`), [Validators.required, Validators.pattern('^[a-zA-Z ]+$'), Validators.maxLength(10), Validators.minLength(6)]];
        const key = Number(keys[i]);
        this.optionCount = key + 1;
        // eslint-disable-next-line max-len
      }
      this.group[`${this.optionCount}`] = ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$'), Validators.maxLength(10), Validators.minLength(6)]];
      this.form = this.formBuilder.group(this.group);
      for (let i = 0; i < keys.length; i++) {
        // eslint-disable-next-line max-len
        const key = this.name + this.form.value[keys[i]];
        console.log(`stores/${(this.product.ownerId)}/items/${(this.product.editItemId)}/optionPrice/${(key)}`);
        const optionRef = doc(this._firestore, `stores/${(this.uid)}/items/${(this.product.editItemId)}/optionPrice/${(key)}`);
        const optSnap = await getDoc(optionRef);
        const optionSnap = optSnap.data().price;
        console.log(this.form.value[keys[i]], optionSnap);
        this.prices.set(this.form.value[keys[i]],optionSnap);
        console.log(this.prices[this.form.value[keys[i]]]);
      }
    }
  }

  async refreshPrice(id, price) {
    this.prices.set(id,price);
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
            if (!data.name.match('^[a-zA-Z ]+$')) {
              await this.showAlert('Invalid name.', 'Only characters a-z and A-Z are allowed.');
            }
            else if (!data.name.match('^.{6,}$')) {
              await this.showAlert('Invalid name.', 'Your customisation name must have at least 6 characters.');
            }
            else if (!data.name.match('^.{6,15}$')) {
              await this.showAlert('Invalid name.', 'Your customisation name must have at most 15 characters.');
            }
            else {
              this.name = data.name;
            }

          }
        }
      ]
    });
    await alert.present();
  }
  async addControl() {
    if (this.form.value[this.optionCount]!=='') {
      if (!this.form.value[this.optionCount].match('^[a-zA-Z ]+$')) {
        await this.showAlert('Invalid option.', 'Only characters a-z and A-Z are allowed.');
      }
      else if (!this.form.value[this.optionCount].match('^.{6,}$')) {
        await this.showAlert('Invalid option.', 'Your option must have at least 6 characters.');
      }
      else if (!this.form.value[this.optionCount].match('^.{6,15}$')) {
        await this.showAlert('Invalid option.', 'Your option must have at most 15 characters.');
      }
      else {
        await this.presentPrompt();
      }
    }
    else  {
      await this.showAlert('Invalid option.', 'Empty option not allowed!');
    }
   }

  async removeControl(control) {
    await this.cancelAlert('Remove option', 'Are you sure you want to remove this option?', control);
    // eslint-disable-next-line max-len
     }

  async submitRequest() {
    this.product.customOptions = [];
    this.product.customOption = [];
    let dataRef;
    if (this.name !== 'Not set') {
      const optionCount = this.optionCount;
      this.isLoading = true;
      delete this.form.value[optionCount];
      this.form.value.name = this.name;
      this.product.customOption = this.form.value;
      const temp = [];
      for (const key in this.product.customOption) {
        if (key !== 'name') {
          console.log(key);
          temp.push(this.product.customOption[key]);
        }
      }
      if (new Set(temp).size !== temp.length) {
        await this.showAlert('Invalid customisation', 'Duplication options are not permitted.');
        this.isLoading = false;
        return;
      }
      // delete duplicates
      if (this.product.customOptions.length === 0) {
        this.product.customOptions.push({
          name: this.product.customOption.name,
          data: this.product.customOption,
          checked: false
        });
      } else {
        for (const key in this.product.customOptions) {
          if (this.product.customOptions[key].name !== this.product.customOption.name) {
            this.product.customOptions.push({
              name: this.product.customOption.name,
              data: this.product.customOption,
              checked: false
            });
          } else {
            this.product.customOptions[key].data = this.product.customOption;
          }
        }
      }
      if (this.product.customOptions !== []) {
        for (const key in this.product.customOptions) {
          // eslint-disable-next-line max-len
          dataRef = doc(this._firestore, `stores/${(this.uid)}/items/${(this.product.editItemId)}/options/${(this.product.customOptions[key].name)}`);
          await setDoc(dataRef, this.product.customOptions[key].data);
        }
        await this.modalController.dismiss();
      }
      this.isLoading = false;
    } else {
      await this.showAlert('Invalid name', 'Please set the name of your customisation.');
    }
  }
  async presentPrompt() {
    console.log(this.optionCount);
    const alert = await this.alertController.create({
      header: 'Enter price',
      inputs: [
        {
          name: 'price',
          placeholder: 'Enter price',
          type: 'number'
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
            console.log(data.price);
            const key = this.name+this.form.value[this.optionCount];
            console.log(`stores/${(this.uid)}/items/${(this.product.editItemId)}/optionPrice/${(key)}`);
            const trackOrderRef = doc(this._firestore, `stores/${(this.uid)}/items/${(this.product.editItemId)}/optionPrice/${(key)}`);
            await setDoc(trackOrderRef, {
                price: data.price
            });
            await this.refreshPrice(this.form.value[this.optionCount], data.price);
            // eslint-disable-next-line max-len
            this.optionCount++;
            // eslint-disable-next-line max-len
            while (this.form.value[this.optionCount]!==undefined) {
              this.optionCount++;
            }
            // eslint-disable-next-line max-len
            this.form.addControl(String(this.optionCount), new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$'), Validators.maxLength(10), Validators.minLength(6)]));
          }
        }
      ]
    });
    await alert.present();
  }

  async back() {
    this.product.customNew = true;
    await this.modalController.dismiss();
  }

  async showAlert(header,message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
        {
          text: 'Confirm',
          }],
    });

    await alert.present();
  }

  async cancelAlert(header,message, control) {
    const alert = await this.alertController.create({
      header,
      message,
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
          handler: data => {
            this.form.removeControl(control.key);
            // eslint-disable-next-line max-len
            this.form.addControl(String(this.optionCount), new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$'), Validators.maxLength(10), Validators.minLength(6)]));
          }
        }],
    });

    await alert.present();
  }

}


