import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {ProductService} from './cafe/product.service';
import {collection, doc, Firestore, getDoc, getDocs, query, setDoc, where} from '@angular/fire/firestore';
import {getDate, getMonth, getYear} from 'date-fns';
import {update} from "@angular/fire/database";

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
  status: string;
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
    await this.afs.collection('messages').doc(this.currentUser.uid).update({
      [id]: 1,
    });
    await this.afs.collection('messages/' + this.currentUser.uid + '/' + id).add({
      msg,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  async returnChatMessage(msg, id) {
    let msgId = '';
    await this.afs.collection('messages').doc(id).update({
      [this.currentUser.uid]: 1,
    });
    await this.afs.collection('messages/' + id + '/' + this.currentUser.uid).add({
      msg,
      from: this.currentUser.uid,
      status: 'sent',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(docRef => msgId=docRef.id);
    console.log(msgId);
    await this.afs.collection('messages/' + id + '/' + this.currentUser.uid).doc(msgId).update({
      status: 'unread',
    });
  }

  async addChatMessageCafe(msg) {
    await this.afs.collection('messages').doc(this.product.store.name).update({
      [this.currentUser.uid]: 1,
    });
    return this.afs.collection('messages/' + this.product.store.name + '/' + this.currentUser.uid).add({
      msg,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  async returnChatMessageCafe(msg) {
    let msgId = '';
    await this.afs.collection('messages').doc(this.currentUser.uid).update({
      [this.product.store.name]: 1,
    });
    await this.afs.collection('messages/' + this.currentUser.uid + '/' + this.product.store.name).add({
      msg,
      from: this.currentUser.uid,
      status: 'sent',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
      .then(docRef => msgId=docRef.id);
    console.log(msgId);
    await this.afs.collection('messages/' + this.currentUser.uid + '/' + this.product.store.name).doc(msgId).update({
      status: 'unread',
    });
  }

  getDate(date) {
    const curDate = new Date();
    this.today = (getDate(date) ===getDate(curDate) &&
      getMonth(date) === getMonth(curDate) &&
      getYear(date) === getYear(curDate));
  }

  // user chat
  getChatMessages(id) {
    let users = [];
    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        // eslint-disable-next-line max-len
        return this.afs.collection('messages/' + this.currentUser.uid + '/' + id, ref => ref.orderBy('createdAt')).valueChanges({idField: 'id'}) as Observable<Message[]>;
      }),
      map(messages => {
        for (const m of messages) {
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser.uid === m.from;
          console.log(m.status);
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
