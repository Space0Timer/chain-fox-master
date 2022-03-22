import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPageRoutingModule } from './confirm-routing.module';

import { ConfirmPage } from './confirm.page';
import {PinCodePageModule} from "../pin-code/pin-code.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ConfirmPageRoutingModule,
        PinCodePageModule
    ],
  declarations: [ConfirmPage]
})
export class ConfirmPageModule {}
