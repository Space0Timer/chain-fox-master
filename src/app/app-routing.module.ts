import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'auth-screen',
    loadChildren: () => import('src/app/pages/auth-screen/auth-screen.module').then( m => m.AuthScreenPageModule),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/tabs/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/tabs/home/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pages/tabs/pay/pay.module').then(m => m.PayPageModule)
  },
  {
    path: 'cafe',
    loadChildren: () => import('./pages/tabs/cafe/cafe.module').then(m => m.CafePageModule)
  },
  {
    path: 'cafe_home',
    loadChildren: () =>
      import('./pages/tabs/cafe/features/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'lunch',
    loadChildren: () =>
      import('./pages/tabs/cafe/features/lunch/lunch.module').then((m) => m.LunchPageModule),
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
