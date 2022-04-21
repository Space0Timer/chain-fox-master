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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-text>Cancel</ion-text>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button\n        *ngIf=\"!isLoading\"\n        color=\"primary\"\n        (click)=\"onSubmit()\">\n        <ion-text style=\"font-weight: bold\">Confirm</ion-text>\n      </ion-button>\n      <ion-button\n        *ngIf=\"isLoading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\">\n  <div class=\"ion-padding\">\n    <ion-row style=\"padding-left: 0\">\n      <ion-col size=\"10\">\n        <ion-text  color=\"primary\" style=\"font-size: 26px; font-weight: bold\">Add New Item</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-card>\n      <div class=\"ion-padding\">\n    <div>\n      <form method=\"post\" enctype=\"multipart/form-data\">\n        <div>\n          <div><b>Upload a photo for your item.</b></div><br/>\n          <input type=\"file\" (change)=\"uploadPhoto($event)\" accept=\".png,.jpg\" multiple=\"true\"/>\n          <div *ngIf=\"errorMessage\">\n            <ion-text color=\"danger\">\n              <ion-text\n                class=\"error\">* {{errorMessage}}</ion-text>\n            </ion-text>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div *ngIf=\"barStatus\">\n      Uploading.....\n    </div>\n    <div id=\"photoPreview\">\n      <div *ngFor=\"let image of imageUploads\">\n        <img loading=\"lazy\" [src]=\"image\" class=\"preview\"/>\n      </div>\n    </div>\n      </div>\n    </ion-card>\n    <form [formGroup]=\"form\" class=\"ion-margin\">\n      <div class=\"ion-margin-vertical\">\n        <ion-item lines=\"full\">\n          <ion-input formControlName=\"name\" [type]=\"type ? 'text' : 'text'\" placeholder=\"Enter item name\"></ion-input>\n        </ion-item>\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"!form.get('name').valid && form.get('name').touched\">\n          <ion-text\n            class=\"error\"\n            *ngIf=\"form.get('name').hasError('required')\">\n            * Please enter the store name\n          </ion-text>\n        </ion-text>\n      </div>\n      <div class=\"ion-margin-vertical\">\n        <ion-item lines=\"full\">\n          <ion-input formControlName=\"price\" [type]=\"type ? 'number' : 'number'\" placeholder=\"Enter price\"></ion-input>\n        </ion-item>\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"!form.get('price').valid && form.get('price').touched\">\n          <ion-text\n            class=\"error\"\n            *ngIf=\"form.get('price').hasError('required')\">\n            * Please enter the price\n          </ion-text>\n        </ion-text>\n      </div>\n      <div class=\"ion-margin-vertical\">\n        <ion-item lines=\"full\">\n          <ion-input formControlName=\"category\" [type]=\"type ? 'text' : 'text'\" placeholder=\"Enter category\"></ion-input>\n        </ion-item>\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"!form.get('category').valid && form.get('category').touched\">\n          <ion-text\n            class=\"error\"\n            *ngIf=\"form.get('category').hasError('required')\">\n            * Please enter the category\n          </ion-text>\n        </ion-text>\n        <div class=\"ion-margin-vertical\">\n          <ion-item lines=\"full\">\n            <ion-input formControlName=\"description\" [type]=\"type ? 'text' : 'text'\" placeholder=\"Enter description\"></ion-input>\n          </ion-item>\n          <ion-text\n            color=\"danger\"\n            *ngIf=\"!form.get('description').valid && form.get('description').touched\">\n            <ion-text\n              class=\"error\"\n              *ngIf=\"form.get('description').hasError('required')\">\n              * Please enter the description\n            </ion-text>\n          </ion-text>\n        </div>\n      </div>\n    </form>\n    <ion-item *ngFor=\"let customOption of this.product.customOptions\">\n      <div class=\"title\">\n        <h2 color=\"primary\">Current Customisation</h2>\n      </div>\n      <ion-card mode=\"ios\" class=\"ion-padding\">\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-card-title style=\"font-size: 18px; padding-top: 3px\" >{{customOption.name}}</ion-card-title>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-right\">\n            <ion-buttons>\n              <ion-button (click)=\"openCustomiseOrderModal(customOption.name)\">\n                <ion-icon name=\"pencil-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-item>\n  </div>\n</ion-content>\n\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-item.component.html */ 15936);
/* harmony import */ var _add_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-item.component.scss */ 30552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_cafe_firebase_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/cafe/firebase-upload.service */ 53727);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _customise_order_customise_order_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customise-order/customise-order.page */ 87016);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/cafe/product.service */ 41575);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/storage.service */ 17208);














let AddItemComponent = class AddItemComponent {
    constructor(firebaseUploadService, router, _firestore, ionicAuthService, afs, modalController, alertController, product, storage) {
        this.firebaseUploadService = firebaseUploadService;
        this.router = router;
        this._firestore = _firestore;
        this.ionicAuthService = ionicAuthService;
        this.afs = afs;
        this.modalController = modalController;
        this.alertController = alertController;
        this.product = product;
        this.storage = storage;
        this.barStatus = false;
        this.errorMessage = '';
        this.imageUploads = [];
        this.name = '';
        this.type = false;
        this.imageUrl = '';
        this.foodStore = [];
        this.object = Object;
        this.uid = this.ionicAuthService.getUid();
        this.initForm();
    }
    ngOnInit() {
    }
    openCustomiseOrderModal(nameInput) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const name = nameInput;
            for (const key in this.product.customOptions) {
                if (this.product.customOptions[key].name === name) {
                    this.product.customOption = this.product.customOptions[key].data;
                    console.log(this.product.customOption);
                    this.product.customNew = false;
                }
            }
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
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required] }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required] }),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required] }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required] }), // added email validator also
        });
    }
    changeType() {
        this.type = !this.type;
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
            yield this.modalController.dismiss();
        });
    }
    uploadStoreDetails(formValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-underscore-dangle
            const pushKey = this.afs.createId();
            let dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(this._firestore, `stores/${(this.uid)}/items/${(pushKey)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.setDoc)(dataRef, {
                name: formValue.name,
                price: formValue.price,
                category: formValue.category,
                description: formValue.description,
                imageUrl: this.imageUrl,
                status: 'available',
                id: pushKey
            });
            dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(this._firestore, `idOwner/${(pushKey)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.setDoc)(dataRef, {
                owner: this.uid,
            });
            // create categories
            dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(this._firestore, `stores/${(this.uid)}/categories/${(formValue.category)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.setDoc)(dataRef, {
                name: formValue.category,
            });
            // add items to categories
            yield this.afs.collection(`stores/${(this.uid)}/categories/`).doc(formValue.category).update({
                [pushKey]: 1,
            });
            dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(this._firestore, `idOwner/${(pushKey)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.setDoc)(dataRef, {
                owner: this.uid,
            });
            if (this.product.customOptions !== []) {
                for (const key in this.product.customOptions) {
                    dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(this._firestore, `stores/${(this.uid)}/items/${(pushKey)}/options/${(this.product.customOptions[key].name)}`);
                    yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.setDoc)(dataRef, this.product.customOptions[key].data);
                }
            }
        });
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    showAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.Firestore },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService }
];
AddItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-add-item',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_item_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_item_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddItemComponent);



/***/ }),

/***/ 30552:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/modal/add-item/add-item.component.scss ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 0px 0px 10px;\n}\n.title h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFDSiIsImZpbGUiOiJhZGQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_components_modal_add-item_add-item_component_ts.js.map