"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_biometric-login_biometric-login_module_ts"],{

/***/ 85911:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/biometric-login/biometric-login.page.html ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Set Biometric Login</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"back()\" color=\"primary\" slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class = 'ion-padding'>\n    <ion-row>\n      <ion-label style=\"margin-right: 30px;margin-top: 3px\">\n        <h2 style=\"color: var(--ion-color-primary);font-size: 20px; font-weight: bold;\">Biometric Login</h2>\n      </ion-label>\n      <ion-toggle mode=\"ios\" [(ngModel)]=\"isToggled\" (ionChange)=\"_ionChange($event) \"></ion-toggle>\n    </ion-row>\n\n  </div>\n</ion-content>\n\n");

/***/ }),

/***/ 96721:
/*!*************************************************************************!*\
  !*** ./src/app/pages/biometric-login/biometric-login-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiometricLoginPageRoutingModule": () => (/* binding */ BiometricLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _biometric_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./biometric-login.page */ 66261);




const routes = [
    {
        path: '',
        component: _biometric_login_page__WEBPACK_IMPORTED_MODULE_0__.BiometricLoginPage
    }
];
let BiometricLoginPageRoutingModule = class BiometricLoginPageRoutingModule {
};
BiometricLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BiometricLoginPageRoutingModule);



/***/ }),

/***/ 33254:
/*!*****************************************************************!*\
  !*** ./src/app/pages/biometric-login/biometric-login.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiometricLoginPageModule": () => (/* binding */ BiometricLoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _biometric_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./biometric-login-routing.module */ 96721);
/* harmony import */ var _biometric_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./biometric-login.page */ 66261);







let BiometricLoginPageModule = class BiometricLoginPageModule {
};
BiometricLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _biometric_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.BiometricLoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_biometric_login_page__WEBPACK_IMPORTED_MODULE_1__.BiometricLoginPage]
    })
], BiometricLoginPageModule);



/***/ }),

/***/ 66261:
/*!***************************************************************!*\
  !*** ./src/app/pages/biometric-login/biometric-login.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiometricLoginPage": () => (/* binding */ BiometricLoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_biometric_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./biometric-login.page.html */ 85911);
/* harmony import */ var _biometric_login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./biometric-login.page.scss */ 53581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/iroha.service */ 49187);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/auth */ 60111);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 17208);












let BiometricLoginPage = class BiometricLoginPage {
    constructor(authService, router, _firestore, iroha, loadingController, afAuth, alertController, menu, storage) {
        this.authService = authService;
        this.router = router;
        this._firestore = _firestore;
        this.iroha = iroha;
        this.loadingController = loadingController;
        this.afAuth = afAuth;
        this.alertController = alertController;
        this.menu = menu;
        this.storage = storage;
        this.type = false;
        this.id = this.authService.getUid();
        this.initForm();
        this.afAuth.onAuthStateChanged(user => {
            this.currentUser = user;
        });
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.menu.enable(true);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.isToggled = (yield this.storage.get('bio-login')) !== 'false';
        });
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)] })
        });
    }
    _ionChange(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(yield this.storage.get('bio-login'));
            if (this.isToggled) {
                if ((yield this.storage.get('bio-login')) === 'false') {
                    yield this.presentPrompt();
                }
            }
            else {
                if ((yield this.storage.get('bio-login')) === 'true') {
                    yield this.showAlert('Disable Biometric Login', 'Are you sure you want to disable biometric login?');
                }
            }
        });
    }
    changeType() {
        this.type = !this.type;
    }
    setBiometricLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.authService.reAuth(this.form.value.email, this.form.value.password).then((r) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                yield this.authService.resetPassword(this.form.value.email)
                    .then((d) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.showAlert('Authentication Success', 'You ca.');
                }))
                    .catch((e) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.showAlert('Authentication Failed', e);
                }));
            }))
                .catch((e) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () { return yield this.showAlert('Authentication Failed', e); }));
        });
    }
    showAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: data => {
                            this.isToggled = true;
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.storage.set('bio-login', 'false');
                            this.authService.biometricLogin = yield this.storage.get('bio-login');
                            console.log(this.authService.biometricLogin);
                        })
                    }
                ]
            });
            yield alert.present();
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
                            this.isToggled = false;
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.iroha.getAccDetail('sec');
                            if (data.password === this.iroha.pw) {
                                yield this.storage.set('bio-login', 'true');
                                this.authService.biometricLogin = yield this.storage.get('bio-login');
                                console.log(this.authService.biometricLogin);
                            }
                            else {
                                this.isToggled = false;
                                yield this.showAlert('Verification Failed', 'You entered the wrong password');
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    back() {
        this.router.navigateByUrl('/tabs', { replaceUrl: true });
    }
};
BiometricLoginPage.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.Firestore },
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__.IrohaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService }
];
BiometricLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-biometric-login',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_biometric_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_biometric_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BiometricLoginPage);



/***/ }),

/***/ 53581:
/*!*****************************************************************!*\
  !*** ./src/app/pages/biometric-login/biometric-login.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaW9tZXRyaWMtbG9naW4ucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_biometric-login_biometric-login_module_ts.js.map