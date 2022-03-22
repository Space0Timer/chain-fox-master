import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import { IonContent } from '@ionic/angular';
import {ChatService, Message} from "../../services/chat.service";
import {doc, Firestore, getDoc} from "@angular/fire/firestore";
import {ProductService} from "../../services/cafe/product.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  messages: Observable<Message[]>;
  newMsg = '';
  text = true;
  private storeName: string;

  constructor(private chatService: ChatService, private router: Router,
              private _firestore: Firestore, private product: ProductService) { }

  ngOnInit() {
    this.getStoreName();
    this.messages = this.chatService.getChatMessagesCafe();
  }

  async getStoreName() {
    const ownerRef = doc(this._firestore, `stores/${(this.product.store.name)}`);
    const ownerSnap = await getDoc(ownerRef);
    const ownerName = ownerSnap.data();
    this.storeName = ownerName.name;
  }

  sendMessage() {
    this.chatService.addChatMessageCafe(this.newMsg).then(() => {
      this.chatService.returnChatMessageCafe(this.newMsg);
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

  back() {
    this.router.navigateByUrl('tabs/home', {replaceUrl: true});
  }
}
