import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatListPageRoutingModule } from './chat-list-routing.module';

import { ChatListPage } from './chat-list.page';
import {ChatListComponent} from "../../shared/components/cards/chat-list/chat-list.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatListPageRoutingModule
  ],
    declarations: [ChatListPage, ChatListComponent]
})
export class ChatListPageModule {}
