import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreSalesPage } from './store-sales.page';

const routes: Routes = [
  {
    path: '',
    component: StoreSalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreSalesPageRoutingModule {}
