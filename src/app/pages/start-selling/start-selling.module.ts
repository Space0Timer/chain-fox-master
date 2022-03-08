import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartSellingPageRoutingModule } from './start-selling-routing.module';

import { StartSellingPage } from './start-selling.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StartSellingPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [StartSellingPage]
})
export class StartSellingPageModule {}
