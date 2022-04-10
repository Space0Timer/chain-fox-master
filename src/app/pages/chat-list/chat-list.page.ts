import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ICartCard} from "../../shared";
import {Chat} from "../../shared/components/cards/chat-list/chat-list.component";
import {AngularFirestore, DocumentData} from "@angular/fire/compat/firestore";
import {collection, doc, Firestore, getDoc, getDocs} from "@angular/fire/firestore";
import {AuthService} from "../../services/auth/auth.service";
import {ProductService} from "../../services/cafe/product.service";
import firebase from "firebase/compat/app";
import {format, formatISO, getDate, parseISO, toDate} from "date-fns";
import {ChatService} from "../../services/chat.service";
import {MenuController} from "@ionic/angular";
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage{
  chat: Chat [] = [
  ];
  private id = this.ionicAuthService.getUid();
  private subscribe: any;
  constructor(private router: Router,
              private ionicAuthService: AuthService,
              private afs: AngularFirestore,
              private product: ProductService,
              private _firestore: Firestore,
              private chatService: ChatService,
              private menu: MenuController) {
    this.menu.enable(false);
  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
  }

  async ionViewWillEnter() {
    this.chat = [];
    await this.addChatToChatList();
  }

  async addChatToChatList() {
    let data: DocumentData;
    // eslint-disable-next-line no-underscore-dangle
    const userRef = doc(this._firestore, `messages/${(this.id)}`);
    await getDoc(userRef)
      .then(snap => {
        data = snap.data();
      });
    for (const key in data) {
      this.chatService.keys.push(key);
      // get name
      const nameRef = doc(this._firestore, `users/${(key)}`);
      await getDoc(nameRef)
        .then(snap => {
          data = snap.data();
        });
      // get time
      let username = '';
      const dataSource = [];
      this.subscribe = firebase
        .firestore()
        .collection(`messages/${(this.id)}/${(key)}`)
        .orderBy('createdAt', 'desc')
        .onSnapshot((docSnapshot) => {
          docSnapshot.forEach((docu) => {
            if (data.username !== username) {
              console.log(docu.data().createdAt.toDate());
              dataSource.push((docu.data().createdAt.toDate()));
              this.chat.push({
                name: data.username,
                time: format(docu.data().createdAt.toDate(), 'HH:mm'),
                message: docu.data().msg,
                date: format(docu.data().createdAt.toDate(), 'yyyy-MM-dd'),
                id: key
              });
              username = data.username;
            }
            this.chatService.getDate(dataSource[0]);
          });
        });
    }
  }

  back() {
    this.router.navigate(['tabs']);
  }


}
