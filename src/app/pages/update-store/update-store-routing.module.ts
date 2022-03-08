import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateStorePage } from './update-store.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateStorePageRoutingModule {}
