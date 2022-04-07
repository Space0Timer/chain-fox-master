import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import {VerifyGuard} from './guards/verify/verify.guard';

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
    canActivate: [AuthGuard, VerifyGuard]
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
    path: 'scan-pay',
    loadChildren: () => import('./pages/scan-pay/scan-pay.module').then(m => m.ScanPayPageModule)
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
      import('./pages/lunch/lunch.module').then((m) => m.LunchPageModule),
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
    path: 'my-orders',
    loadChildren: () => import('./pages/my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./pages/order-history/order-history.module').then( m => m.OrderHistoryPageModule)
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
  },
  {
    path: 'track-orders',
    loadChildren: () => import('./pages/track-orders/track-orders.module').then( m => m.TrackOrdersPageModule)
  },
  {
    path: 'track-sales',
    loadChildren: () => import('./pages/track-sales/track-sales.module').then( m => m.TrackSalesPageModule)
  },
  {
    path: 'check-status',
    loadChildren: () => import('./pages/check-status/check-status.module').then( m => m.CheckStatusPageModule)
  },
  {
    path: 'pin-code',
    loadChildren: () => import('./pages/pin-code/pin-code.module').then( m => m.PinCodePageModule)
  },
  {
    path: 'store-sales',
    loadChildren: () => import('./pages/store-sales/store-sales.module').then( m => m.StoreSalesPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chat-list',
    loadChildren: () => import('./pages/chat-list/chat-list.module').then( m => m.ChatListPageModule)
  },
  {
    path: 'chat-rooms',
    loadChildren: () => import('./pages/chat-rooms/chat-rooms.module').then( m => m.ChatRoomsPageModule)
  },
  {
    path: 'check-status-user',
    loadChildren: () => import('./pages/check-status-user/check-status-user.module').then( m => m.CheckStatusUserPageModule)
  },
  {
    path: 'check-status-store',
    loadChildren: () => import('./pages/check-status-store/check-status-store.module').then( m => m.CheckStatusStorePageModule)
  },
  {
    path: 'add-item',
    loadChildren: () => import('./shared/components/modal/add-item/add-item.module').then(m => m.AddItemPageModule)
  },
  {
    path: 'edit-item',
    loadChildren: () => import('./shared/components/modal/edit-item/edit-item.module').then(m => m.EditItemModule)
  },
  {
    path: 'verify-email-address',
    loadChildren: () => import('./pages/verify-email-address/verify-email-address.module').then( m => m.VerifyEmailAddressPageModule)
  },
  {
    path: 'biometric-login',
    loadChildren: () => import('./pages/biometric-login/biometric-login.module').then( m => m.BiometricLoginPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'customise-order',
    loadChildren: () => import('./shared/components/modal/customise-order/customise-order.module').then(m => m.CustomiseOrderPageModule)
  },
  {
    path: 'choose-options',
    loadChildren: () => import('./shared/components/modal/choose-options/choose-options.module').then( m => m.ChooseOptionsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule{}
