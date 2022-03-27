import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateStorePageRoutingModule } from './update-store-routing.module';

import { UpdateStorePage } from './update-store.page';
import {UpdateStoreComponent} from '../../shared/components/cards/update-store/update-store.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateStorePageRoutingModule,
    ReactiveFormsModule
  ],
    declarations: [UpdateStorePage, UpdateStoreComponent]
})
export class UpdateStorePageModule {}
