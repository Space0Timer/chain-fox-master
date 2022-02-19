import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafePage } from './cafe.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    component: CafePage
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'lunch',
    loadChildren: () =>
      import('./features/lunch/lunch.module').then((m) => m.LunchPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafePageRoutingModule {}
