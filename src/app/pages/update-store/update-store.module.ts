import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateStorePageRoutingModule } from './update-store-routing.module';

import { UpdateStorePage } from './update-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateStorePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateStorePage]
})
export class UpdateStorePageModule {}
