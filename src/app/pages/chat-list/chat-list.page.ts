import { Component} from '@angular/core';
import {Router} from '@angular/router';
import {Chat} from '../../shared/components/cards/chat-list/chat-list.component';
import {AngularFirestore, DocumentData} from '@angular/fire/compat/firestore';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {AuthService} from '../../services/auth/auth.service';
import {ProductService} from '../../services/store/product.service';
import firebase from 'firebase/compat/app';
import {format} from 'date-fns';
import {ChatService} from '../../services/chat/chat.service';
import {MenuController} from '@ionic/angular';
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
              private firestore: Firestore,
              private chatService: ChatService,
              private menu: MenuController) {
  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
  }

  async ionViewWillEnter() {
    await this.menu.enable(false);
    this.chat = [];
    await this.addChatToChatList();
  }

  // add individual chat to chat list
  async addChatToChatList() {
    let data: DocumentData;
    const userRef = doc(this.firestore, `messages/${(this.id)}`);
    // get all conversation partners
    await getDoc(userRef)
      .then(snap => {
        data = snap.data();
      });
    // eslint-disable-next-line guard-for-in
    for (const key in data) {
      this.chatService.keys.push(key);
      // get name
      const nameRef = doc(this.firestore, `users/${(key)}`);
      await getDoc(nameRef)
        .then(snap => {
          data = snap.data();
        });
      let username = '';
      const dataSource = [];
      // get the messages from database
      this.subscribe = firebase
        .firestore()
        .collection(`messages/${(this.id)}/${(key)}`)
        .orderBy('createdAt', 'desc')
        .onSnapshot((docSnapshot) => {
          docSnapshot.forEach((docu) => {
            if (data.username !== username) {
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
