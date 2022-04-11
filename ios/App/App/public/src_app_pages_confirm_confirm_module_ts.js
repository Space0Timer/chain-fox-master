"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_confirm_confirm_module_ts"],{

/***/ 36863:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/confirm/confirm.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <div *ngIf=\"showFallback\" class=\"ion-padding\">\n    <ion-button (click)=\"unlock()\" expand=\"block\" class=\"main-button\">\n      <ion-text class = ion-margin-horizontal >Confirm Payment</ion-text>\n      <ion-icon class = ion-margin-horizontal name=\"wallet-outline\"></ion-icon>\n    </ion-button>\n  </div>\n  <ion-col size=\"10\">\n    <ion-text  color=\"primary\" style=\"font-size: 26px; font-weight: bold\">Order Details</ion-text>\n  </ion-col>\n  <div class=\"cart-items\">\n    <ng-container *ngFor=\"let checkout of checkout\">\n      <div>\n        <app-checkout-card [checkout]=\"checkout\"></app-checkout-card>\n      </div>\n    </ng-container>\n  </div>\n\n  <hr>\n\n  <div class=\"cart-total\">\n    <ion-item lines=\"none\">\n      <ion-label>Total</ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-right\">RM {{this.total}}</ion-label>\n    </ion-item>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar color = \"secondary\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        Timeout in: {{( logoutTimer | async )*1000| date: 'mm:ss'}}\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ 99469:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/definitions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 94058:
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 24249);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 99469);

const App = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('App', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_app_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 21132)).then(m => new m.AppWeb()),
});




/***/ }),

/***/ 16953:
/*!*********************************************************!*\
  !*** ./src/app/pages/confirm/confirm-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPageRoutingModule": () => (/* binding */ ConfirmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm.page */ 23988);




const routes = [
    {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmPage
    }
];
let ConfirmPageRoutingModule = class ConfirmPageRoutingModule {
};
ConfirmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmPageRoutingModule);



/***/ }),

/***/ 73491:
/*!*************************************************!*\
  !*** ./src/app/pages/confirm/confirm.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPageModule": () => (/* binding */ ConfirmPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-routing.module */ 16953);
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm.page */ 23988);
/* harmony import */ var _pin_code_pin_code_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pin-code/pin-code.module */ 14596);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ 54113);









let ConfirmPageModule = class ConfirmPageModule {
};
ConfirmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmPageRoutingModule,
            _pin_code_pin_code_module__WEBPACK_IMPORTED_MODULE_2__.PinCodePageModule,
            _shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmPage]
    })
], ConfirmPageModule);



/***/ }),

/***/ 23988:
/*!***********************************************!*\
  !*** ./src/app/pages/confirm/confirm.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPage": () => (/* binding */ ConfirmPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confirm_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./confirm.page.html */ 36863);
/* harmony import */ var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm.page.scss */ 80919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_auth_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/access.service */ 47766);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/iroha.service */ 49187);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cafe/product.service */ 41575);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/compat/app */ 50947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! capacitor-native-biometric */ 41380);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 44298);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 47177);



/* eslint-disable */













(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_8___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_9__.pdfMake.vfs;
let ConfirmPage = class ConfirmPage {
    constructor(access, router, iroha, ionicAuthService, _firestore, product, afs, alertController, loadingController, modalCtrl, routerOutlet, menu) {
        this.access = access;
        this.router = router;
        this.iroha = iroha;
        this.ionicAuthService = ionicAuthService;
        this._firestore = _firestore;
        this.product = product;
        this.afs = afs;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.routerOutlet = routerOutlet;
        this.menu = menu;
        this.logoutTimer = this.access.logoutTimer.asObservable();
        this.owner = '';
        this.total = 0;
        this.msg = '';
        this.paymentDetails = '';
        this.deliverTime = '';
        this.hasBiometricAuth = false;
        this.showFallback = true;
        this.checkout = [];
        this.id = this.ionicAuthService.getUid();
        this.options = [];
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.menu.enable(true);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.addItemsToCart();
        });
    }
    unlock() {
        capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_7__.NativeBiometric.isAvailable().then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const isAvailable = result.isAvailable;
            const isFaceId = result.biometryType == capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_7__.BiometryType.FACE_ID;
            if (isAvailable) {
                // Get user's credentials
                capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_7__.NativeBiometric.getCredentials({
                    server: "chainfox",
                }).then((credentials) => {
                    // Authenticate using biometrics before logging the user in
                    capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_7__.NativeBiometric.verifyIdentity({
                        reason: "For easy log in",
                        title: "Log in",
                        subtitle: "Maybe add subtitle here?",
                        description: "Maybe a description too?",
                    }).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                        // Authentication successful
                        yield this.payment();
                    }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                        // Failed to authenticate
                        yield this.presentPrompt();
                    }));
                });
            }
            else {
                yield this.presentPrompt();
            }
        }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentPrompt();
        }));
    }
    ionViewDidEnter() {
        this.access.resetLogoutTimer();
    }
    addItemsToCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let data;
            this.total = 0;
            // eslint-disable-next-line no-underscore-dangle
            const itemIdRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `carts/${(this.id)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getDoc)(itemIdRef)
                .then(snap => { data = snap.data(); delete data.lastUpdate; delete data.id; });
            for (const key in data) {
                console.log(key);
                const idOwnerRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `idOwner/${(key.split('@')[0])}`);
                const idOwnerSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getDoc)(idOwnerRef);
                const idOwnerName = idOwnerSnap.data();
                this.owner = idOwnerName.owner;
                console.log(this.owner);
                const ownerRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `stores/${(this.owner)}`);
                const ownerSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getDoc)(ownerRef);
                const ownerName = ownerSnap.data();
                // eslint-disable-next-line no-underscore-dangle
                const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `stores/${(this.owner)}/items/${(key.split('@')[0])}`);
                const docSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getDoc)(dataRef);
                const dataSnap = docSnap.data();
                const value = data[key];
                this.checkout.push({
                    name: dataSnap.name,
                    owner: ownerName.name,
                    price: dataSnap.price,
                    image: dataSnap.imageUrl,
                    id: key,
                    ownerId: this.owner,
                    quantity: value,
                });
                this.total += dataSnap.price * value;
            }
        });
    }
    getOptions(itemId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.product.customOptions = [];
            this.product.customOption = [];
            const key = itemId.split('@')[1];
            itemId = itemId.split('@')[0];
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, 'carts/' + this.id + '/option/' + itemId + '/grouping/' + key);
            const dataSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getDoc)(dataRef);
            const data = dataSnap.data();
            delete data.id;
            for (const keys in data) {
                console.log(keys, data[keys]);
                this.product.customOptions.push({
                    name: keys,
                    data: data[keys],
                    checked: false
                });
            }
            console.log(this.product.customOptions);
            for (const i in this.product.customOptions) {
                this.options.push({
                    val: this.product.customOptions[i].data,
                    name: this.product.customOptions[i].name,
                });
            }
            this.product.currentOption = '';
            for (const key in this.options) {
                this.product.currentOption = this.product.currentOption + this.options[key].name + this.options[key].val + '-';
            }
        });
    }
    payment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let data;
            this.loadingController.create({
                message: 'Paying...',
            }).then((overlay) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                this.loading = overlay;
                this.loading.present();
                // eslint-disable-next-line no-underscore-dangle
                const itemIdRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `carts/${(this.id)}`);
                yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getDoc)(itemIdRef)
                    .then(snap => {
                    data = snap.data();
                    delete data.lastUpdate;
                    delete data.id;
                });
                // eslint-disable-next-line guard-for-in
                for (const key in data) {
                    const value = data[key];
                    // get owner id from item id
                    // eslint-disable-next-line no-underscore-dangle
                    const idOwnerRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `idOwner/${(key.split('@')[0])}`);
                    const idOwnerSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getDoc)(idOwnerRef);
                    const idOwnerName = idOwnerSnap.data();
                    this.owner = idOwnerName.owner;
                    // get name of owner
                    // eslint-disable-next-line no-underscore-dangle
                    const ownerRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `stores/${(this.owner)}`);
                    const ownerSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getDoc)(ownerRef);
                    const ownerName = ownerSnap.data();
                    // find price times value
                    const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `stores/${(this.owner)}/items/${(key.split('@')[0])}`);
                    const docSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getDoc)(dataRef);
                    const dataSnap = docSnap.data();
                    const price = dataSnap.price;
                    const pay = price * value;
                    const payString = pay.toString();
                    // get owner name
                    const nameRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `users/${(this.owner)}`);
                    const nameSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getDoc)(nameRef);
                    const name = nameSnap.data();
                    const dest = name.username;
                    // get buyer name
                    const unameRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `users/${(this.id)}`);
                    const unameSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getDoc)(unameRef);
                    const uname = unameSnap.data();
                    const src = uname.username;
                    // payment
                    this.paymentDetails = this.product.orderNotePair.get(key);
                    this.deliverTime = this.product.orderTimePair.get(key);
                    if (this.paymentDetails === undefined) {
                        this.paymentDetails = '';
                    }
                    yield this.iroha.payment(dest, this.paymentDetails, payString);
                    this.iroha.wallet.balance = '0';
                    yield this.iroha.setBalance(src + '@test');
                    // add orders for buyer
                    const pushKey = this.afs.createId();
                    const orderRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `users/${(this.id)}/activeOrders/${(pushKey)}`);
                    yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.setDoc)(orderRef, {
                        itemName: dataSnap.name,
                        imageUrl: dataSnap.imageUrl,
                        itemId: dataSnap.id,
                        owner: ownerName.name,
                        ownerId: ownerName.id,
                        orderId: pushKey,
                        price: price,
                        status: 'paid',
                        quantity: value,
                        amountPaid: payString,
                        deliverTime: this.deliverTime,
                        message: this.paymentDetails,
                        orderTime: firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__["default"].firestore.FieldValue.serverTimestamp()
                    });
                    yield this.getOptions(key);
                    let optRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `users/${(this.id)}/activeOrders/${(pushKey)}/options/${(this.product.currentOption)}`);
                    yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.setDoc)(optRef, {});
                    for (const key in this.options)
                        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.updateDoc)(optRef, {
                            [this.options[key].name]: this.options[key].val
                        });
                    // add to all orders for buyer
                    const allOrderRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `users/${(this.id)}/allOrders/${(pushKey)}`);
                    yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.setDoc)(allOrderRef, {
                        itemName: dataSnap.name,
                        imageUrl: dataSnap.imageUrl,
                        itemId: dataSnap.id,
                        owner: ownerName.name,
                        ownerId: ownerName.id,
                        orderId: pushKey,
                        price: price,
                        status: 'paid',
                        quantity: value,
                        amountPaid: payString,
                        deliverTime: this.deliverTime,
                        message: this.paymentDetails,
                        orderTime: firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__["default"].firestore.FieldValue.serverTimestamp()
                    });
                    optRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `users/${(this.id)}/allOrders/${(pushKey)}/options/${(this.product.currentOption)}`);
                    yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.setDoc)(optRef, {});
                    for (const key in this.options)
                        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.updateDoc)(optRef, {
                            [this.options[key].name]: [this.options[key].val]
                        });
                    // add orders for stall
                    const trackActiveOrderRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `trackOrders/${(this.owner)}/activeOrders/${(pushKey)}`);
                    yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.setDoc)(trackActiveOrderRef, {
                        itemName: dataSnap.name,
                        imageUrl: dataSnap.imageUrl,
                        itemId: dataSnap.id,
                        owner: ownerName.name,
                        ownerId: ownerName.id,
                        orderId: pushKey,
                        price: price,
                        user: src,
                        userId: this.id,
                        status: 'paid',
                        quantity: value,
                        amountPaid: payString,
                        deliverTime: this.deliverTime,
                        message: this.paymentDetails,
                        orderTime: firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__["default"].firestore.FieldValue.serverTimestamp()
                    });
                    optRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `trackOrders/${(this.owner)}/activeOrders/${(pushKey)}/options/${(this.product.currentOption)}`);
                    yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.setDoc)(optRef, {});
                    for (const key in this.options)
                        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.updateDoc)(optRef, {
                            [this.options[key].name]: [this.options[key].val]
                        });
                    // add all orders for stall
                    const trackOrderRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `trackOrders/${(this.owner)}/allOrders/${(pushKey)}`);
                    yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.setDoc)(trackOrderRef, {
                        itemName: dataSnap.name,
                        imageUrl: dataSnap.imageUrl,
                        itemId: dataSnap.id,
                        user: src,
                        userId: this.id,
                        ownerId: ownerName.id,
                        orderId: pushKey,
                        price,
                        status: 'paid',
                        quantity: value,
                        amountPaid: payString,
                        deliverTime: this.deliverTime,
                        message: this.paymentDetails,
                        orderTime: firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__["default"].firestore.FieldValue.serverTimestamp()
                    });
                    optRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `trackOrders/${(this.owner)}/allOrders/${(pushKey)}/options/${(this.product.currentOption)}`);
                    yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.setDoc)(optRef, {});
                    for (const key in this.options)
                        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.updateDoc)(optRef, {
                            [this.options[key].name]: [this.options[key].val]
                        });
                    // add to sales
                    const currentDate = new Date();
                    const month = currentDate.getMonth() + 1; //months from 1-12
                    const day = currentDate.getDate();
                    const year = currentDate.getFullYear();
                    const trackSales = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(this._firestore, `trackSales/${(this.owner)}/${(year)}/${(month)}/${(day)}/${(pushKey)}`);
                    yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.setDoc)(trackSales, {
                        itemName: dataSnap.name,
                        imageUrl: dataSnap.imageUrl,
                        itemId: dataSnap.id,
                        owner: ownerName.name,
                        ownerId: ownerName.id,
                        orderId: pushKey,
                        price,
                        quantity: value,
                        amountPaid: payString,
                        day
                    });
                }
            })).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                // clear cart
                yield this.product.checkoutCart();
                this.loading.dismiss();
                yield this.showAlert("Payment Success!", "You can check your purchases in My Orders.");
                yield this.router.navigate(['my-orders']);
            })).catch(e => {
                this.loading.dismiss();
                this.showAlert("Payment Failure!", e);
            });
        });
    }
    showAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['Ok'],
            });
            yield alert.present();
        });
    }
    presentPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'User verification',
                inputs: [
                    {
                        name: 'password',
                        placeholder: 'Password',
                        type: 'password'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                            this.loadingController.create({
                                message: 'Verifying...',
                            }).then((overlay) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                                this.loading = overlay;
                                this.loading.present();
                                yield this.iroha.getAccDetail('sec');
                                if (data.password === this.iroha.pw) {
                                    this.loading.dismiss();
                                    yield this.payment();
                                }
                                else {
                                    this.loading.dismiss();
                                    yield this.showAlert('Verification Failed', 'You entered the wrong password');
                                    yield this.router.navigate(['tabs']);
                                }
                            }));
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    back() {
        this.router.navigate(['checkout']);
    }
};
ConfirmPage.ctorParameters = () => [
    { type: _services_auth_access_service__WEBPACK_IMPORTED_MODULE_2__.AccessService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__.IrohaService },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.Firestore },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRouterOutlet },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.MenuController }
];
ConfirmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-confirm',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confirm_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmPage);



/***/ }),

/***/ 47766:
/*!*************************************************!*\
  !*** ./src/app/services/auth/access.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessService": () => (/* binding */ AccessService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80266);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/app */ 94058);






let AccessService = class AccessService {
    // isLocked = true;
    constructor(platform, router) {
        this.platform = platform;
        this.router = router;
        this.logoutTimer = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        _capacitor_app__WEBPACK_IMPORTED_MODULE_0__.App.addListener('appStateChange', (state) => {
            if (!state.isActive && this.logoutTimer.value > 0) {
                this.lockApp();
            }
        });
    }
    resetLogoutTimer() {
        this.logoutTimer.next(100);
        this.decreaseTimer();
    }
    decreaseTimer() {
        setTimeout(() => {
            if (this.logoutTimer.value === 0) {
                this.lockApp();
            }
            else {
                this.logoutTimer.next(this.logoutTimer.value - 1);
                this.decreaseTimer();
            }
        }, 1000);
    }
    lockApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.logoutTimer.next(0);
            yield this.router.navigate(['tabs']);
        });
    }
};
AccessService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AccessService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], AccessService);



/***/ }),

/***/ 80919:
/*!*************************************************!*\
  !*** ./src/app/pages/confirm/confirm.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-footer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\nion-footer .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDSSwyQkFBQTtBQUFSIiwiZmlsZSI6ImNvbmZpcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAgIC5tYWluLWJ1dHRvbjo6YWZ0ZXIge1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_confirm_confirm_module_ts.js.map