import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomiseOrderPageRoutingModule } from './customise-order-routing.module';

import { CustomiseOrderPage } from './customise-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomiseOrderPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CustomiseOrderPage]
})
export class CustomiseOrderPageModule {}
