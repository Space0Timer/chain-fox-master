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
    path: 'lunch',
    loadChildren: () =>
      import('./pages/tabs/cafe/lunch/lunch.module').then((m) => m.LunchPageModule),
  },
  {
    path: 'item-details',
    loadChildren: () =>
      import('./pages/item-details/item-details.module').then((m) => m.ItemDetailsPageModule),
  },
  {
    path: 'user-details',
    loadChildren: () =>
      import('./pages/tabs/search/user-details/user-details.module').then((m) => m.UserDetailsPageModule),
  },
  {
    path: 'top-up',
    loadChildren: () =>
      import('./pages/tabs/home/top-up/top-up.module').then((m) => m.TopUpPageModule),
  },
  {
    path: 'qr-code',
    loadChildren: () =>
      import('./pages/qr-code/qr-code.module').then((m) => m.QrCodePageModule),
  },
  {
    path: 'my-cart',
    loadChildren: () => import('./pages/my-cart/my-cart.module').then( m => m.MyCartPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./pages/my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./pages/favourite/favourite.module').then( m => m.FavouritePageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./pages/confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./pages/tabs/search/user-details/user-details.module').then(m => m.UserDetailsPageModule)
  },
  {
    path: 'top-up',
    loadChildren: () => import('./pages/tabs/home/top-up/top-up.module').then(m => m.TopUpPageModule)
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./pages/qr-code/qr-code.module').then( m => m.QrCodePageModule)
  },
  {
    path: 'update-store',
    loadChildren: () => import('./pages/update-store/update-store.module').then( m => m.UpdateStorePageModule)
  },
  {
    path: 'start-selling',
    loadChildren: () => import('./pages/start-selling/start-selling.module').then( m => m.StartSellingPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
