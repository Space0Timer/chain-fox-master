import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { EditItemComponent } from './edit-item.component';
import {EditItemPageRoutingModule} from "./edit-item-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditItemPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditItemComponent]
})
export class EditItemModule {}
