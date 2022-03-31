"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_order-history_order-history_module_ts"],{

/***/ 16295:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/order-history/order-history.page.html ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"title\">My Orders</h1>\n\n  <div class=\"order-items\">\n    <ng-container *ngFor=\"let order of order\">\n      <div>\n        <app-order-card [order]=\"order\"></app-order-card>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 31166:
/*!*********************************************************************!*\
  !*** ./src/app/pages/order-history/order-history-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPageRoutingModule": () => (/* binding */ OrderHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-history.page */ 78871);




const routes = [
    {
        path: '',
        component: _order_history_page__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryPage
    }
];
let OrderHistoryPageRoutingModule = class OrderHistoryPageRoutingModule {
};
OrderHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderHistoryPageRoutingModule);



/***/ }),

/***/ 44065:
/*!*************************************************************!*\
  !*** ./src/app/pages/order-history/order-history.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPageModule": () => (/* binding */ OrderHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _order_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-history-routing.module */ 31166);
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-history.page */ 78871);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 54113);








let OrderHistoryPageModule = class OrderHistoryPageModule {
};
OrderHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _order_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryPageRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_1__.OrderHistoryPage]
    })
], OrderHistoryPageModule);



/***/ }),

/***/ 78871:
/*!***********************************************************!*\
  !*** ./src/app/pages/order-history/order-history.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPage": () => (/* binding */ OrderHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_order_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./order-history.page.html */ 16295);
/* harmony import */ var _order_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-history.page.scss */ 98116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cafe/product.service */ 41575);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);









let OrderHistoryPage = class OrderHistoryPage {
    constructor(router, ionicAuthService, afs, product, _firestore) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this.afs = afs;
        this.product = product;
        this._firestore = _firestore;
        this.order = [];
        this.owner = '';
        this.id = this.ionicAuthService.getUid();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.addItemsToOrder();
        });
    }
    addItemsToOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(this._firestore, `users/${(this.id)}/allOrders`);
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
                    ownerId: docs.data().ownerId,
                    status: docs.data().status,
                    amountPaid: docs.data().amountPaid,
                    deliverTime: docs.data().deliverTime,
                    orderTime: docs.data().orderTime,
                    quantity: docs.data().quantity
                });
            });
        });
    }
    back() {
        this.router.navigateByUrl('tabs/account', { replaceUrl: true });
    }
};
OrderHistoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.Firestore }
];
OrderHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-my-orders',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_order_history_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_order_history_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrderHistoryPage);



/***/ }),

/***/ 98116:
/*!*************************************************************!*\
  !*** ./src/app/pages/order-history/order-history.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.order-items ion-card {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n}\n\n.order-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.order-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.order-items ion-card ion-card-content .item-img img {\n  object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.order-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #434343;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #919191;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: var(--ion-color-primary);\n}\n\n.order-items ion-card ion-card-content .item-info .main-button {\n  --border-radius: 5px;\n  margin: 10px 0 0 0;\n}\n\n.order-items ion-card ion-card-content .item-info .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFHSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBUjs7QUFFUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUFaOztBQUVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBaEI7O0FBRWdCO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0FBQXBCOztBQUtnQjtFQUNJLGVBQUE7QUFIcEI7O0FBTWdCO0VBQ0ksY0FBQTtBQUpwQjs7QUFNZ0I7RUFDSSxjQUFBO0FBSnBCOztBQU1nQjtFQUNJLCtCQUFBO0FBSnBCOztBQU9nQjtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFMcEI7O0FBUWdCO0VBQ0ksMkJBQUE7QUFOcEIiLCJmaWxlIjoib3JkZXItaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjZweDtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiAjNDM0MzQzO1xufVxuXG4ub3JkZXItaXRlbXMge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5pdGVtLWltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXRlbS1pbmZvIHtcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5MTkxOTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWFpbi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tYWluLWJ1dHRvbjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_order-history_order-history_module_ts.js.map