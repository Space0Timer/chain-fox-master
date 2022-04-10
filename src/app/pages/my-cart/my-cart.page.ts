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
        const id = key.split('@')[0];
        this.keys.push({id: id});
        const idOwnerRef = doc(this._firestore, `idOwner/${(id)}`);
        const idOwnerSnap = await getDoc(idOwnerRef);
        const idOwnerName = idOwnerSnap.data();
        this.owner = idOwnerName.owner;
        const ownerRef = doc(this._firestore, `stores/${(this.owner)}`);
        const ownerSnap = await getDoc(ownerRef);
        const ownerName = ownerSnap.data();
        // eslint-disable-next-line no-underscore-dangle
        const dataRef = doc(this._firestore, `stores/${(this.owner)}/items/${(id)}`);
        const docSnap = await getDoc(dataRef);
        const dataSnap = docSnap.data();
        const value = data[key];
        this.cart.push(
          {
            name: dataSnap.name,
            owner: ownerName.name,
            price: dataSnap.price,
            image: dataSnap.imageUrl,
            id: key,
            quantity: value,
          },
        );
        this.total += dataSnap.price;
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
      }
      if(illegalTime.includes(this.product.orderTimePair.get(this.keys[key].id.substring(11, 13)))) {
        await this.showAlert('Please choose a valid pickup date for your orders.');
        this.counter = 1;
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
