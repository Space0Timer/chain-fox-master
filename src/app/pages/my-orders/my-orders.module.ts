import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyOrdersPageRoutingModule } from './my-orders-routing.module';

import { MyOrdersPage } from './my-orders.page';
import {SharedModule} from "../../shared";
import {ErrorComponent} from "../../shared/components/screens/error/error.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyOrdersPageRoutingModule,
        SharedModule
    ],
    declarations: [MyOrdersPage, ErrorComponent]
})
export class MyOrdersPageModule {}
