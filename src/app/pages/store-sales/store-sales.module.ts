import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreSalesPageRoutingModule } from './store-sales-routing.module';

import { StoreSalesPage } from './store-sales.page';
import {TrackSalesPageModule} from "../track-sales/track-sales.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreSalesPageRoutingModule,
    TrackSalesPageModule
  ],
  declarations: [StoreSalesPage]
})
export class StoreSalesPageModule {}
