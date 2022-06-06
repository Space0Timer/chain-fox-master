import {Component, Input, OnInit} from '@angular/core';
import {ChatService} from "../../../../services/chat/chat.service";
import {Router} from "@angular/router";
import {doc, getDoc} from "@angular/fire/firestore";


export interface Chat {
  name: string;
  date: string;
  message: string;
  time: string;
  id: string;
}
@Component({
  selector: 'app-chat-list-component',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})

export class ChatListComponent implements OnInit {
  @Input() chat: Chat;

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {}

  goToChat(name, id) {
    this.chatService.chatName = name;
    this.chatService.otherId = id;
    this.router.navigate(['chat']);
  }
}
