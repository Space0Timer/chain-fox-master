"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_verify-email-address_verify-email-address_module_ts"],{

/***/ 47895:
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/verify-email-address/verify-email-address.page.html ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Verify email address</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n<p>Please check your email and verify your email address.</p>\n  <p>You cannot proceed with this app with verifying your email.</p>\n  <p>Your unverified new account will be deleted within 1 hour. You can use your account once it's verified.</p>\n  <div class=\"ion-padding\" *ngIf=\"!isLoading\">\n    <ion-button (click)=\"unlock()\" expand=\"block\" class=\"main-button\">\n      <ion-text class = ion-margin-horizontal >Email Verified</ion-text>\n      <ion-icon class = ion-margin-horizontal name=\"arrow-forward-circle-outline\"></ion-icon>\n    </ion-button>\n  </div>\n  <div class=\"ion-padding\" *ngIf=\"isLoading\">\n    <ion-button (click)=\"unlock()\" expand=\"block\" class=\"main-button\">\n      <ion-spinner></ion-spinner>\n    </ion-button>\n  </div>\n  <p> Login with another account?</p>\n  <div class=\"ion-padding\">\n    <ion-button (click)=\"switch()\" expand=\"block\" class=\"main-button\">\n      <ion-text class = ion-margin-horizontal >Switch Account</ion-text>\n      <ion-icon class = ion-margin-horizontal name=\"arrow-forward-circle-outline\"></ion-icon>\n    </ion-button>\n  </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 1447:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/verify-email-address/verify-email-address-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailAddressPageRoutingModule": () => (/* binding */ VerifyEmailAddressPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _verify_email_address_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email-address.page */ 48625);




const routes = [
    {
        path: '',
        component: _verify_email_address_page__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailAddressPage
    }
];
let VerifyEmailAddressPageRoutingModule = class VerifyEmailAddressPageRoutingModule {
};
VerifyEmailAddressPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyEmailAddressPageRoutingModule);



/***/ }),

/***/ 38002:
/*!***************************************************************************!*\
  !*** ./src/app/pages/verify-email-address/verify-email-address.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailAddressPageModule": () => (/* binding */ VerifyEmailAddressPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _verify_email_address_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email-address-routing.module */ 1447);
/* harmony import */ var _verify_email_address_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email-address.page */ 48625);







let VerifyEmailAddressPageModule = class VerifyEmailAddressPageModule {
};
VerifyEmailAddressPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verify_email_address_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailAddressPageRoutingModule
        ],
        declarations: [_verify_email_address_page__WEBPACK_IMPORTED_MODULE_1__.VerifyEmailAddressPage]
    })
], VerifyEmailAddressPageModule);



/***/ }),

/***/ 48625:
/*!*************************************************************************!*\
  !*** ./src/app/pages/verify-email-address/verify-email-address.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailAddressPage": () => (/* binding */ VerifyEmailAddressPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verify_email_address_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./verify-email-address.page.html */ 47895);
/* harmony import */ var _verify_email_address_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email-address.page.scss */ 34691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ 17208);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/splash-screen */ 26391);










let VerifyEmailAddressPage = class VerifyEmailAddressPage {
    constructor(router, ionicAuthService, alertController, _firestore, storage, menu) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this.alertController = alertController;
        this._firestore = _firestore;
        this.storage = storage;
        this.menu = menu;
        this.isLoading = false;
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.menu.enable(true);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__.SplashScreen.hide();
        });
    }
    unlock() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            const docRef1 = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(this._firestore, 'users', this.ionicAuthService.currentUser.uid);
            const docSnap1 = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(docRef1);
            const username1 = yield this.storage.get(docSnap1.data().username);
            yield this.ionicAuthService.reAuth(docSnap1.data().email, username1);
            if ((yield this.ionicAuthService.checkVerify()) === true) {
                yield this.router.navigate(['tabs']);
            }
            else {
                this.isLoading = false;
                yield this.showAlert('Email not yet verified!');
            }
        });
    }
    switch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(['auth-screen']);
        });
    }
    showAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Authentication Failed',
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
VerifyEmailAddressPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.Firestore },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController }
];
VerifyEmailAddressPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-verify-email-address',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verify_email_address_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_verify_email_address_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerifyEmailAddressPage);



/***/ }),

/***/ 34691:
/*!***************************************************************************!*\
  !*** ./src/app/pages/verify-email-address/verify-email-address.page.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktZW1haWwtYWRkcmVzcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_verify-email-address_verify-email-address_module_ts.js.map