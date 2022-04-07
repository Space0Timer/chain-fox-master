import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiometricLoginPage } from './biometric-login.page';

const routes: Routes = [
  {
    path: '',
    component: BiometricLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiometricLoginPageRoutingModule {}
