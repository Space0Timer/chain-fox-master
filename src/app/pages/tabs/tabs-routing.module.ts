import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'pay',
        loadChildren: () => import('./pay/pay.module').then(m => m.PayPageModule)
      },
      {
        path: 'cafe',
        loadChildren: () => import('./cafe/cafe.module').then(m => m.CafePageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
