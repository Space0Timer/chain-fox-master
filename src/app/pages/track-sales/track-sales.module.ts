import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackSalesPageRoutingModule } from './track-sales-routing.module';

import { TrackSalesPage } from './track-sales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackSalesPageRoutingModule
  ],
  declarations: [TrackSalesPage]
})
export class TrackSalesPageModule {}
