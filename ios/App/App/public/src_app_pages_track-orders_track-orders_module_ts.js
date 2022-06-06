"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_track-orders_track-orders_module_ts"],{

/***/ 1437:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/track-orders/track-orders.page.html ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title color = \"primary\">Track Orders</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar animated=\"true\" debounce=\"800\" placeholder=\"Enter customer name\" show-cancel-button=\"focus\" (ionChange)=\"_ionChange($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"order-items\">\n    <ng-container *ngFor=\"let trackOrder of searchedItem\">\n      <div>\n        <app-track-orders [trackOrder]=\"trackOrder\"></app-track-orders>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 16715:
/*!*******************************************************************!*\
  !*** ./src/app/pages/track-orders/track-orders-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackOrdersPageRoutingModule": () => (/* binding */ TrackOrdersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _track_orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track-orders.page */ 59067);




const routes = [
    {
        path: '',
        component: _track_orders_page__WEBPACK_IMPORTED_MODULE_0__.TrackOrdersPage
    }
];
let TrackOrdersPageRoutingModule = class TrackOrdersPageRoutingModule {
};
TrackOrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrackOrdersPageRoutingModule);



/***/ }),

/***/ 19412:
/*!***********************************************************!*\
  !*** ./src/app/pages/track-orders/track-orders.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackOrdersPageModule": () => (/* binding */ TrackOrdersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _track_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track-orders-routing.module */ 16715);
/* harmony import */ var _track_orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track-orders.page */ 59067);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 54113);








let TrackOrdersPageModule = class TrackOrdersPageModule {
};
TrackOrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _track_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrackOrdersPageRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_track_orders_page__WEBPACK_IMPORTED_MODULE_1__.TrackOrdersPage]
    })
], TrackOrdersPageModule);



/***/ }),

/***/ 59067:
/*!*********************************************************!*\
  !*** ./src/app/pages/track-orders/track-orders.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackOrdersPage": () => (/* binding */ TrackOrdersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_2_2_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_track_orders_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./track-orders.page.html */ 1437);
/* harmony import */ var _track_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track-orders.page.scss */ 46000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _services_store_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store/product.service */ 86250);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);










let TrackOrdersPage = class TrackOrdersPage {
    constructor(router, ionicAuthService, afs, product, _firestore, menu) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this.afs = afs;
        this.product = product;
        this._firestore = _firestore;
        this.menu = menu;
        this.trackOrder = [];
        this.user = '';
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
            this.trackOrder = [];
            yield this.addItemsToOrder();
            this.searchedItem = this.trackOrder;
            yield this.product.setOrderStatus('status');
        });
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.trackOrder = [];
            yield this.addItemsToOrder();
            this.searchedItem = this.trackOrder;
            yield this.product.setOrderStatus('status');
            setTimeout(() => {
                event.target.complete();
            }, 1000);
        });
    }
    _ionChange(event) {
        const val = event.target.value;
        this.searchedItem = this.trackOrder;
        if (val && val.trim() !== '') {
            this.searchedItem = this.searchedItem.filter((item) => (item.user.toLowerCase().indexOf(val.toLowerCase()) > -1));
        }
        // this.search.getInputElement().then(item => console.log(item))
    }
    addItemsToOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(this._firestore, `trackOrders/${(this.id)}/activeOrders`), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.orderBy)('deliverTime', 'desc'));
            const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(q);
            querySnapshot.forEach((docs) => {
                console.log(docs.id, ' => ', docs.data());
                this.trackOrder.push({
                    name: docs.data().itemName,
                    user: docs.data().user,
                    userId: docs.data().userId,
                    price: docs.data().price,
                    time: docs.data().orderTime.toDate(),
                    id: docs.data().orderId,
                    status: docs.data().status,
                    amountPaid: docs.data().amountPaid,
                    deliverTime: docs.data().deliverTime,
                    message: docs.data().message
                });
            });
        });
    }
    back() {
        this.router.navigateByUrl('tabs/account', { replaceUrl: true });
    }
};
TrackOrdersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _services_store_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.Firestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController }
];
TrackOrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-track-orders-page',
        template: _Users_spacetimer_Documents_chain_fox_master_2_2_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_track_orders_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_track_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrackOrdersPage);



/***/ }),

/***/ 46000:
/*!***********************************************************!*\
  !*** ./src/app/pages/track-orders/track-orders.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.order-items ion-card {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n}\n\n.order-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.order-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.order-items ion-card ion-card-content .item-img img {\n  object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.order-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #434343;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #919191;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: var(--ion-color-primary);\n}\n\n.order-items ion-card ion-card-content .item-info .main-button {\n  --border-radius: 5px;\n  margin: 10px 0 0 0;\n}\n\n.order-items ion-card ion-card-content .item-info .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrLW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBQU47O0FBRU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUVRO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0FBQVY7O0FBS1E7RUFDRSxlQUFBO0FBSFY7O0FBTVE7RUFDRSxjQUFBO0FBSlY7O0FBTVE7RUFDRSxjQUFBO0FBSlY7O0FBTVE7RUFDRSwrQkFBQTtBQUpWOztBQU9RO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQUxWOztBQVFRO0VBQ0UsMkJBQUE7QUFOViIsImZpbGUiOiJ0cmFjay1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tidG4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDI2cHg7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjNDM0MzQzO1xufVxuXG4ub3JkZXItaXRlbXMge1xuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5pdGVtLWltZyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLml0ZW0taW5mbyB7XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICAgICAgfVxuICAgICAgICBwOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgY29sb3I6ICM5MTkxOTE7XG4gICAgICAgIH1cbiAgICAgICAgcDpudGgtY2hpbGQoMykge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi1idXR0b24ge1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLWJ1dHRvbjo6YWZ0ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_track-orders_track-orders_module_ts.js.map