import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {AuthService} from './auth/auth.service';
import {collection, doc, Firestore, getDoc, getDocs, query, setDoc} from '@angular/fire/firestore';
import {BehaviorSubject} from 'rxjs';

export interface StoreData {
  name: string;

}

export interface ItemData {
  name: string;
  price: string;
  description: string;
  owner: string;
  id: string;
}

export interface CartData {
  name: string;
  owner: string;
  price: string;
}

const INCREMENT = firebase.firestore.FieldValue.increment(1);
const DECREMENT = firebase.firestore.FieldValue.increment(-1);

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  total = 0;

  public store: StoreData = {
    name: '',
  };

  public item: ItemData = {
    name: '',
    price: '',
    description: '',
    owner: '',
    id: ''
  };

  productsCollection: AngularFirestoreCollection;

  cart = new BehaviorSubject({});
  private id = this.ionicAuthService.getUid();

  constructor(
    private afs: AngularFirestore,
    private ionicAuthService: AuthService,
    private _firestore: Firestore,
  ) {
    this.productsCollection = this.afs.collection('carts');
  }

  addToCart(id, owner) {
    // Update the FB cart
    this.afs.collection('carts').doc(this.id).update({
      [id]: INCREMENT,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });

    this.item.owner = owner;
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
    await this.afs.collection('carts').add({
      id: this.id
    });
  }
  setTotal(total) {
    this.total  = total;
  }
}
