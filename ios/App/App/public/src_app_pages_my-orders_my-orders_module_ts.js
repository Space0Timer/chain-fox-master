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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>My Orders</ion-title>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"!isEmpty\">\n    <ion-searchbar animated=\"true\" debounce=\"800\" placeholder=\"Enter item name\" show-cancel-button=\"focus\" (ionChange)=\"_ionChange($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"order-items\" *ngIf=\"!isEmpty\">\n    <ng-container *ngFor=\"let order of searchedItem\">\n      <div>\n        <app-order-card [order]=\"order\"></app-order-card>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-orders-routing.module */ 53843);
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-orders.page */ 11498);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 54113);








let MyOrdersPageModule = class MyOrdersPageModule {
};
MyOrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyOrdersPageRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_1__.MyOrdersPage]
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
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_2_2_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_orders_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./my-orders.page.html */ 68738);
/* harmony import */ var _my_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-orders.page.scss */ 61106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _services_store_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store/product.service */ 86250);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);










let MyOrdersPage = class MyOrdersPage {
    constructor(router, ionicAuthService, afs, product, _firestore, menu) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this.afs = afs;
        this.product = product;
        this._firestore = _firestore;
        this.menu = menu;
        this.order = [];
        this.owner = '';
        this.isEmpty = true;
        this.id = this.ionicAuthService.getUid();
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.menu.enable(true);
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.order = [];
            yield this.addItemsToOrder();
            this.searchedItem = this.order;
            this.product.orderHistory = false;
        });
    }
    _ionChange(event) {
        const val = event.target.value;
        this.searchedItem = this.order;
        if (val && val.trim() !== '') {
            this.searchedItem = this.searchedItem.filter((item) => (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
        }
        // this.search.getInputElement().then(item => console.log(item))
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
                    quantity: docs.data().quantity,
                    message: docs.data().message
                });
                this.isEmpty = false;
            });
        });
    }
    back() {
        this.router.navigateByUrl('tabs/account', { replaceUrl: true });
    }
    ngOnInit() {
    }
};
MyOrdersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _services_store_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.Firestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController }
];
MyOrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-my-orders',
        template: _Users_spacetimer_Documents_chain_fox_master_2_2_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_orders_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyOrdersPage);



/***/ }),

/***/ 61106:
/*!*****************************************************!*\
  !*** ./src/app/pages/my-orders/my-orders.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.order-items ion-card {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n}\n\n.order-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.order-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.order-items ion-card ion-card-content .item-img img {\n  object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.order-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #434343;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #919191;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: var(--ion-color-primary);\n}\n\n.order-items ion-card ion-card-content .item-info .main-button {\n  --border-radius: 5px;\n  margin: 10px 0 0 0;\n}\n\n.order-items ion-card ion-card-content .item-info .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFSOztBQUVRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQVo7O0FBRVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFoQjs7QUFFZ0I7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7QUFBcEI7O0FBS2dCO0VBQ0ksZUFBQTtBQUhwQjs7QUFNZ0I7RUFDSSxjQUFBO0FBSnBCOztBQU1nQjtFQUNJLGNBQUE7QUFKcEI7O0FBTWdCO0VBQ0ksK0JBQUE7QUFKcEI7O0FBT2dCO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQUxwQjs7QUFRZ0I7RUFDSSwyQkFBQTtBQU5wQiIsImZpbGUiOiJteS1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tidG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDI2cHg7XG59XG5cbi50aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogIzQzNDM0Mztcbn1cblxuLm9yZGVyLWl0ZW1zIHtcbiAgICBpb24tY2FyZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAuaXRlbS1pbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW0taW5mbyB7XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWFpbi1idXR0b246OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-orders_my-orders_module_ts.js.map