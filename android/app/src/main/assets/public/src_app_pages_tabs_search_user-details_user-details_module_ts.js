"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_search_user-details_user-details_module_ts"],{

/***/ 34988:
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tabs/search/user-details/user-details.page.html ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Set Amount</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"back()\" color=\"primary\" slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<form [formGroup]=\"form\" class=\"ion-margin\">\n  <div class=\"ion-margin-vertical\">\n    <ion-item lines=\"full\" color=\"light\">\n      <ion-input formControlName=\"amount\" [type]=\"type ? 'text' : 'text'\" placeholder=\"Enter amount\"></ion-input>\n    </ion-item>\n    <ion-text\n      color=\"danger\"\n      *ngIf=\"!form.get('amount').valid && form.get('amount').touched\">\n      <ion-text\n        class=\"error\"\n        *ngIf=\"form.get('amount').hasError('required')\">\n        * Please enter the amount\n      </ion-text>\n    </ion-text>\n  </div>\n  <div class=\"ion-margin-vertical\">\n    <ion-item lines=\"full\" color=\"light\">\n      <ion-input formControlName=\"reference\" [type]=\"type ? 'text' : 'text'\" placeholder=\"Enter reference\"></ion-input>\n    </ion-item>\n    <ion-text\n      color=\"danger\"\n      *ngIf=\"!form.get('reference').valid && form.get('reference').touched\">\n      <ion-text\n        class=\"error\"\n        *ngIf=\"form.get('reference').hasError('required')\">\n        * Please enter the reference\n      </ion-text>\n      <!-- for reference error -->\n      <ion-text\n        class=\"error\"\n        *ngIf=\"!form.get('reference').hasError('required')\n          && form.get('reference')\">\n        * Please enter the payment reference\n      </ion-text>\n    </ion-text>\n  </div>\n</form>\n\n<div class=\"ion-margin-horizontal\">\n  <ion-button\n    *ngIf=\"!isLoading\"\n    size=\"large\"\n    expand=\"block\"\n    shape=\"round\"\n    color=\"primary\"\n    (click)=\"biometricAuth()\">\n    <ion-text>Confirm</ion-text>\n  </ion-button>\n  <ion-button\n    *ngIf=\"isLoading\"\n    size=\"large\"\n    expand=\"block\"\n    shape=\"round\"\n    color=\"primary\">\n    <ion-spinner></ion-spinner>\n  </ion-button>\n</div>\n\n");

/***/ }),

/***/ 6934:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/tabs/search/user-details/user-details-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsPageRoutingModule": () => (/* binding */ UserDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-details.page */ 55224);




const routes = [
    {
        path: '',
        component: _user_details_page__WEBPACK_IMPORTED_MODULE_0__.UserDetailsPage
    }
];
let UserDetailsPageRoutingModule = class UserDetailsPageRoutingModule {
};
UserDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserDetailsPageRoutingModule);



/***/ }),

/***/ 53486:
/*!***********************************************************************!*\
  !*** ./src/app/pages/tabs/search/user-details/user-details.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsPageModule": () => (/* binding */ UserDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-details-routing.module */ 6934);
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-details.page */ 55224);







let UserDetailsPageModule = class UserDetailsPageModule {
};
UserDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserDetailsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_user_details_page__WEBPACK_IMPORTED_MODULE_1__.UserDetailsPage]
    })
], UserDetailsPageModule);



/***/ }),

/***/ 55224:
/*!*********************************************************************!*\
  !*** ./src/app/pages/tabs/search/user-details/user-details.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsPage": () => (/* binding */ UserDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-details.page.html */ 34988);
/* harmony import */ var _user_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-details.page.scss */ 80562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/iroha.service */ 49187);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/auth */ 60111);
/* harmony import */ var capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! capacitor-native-biometric */ 41380);












let UserDetailsPage = class UserDetailsPage {
    constructor(authService, router, _firestore, ionicAuthService, iroha, loadingController, afAuth, alertController) {
        this.authService = authService;
        this.router = router;
        this._firestore = _firestore;
        this.ionicAuthService = ionicAuthService;
        this.iroha = iroha;
        this.loadingController = loadingController;
        this.afAuth = afAuth;
        this.alertController = alertController;
        this.type = false;
        this.id = this.ionicAuthService.getUid();
        this.initForm();
        this.afAuth.onAuthStateChanged(user => {
            this.currentUser = user;
        });
    }
    ;
    ngOnInit() {
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] }),
            reference: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] }), // added email validator also
        });
    }
    changeType() {
        this.type = !this.type;
    }
    biometricAuth() {
        capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_4__.NativeBiometric.isAvailable().then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const isAvailable = result.isAvailable;
            const isFaceId = result.biometryType === capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_4__.BiometryType.FACE_ID;
            if (isAvailable) {
                // Get user's credentials
                capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_4__.NativeBiometric.getCredentials({
                    server: 'chainfox',
                }).then((credentials) => {
                    // Authenticate using biometrics before logging the user in
                    capacitor_native_biometric__WEBPACK_IMPORTED_MODULE_4__.NativeBiometric.verifyIdentity({
                        reason: 'For easy log in',
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
        }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // Couldn't check availability
            yield this.presentPrompt();
        }));
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.form.valid) {
                this.form.markAllAsTouched();
                return;
            }
            this.loadingController.create({
                message: 'Sending coins...',
            }).then((overlay) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                this.loading = overlay;
                this.loading.present();
                // eslint-disable-next-line no-underscore-dangle
                const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(this._firestore, 'users', this.currentUser.uid);
                const docSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(docRef);
                if (docSnap.exists()) {
                    const name = docSnap.data().username.concat('@test');
                    this.iroha.wallet.name = '';
                    yield this.iroha.setName(name);
                    this.iroha.wallet.balance = 0;
                    yield this.iroha.topUpVerify(name, '', '1');
                    yield this.iroha.payment('admin', '', '1');
                    yield this.iroha.setBalance(name);
                }
                yield this.iroha.sendMoney(this.form.value.reference, this.form.value.amount)
                    .then((d) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    this.iroha.wallet.balance = '0';
                    yield this.iroha.setBalance(this.iroha.wallet.name + '@test');
                    this.loading.dismiss();
                    // eslint-disable-next-line max-len
                    yield this.showAlert('Transfer Success', 'You have sent RM' + this.form.value.amount + ' to ' + this.iroha.otherWallet.name + '.');
                    this.form.reset();
                    this.iroha.otherWallet.name = '';
                }))
                    .catch(e => {
                    this.loading.dismiss();
                    this.showAlert('Transfer Failed', e);
                });
            }));
        });
    }
    back() {
        this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
    }
    showAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    presentPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            this.loadingController.create({
                                message: 'Verifying...',
                            }).then((overlay) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
};
UserDetailsPage.ctorParameters = () => [
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.Firestore },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__.IrohaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController }
];
UserDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-user-details',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserDetailsPage);



/***/ }),

/***/ 80562:
/*!***********************************************************************!*\
  !*** ./src/app/pages/tabs/search/user-details/user-details.page.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "ion-input, ion-text {\n  font-size: 0.9rem;\n}\n\n.error {\n  font-size: 0.7rem !important;\n}\n\np ion-icon {\n  font-size: 1.8rem;\n  margin: 0 2vh;\n}\n\nion-button {\n  margin: 5vh 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsNEJBQUE7QUFFRjs7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUNBO0VBQ0UsYUFBQTtBQUVGIiwiZmlsZSI6InVzZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXQsIGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4uZXJyb3Ige1xuICBmb250LXNpemU6IDAuN3JlbSAhaW1wb3J0YW50O1xufVxucCB7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBtYXJnaW46IDAgMnZoO1xuICB9XG59XG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiA1dmggMDtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_search_user-details_user-details_module_ts.js.map