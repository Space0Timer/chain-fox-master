import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CafePage } from './cafe.page';

import { CafePageRoutingModule } from './cafe-routing.module';
import {SharedModule} from '../../../shared';
import {StorePageModule} from "../../store/store.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CafePageRoutingModule,
        SharedModule,
        StorePageModule,
    ],
  declarations: [CafePage],
})
export class CafePageModule {}
