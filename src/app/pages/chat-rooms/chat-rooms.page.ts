import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent, MenuController} from "@ionic/angular";
import {Observable} from "rxjs";
import {ChatService, Message} from "../../services/chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.page.html',
  styleUrls: ['./chat-rooms.page.scss'],
})
export class ChatRoomsPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  messages: Observable<Message[]>;
  newMsg = '';
  text = true;

  constructor(private chatService: ChatService, private router: Router, private menu: MenuController) {
    this.menu.enable(false);
  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
  }

  async ngOnInit() {
    this.messages = this.chatService.getChatMessages(this.chatService.chatId);
  }

  sendMessage() {
    this.chatService.addChatMessage(this.newMsg, this.chatService.chatId).then(() => {
      this.chatService.returnChatMessage(this.newMsg, this.chatService.chatId);
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

  back() {
    this.router.navigate(['chat-list']);
  }
}
