import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule, IonicRouteStrategy, NavParams} from '@ionic/angular';
import {FormBuilder, FormsModule} from '@angular/forms';
import { StorePage } from './store.page';

import { StorePageRoutingModule } from './store-routing.module';
import {SharedModule} from '../../shared';
import {RouteReuseStrategy} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule,
    SharedModule
  ],
  declarations: [StorePage],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  ],
  exports: [
    StorePage
  ]
})
export class StorePageModule {}
