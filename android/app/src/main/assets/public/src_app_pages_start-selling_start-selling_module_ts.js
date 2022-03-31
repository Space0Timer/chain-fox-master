"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_start-selling_start-selling_module_ts"],{

/***/ 27468:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/start-selling/start-selling.page.html ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Setup Store</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-margin-horizontal\">\n    <form [formGroup]=\"form\" class=\"ion-margin-vertical\">\n      <div class=\"ion-margin-vertical\">\n        <ion-item lines=\"full\">\n          <ion-input formControlName=\"name\" [type]=\"type ? 'text' : 'text'\" placeholder=\"Enter store name\"></ion-input>\n        </ion-item>\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"!form.get('name').valid && form.get('name').touched\">\n          <ion-text\n            class=\"error\"\n            *ngIf=\"form.get('name').hasError('required')\">\n            * Please enter the store name\n          </ion-text>\n        </ion-text>\n      </div>\n    </form>\n\n    <div>\n      <form method=\"post\" enctype=\"multipart/form-data\">\n        <div>\n          <div><b>Upload a photo for your store front.</b></div><br/>\n          <input type=\"file\" (change)=\"uploadPhoto($event)\" accept=\".png,.jpg\" multiple=\"true\"/>\n          <div *ngIf=\"errorMessage\">\n            <ion-text color=\"danger\">\n              <ion-text\n              class=\"error\">* {{errorMessage}}</ion-text>\n            </ion-text>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div *ngIf=\"barStatus\">\n      Uploading.....\n    </div>\n\n    <div id=\"photoPreview\">\n      <div *ngFor=\"let image of imageUploads\">\n        <img loading=\"lazy\" [src]=\"image\" class=\"preview\"/>\n      </div>\n    </div>\n\n    <div class=\"ion-margin-vertical\">\n      <ion-button\n        *ngIf=\"!isLoading\"\n        size=\"large\"\n        expand=\"block\"\n        shape=\"round\"\n        color=\"primary\"\n        (click)=\"onSubmit()\">\n        <ion-text>Confirm</ion-text>\n      </ion-button>\n      <ion-button\n        *ngIf=\"isLoading\"\n        size=\"large\"\n        expand=\"block\"\n        shape=\"round\"\n        color=\"primary\">\n        <ion-spinner></ion-spinner>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 82959:
/*!*********************************************************************!*\
  !*** ./src/app/pages/start-selling/start-selling-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartSellingPageRoutingModule": () => (/* binding */ StartSellingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _start_selling_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-selling.page */ 16248);




const routes = [
    {
        path: '',
        component: _start_selling_page__WEBPACK_IMPORTED_MODULE_0__.StartSellingPage
    }
];
let StartSellingPageRoutingModule = class StartSellingPageRoutingModule {
};
StartSellingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StartSellingPageRoutingModule);



/***/ }),

/***/ 35481:
/*!*************************************************************!*\
  !*** ./src/app/pages/start-selling/start-selling.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartSellingPageModule": () => (/* binding */ StartSellingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _start_selling_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-selling-routing.module */ 82959);
/* harmony import */ var _start_selling_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-selling.page */ 16248);







let StartSellingPageModule = class StartSellingPageModule {
};
StartSellingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _start_selling_routing_module__WEBPACK_IMPORTED_MODULE_0__.StartSellingPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_start_selling_page__WEBPACK_IMPORTED_MODULE_1__.StartSellingPage]
    })
], StartSellingPageModule);



/***/ }),

/***/ 16248:
/*!***********************************************************!*\
  !*** ./src/app/pages/start-selling/start-selling.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartSellingPage": () => (/* binding */ StartSellingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_start_selling_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./start-selling.page.html */ 27468);
/* harmony import */ var _start_selling_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-selling.page.scss */ 35491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_cafe_firebase_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cafe/firebase-upload.service */ 53727);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);










let StartSellingPage = class StartSellingPage {
    constructor(firebaseUploadService, router, _firestore, ionicAuthService, alertController) {
        this.firebaseUploadService = firebaseUploadService;
        this.router = router;
        this._firestore = _firestore;
        this.ionicAuthService = ionicAuthService;
        this.alertController = alertController;
        this.barStatus = false;
        this.errorMessage = '';
        this.imageUploads = [];
        this.name = '';
        this.imageUrl = '';
        this.type = false;
        this.id = this.ionicAuthService.getUid();
        this.uid = this.ionicAuthService.getUid();
        this.initForm();
    }
    ngOnInit() {
    }
    // Upload photo
    uploadPhoto(event) {
        this.barStatus = true;
        this.firebaseUploadService.storeImage(event.target.files[0]).then((res) => {
            if (res) {
                console.log(res);
                this.imageUrl = res;
                this.imageUploads = [];
                this.imageUploads.unshift(res);
                this.barStatus = false;
            }
        }, (error) => {
            this.errorMessage = 'File size exceeded. Maximum file size 1 MB';
            this.barStatus = false;
        });
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required] }),
        });
    }
    changeType() {
        this.type = !this.type;
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.form.valid) {
                this.form.markAllAsTouched();
                return;
            }
            if (this.imageUrl === '') {
                this.errorMessage = 'You must upload an image for your storefront to proceed.';
                return;
            }
            this.isLoading = true;
            console.log(this.form.value);
            yield this.uploadStoreDetails(this.form.value);
            yield this.createTrackSales();
            yield this.createTrackOrders();
            this.isLoading = false;
            yield this.showAlert('Creation Success', 'Your online store ' + this.form.value.name + ' has been created');
        });
    }
    uploadStoreDetails(formValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-underscore-dangle
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(this._firestore, `stores/${(this.uid)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.setDoc)(dataRef, {
                name: formValue.name,
                imageUrl: this.imageUrl,
                id: this.uid,
            });
        });
    }
    createTrackSales() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(this._firestore, `trackSales/${(this.uid)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.setDoc)(dataRef, {
                id: this.uid,
            });
        });
    }
    createTrackOrders() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(this._firestore, `trackOrders/${(this.uid)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.setDoc)(dataRef, {
                id: this.uid,
            });
        });
    }
    back() {
        this.router.navigateByUrl('tabs/account', { replaceUrl: true });
    }
    showAlert(header, message) {
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
StartSellingPage.ctorParameters = () => [
    { type: _services_cafe_firebase_upload_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseUploadService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.Firestore },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
StartSellingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-start-selling',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_start_selling_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_start_selling_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StartSellingPage);



/***/ }),

/***/ 35491:
/*!*************************************************************!*\
  !*** ./src/app/pages/start-selling/start-selling.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC1zZWxsaW5nLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_start-selling_start-selling_module_ts.js.map