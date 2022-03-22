import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {ProductService} from "./cafe/product.service";
import {collection, doc, Firestore, getDoc, query, setDoc} from "@angular/fire/firestore";

export interface User {
  uid: string;
  email: string;
}

export interface Message {
  createdAt: firebase.firestore.FieldValue;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  currentUser: User = null;
  today: boolean;
  keys = [];
  chatName = '';
  chatId = '';

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private product: ProductService,
              private _firestore: Firestore) {
    this.afAuth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
  }

  async addChatMessage(msg, id) {
    const dataRef = doc(this._firestore, `messages/${(this.currentUser.uid)}`);
    await setDoc(dataRef, {
      [id]: 1,
    });
    await this.afs.collection('messages/' + this.currentUser.uid + '/' + id).add({
      msg,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  async returnChatMessage(msg, id) {
    const dataRef = doc(this._firestore, `messages/${(id)}`);
    await setDoc(dataRef, {
      [this.currentUser.uid]: 1,
    });
    await this.afs.collection('messages/' + id + '/' + this.currentUser.uid).add({
      msg,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
  async addChatMessageCafe(msg) {
    const dataRef = doc(this._firestore, `messages/${(this.product.store.name)}`);
    await setDoc(dataRef, {
      [this.currentUser.uid]: 1,
    });
    return this.afs.collection('messages/' + this.product.store.name + '/' + this.currentUser.uid).add({
      msg,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  async returnChatMessageCafe(msg) {
    const dataRef = doc(this._firestore, `messages/${(this.currentUser.uid)}`);
    await setDoc(dataRef, {
      [this.product.store.name]: 1,
    });
    await this.afs.collection('messages/' + this.currentUser.uid + '/' + this.product.store.name).add({
      msg,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  getDate(date) {
    const curDate = new Date();
    this.today = (date.getDate() === curDate.getDate() &&
      date.getMonth() === curDate.getMonth() &&
      date.getFullYear() === curDate.getFullYear());
  }

  // user chat
  getChatMessages(id) {
    let users = [];
    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        // eslint-disable-next-line max-len
        return this.afs.collection('messages/' + this.currentUser.uid + '/' + id, ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
      }),
      map(messages => {
        for (const m of messages) {
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser.uid === m.from;
        }
        return messages;
      })
    );
  }

  // user in cafe
  getChatMessagesCafe() {
    let users = [];
    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        // eslint-disable-next-line max-len
        return this.afs.collection('messages/' + this.product.store.name + '/' + this.currentUser.uid, ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
      }),
      map(messages => {
        for (const m of messages) {
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser.uid === m.from;
        }
        return messages;
      })
    );
  }

  getUsers() {
    return this.afs.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]>;
  }

  getUserForMsg(msgFromId, users: User[]): string {
    for (const usr of users) {
      if (usr.uid === msgFromId) {
        return usr.email;
      }
    }
    return 'Deleted';
  }
}
