"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_home_list_list_module_ts"],{

/***/ 86401:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tabs/home/list/list.page.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Transaction History\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"back()\" color=\"primary\" slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ng-container *ngFor=\"let transactions of transactions\">\n    <div>\n      <ion-list>\n      <app-transactions [transactions]=\"transactions\"></app-transactions>\n      </ion-list>\n    </div>\n  </ng-container>\n</ion-content>\n\n");

/***/ }),

/***/ 80706:
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/cards/transactions/transactions.component.html ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n  <ion-item lines=\"none\">\n    <ion-label size=\"large\" class=\"ion-text-wrap\" (click)=\"openTransactionModal(transactions.message)\">\n      <b>{{transactions.from}} to {{transactions.to}}</b>\n      <p>\n        {{transactions?.date}}\n      </p>\n    </ion-label>\n    <ion-text slot=\"end\" [color]=\"transactions.from!=='You' ? 'success' : 'danger'\">RM {{transactions?.amount}}</ion-text>\n  </ion-item>\n");

/***/ }),

/***/ 33772:
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/modal/transaction-details/transaction-details.component.html ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-text>Close</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-row style=\"padding-left: 0\">\n      <ion-col size=\"10\">\n        <ion-text  color=\"primary\" style=\"font-size: 26px; font-weight: bold\">Transaction Details</ion-text>\n      </ion-col>\n    </ion-row>\n  <div class=\"ion-margin-horizontal\">\n    <ion-grid>\n      <ion-row><ion-col>{{'Date'}}:</ion-col><ion-col>{{this.iroha.transactionDate}}</ion-col></ion-row>\n      <ion-row><ion-col>{{'From'}}:</ion-col><ion-col>{{this.iroha.transactionFrom}}</ion-col></ion-row>\n      <ion-row><ion-col>{{'To'}}:</ion-col><ion-col>{{this.iroha.transactionTo}}</ion-col></ion-row>\n      <ion-row><ion-col>{{'Amount'}}:</ion-col><ion-col>{{this.iroha.transactionAmount}}</ion-col></ion-row>\n      <ion-row><ion-col>{{'Message'}}:</ion-col><ion-col>{{this.iroha.transactionMsg}}</ion-col></ion-row>\n    </ion-grid>\n  </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 30391:
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs/home/list/list.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageModule": () => (/* binding */ ListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page */ 23067);
/* harmony import */ var _shared_components_cards_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/cards/transactions/transactions.component */ 18069);








let ListPageModule = class ListPageModule {
};
ListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([
                {
                    path: '',
                    component: _list_page__WEBPACK_IMPORTED_MODULE_0__.ListPage
                }
            ])
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_0__.ListPage, _shared_components_cards_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_1__.TransactionsComponent]
    })
], ListPageModule);



/***/ }),

/***/ 23067:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/home/list/list.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPage": () => (/* binding */ ListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list.page.html */ 86401);
/* harmony import */ var _list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page.scss */ 61525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ 68927);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/iroha.service */ 49187);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 26039);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);










let ListPage = class ListPage {
    constructor(router, ionicAuthService, _firestore, iroha, menu) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this._firestore = _firestore;
        this.iroha = iroha;
        this.menu = menu;
        this.transactions = [];
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.menu.enable(true);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.iroha.getTransactions();
            yield this.getList();
        });
    }
    getList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.iroha.txs.forEach(c => {
                this.transactions.push({
                    date: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(c.date), 'yyyy-MM-dd HH:mm'),
                    message: c.message,
                    currency: c.currency,
                    amount: c.amount,
                    from: c.from,
                    to: c.to,
                });
            });
        });
    }
    back() {
        this.router.navigateByUrl('/tabs', { replaceUrl: true });
    }
};
ListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.Firestore },
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__.IrohaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController }
];
ListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-list',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListPage);



/***/ }),

/***/ 18069:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/cards/transactions/transactions.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsComponent": () => (/* binding */ TransactionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_transactions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./transactions.component.html */ 80706);
/* harmony import */ var _transactions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.component.scss */ 21900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _modal_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal/transaction-details/transaction-details.component */ 8960);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/iroha.service */ 49187);







let TransactionsComponent = class TransactionsComponent {
    constructor(modalCtrl, routerOutlet, iroha) {
        this.modalCtrl = modalCtrl;
        this.routerOutlet = routerOutlet;
        this.iroha = iroha;
    }
    ngOnInit() { }
    openTransactionModal(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.setTransactionDetails(msg);
            const modal = yield this.modalCtrl.create({
                component: _modal_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_2__.TransactionDetailsComponent,
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
            });
            return yield modal.present();
        });
    }
    setTransactionDetails(msg) {
        this.iroha.transactionMsg = msg;
        this.iroha.transactionFrom = this.transactions.from;
        this.iroha.transactionTo = this.transactions.to;
        this.iroha.transactionAmount = this.transactions.amount;
        this.iroha.transactionDate = this.transactions.date;
    }
};
TransactionsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRouterOutlet },
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__.IrohaService }
];
TransactionsComponent.propDecorators = {
    transactions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
TransactionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-transactions',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_transactions_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_transactions_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransactionsComponent);



/***/ }),

/***/ 8960:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/modal/transaction-details/transaction-details.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionDetailsComponent": () => (/* binding */ TransactionDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_transaction_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./transaction-details.component.html */ 33772);
/* harmony import */ var _transaction_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction-details.component.scss */ 42834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/iroha.service */ 49187);






let TransactionDetailsComponent = class TransactionDetailsComponent {
    constructor(modalController, iroha) {
        this.modalController = modalController;
        this.iroha = iroha;
    }
    ngOnInit() { }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
TransactionDetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_2__.IrohaService }
];
TransactionDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-transaction-details',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_transaction_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_transaction_details_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransactionDetailsComponent);



/***/ }),

/***/ 61525:
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs/home/list/list.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 21900:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/cards/transactions/transactions.component.scss ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 42834:
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/modal/transaction-details/transaction-details.component.scss ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_home_list_list_module_ts.js.map