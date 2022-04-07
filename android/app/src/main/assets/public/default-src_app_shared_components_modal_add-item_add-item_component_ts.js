"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_shared_components_modal_add-item_add-item_component_ts"],{

/***/ 15936:
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/modal/add-item/add-item.component.html ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Add New Item</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\">\n  <div class=\"ion-padding\">\n    <form [formGroup]=\"form\" class=\"ion-margin\">\n      <div class=\"ion-margin-vertical\">\n        <ion-item lines=\"full\">\n          <ion-input formControlName=\"name\" [type]=\"type ? 'text' : 'text'\" placeholder=\"Enter item name\"></ion-input>\n        </ion-item>\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"!form.get('name').valid && form.get('name').touched\">\n          <ion-text\n            class=\"error\"\n            *ngIf=\"form.get('name').hasError('required')\">\n            * Please enter the store name\n          </ion-text>\n        </ion-text>\n      </div>\n      <div class=\"ion-margin-vertical\">\n        <ion-item lines=\"full\">\n          <ion-input formControlName=\"price\" [type]=\"type ? 'number' : 'number'\" placeholder=\"Enter price\"></ion-input>\n        </ion-item>\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"!form.get('price').valid && form.get('price').touched\">\n          <ion-text\n            class=\"error\"\n            *ngIf=\"form.get('price').hasError('required')\">\n            * Please enter the price\n          </ion-text>\n        </ion-text>\n      </div>\n      <div class=\"ion-margin-vertical\">\n        <ion-item lines=\"full\">\n          <ion-input formControlName=\"category\" [type]=\"type ? 'text' : 'text'\" placeholder=\"Enter category\"></ion-input>\n        </ion-item>\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"!form.get('category').valid && form.get('category').touched\">\n          <ion-text\n            class=\"error\"\n            *ngIf=\"form.get('category').hasError('required')\">\n            * Please enter the category\n          </ion-text>\n        </ion-text>\n        <div class=\"ion-margin-vertical\">\n          <ion-item lines=\"full\">\n            <ion-input formControlName=\"description\" [type]=\"type ? 'text' : 'text'\" placeholder=\"Enter description\"></ion-input>\n          </ion-item>\n          <ion-text\n            color=\"danger\"\n            *ngIf=\"!form.get('description').valid && form.get('description').touched\">\n            <ion-text\n              class=\"error\"\n              *ngIf=\"form.get('description').hasError('required')\">\n              * Please enter the description\n            </ion-text>\n          </ion-text>\n        </div>\n      </div>\n    </form>\n    <ion-card mode=\"ios\" class=\"ion-padding\">\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-card-title style=\"font-size: 18px; padding-top: 3px\" >Order customisation</ion-card-title>\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-right\">\n          <ion-buttons>\n            <ion-button  (click)=\"openCustomiseOrderModal()\">\n              <ion-icon name=\"add-circle-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <div>\n      <form method=\"post\" enctype=\"multipart/form-data\">\n        <div>\n          <div><b>Upload a photo for your item.</b></div><br/>\n          <input type=\"file\" (change)=\"uploadPhoto($event)\" accept=\".png,.jpg\" multiple=\"true\"/>\n          <div *ngIf=\"errorMessage\">\n            <ion-text color=\"danger\">\n              <ion-text\n                class=\"error\">* {{errorMessage}}</ion-text>\n            </ion-text>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div *ngIf=\"barStatus\">\n      Uploading.....\n    </div>\n\n    <div id=\"photoPreview\">\n      <div *ngFor=\"let image of imageUploads\">\n        <img loading=\"lazy\" [src]=\"image\" class=\"preview\"/>\n      </div>\n    </div>\n\n    <ion-button\n      *ngIf=\"!isLoading\"\n      size=\"large\"\n      expand=\"block\"\n      shape=\"round\"\n      color=\"primary\"\n      (click)=\"onSubmit()\">\n      <ion-text>Confirm</ion-text>\n    </ion-button>\n    <ion-button\n      *ngIf=\"isLoading\"\n      size=\"large\"\n      expand=\"block\"\n      shape=\"round\"\n      color=\"primary\">\n      <ion-spinner></ion-spinner>\n    </ion-button>\n  </div>\n</ion-content>\n\n");

/***/ }),

/***/ 93011:
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/modal/customise-order/customise-order.page.html ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Add Customisation Options\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list lines=\"none\">\n    <form [formGroup]=\"form\">\n      <ion-item *ngFor=\"let control of form.controls | keyvalue\">\n        <ion-input requiredtype=\"text\" [formControlName]=\"control.key\" placeHolder=\"option names...\"></ion-input>\n        <ion-icon (click)=\"removeControl(control)\" name=\"close-circle\"></ion-icon>\n      </ion-item>\n    </form>\n  </ion-list>\n\n  <ion-button expand=\"full\" color=\"light\" (click)=\"addControl()\">Add Option</ion-button>\n  <div class=\"ion-margin-horizontal\">\n    <ion-button\n      *ngIf=\"!isLoading\"\n      size=\"large\"\n      expand=\"block\"\n      shape=\"round\"\n      color=\"primary\" (click)=\"submitRequest()\">\n      Confirm\n    </ion-button>\n    <ion-button\n      *ngIf=\"isLoading\"\n      size=\"large\"\n      expand=\"block\"\n      shape=\"round\"\n      color=\"primary\">\n      <ion-spinner></ion-spinner>\n    </ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 57697:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/modal/add-item/add-item.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddItemComponent": () => (/* binding */ AddItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-item.component.html */ 15936);
/* harmony import */ var _add_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-item.component.scss */ 30552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_cafe_firebase_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/cafe/firebase-upload.service */ 53727);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _customise_order_customise_order_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customise-order/customise-order.page */ 87016);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/cafe/product.service */ 41575);













let AddItemComponent = class AddItemComponent {
    constructor(firebaseUploadService, router, _firestore, ionicAuthService, afs, modalController, alertController, product) {
        this.firebaseUploadService = firebaseUploadService;
        this.router = router;
        this._firestore = _firestore;
        this.ionicAuthService = ionicAuthService;
        this.afs = afs;
        this.modalController = modalController;
        this.alertController = alertController;
        this.product = product;
        this.barStatus = false;
        this.errorMessage = '';
        this.imageUploads = [];
        this.name = '';
        this.type = false;
        this.imageUrl = '';
        this.foodStore = [];
        this.uid = this.ionicAuthService.getUid();
        this.initForm();
    }
    ngOnInit() {
    }
    openCustomiseOrderModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('test');
            const modal = yield this.modalController.create({
                component: _customise_order_customise_order_page__WEBPACK_IMPORTED_MODULE_4__.CustomiseOrderPage,
                swipeToClose: true,
                presentingElement: yield this.modalController.getTop()
            });
            return yield modal.present();
        });
    }
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
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] }),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] }), // added email validator also
        });
    }
    changeType() {
        this.type = !this.type;
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.form.valid) {
                this.form.markAllAsTouched();
                return;
            }
            if (this.imageUrl === '') {
                this.errorMessage = 'You must upload an image for your item to proceed.';
                return;
            }
            this.isLoading = true;
            console.log(this.form.value);
            yield this.uploadStoreDetails(this.form.value);
            yield this.showAlert('Adding Item', 'Item successfully added.');
            this.isLoading = false;
        });
    }
    uploadStoreDetails(formValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-underscore-dangle
            const pushKey = this.afs.createId();
            let dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(this._firestore, `stores/${(this.uid)}/items/${(pushKey)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.setDoc)(dataRef, {
                name: formValue.name,
                price: formValue.price,
                category: formValue.category,
                description: formValue.description,
                imageUrl: this.imageUrl,
                status: 'available',
                id: pushKey
            });
            dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(this._firestore, `idOwner/${(pushKey)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.setDoc)(dataRef, {
                owner: this.uid,
            });
            // create categories
            dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(this._firestore, `stores/${(this.uid)}/categories/${(formValue.category)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.setDoc)(dataRef, {
                name: formValue.category,
            });
            // add items to categories
            yield this.afs.collection(`stores/${(this.uid)}/categories/`).doc(formValue.category).update({
                [pushKey]: 1,
            });
            dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(this._firestore, `idOwner/${(pushKey)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.setDoc)(dataRef, {
                owner: this.uid,
            });
            if (this.product.customOptions !== []) {
                // create options
                const optionKey = this.afs.createId();
                dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(this._firestore, `stores/${(this.uid)}/items/${(pushKey)}/options/${(optionKey)}`);
                yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.setDoc)(dataRef, {
                    key: optionKey,
                });
                // add options to items
                yield this.afs.collection(`stores/${(this.uid)}/items/${(pushKey)}/options/`).doc(optionKey).update(this.product.customOptions);
                dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(this._firestore, `idOwner/${(pushKey)}`);
                yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.setDoc)(dataRef, {
                    owner: this.uid,
                });
            }
        });
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
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
};
AddItemComponent.ctorParameters = () => [
    { type: _services_cafe_firebase_upload_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseUploadService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.Firestore },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService }
];
AddItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-add-item',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_item_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_item_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddItemComponent);



/***/ }),

/***/ 87016:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/modal/customise-order/customise-order.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomiseOrderPage": () => (/* binding */ CustomiseOrderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customise_order_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./customise-order.page.html */ 93011);
/* harmony import */ var _customise_order_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customise-order.page.scss */ 25734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/cafe/product.service */ 41575);







let CustomiseOrderPage = class CustomiseOrderPage {
    constructor(formBuilder, modalController, product) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.product = product;
        this.customOptions = [];
        this.isLoading = false;
        this.optionCount = 1;
        this.form = formBuilder.group({
            1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    ngOnInit() {
    }
    addControl() {
        this.optionCount++;
        this.form.addControl(String(this.optionCount), new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required));
    }
    removeControl(control) {
        this.form.removeControl(control.key);
    }
    submitRequest() {
        const optionCount = this.optionCount;
        this.isLoading = true;
        delete this.form.value[optionCount];
        this.product.customOptions = this.form.value;
        this.isLoading = false;
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
CustomiseOrderPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService }
];
CustomiseOrderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-customise-order',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customise_order_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_customise_order_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomiseOrderPage);



/***/ }),

/***/ 30552:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/modal/add-item/add-item.component.scss ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 25734:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/modal/customise-order/customise-order.page.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21pc2Utb3JkZXIucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_components_modal_add-item_add-item_component_ts.js.map