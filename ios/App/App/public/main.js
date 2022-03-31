(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 66224:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <div class=\"grid grid-rows-1 grid-cols-1\">\n    <div>\n      <ion-router-outlet></ion-router-outlet>\n    </div>\n  </div>\n</ion-app>\n");

/***/ }),

/***/ 2417:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/cards/cart-card/cart-card.component.html ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"cart\">\n  <ion-card mode=\"ios\">\n    <ion-card-content>\n      <div class=\"item-img\">\n        <img [src]=\"cart.image\" />\n      </div>\n\n      <div class=\"item-info\">\n        <p>Item Name: {{ cart.name }}</p>\n        <p>Merchant: {{ cart.owner }}</p>\n        <p>Price: RM {{ cart.price }}</p>\n\n        <div class=\"qty-selector\">\n          <p>Quantity: </p>\n          <ion-button fill=\"clear\" [disabled]=\"cart.quantity===1\" (click)=\"removeFromCart(cart.quantity)\">-</ion-button>\n          <ion-label>{{ cart.quantity }}</ion-label>\n          <ion-button fill=\"clear\" (click)=\"addToCart()\">+</ion-button>\n          <ion-icon name=\"trash-outline\" (click) = \"deleteItem()\"></ion-icon>\n        </div>\n        <ion-button expand=\"block\" (click) = \"openNoteModal(cart.id)\">Add Note</ion-button>\n      </div>\n      <ion-row><ion-label>Pick Up Time:</ion-label></ion-row>\n      <ion-row><ion-label>{{this.date}}</ion-label></ion-row>\n        <ion-datetime\n          #datetime (ionChange)=\"dateChanges(datetime.value, cart.id)\"\n          presentation= 'date-time'\n          [min]=\"myDateString\"\n          [max]=\"nextWeek\"\n          [hourValues]=\"[8,9,10,11,12,13,14,15,16,17,18,19,20,21]\">\n        </ion-datetime>\n  </ion-card-content>\n  </ion-card>\n</ng-container>\n");

/***/ }),

/***/ 52741:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/cards/checkout-card/checkout-card.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"checkout\">\n<ion-card mode=\"ios\">\n  <ion-card-content>\n    <div class=\"item-img\">\n      <img [src]=\"checkout.image\" />\n    </div>\n    <div class=\"item-info\">\n      <p>Item Name:{{checkout.name}}</p>\n      <p>Merchant: {{checkout.owner}}</p>\n      <p>Price: RM {{checkout.price}}</p>\n      <p>Quantity: {{checkout.quantity}}</p>\n    </div>\n  </ion-card-content>\n</ion-card>\n</ng-container>\n");

/***/ }),

/***/ 35120:
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/cards/fav-card/fav-card.component.html ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card mode=\"ios\">\n  <ion-card-content>\n<ion-col size=\"6\" class=\"ion-padding\">\n  <img [src]=\"fav.image\" />\n  <p style=\"margin-top: 5px\">Item Name: {{ fav.name }}</p>\n  <p>Merchant: {{ fav.owner }}</p>\n  <p style=\"margin-bottom: 5px\">Price: RM {{ fav.price }}</p>\n  <ion-button expand=\"block\" (click)=\"addToCart(fav.name, fav.itemId, fav.ownerId)\">Add to Cart</ion-button>\n</ion-col>\n  </ion-card-content>\n</ion-card>\n");

/***/ }),

/***/ 62234:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/cards/food-card/food-card.component.html ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"food\">\n    <div class=\"grid grid-cols-1 grid-rows-4 mt-1 shadow-md\">\n        <ion-img class=\"col-start-1 col-span-1 row-start-1 row-span-3\" [src]=\"food.image\"></ion-img>\n        <div class=\"col-start-1 col-span-1 row-start-3 row-span-2 self-center justify-self-center grid grid-rows-2 bg-white w-9/12 p-5 shadow-lg\">\n            <div class=\"col-start-1 col-span-1\trow-start-1 row-span-1 self-center justify-self-center text-orange-400 text-4xl subpixel-antialiased\">{{ food.name }}</div>\n            <div class=\"col-start-1 col-span-1\trow-start-2 row-span-1 self-center justify-self-center text-orange-400 subpixel-antialiased\">{{ food.description }}</div>\n        </div>\n    </div>\n</ng-container>\n");

/***/ }),

/***/ 78197:
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/cards/main-option-card/main-option-card.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"option\">\n    <div class=\"grid grid-cols-1 grid-rows-1 mt-1 shadow-md \">\n        <ion-img class=\"col-start-1 col-span-1 row-start-1 row-span-1\" [src]=\"option.image\"></ion-img>\n        <div class=\"col-start-1 col-span-1 row-start-1 row-span-1 option-image-mask\"></div>\n        <span class=\"col-start-1 col-span-1\trow-start-1 row-span-1 self-center justify-self-center font-sans text-4xl text-orange-400\">{{ option.name }}</span>\n    </div>\n</ng-container>\n");

/***/ }),

/***/ 80716:
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/cards/order-card/order-card.component.html ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"order\">\n  <ion-card mode=\"ios\">\n    <ion-card-content>\n\n      <div class=\"item-info\">\n        <p>Item Name: {{order.name}} <ion-icon style=\"zoom: 2; margin-left: 50px\" (click) = \"generatePdf(order.name, order.id ,  order.price,  order.owner, order.ownerId, order.quantity, order.amountPaid, order.status, order.orderTime, order.deliverTime)\" name=\"reader-outline\"></ion-icon></p>\n        <p>Merchant: {{order.owner}}</p>\n        <p>Price: RM {{order.price}}</p>\n        <p>Quantity: {{order.quantity}}</p>\n        <p>Amount Paid: {{order.amountPaid}}</p>\n        <p>Order ID: {{order.id}}</p>\n        <p>Status: {{order.status}}</p>\n        <p>Order Time: {{order.orderTime.toDate() | date:'yyyy/MM/dd h:mm:ss a'}}</p>\n        <p>Deliver Time: {{order.deliverTime}}</p>\n        <ion-button *ngIf=\"order.status !== 'complete'\" expand=\"block\" class=\"main-button\" (click) = 'goToCheckStatusUser(order.name, order.id, order.price, order.owner, order.ownerId)'>Check Status</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ng-container>\n");

/***/ }),

/***/ 12577:
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/cards/track-orders/track-orders.component.html ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"trackOrder\">\n  <ion-card mode=\"ios\">\n    <ion-card-content>\n      <div class=\"item-info\">\n        <p>Order ID: {{ trackOrder.id}}</p>\n        <p>Item Name: {{trackOrder.name}}</p>\n        <p>Customer: {{trackOrder.user}}</p>\n        <p>Price: {{trackOrder.price}}</p>\n        <p>Order Time: {{trackOrder.time}}</p>\n        <p>Deliver Time: {{trackOrder.deliverTime}}</p>\n        <p>Status: {{trackOrder.status}}</p>\n        <ion-button expand=\"block\" class=\"main-button\" (click) = 'cancelOrder(trackOrder.id, trackOrder.user, trackOrder.userId, trackOrder.amountPaid)'>Cancel Order</ion-button>\n        <ion-button expand=\"block\" class=\"main-button\" (click)=\"goToCheckStatusStore(trackOrder.name, trackOrder.id, trackOrder.price, trackOrder.user, trackOrder.status, trackOrder.userId)\">Check Status</ion-button>\n     </div>\n    </ion-card-content>\n  </ion-card>\n</ng-container>\n");

/***/ }),

/***/ 13340:
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/cards/wallet-card/wallet-card.component.html ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card color=\"warning\">\n  <ion-card-content *ngIf=\"this.balance!==''\">\n    <ion-row>\n      <ion-note class=\"no\" color=\"black\">Hello, {{this.iroha.wallet.name}}!</ion-note>\n      <ion-col class=\"ion-text-end\">\n        <ion-icon  name=\"calculator\" class=\"center-right\" routerLink=\"/list\" routerDirection=\"forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-chip>\n        <ion-label color=\"light\">\n          Balance: RM {{this.iroha.wallet.balance}}\n        </ion-label>\n      </ion-chip>\n      <ion-col class=\"ion-text-end\">\n        <ion-icon name=\"add-circle\" class=\"center-right\" routerLink=\"/top-up\" routerDirection=\"forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n");

/***/ }),

/***/ 65686:
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/modal/note/note.component.html ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Add Note</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <div class =\"ion-padding-bottom\">\n  </div>\n  <div class=\"titles\">\n    <ion-text  color=\"primary\" style=\"font-size: 20px; font-weight: bold\">Send a message to the seller regarding this order</ion-text>\n  </div>\n  <div color=\"light\" class=\"ion-padding\">\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"10\" >\n      <ion-textarea color=\"dark\" class=\"message-input\" autoGrow=\"true\" rows=\"1\" maxLength=\"500\" [(ngModel)]=\"newMsg\" placeholder=\"Enter your message here\" >\n      </ion-textarea>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\" (click)=\"addNote()\">\n        <ion-icon name=\"send\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 93475:
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/modal/store-sales/store-sales.component.html ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Your Sales</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <div class=\"ion-padding\">\n    <div><canvas id=\"yudhatp-chart\"></canvas></div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 68438:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth/auth.guard */ 77919);
/* harmony import */ var _guards_verify_verify_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/verify/verify.guard */ 7038);





const routes = [
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
    {
        path: 'auth-screen',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor-native-biometric_dist_esm_index_js"), __webpack_require__.e("src_app_pages_auth-screen_auth-screen_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/pages/auth-screen/auth-screen.module */ 60196)).then(m => m.AuthScreenPageModule),
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 65966)).then(m => m.TabsPageModule),
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, _guards_verify_verify_guard__WEBPACK_IMPORTED_MODULE_1__.VerifyGuard]
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/home/home.module */ 77788)).then(m => m.HomePageModule)
    },
    {
        path: 'list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_pages_tabs_home_list_list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/home/list/list.module */ 30391)).then(m => m.ListPageModule)
    },
    {
        path: 'scan-pay',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor-native-biometric_dist_esm_index_js"), __webpack_require__.e("src_app_pages_scan-pay_scan-pay_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scan-pay/scan-pay.module */ 85814)).then(m => m.ScanPayPageModule)
    },
    {
        path: 'pay',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabs_pay_pay_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/pay/pay.module */ 97106)).then(m => m.PayPageModule)
    },
    {
        path: 'cafe',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_cafe_cafe_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/cafe/cafe.module */ 63029)).then(m => m.CafePageModule)
    },
    {
        path: 'lunch',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_lunch_lunch_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/lunch/lunch.module */ 34109)).then((m) => m.LunchPageModule),
    },
    {
        path: 'item-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_item-details_item-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/item-details/item-details.module */ 34520)).then((m) => m.ItemDetailsPageModule),
    },
    {
        path: 'user-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor-native-biometric_dist_esm_index_js"), __webpack_require__.e("src_app_pages_tabs_search_user-details_user-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/search/user-details/user-details.module */ 53486)).then((m) => m.UserDetailsPageModule),
    },
    {
        path: 'top-up',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabs_home_top-up_top-up_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/home/top-up/top-up.module */ 61536)).then((m) => m.TopUpPageModule),
    },
    {
        path: 'qr-code',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_qr-code_qr-code_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/qr-code/qr-code.module */ 32141)).then((m) => m.QrCodePageModule),
    },
    {
        path: 'my-cart',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_my-cart_my-cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/my-cart/my-cart.module */ 90421)).then(m => m.MyCartPageModule)
    },
    {
        path: 'my-orders',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_my-orders_my-orders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/my-orders/my-orders.module */ 80077)).then(m => m.MyOrdersPageModule)
    },
    {
        path: 'order-history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_order-history_order-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/order-history/order-history.module */ 44065)).then(m => m.OrderHistoryPageModule)
    },
    {
        path: 'favourites',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_favourite_favourite_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/favourite/favourite.module */ 84643)).then(m => m.FavouritePageModule)
    },
    {
        path: 'checkout',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_checkout_checkout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/checkout/checkout.module */ 11554)).then(m => m.CheckoutPageModule)
    },
    {
        path: 'confirm',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor-native-biometric_dist_esm_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_confirm_confirm_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/confirm/confirm.module */ 73491)).then(m => m.ConfirmPageModule)
    },
    {
        path: 'user-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor-native-biometric_dist_esm_index_js"), __webpack_require__.e("src_app_pages_tabs_search_user-details_user-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/search/user-details/user-details.module */ 53486)).then(m => m.UserDetailsPageModule)
    },
    {
        path: 'top-up',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabs_home_top-up_top-up_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/home/top-up/top-up.module */ 61536)).then(m => m.TopUpPageModule)
    },
    {
        path: 'qr-code',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_qr-code_qr-code_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/qr-code/qr-code.module */ 32141)).then(m => m.QrCodePageModule)
    },
    {
        path: 'update-store',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_cafe_firebase-upload_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_update-store_update-store_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/update-store/update-store.module */ 52548)).then(m => m.UpdateStorePageModule)
    },
    {
        path: 'start-selling',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_cafe_firebase-upload_service_ts"), __webpack_require__.e("src_app_pages_start-selling_start-selling_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/start-selling/start-selling.module */ 35481)).then(m => m.StartSellingPageModule)
    },
    {
        path: 'track-orders',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_track-orders_track-orders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/track-orders/track-orders.module */ 19412)).then(m => m.TrackOrdersPageModule)
    },
    {
        path: 'track-sales',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-src_app_pages_track-sales_track-sales_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/track-sales/track-sales.module */ 85676)).then(m => m.TrackSalesPageModule)
    },
    {
        path: 'check-status',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_check-status_check-status_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/check-status/check-status.module */ 18761)).then(m => m.CheckStatusPageModule)
    },
    {
        path: 'pin-code',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pin-code/pin-code.module */ 14596)).then(m => m.PinCodePageModule)
    },
    {
        path: 'store-sales',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-src_app_pages_track-sales_track-sales_module_ts"), __webpack_require__.e("src_app_pages_store-sales_store-sales_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/store-sales/store-sales.module */ 38948)).then(m => m.StoreSalesPageModule)
    },
    {
        path: 'chat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_chat_chat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chat/chat.module */ 50032)).then(m => m.ChatPageModule)
    },
    {
        path: 'chat-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_chat-list_chat-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chat-list/chat-list.module */ 42648)).then(m => m.ChatListPageModule)
    },
    {
        path: 'chat-rooms',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_chat-rooms_chat-rooms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chat-rooms/chat-rooms.module */ 55718)).then(m => m.ChatRoomsPageModule)
    },
    {
        path: 'check-status-user',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_check-status-user_check-status-user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/check-status-user/check-status-user.module */ 66540)).then(m => m.CheckStatusUserPageModule)
    },
    {
        path: 'check-status-store',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_check-status-store_check-status-store_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/check-status-store/check-status-store.module */ 7730)).then(m => m.CheckStatusStorePageModule)
    },
    {
        path: 'add-item',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_cafe_firebase-upload_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_shared_components_modal_add-item_add-item_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./shared/components/modal/add-item/add-item.module */ 14782)).then(m => m.AddItemPageModule)
    },
    {
        path: 'edit-item',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_cafe_firebase-upload_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_shared_components_modal_edit-item_edit-item_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./shared/components/modal/edit-item/edit-item.module */ 91321)).then(m => m.EditItemModule)
    },
    {
        path: 'verify-email-address',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_verify-email-address_verify-email-address_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/verify-email-address/verify-email-address.module */ 38002)).then(m => m.VerifyEmailAddressPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
    // @ts-ignore
], AppRoutingModule);



/***/ }),

/***/ 36104:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 66224);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 91346);





let AppComponent = class AppComponent {
    constructor(platform) {
        this.platform = platform;
        this.initializeApp();
    }
    initializeApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.platform.ready().then(() => {
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 92014:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 36104);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 68438);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ 54113);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/app */ 11576);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 41251);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ 75656);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/functions */ 60639);
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/messaging */ 57420);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ 9243);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat */ 33467);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ 21286);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 24249);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 3120);























let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_12__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseConfig),
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_13__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_13__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseConfig)),
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__.provideAuth)(() => {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Capacitor.isNativePlatform()) {
                    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.initializeAuth)((0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_13__.getApp)(), {
                        persistence: firebase_auth__WEBPACK_IMPORTED_MODULE_4__.indexedDBLocalPersistence,
                    });
                }
                else {
                    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__.getAuth)();
                }
            }),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__.getFirestore)()),
            (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_16__.provideFunctions)(() => (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_16__.getFunctions)()),
            (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_17__.provideMessaging)(() => (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_17__.getMessaging)()),
            (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__.getStorage)()),
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ],
        providers: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormBuilder,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavParams,
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__.FileOpener,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy },
        ],
        exports: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 77919:
/*!*******************************************!*\
  !*** ./src/app/guards/auth/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 68927);


// import { getAuth, onAuthStateChanged } from '@angular/fire/auth';


let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        return this.auth.checkAuth().then(response => {
            if (response) {
                return true;
            }
            else {
                this.navigate();
                return false;
            }
        })
            .catch(e => {
            this.navigate();
            return false;
        });
    }
    navigate() {
        this.router.navigateByUrl('/auth-screen', { replaceUrl: true });
    }
};
AuthGuard.ctorParameters = () => [
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 7038:
/*!***********************************************!*\
  !*** ./src/app/guards/verify/verify.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyGuard": () => (/* binding */ VerifyGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/iroha.service */ 49187);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storage.service */ 17208);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);









let VerifyGuard = class VerifyGuard {
    constructor(auth, router, iroha, storage, _firestore, afs, loadingController) {
        this.auth = auth;
        this.router = router;
        this.iroha = iroha;
        this.storage = storage;
        this._firestore = _firestore;
        this.afs = afs;
        this.loadingController = loadingController;
    }
    canActivate(route, state) {
        return this.auth.checkVerify().then((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (response) {
                const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, 'users', this.auth.currentUser.uid);
                const docSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef);
                if (docSnap.data().verify === false) {
                    const user = yield this.storage.get(docSnap.data().username);
                    yield this.iroha.createAccount(docSnap.data().username);
                    this.iroha.wallet.name = '';
                    yield this.iroha.setName(docSnap.data().username + '@test');
                    console.log(docSnap.data().username);
                    this.iroha.wallet.balance = 0;
                    yield this.iroha.topUpVerify(docSnap.data().username + '@test', '', '1');
                    yield this.iroha.payment('admin', '', '1');
                    yield this.iroha.setBalance(docSnap.data().username + '@test');
                    yield this.iroha.setAccDetail(user);
                    yield this.createCart();
                    yield this.createFav();
                    const docReff = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, 'users', this.auth.currentUser.uid);
                    const docSnapp = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docReff);
                    if (docSnap.exists()) {
                        yield this.afs.collection('users').doc(this.auth.currentUser.uid).update({
                            verify: true
                        });
                    }
                    return true;
                }
                if (docSnap.data().verify === true) {
                    return true;
                }
            }
            else {
                this.navigate();
                return false;
            }
        }))
            .catch(e => {
            this.navigate();
            return false;
        });
    }
    navigate() {
        this.router.navigateByUrl('/verify-email-address', { replaceUrl: true });
    }
    goToHome() {
        this.router.navigateByUrl('/tabs', { replaceUrl: true });
    }
    createCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-underscore-dangle
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, `carts/${(this.auth.currentUser.uid)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(dataRef, {
                id: this.auth.currentUser.uid,
            });
        });
    }
    createFav() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-underscore-dangle
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, `favourites/${(this.auth.currentUser.uid)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(dataRef, {
                id: this.auth.currentUser.uid,
            });
        });
    }
};
VerifyGuard.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_1__.IrohaService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Firestore },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
VerifyGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], VerifyGuard);



/***/ }),

/***/ 68927:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 75656);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 50947);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 60111);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage.service */ 17208);









let AuthService = class AuthService {
    constructor(_fireAuth, _firestore, afAuth, router, loading, storage) {
        this._fireAuth = _fireAuth;
        this._firestore = _firestore;
        this.afAuth = afAuth;
        this.router = router;
        this.loading = loading;
        this.storage = storage;
        this.uid = '';
        this.afAuth.onAuthStateChanged(user => {
            this.currentUser = user;
        });
    }
    // Creating a firebase account
    register(formValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const registeredUser = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(this._fireAuth, formValue.email, formValue.password)
                    .then(result => {
                    this.uploadFirestore(formValue.username, formValue.email);
                    this.storage.set(formValue.username, formValue.password);
                    this.loading.dismiss();
                    this.sendVerificationMail();
                });
            }
            catch (e) {
                throw (e);
            }
        });
    }
    sendVerificationMail() {
        return this.afAuth.currentUser
            .then((user) => user.sendEmailVerification())
            .then(() => {
            this.router.navigate(['verify-email-address']);
        });
    }
    uploadFirestore(username, email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, `users/${this.currentUser.uid}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(dataRef, {
                username,
                email,
                verify: false
            });
        });
    }
    // Login Firebase User
    login(formValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // eslint-disable-next-line no-underscore-dangle
                const response = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(this._fireAuth, formValue.email, formValue.password);
                console.log('login user: ', response);
                if (response === null || response === void 0 ? void 0 : response.user) {
                    return response.user.uid;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                throw (e);
            }
        });
    }
    // Check whether the firebase user is login or not
    checkAuth() {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-underscore-dangle
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(this._fireAuth, user => {
                console.log(user);
                if (user) {
                    resolve(true);
                }
                resolve(false);
            });
        });
    }
    reAuth(email, pw) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const credential = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.EmailAuthProvider.credential(email, pw);
                const response = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.reauthenticateWithCredential)(this.currentUser, credential);
            }
            catch (e) {
                throw (e);
            }
        });
    }
    deleteUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const response = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.deleteUser)(this.currentUser);
            }
            catch (e) {
                throw (e);
            }
        });
    }
    checkVerify() {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-underscore-dangle
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(this._fireAuth, user => {
                if (firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser.emailVerified) {
                    resolve(true);
                }
                resolve(false);
            });
        });
    }
    // Get the current user uid for querying purposes
    getUid() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions,no-underscore-dangle
        this.id = this._fireAuth.currentUser.uid;
        return this.id;
    }
    // Logout, self-explanatory
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // eslint-disable-next-line no-underscore-dangle
                yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(this._fireAuth);
                return true;
            }
            catch (e) {
                throw (e);
            }
        });
    }
    resetPassword(email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-underscore-dangle
            yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.sendPasswordResetEmail)(this._fireAuth, email)
                .then(() => {
                // Password reset email sent!
                // ..
            })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.Auth },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Firestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 41575:
/*!**************************************************!*\
  !*** ./src/app/services/cafe/product.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 50947);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80266);







const INCREMENT = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.increment(1);
const DECREMENT = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.increment(-1);
let ProductService = class ProductService {
    constructor(afs, ionicAuthService, _firestore) {
        this.afs = afs;
        this.ionicAuthService = ionicAuthService;
        this._firestore = _firestore;
        this.total = 0;
        this.idOwnerPair = new Map();
        this.orderNotePair = new Map();
        this.orderTimePair = new Map();
        this.orderStatus = [];
        this.statusPair = [];
        this.store = {
            name: '',
        };
        this.item = {
            name: '',
            price: '',
            description: '',
            owner: '',
            id: '',
            image: '',
            status: ''
        };
        this.label = [];
        this.data = [];
        this.orderName = '';
        this.name = '';
        this.orderId = '';
        this.price = '';
        this.owner = '';
        this.user = '';
        this.status = '';
        this.percentage = 0;
        this.statusName = '';
        this.editItemId = '';
        this.noteId = '';
        this.time = '';
        this.ownerId = '';
        this.userId = '';
        this.cart = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.id = this.ionicAuthService.getUid();
    }
    addToCart(id, owner) {
        // Update the FB cart
        this.afs.collection('carts').doc(this.id).update({
            [id]: INCREMENT,
            lastUpdate: firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.serverTimestamp()
        });
        this.idOwnerPair.set(id, owner);
    }
    addToFav(id, owner) {
        // Update the FB cart
        this.afs.collection('favourites').doc(this.id).update({
            [id]: INCREMENT,
            lastUpdate: firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.serverTimestamp()
        });
        this.idOwnerPair.set(id, owner);
    }
    removeFromCart(id) {
        // Update the FB cart
        this.afs.collection('carts').doc(this.id).get()
            .subscribe((data) => {
            if (data.data()[id] > 0) {
                this.afs.collection('carts').doc(this.id).update({
                    [id]: DECREMENT,
                    lastUpdate: firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.serverTimestamp()
                });
            }
        });
    }
    deleteItem(id) {
        this.afs.collection('carts').doc(this.id).update({
            [id]: firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue["delete"](),
            lastUpdate: firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.serverTimestamp()
        });
    }
    checkoutCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Create an order
            // eslint-disable-next-line no-underscore-dangle
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, 'carts/' + this.id);
            const docSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(dataRef);
            // eslint-disable-next-line no-underscore-dangle
            const orderRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, 'orders/' + this.id);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(orderRef, docSnap.data());
            // Clear old cart
            const clearRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, `carts/${(this.ionicAuthService.getUid())}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(clearRef, {
                id: this.ionicAuthService.getUid(),
            });
        });
    }
    setTotal(total) {
        this.total = total;
    }
    setOrderStatus(statusType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this._firestore, `${(statusType)}`);
            const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(q);
            querySnapshot.forEach((docs) => {
                console.log(docs.id, ' => ', docs.data());
                this.statusPair.push({
                    name: docs.id,
                    status: docs.data().status
                });
            });
        });
    }
    addNote(id, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.orderNotePair.set(id, msg);
        });
    }
    addTime(id, time) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.orderTimePair.set(id, time);
        });
    }
    changeStatus(statusType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, `${(statusType)}/${(this.status)}`);
            const docSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(dataRef);
            this.orderStatus = docSnap.data().status;
            switch (this.status) {
                case 'paid':
                    this.percentage = 25;
                    break;
                case 'prepare':
                    this.percentage = 50;
                    break;
                case 'done':
                    this.percentage = 75;
                    break;
                case 'complete':
                    this.percentage = 100;
                    break;
            }
            yield this.setOrderStatus(statusType);
            for (const key of this.statusPair) {
                if (key.name === this.status) {
                    this.statusName = key.status;
                }
            }
        });
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Firestore }
];
ProductService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ 49187:
/*!*******************************************!*\
  !*** ./src/app/services/iroha.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IrohaService": () => (/* binding */ IrohaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var iroha_helpers_lib_proto_endpoint_pb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iroha-helpers/lib/proto/endpoint_pb_service */ 47575);
/* harmony import */ var iroha_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! iroha-helpers */ 37762);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ 17208);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 60111);








const IROHA_ADDRESS = 'http://34.101.37.91:8081';
const commandService = new iroha_helpers_lib_proto_endpoint_pb_service__WEBPACK_IMPORTED_MODULE_0__.CommandService_v1Client(IROHA_ADDRESS);
const queryService = new iroha_helpers_lib_proto_endpoint_pb_service__WEBPACK_IMPORTED_MODULE_0__.QueryService_v1Client(IROHA_ADDRESS);
let IrohaService = class IrohaService {
    constructor(storage, ionicAuthService, _firestore, afAuth) {
        this.storage = storage;
        this.ionicAuthService = ionicAuthService;
        this._firestore = _firestore;
        this.afAuth = afAuth;
        this.wallet = {
            name: '',
            privateKey: null,
            publicKey: null,
            encrypted: false,
            balance: 0.00,
        };
        this.otherWallet = {
            name: '',
            privateKey: null,
            publicKey: null,
            encrypted: false,
            balance: 0.00,
        };
        this.txs = [];
        this.prevPage = false;
        this.nextPage = false;
        this.pageHash = [undefined];
        this.pageNum = 0;
        this.pw = '';
        this.note = '';
        this.transactionMsg = '';
        this.transactionFrom = '';
        this.transactionTo = '';
        this.transactionAmount = '';
        this.transactionDate = '';
        this.result = '';
        this.testprivateKey = '';
        this.testpublicKey = '';
        this.currentUser = null;
        this.afAuth.onAuthStateChanged(user => {
            this.currentUser = user;
        });
    }
    // create iroha account during user sign up
    createAccount(username) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.generateKeypair()
                .then(({ publicKey, privateKey }) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(this.currentUser.uid);
                yield this.storage.set(this.currentUser.uid, privateKey);
                yield this.getKey();
                console.log(this.wallet.privateKey);
                yield iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.commands.createAccount({
                    privateKeys: ['e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0'],
                    creatorAccountId: 'admin@test',
                    quorum: 1,
                    commandService,
                    timeoutLimit: 5000 // Set timeout limit
                }, {
                    accountName: username,
                    domainId: 'test',
                    publicKey
                }).catch(e => console.log(e));
            }));
        });
    }
    // generate private and public key for each created account
    generateKeypair() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const keypair = iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.cryptoHelper.generateKeyPair();
            const publicKey = keypair.publicKey;
            const privateKey = keypair.privateKey;
            return { publicKey, privateKey };
        });
    }
    getKey() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.wallet.privateKey = yield this.storage.get(this.currentUser.uid);
        });
    }
    setName(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getKey();
            yield iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.queries.getAccount({
                privateKey: this.wallet.privateKey,
                creatorAccountId: id,
                queryService,
                timeoutLimit: 5000 // Set timeout limit
            }, { accountId: id })
                .then(account => (this.wallet.name = Object.values(account)[0].slice(0, this.wallet.name.length - 5)));
        });
    }
    setOtherName(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getKey();
            yield iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.queries.getAccount({
                privateKey: 'e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0',
                creatorAccountId: 'admin@test',
                queryService,
                timeoutLimit: 5000 // Set timeout limit
            }, { accountId: id })
                .then(account => (this.otherWallet.name = Object.values(account)[0].slice(0, this.otherWallet.name.length - 5)));
        });
    }
    setBalance(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getKey();
            yield iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.queries.getAccountAssets({
                privateKey: this.wallet.privateKey,
                creatorAccountId: id,
                queryService,
                timeoutLimit: 5000 // Set timeout limit
            }, { accountId: id, pageSize: 100, firstAssetId: 'coin#test' })
                .then(account => this.wallet.balance = Object.values(account)[0].balance);
        });
    }
    topUp(id, message, amount, prk) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line max-len
            try {
                const transfer = yield iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.commands.transferAsset({
                    privateKeys: [prk],
                    creatorAccountId: 'admin@test',
                    quorum: 1,
                    commandService,
                    timeoutLimit: 5000 // Set timeout limit
                }, { srcAccountId: 'admin@test', destAccountId: id, assetId: 'coin#test', description: message, amount });
            }
            catch (e) {
                throw (e);
            }
        });
    }
    topUpVerify(id, message, amount) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line max-len
            try {
                const transfer = yield iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.commands.transferAsset({
                    privateKeys: ['e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0'],
                    creatorAccountId: 'admin@test',
                    quorum: 1,
                    commandService,
                    timeoutLimit: 5000 // Set timeout limit
                }, { srcAccountId: 'admin@test', destAccountId: id, assetId: 'coin#test', description: message, amount });
            }
            catch (e) {
                throw (e);
            }
        });
    }
    sendMoney(message, amount) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getKey();
            console.log(this.wallet.name);
            console.log(this.wallet.privateKey);
            console.log(this.otherWallet.name);
            // eslint-disable-next-line max-len
            yield iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.commands.transferAsset({
                privateKeys: [this.wallet.privateKey],
                creatorAccountId: this.wallet.name + '@test',
                quorum: 1,
                commandService,
                timeoutLimit: 5000 // Set timeout limit
            }, 
            // eslint-disable-next-line max-len
            {
                srcAccountId: this.wallet.name + '@test',
                destAccountId: this.otherWallet.name + '@test',
                assetId: 'coin#test',
                description: message,
                amount
            });
        });
    }
    payment(dest, message, amount) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getKey();
            yield iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.commands.transferAsset({
                privateKeys: [this.wallet.privateKey],
                creatorAccountId: this.wallet.name + '@test',
                quorum: 1,
                commandService,
                timeoutLimit: 5000 // Set timeout limit
            }, 
            // eslint-disable-next-line max-len
            {
                srcAccountId: this.wallet.name + '@test',
                destAccountId: dest + '@test',
                assetId: 'coin#test',
                description: message,
                amount
            });
        });
    }
    getTransactions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getKey();
            this.txs = []; // empty any previous transaction
            yield iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.queries.getAccountAssetTransactions({
                privateKey: this.wallet.privateKey,
                creatorAccountId: this.wallet.name + '@test',
                queryService,
                timeoutLimit: 5000 // Set timeout limit
            }, {
                accountId: this.wallet.name + '@test',
                assetId: 'coin#test',
                firstTxHash: undefined,
                firstTxHeight: undefined,
                firstTxTime: undefined,
                lastTxHeight: undefined,
                lastTxTime: undefined,
                ordering: { direction: undefined, field: undefined },
                pageSize: 100,
            })
                .then(transactions => {
                console.log(Object.values(transactions)[0]);
                if (Object.values(transactions)[0].isEmpty) {
                    return [];
                }
                if (Object.values(transactions)[0].length > 0 && this.pageNum === this.pageHash.length - 1) {
                    this.pageHash.push(Object.values(transactions)[0].nextTxHash);
                }
                if (this.pageNum + 1 < this.pageHash.length) {
                    this.nextPage = true;
                }
                else {
                    this.nextPage = false;
                }
                if (this.pageNum > 0) {
                    this.prevPage = true;
                }
                else {
                    this.prevPage = false;
                }
                Object.values(transactions)[0].forEach(t => {
                    const { commandsList, createdTime } = t.payload.reducedPayload;
                    commandsList.forEach(c => {
                        if (!c.transferAsset) {
                            return;
                        }
                        const { amount, assetId, destAccountId, srcAccountId, description } = c.transferAsset;
                        const tx = {
                            from: srcAccountId === (this.wallet.name + '@test') ? 'You' : srcAccountId.split('@')[0],
                            to: destAccountId === (this.wallet.name + '@test') ? 'You' : destAccountId.split('@')[0],
                            amount,
                            date: createdTime,
                            currency: assetId.split('#')[0],
                            message: description
                        };
                        if (!(tx.amount === '1' && (tx.to === 'admin' || tx.from === 'admin'))) {
                            this.txs.push(tx);
                        }
                    });
                    this.txs.reverse();
                });
            })
                .catch(err => console.log(err));
        });
    }
    setAccDetail(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getKey();
            console.log(this.wallet.privateKey);
            yield iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.commands.setAccountDetail({
                privateKeys: [this.wallet.privateKey],
                creatorAccountId: this.wallet.name + '@test',
                quorum: 1,
                commandService,
                timeoutLimit: 5000 // Set timeout limit
            }, { accountId: this.wallet.name + '@test', key: 'sec', value });
        });
    }
    getAccDetail(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getKey();
            yield iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.queries.getAccountDetail({
                privateKey: this.wallet.privateKey,
                creatorAccountId: this.wallet.name + '@test',
                queryService,
                timeoutLimit: 5000 // Set timeout limit
            }, {
                accountId: this.wallet.name + '@test',
                key: 'sec',
                pageSize: 100,
                paginationKey: 'sec',
                paginationWriter: this.wallet.name + '@test',
                writer: this.wallet.name + '@test'
            }).then(d => {
                this.pw = d[this.wallet.name + '@test'].sec;
            });
        });
    }
    addSignatory(result) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.commands.addSignatory({
                privateKeys: ['e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0'],
                creatorAccountId: 'admin@test',
                quorum: 1,
                commandService,
                timeoutLimit: 5000 // Set timeout limit
            }, { accountId: 'admin@test', publicKey: result });
        });
    }
    removeSignatory(result) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield iroha_helpers__WEBPACK_IMPORTED_MODULE_1__.commands.removeSignatory({
                privateKeys: ['e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0'],
                creatorAccountId: 'admin@test',
                quorum: 1,
                commandService,
                timeoutLimit: 5000 // Set timeout limit
            }, { accountId: 'admin@test', publicKey: result });
        });
    }
};
IrohaService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.Firestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth }
];
IrohaService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], IrohaService);



/***/ }),

/***/ 17208:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 83945);



let StorageService = class StorageService {
    constructor() {
    }
    set(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
                key,
                value,
            });
        });
    }
    get(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const value = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key });
            return value.value;
        });
    }
};
StorageService.ctorParameters = () => [];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 50041:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/cards/cart-card/cart-card.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartCardComponent": () => (/* binding */ CartCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cart_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cart-card.component.html */ 2417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/cafe/product.service */ 41575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _modal_note_note_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal/note/note.component */ 46059);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 67897);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 29666);









let CartCardComponent = class CartCardComponent {
    constructor(product, router, _firestore, modalCtrl, routerOutlet, alertController) {
        this.product = product;
        this.router = router;
        this._firestore = _firestore;
        this.modalCtrl = modalCtrl;
        this.routerOutlet = routerOutlet;
        this.alertController = alertController;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.myDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 510);
        this.date = 'Not selected.';
        this.nextWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 7).toISOString();
    }
    ngOnInit() {
        this.myDateString = this.myDate.toISOString();
    }
    addToCart() {
        this.product.addToCart(this.cart.id, this.cart.owner);
        setTimeout(() => { this.childEvent.emit(); }, 500);
    }
    removeFromCart(test) {
        this.product.removeFromCart(this.cart.id);
        setTimeout(() => { this.childEvent.emit(); }, 500);
    }
    openNoteModal(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.product.noteId = id;
            const modal = yield this.modalCtrl.create({
                component: _modal_note_note_component__WEBPACK_IMPORTED_MODULE_2__.NoteComponent,
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
            });
            return yield modal.present();
        });
    }
    dateChanges(date, id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.date = date.split('T')[0] + ' ' + date.split('T')[1].substring(0, 5);
            ;
            yield this.product.addTime(id, this.date);
            console.log(this.product.orderTimePair.get(id));
        });
    }
    deleteItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.product.deleteItem(this.cart.id);
            setTimeout(() => {
                this.childEvent.emit();
            }, 500);
        });
    }
};
CartCardComponent.ctorParameters = () => [
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.Firestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRouterOutlet },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController }
];
CartCardComponent.propDecorators = {
    cart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    childEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
CartCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cart-card',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cart_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], CartCardComponent);



/***/ }),

/***/ 64788:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/cards/checkout-card/checkout-card.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutCardComponent": () => (/* binding */ CheckoutCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_checkout_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./checkout-card.component.html */ 52741);
/* harmony import */ var _checkout_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout-card.component.scss */ 24554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let CheckoutCardComponent = class CheckoutCardComponent {
    constructor() { }
    ngOnInit() { }
};
CheckoutCardComponent.ctorParameters = () => [];
CheckoutCardComponent.propDecorators = {
    checkout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CheckoutCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-checkout-card',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_checkout_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_checkout_card_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckoutCardComponent);



/***/ }),

/***/ 15937:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/cards/fav-card/fav-card.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavCardComponent": () => (/* binding */ FavCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fav_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fav-card.component.html */ 35120);
/* harmony import */ var _fav_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fav-card.component.scss */ 3335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/cafe/product.service */ 41575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 91346);






let FavCardComponent = class FavCardComponent {
    constructor(product, alertController) {
        this.product = product;
        this.alertController = alertController;
    }
    ngOnInit() { }
    addToCart(name, id, ownerId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.product.addToCart(id, ownerId);
            yield this.showAlert(name + ' (x1) is added to your cart!');
        });
    }
    showAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
FavCardComponent.ctorParameters = () => [
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
FavCardComponent.propDecorators = {
    fav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
FavCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-fav-card',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fav_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fav_card_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavCardComponent);



/***/ }),

/***/ 92887:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/cards/food-card/food-card.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodCardComponent": () => (/* binding */ FoodCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_food_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./food-card.component.html */ 62234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



let FoodCardComponent = class FoodCardComponent {
};
FoodCardComponent.propDecorators = {
    food: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
FoodCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-food-card',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_food_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], FoodCardComponent);



/***/ }),

/***/ 28314:
/*!**************************************************!*\
  !*** ./src/app/shared/components/cards/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CARDS_COMPONENTS": () => (/* binding */ CARDS_COMPONENTS),
/* harmony export */   "FoodCardComponent": () => (/* reexport safe */ _food_card_food_card_component__WEBPACK_IMPORTED_MODULE_0__.FoodCardComponent),
/* harmony export */   "MainOptionCardComponent": () => (/* reexport safe */ _main_option_card_main_option_card_component__WEBPACK_IMPORTED_MODULE_1__.MainOptionCardComponent),
/* harmony export */   "OrderCardComponent": () => (/* reexport safe */ _order_card_order_card_component__WEBPACK_IMPORTED_MODULE_2__.OrderCardComponent),
/* harmony export */   "CartCardComponent": () => (/* reexport safe */ _cart_card_cart_card_component__WEBPACK_IMPORTED_MODULE_3__.CartCardComponent),
/* harmony export */   "CheckoutCardComponent": () => (/* reexport safe */ _checkout_card_checkout_card_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutCardComponent),
/* harmony export */   "WalletCardComponent": () => (/* reexport safe */ _wallet_card_wallet_card_component__WEBPACK_IMPORTED_MODULE_5__.WalletCardComponent)
/* harmony export */ });
/* harmony import */ var _food_card_food_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-card/food-card.component */ 92887);
/* harmony import */ var _main_option_card_main_option_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-option-card/main-option-card.component */ 95978);
/* harmony import */ var _order_card_order_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-card/order-card.component */ 70950);
/* harmony import */ var _cart_card_cart_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-card/cart-card.component */ 50041);
/* harmony import */ var _checkout_card_checkout_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkout-card/checkout-card.component */ 64788);
/* harmony import */ var _wallet_card_wallet_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet-card/wallet-card.component */ 9535);
/* harmony import */ var _fav_card_fav_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fav-card/fav-card.component */ 15937);
/* harmony import */ var _track_orders_track_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./track-orders/track-orders.component */ 90214);








// eslint-disable-next-line max-len
const CARDS_COMPONENTS = [_track_orders_track_orders_component__WEBPACK_IMPORTED_MODULE_7__.TrackOrdersComponent, _fav_card_fav_card_component__WEBPACK_IMPORTED_MODULE_6__.FavCardComponent, _wallet_card_wallet_card_component__WEBPACK_IMPORTED_MODULE_5__.WalletCardComponent, _food_card_food_card_component__WEBPACK_IMPORTED_MODULE_0__.FoodCardComponent, _main_option_card_main_option_card_component__WEBPACK_IMPORTED_MODULE_1__.MainOptionCardComponent, _order_card_order_card_component__WEBPACK_IMPORTED_MODULE_2__.OrderCardComponent, _cart_card_cart_card_component__WEBPACK_IMPORTED_MODULE_3__.CartCardComponent, _checkout_card_checkout_card_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutCardComponent];








/***/ }),

/***/ 95978:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/cards/main-option-card/main-option-card.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainOptionCardComponent": () => (/* binding */ MainOptionCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_main_option_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./main-option-card.component.html */ 78197);
/* harmony import */ var _main_option_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-option-card.component.scss */ 44637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let MainOptionCardComponent = class MainOptionCardComponent {
};
MainOptionCardComponent.propDecorators = {
    option: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
MainOptionCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-main-option-card',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_main_option_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_main_option_card_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainOptionCardComponent);



/***/ }),

/***/ 70950:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/cards/order-card/order-card.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderCardComponent": () => (/* binding */ OrderCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_order_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./order-card.component.html */ 80716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/cafe/product.service */ 41575);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ 68927);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/iroha.service */ 49187);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 44298);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 47177);










(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__.pdfMake.vfs;
let OrderCardComponent = class OrderCardComponent {
    constructor(router, product, afs, ionicAuthService, iroha) {
        this.router = router;
        this.product = product;
        this.afs = afs;
        this.ionicAuthService = ionicAuthService;
        this.iroha = iroha;
        this.id = this.ionicAuthService.getUid();
    }
    goToCheckStatusUser(name, id, price, owner, ownerId) {
        this.product.orderName = name;
        this.product.orderId = id;
        this.product.price = price;
        this.product.owner = owner;
        this.product.ownerId = ownerId;
        this.router.navigate(['check-status-user']);
    }
    generatePdf(name, id, price, owner, ownerId, quantity, amountPaid, status, orderTime, deliverTime) {
        const documentDefinition = { content: 'Name : ' + name + '\nOrder ID : '
                + id + '\nPrice: RM ' + price + '\nPrice: RM ' + owner + '\nPrice: RM ' + ownerId + '\nPrice: RM '
                + quantity + '\nPrice: RM ' + amountPaid + '\nPrice: RM ' +
                status + '\nPrice: RM ' + orderTime + '\nPrice: RM ' + deliverTime };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default().createPdf(documentDefinition).open();
    }
};
OrderCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__.IrohaService }
];
OrderCardComponent.propDecorators = {
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
OrderCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-order-card',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_order_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], OrderCardComponent);



/***/ }),

/***/ 90214:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/cards/track-orders/track-orders.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackOrdersComponent": () => (/* binding */ TrackOrdersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_track_orders_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./track-orders.component.html */ 12577);
/* harmony import */ var _track_orders_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track-orders.component.scss */ 83470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/cafe/product.service */ 41575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ 68927);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/iroha.service */ 49187);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);










let TrackOrdersComponent = class TrackOrdersComponent {
    constructor(product, router, afs, ionicAuthService, iroha, alertController) {
        this.product = product;
        this.router = router;
        this.afs = afs;
        this.ionicAuthService = ionicAuthService;
        this.iroha = iroha;
        this.alertController = alertController;
        this.id = this.ionicAuthService.getUid();
    }
    ngOnInit() { }
    goToCheckStatusStore(name, id, price, user, status, userId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.product.orderName = name;
            this.product.orderId = id;
            this.product.price = price;
            this.product.user = user;
            this.product.status = status;
            this.product.userId = userId;
            yield this.product.changeStatus('status');
            yield this.router.navigate(['check-status-store']);
        });
    }
    cancelOrder(id, user, userId, paid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.afs.collection(`users/${(userId)}/activeOrders`).doc(id).delete();
            yield this.afs.collection(`trackOrders/${(this.id)}/activeOrders`).doc(id).delete();
            yield this.afs.collection(`trackOrders/${(this.id)}/allOrders`).doc(id).update({
                status: 'cancelled',
            });
            yield this.iroha.payment(user, 'refund', paid);
            yield this.showAlert('This order has been cancelled. Money has been refunded to the customer.');
            yield this.router.navigateByUrl('tabs/account', { replaceUrl: true });
        });
    }
    showAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Order cancelled.',
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
TrackOrdersComponent.ctorParameters = () => [
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_4__.IrohaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
TrackOrdersComponent.propDecorators = {
    trackOrder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
TrackOrdersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-track-orders',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_track_orders_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_track_orders_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrackOrdersComponent);



/***/ }),

/***/ 9535:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/cards/wallet-card/wallet-card.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletCardComponent": () => (/* binding */ WalletCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wallet_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./wallet-card.component.html */ 13340);
/* harmony import */ var _wallet_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-card.component.scss */ 89190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/iroha.service */ 49187);





let WalletCardComponent = class WalletCardComponent {
    constructor(iroha) {
        this.iroha = iroha;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.name = '';
        this.balance = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.childEvent.emit();
            this.name = this.iroha.wallet.name;
            this.balance = this.iroha.wallet.balance;
        });
    }
};
WalletCardComponent.ctorParameters = () => [
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_2__.IrohaService }
];
WalletCardComponent.propDecorators = {
    childEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
WalletCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-wallet-card',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wallet_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_wallet_card_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WalletCardComponent);



/***/ }),

/***/ 14862:
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS": () => (/* binding */ COMPONENTS),
/* harmony export */   "CARDS_COMPONENTS": () => (/* reexport safe */ _cards__WEBPACK_IMPORTED_MODULE_0__.CARDS_COMPONENTS),
/* harmony export */   "CartCardComponent": () => (/* reexport safe */ _cards__WEBPACK_IMPORTED_MODULE_0__.CartCardComponent),
/* harmony export */   "CheckoutCardComponent": () => (/* reexport safe */ _cards__WEBPACK_IMPORTED_MODULE_0__.CheckoutCardComponent),
/* harmony export */   "FoodCardComponent": () => (/* reexport safe */ _cards__WEBPACK_IMPORTED_MODULE_0__.FoodCardComponent),
/* harmony export */   "MainOptionCardComponent": () => (/* reexport safe */ _cards__WEBPACK_IMPORTED_MODULE_0__.MainOptionCardComponent),
/* harmony export */   "OrderCardComponent": () => (/* reexport safe */ _cards__WEBPACK_IMPORTED_MODULE_0__.OrderCardComponent),
/* harmony export */   "WalletCardComponent": () => (/* reexport safe */ _cards__WEBPACK_IMPORTED_MODULE_0__.WalletCardComponent)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ 28314);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ 57782);


const COMPONENTS = [..._cards__WEBPACK_IMPORTED_MODULE_0__.CARDS_COMPONENTS, ..._modal__WEBPACK_IMPORTED_MODULE_1__.MODAL_COMPONENTS];



/***/ }),

/***/ 57782:
/*!**************************************************!*\
  !*** ./src/app/shared/components/modal/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODAL_COMPONENTS": () => (/* binding */ MODAL_COMPONENTS),
/* harmony export */   "NoteComponent": () => (/* reexport safe */ _note_note_component__WEBPACK_IMPORTED_MODULE_0__.NoteComponent),
/* harmony export */   "StoreSalesComponent": () => (/* reexport safe */ _store_sales_store_sales_component__WEBPACK_IMPORTED_MODULE_1__.StoreSalesComponent)
/* harmony export */ });
/* harmony import */ var _note_note_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note/note.component */ 46059);
/* harmony import */ var _store_sales_store_sales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-sales/store-sales.component */ 39142);

const MODAL_COMPONENTS = [_note_note_component__WEBPACK_IMPORTED_MODULE_0__.NoteComponent];




/***/ }),

/***/ 46059:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/modal/note/note.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteComponent": () => (/* binding */ NoteComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_note_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./note.component.html */ 65686);
/* harmony import */ var _note_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note.component.scss */ 60413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/cafe/product.service */ 41575);






let NoteComponent = class NoteComponent {
    constructor(modalController, product, alertController) {
        this.modalController = modalController;
        this.product = product;
        this.alertController = alertController;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.newMsg = '';
    }
    ngOnInit() { }
    addNote() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.newMsg !== '' && this.newMsg.length > 63) {
                yield this.showAlert('Message too long.', 'Your message must not exceed 63 characters');
                yield this.back();
            }
            else {
                yield this.product.addNote(this.product.noteId, this.newMsg);
                yield this.back();
            }
        });
    }
    showAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
NoteComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
NoteComponent.propDecorators = {
    childEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
NoteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-note',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_note_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_note_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoteComponent);



/***/ }),

/***/ 39142:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/modal/store-sales/store-sales.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreSalesComponent": () => (/* binding */ StoreSalesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_store_sales_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./store-sales.component.html */ 93475);
/* harmony import */ var _store_sales_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-sales.component.scss */ 6886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ 60192);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/cafe/product.service */ 41575);






let StoreSalesComponent = class StoreSalesComponent {
    constructor(product) {
        this.product = product;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.holder = {};
    }
    ngOnInit() {
        this.showChart();
    }
    addSales() {
    }
    showChart() {
        const ctx = document.getElementById('yudhatp-chart').getContext('2d');
        const chart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, {
            type: 'doughnut',
            data: {
                labels: this.product.label,
                datasets: [{
                        label: 'This is chart',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        data: this.product.data,
                        borderWidth: 1
                    }]
            }
        });
    }
    back() {
        this.childEvent.emit();
    }
};
StoreSalesComponent.ctorParameters = () => [
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService }
];
StoreSalesComponent.propDecorators = {
    childEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
StoreSalesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-store-sales-component',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_store_sales_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_store_sales_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StoreSalesComponent);



/***/ }),

/***/ 54113:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule),
/* harmony export */   "CARDS_COMPONENTS": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.CARDS_COMPONENTS),
/* harmony export */   "COMPONENTS": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.COMPONENTS),
/* harmony export */   "CartCardComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.CartCardComponent),
/* harmony export */   "CheckoutCardComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.CheckoutCardComponent),
/* harmony export */   "FoodCardComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.FoodCardComponent),
/* harmony export */   "MainOptionCardComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.MainOptionCardComponent),
/* harmony export */   "OrderCardComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.OrderCardComponent),
/* harmony export */   "WalletCardComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.WalletCardComponent)
/* harmony export */ });
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ 12187);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ 14862);




/***/ }),

/***/ 12187:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 14862);






let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [..._components__WEBPACK_IMPORTED_MODULE_0__.COMPONENTS],
        exports: [..._components__WEBPACK_IMPORTED_MODULE_0__.COMPONENTS],
    })
], SharedModule);



/***/ }),

/***/ 41251:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCs6GRnuTKtNtaOX69OOVe9-OttRnvuEro',
        authDomain: 'chainfox-bae68.firebaseapp.com',
        projectId: 'chainfox-bae68',
        storageBucket: 'chainfox-bae68.appspot.com',
        messagingSenderId: '74998749627',
        appId: '1:74998749627:web:6623d7c62c0a04e8050c9e',
        measurementId: 'G-626FR1GTJM'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 3422:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 92014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 41251);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 36707);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));

(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__.defineCustomElements)(window);


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		65429,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		89115,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		83969,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		25882,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		34548,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		68751,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		430,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		48762,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		36232,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		82541,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		91446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		60298,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		29171,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		41502,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		88899,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		89396,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5194,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		69491,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		19420,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		40978,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		78860,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		11389,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		11526,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		51872,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		88040,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		76326,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		94614,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		94513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		81673,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		3596,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		77415,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		51391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		96219,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		37363,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		76266,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		38939,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		78906,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7743,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		21872,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		84541,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		84160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		31580,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		20530,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		71167,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		55869,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		6056,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		69082,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		79117,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		73789,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		86079,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		14838,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 24554:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/cards/checkout-card/checkout-card.component.scss ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3335:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/cards/fav-card/fav-card.component.scss ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.ion-col {\n  padding: 10px;\n}\n\n.ion-col img {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n.ion-col p {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.padding-left0 {\n  padding-left: 0 !important;\n}\n\n.padding-right0 {\n  padding-right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdi1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFPQTtFQUNFLDBCQUFBO0FBSkY7O0FBT0E7RUFDRSwyQkFBQTtBQUpGIiwiZmlsZSI6ImZhdi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tidG4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDI2cHg7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjNDM0MzQzO1xufVxuXG5cbi5pb24tY29sIHtcbiAgcGFkZGluZzogMTBweDtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICBoNiB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cblxuXG4ucGFkZGluZy1sZWZ0MCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4ucGFkZGluZy1yaWdodDAge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */";

/***/ }),

/***/ 44637:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/cards/main-option-card/main-option-card.component.scss ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".option-image-mask {\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tb3B0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrR0FBQTtBQUNGIiwiZmlsZSI6Im1haW4tb3B0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9uLWltYWdlLW1hc2sge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gYm90dG9tLFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSxcbiAgICByZ2JhKDAsIDAsIDAsIDAuNSksXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpXG4gICk7XG59XG4iXX0= */";

/***/ }),

/***/ 83470:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/cards/track-orders/track-orders.component.scss ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFjay1vcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 89190:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/cards/wallet-card/wallet-card.component.scss ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".no {\n  color: rgba(0, 0, 0, 0.66);\n  font-weight: bold;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJ3YWxsZXQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ubyB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42Nik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 60413:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/modal/note/note.component.scss ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 6px;\n  background: var(--ion-color-contrast);\n  resize: none;\n  margin-top: 0px;\n  --padding-start: 8px;\n}\n\n.titles {\n  padding: 0 1rem 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRiIsImZpbGUiOiJub3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTtcbiAgcmVzaXplOiBub25lO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xufVxuXG4udGl0bGVzIHtcbiAgcGFkZGluZzogMCAxcmVtIDAgMjBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 6886:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/modal/store-sales/store-sales.component.scss ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS1zYWxlcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 80950:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46601:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8623:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 7748:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 20273:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 85568:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 56619:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 77108:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3422)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map