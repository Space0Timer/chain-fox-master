import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackOrdersPageRoutingModule } from './track-orders-routing.module';

import { TrackOrdersPage } from './track-orders.page';
import {SharedModule} from "../../shared";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TrackOrdersPageRoutingModule,
        SharedModule
    ],
  declarations: [TrackOrdersPage]
})
export class TrackOrdersPageModule {}
