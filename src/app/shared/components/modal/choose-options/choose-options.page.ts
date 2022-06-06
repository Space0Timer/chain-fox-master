import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../services/store/product.service';
import {AlertController, ModalController} from '@ionic/angular';
import {collection, doc, Firestore, getDoc, getDocs, query} from '@angular/fire/firestore';
import {AuthService} from '../../../../services/auth/auth.service';

export interface Form {
  title: string;
  data: Options [] ;
}

export interface Options {
  val: string;
  name: string;
  price: string;
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
              private ionicAuthService: AuthService,
              private modalController: ModalController) { }

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
    // eslint-disable-next-line max-len
    const dataRef = collection(this._firestore, 'stores/' + this.product.itemOwner + '/items/' + this.product.itemId.split('@')[0] + '/options');
    const q = query(dataRef);
    const querySnapshot = await getDocs(q);
    console.log('stores/' + this.uid + '/items/' + this.product.itemId.split('@')[0] + '/options');
    querySnapshot.forEach((docu) => {
      this.product.customOption = docu.data();
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
          const priceTag = this.product.customOptions[i].name + this.product.customOptions[i].data[j];
          // eslint-disable-next-line max-len
          const optionRef = doc(this._firestore, `stores/${(this.product.itemOwner)}/items/${(this.product.itemId.split('@')[0])}/optionPrice/${(priceTag)}`);
          const optSnap = await getDoc(optionRef);
          const optionSnap = optSnap.data().price;
            this.options.push({
            val: this.product.customOptions[i].data[j],
            name: this.product.customOptions[i].data[j],
            price: optionSnap,
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
  async back() {
    await this.modalController.dismiss();
  }
  addQuantity() {
    this.quantity += 1;
  }
  reduceQuantity() {
    this.quantity -= 1;
  }
  async addToCart() {
    console.log(this.form);
    if (this.valueSelected === '' && this.form.length !== 0) {
      await this.showAlert('Please pick an option.');
    }
    else {
      await this.product.addToCartModal(this.product.itemId.split('@')[0], this.product.itemOwner, this.quantity, this.selectedOption);
      await this.modalController.dismiss();
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
