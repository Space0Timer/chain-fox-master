import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {IonContent, MenuController} from '@ionic/angular';
import {ChatService, Message} from '../../services/chat/chat.service';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {ProductService} from '../../services/store/product.service';
import {AuthService} from '../../services/auth/auth.service';
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
  private id = this.ionicAuthService.getUid();


  constructor(private chatService: ChatService, private router: Router,
              private _firestore: Firestore, private product: ProductService,
              private menu: MenuController, private ionicAuthService: AuthService) {

  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
  }

  // get all chat messages
  async ngOnInit() {
    await this.menu.enable(false);
    this.messages = this.chatService.getChatMessages(this.id, this.chatService.otherId);
  }

  // function for the user to send chat message
  sendMessage() {
    this.chatService.addChatMessage(this.newMsg, this.id, this.chatService.otherId).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

  back() {
    this.router.navigate(['chat-list']);
  }

}
