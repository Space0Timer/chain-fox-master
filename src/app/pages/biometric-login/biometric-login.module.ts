import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiometricLoginPageRoutingModule } from './biometric-login-routing.module';

import { BiometricLoginPage } from './biometric-login.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BiometricLoginPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [BiometricLoginPage]
})
export class BiometricLoginPageModule {}
