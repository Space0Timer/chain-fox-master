import {Component, Input, OnInit} from '@angular/core';
import {ICartCard} from '../cart-card/cart-card.component';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {ProductService} from '../../../../services/store/product.service';
import {AuthService} from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.scss'],
})

export class CheckoutCardComponent implements OnInit {

  @Input() checkout: ICartCard ;
  public options = [];
  private uid = this.ionicAuthService.getUid();
  constructor(private product: ProductService,
              private _firestore: Firestore,
              private ionicAuthService: AuthService,) { }

  async ngOnInit() {
    this.options = [];
    await this.getOptions(this.checkout.id);
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
}
