"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_home_top-up_top-up_module_ts"],{

/***/ 13196:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tabs/home/top-up/top-up.page.html ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Top Up\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"back()\" color=\"primary\" slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-align-items-center\" [style.--background]=\"scanActive ? 'transparent' : '#ffffff'\">\n  <form [formGroup]=\"form\" class=\"ion-margin\">\n    <ion-item lines=\"full\" color=\"light\">\n      <ion-input formControlName=\"amount\" [type]=\"type ? 'text' : 'text'\" placeholder=\"Enter amount\"></ion-input>\n    </ion-item>\n    <ion-text\n      color=\"danger\"\n      *ngIf=\"!form.get('amount').valid && form.get('amount').touched\">\n      <ion-text\n        class=\"error\"\n        *ngIf=\"form.get('amount').hasError('required')\">\n        * Please enter the amount\n      </ion-text>\n      <ion-text\n        class=\"error\"\n        *ngIf=\"!form.get('amount').hasError('required') && form.get('amount').hasError('pattern')\">\n        * Please enter a proper amount\n      </ion-text>\n    </ion-text>\n\n  </form>\n  <div class=\"ion-margin-horizontal\">\n  <ion-button\n    *ngIf=\"!isLoading\"\n    size=\"large\"\n    expand=\"block\"\n    shape=\"round\"\n    color=\"primary\" (click)=\"submitRequest()\">\n    Confirm\n  </ion-button>\n    <ion-button\n      *ngIf=\"isLoading\"\n      size=\"large\"\n      expand=\"block\"\n      shape=\"round\"\n      color=\"primary\">\n      <ion-spinner></ion-spinner>\n    </ion-button>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 78198:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/home/top-up/top-up-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopUpPageRoutingModule": () => (/* binding */ TopUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _top_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-up.page */ 76308);




const routes = [
    {
        path: '',
        component: _top_up_page__WEBPACK_IMPORTED_MODULE_0__.TopUpPage
    }
];
let TopUpPageRoutingModule = class TopUpPageRoutingModule {
};
TopUpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TopUpPageRoutingModule);



/***/ }),

/***/ 61536:
/*!*********************************************************!*\
  !*** ./src/app/pages/tabs/home/top-up/top-up.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopUpPageModule": () => (/* binding */ TopUpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _top_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-up-routing.module */ 78198);
/* harmony import */ var _top_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-up.page */ 76308);







let TopUpPageModule = class TopUpPageModule {
};
TopUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _top_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.TopUpPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_top_up_page__WEBPACK_IMPORTED_MODULE_1__.TopUpPage]
    })
], TopUpPageModule);



/***/ }),

/***/ 76308:
/*!*******************************************************!*\
  !*** ./src/app/pages/tabs/home/top-up/top-up.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopUpPage": () => (/* binding */ TopUpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_2_2_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_top_up_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./top-up.page.html */ 13196);
/* harmony import */ var _top_up_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-up.page.scss */ 90018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_iroha_iroha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/iroha/iroha.service */ 52857);
/* harmony import */ var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor-community/barcode-scanner */ 72807);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);












let TopUpPage = class TopUpPage {
    constructor(modalCtrl, toastCtrl, router, _firestore, ionicAuthService, iroha, alertController, loadingController, platform, afs, menu) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this._firestore = _firestore;
        this.ionicAuthService = ionicAuthService;
        this.iroha = iroha;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.platform = platform;
        this.afs = afs;
        this.menu = menu;
        this.type = false;
        this.isLoading = false;
        this.uid = this.ionicAuthService.getUid();
        this.scanActive = false;
        this.initForm();
        this.menu.enable(false);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.platform.ready().then(() => {
                document.body.classList.toggle('dark', false);
            });
        });
    }
    ionViewDidLeave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.menu.enable(true);
        });
    }
    ngOnDestroy() {
        this.stopScanner();
    }
    startScanner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const allowed = yield this.checkPermissions();
            if (allowed) {
                this.scanActive = true;
                const result = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.startScan({ targetedFormats: [_capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__.SupportedFormat.QR_CODE] });
                if (result.hasContent) {
                    this.result = result.content;
                    this.scanActive = false;
                    yield this.topUp();
                }
            }
        });
    }
    checkPermissions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                const status = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.checkPermission({ force: true });
                if (status.granted) {
                    resolve(true);
                }
                else if (status.denied) {
                    const alert = yield this.alertController.create({
                        header: 'No permissions',
                        message: 'Please enable camera in your settings.',
                        buttons: [{
                                text: 'No',
                                role: 'cancel'
                            },
                            {
                                text: 'Open Settings',
                                handler: () => {
                                    resolve(false);
                                    _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.openAppSettings();
                                }
                            }]
                    });
                }
                else {
                    resolve(false);
                }
            }));
        });
    }
    stopScanner() {
        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.stopScan();
        this.scanActive = false;
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]*$')] }),
        });
    }
    submitRequest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.form.valid) {
                this.form.markAllAsTouched();
                return;
            }
            yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner.prepare();
            yield this.startScanner();
        });
    }
    topUp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loadingController.create({
                message: 'Collecting coins...',
            }).then((overlay) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.loading = overlay;
                this.loading.present();
                console.log(this.form.value);
                yield this.transferMoney();
                this.iroha.wallet.name = '';
                yield this.iroha.setName(this.username);
                this.iroha.wallet.balance = 0;
                yield this.iroha.setBalance(this.username);
            }));
        });
    }
    back() {
        this.router.navigateByUrl('/tabs', { replaceUrl: true });
    }
    getFirebaseData(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(this._firestore, `keys/${(key)}`);
            const dataSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(dataRef);
            this.prk = dataSnap.data().prk;
            this.amount = dataSnap.data().amount;
            console.log(this.prk, this.amount);
            yield this.afs.collection(`keys`).doc(key).delete();
        });
    }
    transferMoney() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-underscore-dangle
            const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(this._firestore, 'users', this.uid);
            const docSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(docRef);
            if (docSnap.exists()) {
                this.username = docSnap.data().username.concat('@test');
                // eslint-disable-next-line max-len
                yield this.iroha.addSignatory(this.result);
                yield this.getFirebaseData(this.result);
                if (this.amount !== this.form.value.amount) {
                    this.loading.dismiss();
                    yield this.showAlert('You entered the wrong amount!', 'Top Up Failed');
                }
                else {
                    yield this.iroha.topUp(this.username, '', this.form.value.amount, this.prk).then((d) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        yield this.iroha.removeSignatory(this.result);
                        this.loading.dismiss();
                        yield this.showAlert('RM' + this.form.value.amount + ' has been added to your balance.', 'Top Up Success');
                    })).catch(e => {
                        this.loading.dismiss();
                        this.showAlert(e, 'Top Up Failed');
                    });
                }
            }
            else {
                this.loading.dismiss();
                console.log('Error! No such account.');
            }
        });
    }
    showAlert(message, header) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
TopUpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.Firestore },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_iroha_iroha_service__WEBPACK_IMPORTED_MODULE_3__.IrohaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController }
];
TopUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-top-up',
        template: _Users_spacetimer_Documents_chain_fox_master_2_2_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_top_up_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_top_up_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TopUpPage);



/***/ }),

/***/ 90018:
/*!*********************************************************!*\
  !*** ./src/app/pages/tabs/home/top-up/top-up.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtdXAucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_home_top-up_top-up_module_ts.js.map