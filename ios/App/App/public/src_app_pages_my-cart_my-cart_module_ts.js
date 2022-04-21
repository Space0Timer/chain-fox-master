"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_my-cart_my-cart_module_ts"],{

/***/ 6769:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/my-cart/my-cart.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <h1 class=\"title\">Cart</h1>\n\n  <div class=\"cart-items\">\n    <ng-container *ngFor=\"let cart of cart\">\n      <div>\n        <app-cart-card [cart]=\"cart\" (childEvent)=\"updateQuantity()\"></app-cart-card>\n      </div>\n    </ng-container>\n  </div>\n\n</ion-content>\n<ion-footer translucent=\"true\" class=\"ion-no-border\" mode=\"md\" *ngIf=\"cart.length !== 0\">\n  <ion-toolbar color=\"translucent\">\n    <ion-button expand=\"block\" class=\"main-button\" (click)=\"checkOut()\" >Checkout</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 32440:
/*!*********************************************************!*\
  !*** ./src/app/pages/my-cart/my-cart-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCartPageRoutingModule": () => (/* binding */ MyCartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _my_cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-cart.page */ 82448);




const routes = [
    {
        path: '',
        component: _my_cart_page__WEBPACK_IMPORTED_MODULE_0__.MyCartPage
    }
];
let MyCartPageRoutingModule = class MyCartPageRoutingModule {
};
MyCartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyCartPageRoutingModule);



/***/ }),

/***/ 90421:
/*!*************************************************!*\
  !*** ./src/app/pages/my-cart/my-cart.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCartPageModule": () => (/* binding */ MyCartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _my_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-cart-routing.module */ 32440);
/* harmony import */ var _my_cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-cart.page */ 82448);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 54113);








let MyCartPageModule = class MyCartPageModule {
};
MyCartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _my_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyCartPageRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_my_cart_page__WEBPACK_IMPORTED_MODULE_1__.MyCartPage]
    })
], MyCartPageModule);



/***/ }),

/***/ 82448:
/*!***********************************************!*\
  !*** ./src/app/pages/my-cart/my-cart.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCartPage": () => (/* binding */ MyCartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_cart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./my-cart.page.html */ 6769);
/* harmony import */ var _my_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-cart.page.scss */ 53608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cafe/product.service */ 41575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);










let MyCartPage = class MyCartPage {
    constructor(router, ionicAuthService, afs, product, _firestore, loadingController, alertController, menu) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this.afs = afs;
        this.product = product;
        this._firestore = _firestore;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.menu = menu;
        this.cart = [];
        this.keys = [];
        this.counter = 0;
        this.total = 0;
        this.id = this.ionicAuthService.getUid();
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.menu.enable(true);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.keys = [];
            this.cart = [];
            yield this.addItemsToCart();
        });
    }
    addItemsToCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data;
            this.total = 0;
            // eslint-disable-next-line no-underscore-dangle
            const itemIdRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(this._firestore, `carts/${(this.id)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(itemIdRef)
                .then(snap => {
                data = snap.data();
                delete data.lastUpdate;
                delete data.id;
            });
            for (const key in data) {
                // get owner id from item id
                this.keys.push({ id: key });
                const idOwnerRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(this._firestore, `idOwner/${(key.split('@')[0])}`);
                const idOwnerSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(idOwnerRef);
                const idOwnerName = idOwnerSnap.data();
                this.owner = idOwnerName.owner;
                const ownerRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(this._firestore, `stores/${(this.owner)}`);
                const ownerSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(ownerRef);
                const ownerName = ownerSnap.data();
                // eslint-disable-next-line no-underscore-dangle
                const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(this._firestore, `stores/${(this.owner)}/items/${(key.split('@')[0])}`);
                const docSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(dataRef);
                const dataSnap = docSnap.data();
                const value = data[key];
                console.log(key);
                const keys = key.split('@')[1].split('-').slice(0, -1);
                let optionSnap = 0;
                for (const price of keys) {
                    console.log(price);
                    // eslint-disable-next-line max-len
                    const optionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(this._firestore, `stores/${(this.owner)}/items/${(key.split('@')[0])}/optionPrice/${(price)}`);
                    const optSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(optionRef);
                    optionSnap += Number(optSnap.data().price);
                }
                this.cart.push({
                    name: dataSnap.name,
                    owner: ownerName.name,
                    price: Number(dataSnap.price) + optionSnap,
                    image: dataSnap.imageUrl,
                    id: key,
                    ownerId: this.owner,
                    quantity: value,
                });
                this.total += Number(dataSnap.price) + optionSnap;
            }
        });
    }
    updateQuantity() {
        this.cart = [];
        this.addItemsToCart();
    }
    checkOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            for (const key in this.keys) {
                const illegalTime = ['00', '01', '01', '02', '03', '04', '05', '06', '07', '22', '23'];
                if (this.product.orderTimePair.get(this.keys[key].id) === undefined) {
                    yield this.showAlert('Please choose a valid pickup date for your orders.' + this.keys[key].id);
                    this.counter = 1;
                    break;
                }
                else if (illegalTime.includes(this.product.orderTimePair.get(this.keys[key].id.substring(11, 13)))) {
                    yield this.showAlert('Please choose a valid pickup date for your orders.' + this.product.orderTimePair.get(this.keys[key].id.substring(11, 13)));
                    this.counter = 1;
                    break;
                }
            }
            if (this.counter === 0) {
                yield this.router.navigate(['checkout']);
            }
            this.counter = 0;
        });
    }
    back() {
        this.router.navigateByUrl('tabs/account', { replaceUrl: true });
    }
    showAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Invalid pickup date',
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
MyCartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.Firestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController }
];
MyCartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-my-cart',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_cart_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyCartPage);



/***/ }),

/***/ 53608:
/*!*************************************************!*\
  !*** ./src/app/pages/my-cart/my-cart.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\nion-footer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoibXktY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjZweDtcbiAgLS1wYWRkaW5nLWVuZDogMjZweDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICM0MzQzNDM7XG59XG5cbmlvbi1mb290ZXIge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-cart_my-cart_module_ts.js.map