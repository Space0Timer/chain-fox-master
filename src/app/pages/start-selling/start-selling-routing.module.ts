import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartSellingPage } from './start-selling.page';

const routes: Routes = [
  {
    path: '',
    component: StartSellingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartSellingPageRoutingModule {}
