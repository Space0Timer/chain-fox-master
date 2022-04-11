import {Component, Injectable, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {AngularFirestore, DocumentData} from '@angular/fire/compat/firestore';
import {doc, Firestore, getDoc, onSnapshot, query} from '@angular/fire/firestore';
import {ICartCard} from '../../shared';
import {ProductService} from '../../services/cafe/product.service';
import {AlertController, LoadingController, MenuController} from '@ionic/angular';

export interface Keys {
  id: string;
}
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})


export class MyCartPage implements OnInit{

  cart: ICartCard [] = [
  ];
  keys: Keys [] = [];
  owner: string;
  loading: any;
  counter = 0;
  public total = 0;
  private id = this.ionicAuthService.getUid();
  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private afs: AngularFirestore,
    private product: ProductService,
    private _firestore: Firestore,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private menu: MenuController
  ) {
    this.menu.enable(false);
  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
  }

  async ngOnInit() {
  }
  async ionViewWillEnter() {
    this.keys = [];
    this.cart = [];
    await this.addItemsToCart();
  }

  async addItemsToCart() {
      let data: DocumentData;
      this.total = 0;
      // eslint-disable-next-line no-underscore-dangle
      const itemIdRef = doc(this._firestore, `carts/${(this.id)}`);
      await getDoc(itemIdRef)
        .then(snap => {
          data = snap.data();
          delete data.lastUpdate;
          delete data.id;
        });
      for (const key in data) {
        // get owner id from item id
        this.keys.push({id: key});
        const idOwnerRef = doc(this._firestore, `idOwner/${(key.split('@')[0])}`);
        const idOwnerSnap = await getDoc(idOwnerRef);
        const idOwnerName = idOwnerSnap.data();
        this.owner = idOwnerName.owner;
        const ownerRef = doc(this._firestore, `stores/${(this.owner)}`);
        const ownerSnap = await getDoc(ownerRef);
        const ownerName = ownerSnap.data();
        // eslint-disable-next-line no-underscore-dangle
        const dataRef = doc(this._firestore, `stores/${(this.owner)}/items/${(key.split('@')[0])}`);
        const docSnap = await getDoc(dataRef);
        const dataSnap = docSnap.data();
        const value = data[key];
        const keys = key.split('@')[1].split('-').slice(0, -1);
        let optionSnap = 0;
        for (const price of keys) {
          // eslint-disable-next-line max-len
          const optionRef = doc(this._firestore, `stores/${(this.owner)}/items/${(key.split('@')[0])}/optionPrice/${(price)}`);
          const optSnap = await getDoc(optionRef);
          optionSnap += Number(optSnap.data().price);
        }
        this.cart.push(
          {
            name: dataSnap.name,
            owner: ownerName.name,
            price: Number(dataSnap.price) + optionSnap,
            image: dataSnap.imageUrl,
            id: key,
            ownerId: this.owner,
            quantity: value,
          },
        );
        this.total += Number(dataSnap.price) + optionSnap;
      }
    }


  updateQuantity() {
    this.cart = [];
    this.addItemsToCart();
  }

  async checkOut() {
    for (const key in this.keys) {
      const illegalTime = ['00', '01', '01', '02', '03', '04', '05', '06', '07', '22', '23'];
      console.log(this.keys[key].id);
      if (this.product.orderTimePair.get(this.keys[key].id) === undefined) {
        await this.showAlert('Please choose a valid pickup date for your orders.');
        this.counter = 1;
        break;
      }
      else if(illegalTime.includes(this.product.orderTimePair.get(this.keys[key].id.substring(11, 13)))) {
        await this.showAlert('Please choose a valid pickup date for your orders.');
        this.counter = 1;
        break;
      }
    }
    if (this.counter === 0) {
      await this.router.navigate(['checkout']);
    }
    this.counter = 0;
  }

  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }

  async showAlert(message) {
    const alert = await this.alertController.create({
      header: 'Invalid pickup date',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
