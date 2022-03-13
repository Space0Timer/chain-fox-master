import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackSalesPage } from './track-sales.page';

const routes: Routes = [
  {
    path: '',
    component: TrackSalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackSalesPageRoutingModule {}
