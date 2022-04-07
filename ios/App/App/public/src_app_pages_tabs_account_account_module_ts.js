"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_account_account_module_ts"],{

/***/ 64010:
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tabs/account/account.page.html ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click) = \"qrCode()\">\n        <ion-icon name=\"qr-code\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"title\">\n        <img style=\"height: 30px\" src='assets/header/chainfoxaccount.png'>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"chat()\">\n        <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"logOut()\">\n        <ion-icon name=\"lock-closed\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid class=\"ion-padding-horizontal\">\n    <ion-row class=\"ion-align-items-center ion-margin-top\">\n      <ion-col size=\"6\" *ngFor=\"let category of categories\" class=\"ion-text-center\">\n        <ion-card color=\"light\" (click)=\"getRoute(category?.id)\">\n          <ion-card-header>\n            <ion-icon name=\"{{category?.icon}}\"></ion-icon>\n            <ion-card-title >{{category?.name}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n</ion-content>\n");

/***/ }),

/***/ 78885:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/account/account-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 13481);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 83755:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/account/account.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 78885);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 13481);







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage]
    })
], AccountPageModule);



/***/ }),

/***/ 13481:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_account_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./account.page.html */ 64010);
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss */ 69424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 68927);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/iroha.service */ 49187);







let AccountPage = class AccountPage {
    constructor(router, ionicAuthService, iroha) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this.iroha = iroha;
        this.successMsg = '';
        this.errorMsg = '';
        this.categories = [];
        this.allRestaurants = [];
        this.restaurants = [];
    }
    chat() {
        this.router.navigate(['chat-list']);
    }
    logOut() {
        this.ionicAuthService.logout()
            .then((response) => {
            this.errorMsg = '';
            this.successMsg = 'Logout successful.';
            this.goToLogin();
        }, error => {
            this.errorMsg = error.message;
            this.successMsg = '';
        });
    }
    goToLogin() {
        this.router.navigate(['auth-screen']);
    }
    qrCode() {
        this.router.navigate(['qr-code']);
    }
    ngOnInit() {
        this.categories = [
            { id: 'my-cart', name: 'My Cart', icon: 'cart-outline' },
            { id: 'my-orders', name: 'My Orders', icon: 'bag-handle-outline' },
            { id: 'favourites', name: 'Favourites', icon: 'heart-outline' },
            { id: 'order-history', name: 'Order History', icon: 'receipt-outline' },
            { id: 'start-selling', name: 'Setup Store', icon: 'storefront-outline' },
            { id: 'update-store', name: 'Update Store', icon: 'construct-outline' },
            { id: 'track-sales', name: 'Track Sales', icon: 'cash-outline' },
            { id: 'track-orders', name: 'Track Orders', icon: 'file-tray-full-outline' },
        ];
    }
    getRoute(route) {
        this.router.navigate([route]);
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__.IrohaService }
];
AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-account',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_account_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountPage);



/***/ }),

/***/ 69424:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.scss ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\nion-content ion-input {\n  font-size: 1.2rem;\n}\n\nion-content ion-icon {\n  zoom: 1.8;\n}\n\nion-content ion-card {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 14vh;\n  margin: auto;\n  box-shadow: none;\n  border-radius: 16px;\n}\n\nion-content ion-card ion-card-header {\n  height: 100%;\n}\n\nion-content ion-card ion-card-header ion-card-title {\n  font-size: 1rem;\n  transform: translateY(2.5vh);\n}\n\nion-content ion-list {\n  background: transparent;\n}\n\nion-content ion-list ion-item-group {\n  margin-bottom: 2vh;\n}\n\n.transformCenter {\n  transform: translateY(35vh);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBR0U7RUFDRSxpQkFBQTtBQUFKOztBQUVFO0VBQ0UsU0FBQTtBQUFKOztBQUdFO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBRUk7RUFDRSxZQUFBO0FBQU47O0FBQ007RUFDRSxlQUFBO0VBQ0EsNEJBQUE7QUFDUjs7QUFHRTtFQUNFLHVCQUFBO0FBREo7O0FBRUk7RUFDRSxrQkFBQTtBQUFOOztBQUtBO0VBQ0UsMkJBQUE7QUFGRiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBpb24taW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIGlvbi1pY29uIHtcbiAgICB6b29tOiAxLjg7XG5cbiAgfVxuICBpb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDE0dmg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjV2aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBpb24taXRlbS1ncm91cCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAydmg7XG4gICAgfVxuICB9XG59XG5cbi50cmFuc2Zvcm1DZW50ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzV2aCk7XG59XG5cblxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_account_account_module_ts.js.map