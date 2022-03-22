import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {AuthService} from '../auth/auth.service';
import {collection, doc, Firestore, getDoc, getDocs, query, setDoc} from '@angular/fire/firestore';
import {BehaviorSubject} from 'rxjs';
import {ICartCard} from "../../shared";

export interface StoreData {
  name: string;

}

export interface ItemData {
  name: string;
  price: string;
  description: string;
  owner: string;
  id: string;
  image: string;
}

export interface CartData {
  name: string;
  owner: string;
  price: string;
}

const INCREMENT = firebase.firestore.FieldValue.increment(1);
const DECREMENT = firebase.firestore.FieldValue.increment(-1);

export interface Labels {
  name: string;
  price: number;
}

export interface Status {
  name: string;
  status: string;
}
@Injectable({
  providedIn: 'root'
})


export class ProductService {

  total = 0;
  idOwnerPair = new Map<string, string>();
  orderStatus: Status [] = [];
  statusPair: Status [] = [];


  public store: StoreData = {
    name: '',
  };

  public item: ItemData = {
    name: '',
    price: '',
    description: '',
    owner: '',
    id: '',
    image: '',
  };

  public label = [];
  public data = [];
  public orderName = '';
  public name = '';
  public orderId = '';
  public price = '';
  public owner = '';
  public user = '';
  public status = '';
  public percentage = 0;
  public statusName = '';
  productsCollection: AngularFirestoreCollection;

  cart = new BehaviorSubject({});
  private id = this.ionicAuthService.getUid();


  constructor(
    private afs: AngularFirestore,
    private ionicAuthService: AuthService,
    private _firestore: Firestore,
  ) {
  }

  addToCart(id, owner) {
    // Update the FB cart
    this.afs.collection('carts').doc(this.id).update({
      [id]: INCREMENT,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
    this.idOwnerPair.set(id, owner);
  }

  addToFav(id, owner) {
    // Update the FB cart
    this.afs.collection('favourites').doc(this.id).update({
      [id]: INCREMENT,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
    this.idOwnerPair.set(id, owner);
  }

  removeFromCart(id) {
    // Update the FB cart
    this.afs.collection('carts').doc(this.id).update({
      [id]: DECREMENT,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  async checkoutCart() {
    // Create an order
    // eslint-disable-next-line no-underscore-dangle
    const dataRef = doc(this._firestore, 'carts/' + this.id);
    const docSnap = await getDoc(dataRef);
    // eslint-disable-next-line no-underscore-dangle
    const orderRef = doc(this._firestore, 'orders/' + this.id);
    await setDoc(orderRef, docSnap.data());
    // Clear old cart
    const clearRef = doc(this._firestore, `carts/${(this.ionicAuthService.getUid())}`);
    await setDoc(clearRef, {
      id: this.ionicAuthService.getUid(),
    });
  }

  setTotal(total) {
    this.total  = total;
  }

  async setOrderStatus() {
    const q = collection(this._firestore, `status`);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docs) => {
      console.log(docs.id, ' => ', docs.data());
      this.statusPair.push(
        {
          name: docs.id,
          status: docs.data().name
        },
      );
    });
  }


  async changeStatus() {
    const dataRef = doc(this._firestore, `status/${(this.status)}`);
    const docSnap = await getDoc(dataRef);
    this.orderStatus = docSnap.data().status;
    switch (this.status) {
      case 'paid':
        this.percentage = 25;
        break;
      case 'preparing':
        this.percentage = 50;
        break;
      case 'done':
        this.percentage = 75;
        break;
      case 'complete':
        this.percentage = 100;
        break;
    }
    for (const key of this.statusPair) {
        if (key.name === this.status)  {
          this.statusName = key.status;
        }
    }
  }
}