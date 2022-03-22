import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackSalesPageRoutingModule } from './track-sales-routing.module';

import { TrackSalesPage } from './track-sales.page';
import {StoreSalesComponent} from "../../shared/components/modal/store-sales/store-sales.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackSalesPageRoutingModule
  ],
  exports: [
    StoreSalesComponent
  ],
  declarations: [TrackSalesPage, StoreSalesComponent]
})
export class TrackSalesPageModule {}
