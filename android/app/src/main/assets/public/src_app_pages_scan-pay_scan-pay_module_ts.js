"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_scan-pay_scan-pay_module_ts"],{

/***/ 54930:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/scan-pay/scan-pay.page.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Scan to Pay</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"titles\" >\n    <ion-text  color=\"primary\" style=\"font-size: 20px; font-weight: bold;\">Recipient: {{this.iroha.result.split('@')[0]}}</ion-text>\n  </div>\n  <div class=\"ion-padding\">\n  <form [formGroup]=\"form\" class=\"ion-margin\">\n    <div class=\"ion-margin-vertical\">\n      <ion-item lines=\"full\" color=\"light\" >\n        <ion-input formControlName=\"amount\" [type]=\"type ? 'text' : 'text'\" placeholder=\"Enter amount to transfer\"></ion-input>\n      </ion-item>\n      <ion-text\n        color=\"danger\"\n        *ngIf=\"!form.get('amount').valid && form.get('amount').touched\">\n        <ion-text\n          class=\"error\"\n          *ngIf=\"form.get('amount').hasError('required')\">\n          * Please enter the amount\n        </ion-text>\n        <!-- for email error -->\n        <ion-text\n          class=\"error\"\n          *ngIf=\"!form.get('amount').hasError('required') && form.get('amount').hasError('pattern')\">\n          * Please enter a proper amount\n        </ion-text>\n      </ion-text>\n    </div>\n    <div class=\"ion-margin-vertical\">\n      <ion-item lines=\"full\" color=\"light\">\n        <ion-input formControlName=\"reference\" [type]=\"type ? 'text' : 'text'\" placeholder=\"Enter reference\"></ion-input>\n      </ion-item>\n      <ion-text\n        color=\"danger\"\n        *ngIf=\"!form.get('reference').valid && form.get('reference').touched\">\n        <ion-text\n          class=\"error\"\n          *ngIf=\"form.get('reference').hasError('required')\">\n          * Please enter the reference\n        </ion-text>\n        <!-- for reference error -->\n        <ion-text\n          class=\"error\"\n          *ngIf=\"!form.get('reference').hasError('required')\n          && form.get('reference')\">\n          * Please enter the payment reference\n        </ion-text>\n      </ion-text>\n    </div>\n  </form>\n  </div>\n  <div class=\"ion-margin-horizontal\">\n    <ion-button\n      *ngIf=\"!isLoading\"\n      class=\"ion-margin-horizontal\"\n      size=\"large\"\n      expand=\"block\"\n      shape=\"round\"\n      color=\"primary\"\n      (click)=\"biometricAuth()\">\n      <ion-text>Confirm</ion-text>\n    </ion-button>\n    <ion-button\n      *ngIf=\"isLoading\"\n      class=\"ion-margin-horizontal\"\n      size=\"large\"\n      expand=\"block\"\n      shape=\"round\"\n      color=\"primary\">\n      <ion-spinner></ion-spinner>\n    </ion-button>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 79000:
/*!***********************************************************!*\
  !*** ./src/app/pages/scan-pay/scan-pay-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPayPageRoutingModule": () => (/* binding */ ScanPayPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _scan_pay_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-pay.page */ 91283);




const routes = [
    {
        path: '',
        component: _scan_pay_page__WEBPACK_IMPORTED_MODULE_0__.ScanPayPage
    }
];
let ScanPayPageRoutingModule = class ScanPayPageRoutingModule {
};
ScanPayPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScanPayPageRoutingModule);



/***/ }),

/***/ 85814:
/*!***************************************************!*\
  !*** ./src/app/pages/scan-pay/scan-pay.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPayPageModule": () => (/* binding */ ScanPayPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _scan_pay_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-pay-routing.module */ 79000);
/* harmony import */ var _scan_pay_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-pay.page */ 91283);







let ScanPayPageModule = class ScanPayPageModule {
};
ScanPayPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _scan_pay_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScanPayPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_scan_pay_page__WEBPACK_IMPORTED_MODULE_1__.ScanPayPage]
    })
], ScanPayPageModule);



/***/ }),

/***/ 91283:
/*!*************************************************!*\
  !*** ./src/app/pages/scan-pay/scan-pay.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPayPage": () => (/* binding */ ScanPayPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_scan_pay_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./scan-pay.page.html */ 54930);
/* harmony import */ var _scan_pay_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-pay.page.scss */ 22979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/iroha.service */ 49187);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! capacitor-native-biometric */ 41380);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/auth */ 60111);











let ScanPayPage = class ScanPayPage {
    constructor(iroha, alertController, loadingController, router, _firestore, afAuth) {
        this.iroha = iroha;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this._firestore = _firestore;
        this.afAuth = afAuth;
        this.type = true;
        this.afAuth.onAuthStateChanged(user => {
            this.currentUser = user;
        });
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]*$')] }),
            reference: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required] }), // added email validator also
        });
    }
    biometricAuth() {
        capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_3__.NativeBiometric.isAvailable().then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const isAvailable = result.isAvailable;
            const isFaceId = result.biometryType === capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_3__.BiometryType.FACE_ID;
            if (isAvailable) {
                // Get user's credentials
                capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_3__.NativeBiometric.getCredentials({
                    server: 'chainfox',
                }).then((credentials) => {
                    // Authenticate using biometrics before logging the user in
                    capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_3__.NativeBiometric.verifyIdentity({
                        reason: 'Scan to verify payments',
                        title: 'Log in',
                        subtitle: 'Maybe add subtitle here?',
                        description: 'Maybe a description too?',
                    }).then(() => {
                        // Authentication successful
                        this.onSubmit();
                    }, (error) => {
                        // Failed to authenticate
                    });
                });
            }
            else {
                yield this.presentPrompt();
            }
        }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Couldn't check availability
            yield this.presentPrompt();
        }));
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.form.valid) {
                this.form.markAllAsTouched();
                return;
            }
            this.loadingController.create({
                message: 'Sending coins...',
            }).then((overlay) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.loading = overlay;
                this.loading.present();
                // eslint-disable-next-line no-underscore-dangle
                yield this.pay(this.form.value.reference, this.form.value.amount)
                    .then((d) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    this.iroha.wallet.balance = '0';
                    yield this.iroha.setBalance(this.iroha.wallet.name + '@test');
                    this.loading.dismiss();
                    // eslint-disable-next-line max-len
                    yield this.showAlert('Transfer Success', 'You have sent RM' + this.form.value.amount + ' to ' + this.iroha.result.split('@')[0] + '.');
                    this.form.reset();
                }))
                    .catch(e => {
                    this.loading.dismiss();
                    this.showAlert('Transfer Failed', e);
                });
            }));
        });
    }
    pay(message, amount) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.iroha.payment(this.iroha.result, message, amount);
        });
    }
    presentPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            this.loadingController.create({
                                message: 'Verifying...',
                            }).then((overlay) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                                this.loading = overlay;
                                this.loading.present();
                                yield this.iroha.getAccDetail('sec');
                                if (data.password === this.iroha.pw) {
                                    this.loading.dismiss();
                                    yield this.onSubmit();
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
    showAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['Ok'],
            });
            yield alert.present();
        });
    }
};
ScanPayPage.ctorParameters = () => [
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_2__.IrohaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.Firestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuth }
];
ScanPayPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-scan-pay',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_scan_pay_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_scan_pay_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScanPayPage);



/***/ }),

/***/ 22979:
/*!***************************************************!*\
  !*** ./src/app/pages/scan-pay/scan-pay.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".titles {\n  padding: 0 1rem 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW4tcGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0YiLCJmaWxlIjoic2Nhbi1wYXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlcyB7XG4gIHBhZGRpbmc6IDAgMXJlbSAwIDIwcHg7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_scan-pay_scan-pay_module_ts.js.map