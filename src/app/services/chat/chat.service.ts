import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {doc, Firestore, getDoc, getDocs, query, setDoc, where} from '@angular/fire/firestore';
import {getDate, getMonth, getYear} from 'date-fns';
import {ProductService} from '../store/product.service';

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
  public otherId = '';

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private product: ProductService,
              private _firestore: Firestore) {
    this.afAuth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
  }

  async addChatMessage(msg, idSender, idReceiver) {
    let msgId = '';
    await this.afs.collection('messages').doc(idSender).update({
      [idReceiver]: 1,
    });
    await this.afs.collection('messages/' + idSender + '/' + idReceiver).add({
      msg,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    await this.afs.collection('messages').doc(idReceiver).update({
      [idSender]: 1,
    });
    await this.afs.collection('messages/' + idReceiver + '/' + idSender).add({
      msg,
      from: this.currentUser.uid,
      status: 'sent',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(docRef => msgId=docRef.id);
    await this.afs.collection('messages/' + idReceiver  + '/' + idSender).doc(msgId).update({
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
  getChatMessages(idYou, idOthers) {
    let users = [];
    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        // eslint-disable-next-line max-len
        return this.afs.collection('messages/' + idYou + '/' + idOthers,
            ref => ref.orderBy('createdAt')).valueChanges({idField: 'id'}) as Observable<Message[]>;
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
