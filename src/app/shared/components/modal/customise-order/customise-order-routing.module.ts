import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomiseOrderPage } from './customise-order.page';

const routes: Routes = [
  {
    path: '',
    component: CustomiseOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomiseOrderPageRoutingModule {}
