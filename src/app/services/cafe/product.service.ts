import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import {AngularFirestore, AngularFirestoreCollection, DocumentData} from '@angular/fire/compat/firestore';
import {AuthService} from '../auth/auth.service';
import {collection, deleteField, doc, Firestore, getDoc, getDocs, query, setDoc, updateDoc} from '@angular/fire/firestore';
import {BehaviorSubject} from 'rxjs';

export interface StoreData {
  name: string;

}

export interface ItemData {
  status: string;
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

export interface CustomOptions {
  name: string;
  data: DocumentData;
  checked: boolean
}

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  total = 0;
  idOwnerPair = new Map<string, string>();
  orderNotePair = new Map<string, string>();
  orderTimePair = new Map<string, string>();
  selectedOption = new Map<string, string>();
  currentOption: string;
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
    status:''
  };
  customOptions: CustomOptions [] = [];
  public customOption: DocumentData = [];
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

  public noteId = '';
  public time = '';
  public ownerId = '';
  public userId = '';
  public editItemId = '';
  editItemName = '';
  editItemPrice = '';
  editItemCategory = '';
  editItemDescription= '';
  role = 'seller';
  itemId: any;
  itemOwner: any;
  customNew = true;
  editOption = false;
  productsCollection: AngularFirestoreCollection;
  editQuantity = 0;
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

  async addToCartModal(id, owner, quantity, selectedOption) {
    let custom = '';
    selectedOption.forEach((value, key) => {
      custom = custom + key + value;
    });
    const docRef = doc(this._firestore, `carts/${(this.id)}`);
    await updateDoc(docRef, {
      [id + '@' + this.currentOption]: firebase.firestore.FieldValue.delete()
    });
    if (id.includes('@')) {
      id = id.split('@')[0];
    }
    this.afs.collection('carts').doc(this.id).update({
      [id + '@' + custom]: firebase.firestore.FieldValue.increment(quantity),
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    }).then(r => {
      this.afs.collection('carts/' + this.id + '/option/' + id + '/grouping/').doc(custom).set({});
      selectedOption.forEach((value, key) => {
        this.afs.collection('carts/' + this.id + '/option/' + id + '/grouping/').doc(custom).update({
          [key]: value,
          id: custom
        });
      });
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
    this.afs.collection('carts').doc(this.id).get()
      .subscribe((data) => {
        if (data.data()[id] > 0) {
          this.afs.collection('carts').doc(this.id).update({
            [id]: DECREMENT,
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
          });
        }
      }
      );
  }

  deleteItem(id) {
    this.afs.collection('carts').doc(this.id).update({
      [id]: firebase.firestore.FieldValue.delete(),
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  deleteItemFav(id) {
    this.afs.collection('favourites').doc(this.id).update({
      [id]: firebase.firestore.FieldValue.delete(),
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

  async setOrderStatus(statusType) {
    const q = collection(this._firestore, `${(statusType)}`);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docs) => {
      console.log(docs.id, ' => ', docs.data());
      this.statusPair.push(
        {
          name: docs.id,
          status: docs.data().status
        },
      );
    });
  }


  async addNote(id, msg) {
    this.orderNotePair.set(id, msg);
  }

  async addTime(id, time) {
    this.orderTimePair.set(id, time);
  }

  async changeStatus(statusType) {
    console.log(statusType);
    const dataRef = doc(this._firestore, `${(statusType)}/${(this.status)}`);
    const docSnap = await getDoc(dataRef);
    this.orderStatus = docSnap.data().status;
    switch (this.status) {
      case 'paid':
        this.percentage = 25;
        break;
      case 'prepare':
        this.percentage = 50;
        break;
      case 'done':
        this.percentage = 75;
        break;
      case 'complete':
        this.percentage = 100;
        break;
    }
    await this.setOrderStatus(statusType);
    for (const key of this.statusPair) {
        if (key.name === this.status)  {
          this.statusName = key.status;
        }
    }
  }
}
