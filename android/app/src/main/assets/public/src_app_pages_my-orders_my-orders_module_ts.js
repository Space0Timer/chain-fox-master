"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_my-orders_my-orders_module_ts"],{

/***/ 68738:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/my-orders/my-orders.page.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>My Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ng-container *ngIf=\"isEmpty\">\n    <app-error></app-error>\n  </ng-container>\n  <div class=\"order-items\" *ngIf=\"!isEmpty\">\n    <ng-container *ngFor=\"let order of order\">\n      <div>\n        <app-order-card [order]=\"order\"></app-order-card>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 24868:
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/screens/error/error.component.html ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div [style.background-image]=\"'url(' + model?.background + ')'\">\n  <ion-grid [class]=\"model?.centerAlign ? 'ion-text-center' : ''\">\n    <ion-row>\n      <ion-col [offset]=\"!model?.centerAlign ? 1 : 0\">\n        <ion-label *ngIf=\"model?.title\" [color]=\"model?.titleColor ? model.titleColor : 'light'\">\n          {{model?.title}}\n        </ion-label>\n        <p class=\"subtitle\" *ngIf=\"model?.subtitle\">\n          <ion-text [color]=\"model?.color ? model.color : 'light'\">\n            {{model?.subtitle}}\n          </ion-text>\n        </p>\n        <p class=\"description\" *ngIf=\"model?.description\">\n          <ion-text [color]=\"model?.color ? model.color : 'light'\">\n            {{model?.description}}\n          </ion-text>\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"model?.button\" class=\"ion-margin-top\">\n      <ion-col [offset]=\"!model?.centerAlign ? 1 : 0\">\n        <ion-button shape=\"round\" [color]=\"model?.buttonColor ? model.buttonColor : 'primary'\">\n          <ion-text\n            [class]=\"model?.centerAlign ? 'ion-margin-horizontal ion-padding-horizontal' : ''\">\n            {{model?.button}}\n          </ion-text>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n");

/***/ }),

/***/ 53843:
/*!*************************************************************!*\
  !*** ./src/app/pages/my-orders/my-orders-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyOrdersPageRoutingModule": () => (/* binding */ MyOrdersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-orders.page */ 11498);




const routes = [
    {
        path: '',
        component: _my_orders_page__WEBPACK_IMPORTED_MODULE_0__.MyOrdersPage
    }
];
let MyOrdersPageRoutingModule = class MyOrdersPageRoutingModule {
};
MyOrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyOrdersPageRoutingModule);



/***/ }),

/***/ 80077:
/*!*****************************************************!*\
  !*** ./src/app/pages/my-orders/my-orders.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyOrdersPageModule": () => (/* binding */ MyOrdersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-orders-routing.module */ 53843);
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-orders.page */ 11498);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 54113);
/* harmony import */ var _shared_components_screens_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/screens/error/error.component */ 75482);









let MyOrdersPageModule = class MyOrdersPageModule {
};
MyOrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyOrdersPageRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_1__.MyOrdersPage, _shared_components_screens_error_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent]
    })
], MyOrdersPageModule);



/***/ }),

/***/ 11498:
/*!***************************************************!*\
  !*** ./src/app/pages/my-orders/my-orders.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyOrdersPage": () => (/* binding */ MyOrdersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_orders_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./my-orders.page.html */ 68738);
/* harmony import */ var _my_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-orders.page.scss */ 20759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cafe/product.service */ 41575);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);









let MyOrdersPage = class MyOrdersPage {
    constructor(router, ionicAuthService, afs, product, _firestore) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this.afs = afs;
        this.product = product;
        this._firestore = _firestore;
        this.order = [];
        this.owner = '';
        this.isEmpty = true;
        this.id = this.ionicAuthService.getUid();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.addItemsToOrder();
        });
    }
    addItemsToOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(this._firestore, `users/${(this.id)}/activeOrders`), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.orderBy)('deliverTime', 'desc'));
            const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(q);
            querySnapshot.forEach((docs) => {
                console.log(docs.id, ' => ', docs.data());
                this.order.push({
                    name: docs.data().itemName,
                    owner: docs.data().owner,
                    price: docs.data().price,
                    image: docs.data().imageUrl,
                    id: docs.data().orderId,
                    itemId: docs.data().itemId,
                    status: docs.data().status,
                    ownerId: docs.data().ownerId,
                    amountPaid: docs.data().amountPaid,
                    deliverTime: docs.data().deliverTime,
                    orderTime: docs.data().orderTime,
                    quantity: docs.data().quantity
                });
                this.isEmpty = false;
            });
        });
    }
    back() {
        this.router.navigateByUrl('tabs/account', { replaceUrl: true });
    }
};
MyOrdersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.Firestore }
];
MyOrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-my-orders',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_orders_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyOrdersPage);



/***/ }),

/***/ 75482:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/screens/error/error.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_error_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./error.component.html */ 24868);
/* harmony import */ var _error_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.component.scss */ 2343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let ErrorComponent = class ErrorComponent {
    constructor() {
        this.model = {};
        this.screens = [];
        this.index = 0;
    }
    ngOnInit() {
        this.screens = [
            { background: 'assets/imgs/1.png', title: 'Oops!..', subtitle: 'Something wrong with your', description: "connection, Please try again.", titleColor: 'light', color: 'medium', button: 'RETRY', buttonColor: 'light' },
            { background: 'assets/imgs/2.png', title: 'Oops!..', subtitle: 'Looks like the file that you are looking for is', description: "missing...", titleColor: 'light', color: 'medium', button: 'RETRY', buttonColor: 'light' },
            { background: 'assets/imgs/3.png', title: 'Hmmm...', subtitle: 'Something is wrong here...', description: "We'll fix it soon!", titleColor: 'light', color: 'light', button: 'HOME', buttonColor: 'light' },
            { background: 'assets/imgs/4.png', title: 'Error!', subtitle: 'Something went wrong,', description: "Please try again later", titleColor: 'dark', color: 'medium', centerAlign: true, button: 'RETRY', buttonColor: 'light' },
            { background: 'assets/imgs/5.png', title: 'Camera Access', subtitle: 'Please allow access to your', description: "camera to take photos", titleColor: 'dark', color: 'medium', centerAlign: true, button: 'ALLOW', buttonColor: 'danger' },
            { background: 'assets/imgs/6.png', title: 'Connection Failed', subtitle: 'Could not connect to the network', description: "Please check & try again.", titleColor: 'dark', color: 'medium', centerAlign: true, button: 'RETRY', buttonColor: 'success' },
            { background: 'assets/imgs/7.png', title: 'No Results', subtitle: 'Sorry, there are no results for', description: "this search, Please try another phrase", titleColor: 'light', color: 'light', centerAlign: true, button: 'SEARCH', buttonColor: 'light' },
            { background: 'assets/imgs/8.png', title: 'Location Access', subtitle: 'Please enable location access', description: "to use this feature", titleColor: 'dark', color: 'medium', centerAlign: true, button: 'ENABLE', buttonColor: 'danger' },
            { background: 'assets/imgs/9.png', title: 'Dead End', subtitle: 'Oops! The page you are looking', description: "for doesn't exist...", titleColor: 'light', color: 'light', button: 'HOME', buttonColor: 'light' },
            { background: 'assets/imgs/10.png', title: 'You\'re Offline', subtitle: 'No internet connection, please try', description: "restarting your router...", titleColor: 'dark', color: 'dark', centerAlign: true, button: 'RETRY', buttonColor: 'light' },
            { background: 'assets/imgs/11.png', title: 'Payment Failed', subtitle: 'Your card was rejected by the vendor', description: "Please try again.", titleColor: 'dark', color: 'medium', centerAlign: true, button: 'RETRY', buttonColor: 'danger' },
            { background: 'assets/imgs/12.png', title: 'No Connection', subtitle: 'Your internet connection was', description: "interrupted, Please retry.", titleColor: 'dark', color: 'medium', button: 'RETRY', buttonColor: 'dark' },
        ];
        this.model = this.screens[this.index];
        this.index++;
        this.autoplayScreens();
    }
    autoplayScreens() {
        if (this.index == this.screens.length)
            this.index = 0;
        setTimeout(() => {
            this.model = this.screens[this.index];
            this.index++;
            this.autoplayScreens();
        }, 5000);
    }
};
ErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-error',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_error_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ErrorComponent);



/***/ }),

/***/ 20759:
/*!*****************************************************!*\
  !*** ./src/app/pages/my-orders/my-orders.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.order-items ion-card {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n}\n\n.order-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.order-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.order-items ion-card ion-card-content .item-img img {\n  object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.order-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #434343;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #919191;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: var(--ion-color-primary);\n}\n\n.order-items ion-card ion-card-content .item-info .main-button {\n  --border-radius: 5px;\n  margin: 10px 0 0 0;\n}\n\n.order-items ion-card ion-card-content .item-info .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFSOztBQUVRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQVo7O0FBRVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFoQjs7QUFFZ0I7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7QUFBcEI7O0FBS2dCO0VBQ0ksZUFBQTtBQUhwQjs7QUFNZ0I7RUFDSSxjQUFBO0FBSnBCOztBQU1nQjtFQUNJLGNBQUE7QUFKcEI7O0FBTWdCO0VBQ0ksK0JBQUE7QUFKcEI7O0FBT2dCO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQUxwQjs7QUFRZ0I7RUFDSSwyQkFBQTtBQU5wQiIsImZpbGUiOiJteS1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tidG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDI2cHg7XG59XG5cbi50aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogIzQzNDM0Mztcbn1cblxuLm9yZGVyLWl0ZW1zIHtcbiAgICBpb24tY2FyZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAuaXRlbS1pbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW0taW5mbyB7XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWFpbi1idXR0b246OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 2343:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/screens/error/error.component.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "div {\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100%;\n}\ndiv ion-grid {\n  transform: translateY(60vh);\n}\ndiv ion-grid ion-row ion-col ion-label {\n  font-size: 1.8rem;\n  font-weight: bold;\n}\ndiv ion-grid ion-row ion-col p {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\ndiv ion-grid ion-row ion-col p.subtitle {\n  margin-top: 4vh !important;\n  margin-bottom: 8px !important;\n}\ndiv ion-grid ion-row ion-col p.description {\n  margin-top: 8px !important;\n}\ndiv ion-grid ion-row ion-col ion-button {\n  --box-shadow: -1px 11px 13px -6px rgb(87, 86, 86);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsMkJBQUE7QUFFSjtBQUNRO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUNWO0FBQ1E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQ1Y7QUFDUTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7QUFDVjtBQUNRO0VBQ0UsMEJBQUE7QUFDVjtBQUNRO0VBQ0UsaURBQUE7QUFDViIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgaW9uLWdyaWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MHZoKTtcbiAgICBpb24tcm93IHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICAgICAgcC5zdWJ0aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHZoICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgLS1ib3gtc2hhZG93OiAtMXB4IDExcHggMTNweCAtNnB4IHJnYig4NywgODYsIDg2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-orders_my-orders_module_ts.js.map