import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule, IonicRouteStrategy, NavParams} from '@ionic/angular';
import {FormBuilder, FormsModule} from '@angular/forms';
import { LunchPage } from './lunch.page';

import { LunchPageRoutingModule } from './lunch-routing.module';
import {SharedModule} from '../../shared';
import {RouteReuseStrategy} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LunchPageRoutingModule,
    SharedModule
  ],
  declarations: [LunchPage],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  ],
})
export class LunchPageModule {}
