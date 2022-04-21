"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_shared_components_modal_edit-item_edit-item_component_ts"],{

/***/ 51300:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/modal/edit-item/edit-item.component.html ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-text>Cancel</ion-text>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n    <ion-button\n      *ngIf=\"!isLoading\"\n      color=\"primary\"\n      (click)=\"onSubmit()\">\n      <ion-text style=\"font-weight: bold\">Confirm</ion-text>\n    </ion-button>\n    <ion-button\n      *ngIf=\"isLoading\"\n      >\n      <ion-spinner color=\"primary\"></ion-spinner>\n    </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\">\n  <div class ='ion-padding'>\n  <ion-row style=\"padding-left: 0\">\n    <ion-col size=\"10\">\n      <ion-text  color=\"primary\" style=\"font-size: 26px; font-weight: bold\">Your Item</ion-text>\n    </ion-col>\n  </ion-row>\n  <div class=\"ion-margin-horizontal\">\n    <form [formGroup]=\"form\" class=\"ion-margin\">\n      <div class=\"ion-margin-vertical\">\n        <ion-item lines=\"full\">\n          <ion-input formControlName=\"name\" [type]=\"type ? 'text' : 'text'\" placeholder=\"Enter item name\" ngModel=\"{{this.product.editItemName}}\"></ion-input>\n        </ion-item>\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"!form.get('name').valid && form.get('name').touched\">\n          <ion-text\n            class=\"error\"\n            *ngIf=\"form.get('name').hasError('required')\">\n            * Please enter the store name\n          </ion-text>\n        </ion-text>\n      </div>\n      <div class=\"ion-margin-vertical\">\n        <ion-item lines=\"full\">\n          <ion-input formControlName=\"price\" [type]=\"type ? 'number' : 'number'\" ngModel=\"{{this.product.editItemPrice}}\" placeholder=\"Enter price\"></ion-input>\n        </ion-item>\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"!form.get('price').valid && form.get('price').touched\">\n          <ion-text\n            class=\"error\"\n            *ngIf=\"form.get('price').hasError('required')\">\n            * Please enter the price\n          </ion-text>\n        </ion-text>\n      </div>\n        <div class=\"ion-margin-vertical\">\n          <ion-item lines=\"full\">\n            <ion-input formControlName=\"description\" [type]=\"type ? 'text' : 'text'\" ngModel=\"{{this.product.editItemDescription}}\" placeholder=\"Enter description\"></ion-input>\n          </ion-item>\n          <ion-text\n            color=\"danger\"\n            *ngIf=\"!form.get('description').valid && form.get('description').touched\">\n            <ion-text\n              class=\"error\"\n              *ngIf=\"form.get('description').hasError('required')\">\n              * Please enter the description\n            </ion-text>\n          </ion-text>\n        </div>\n    </form>\n    <ion-card mode=\"ios\" class=\"ion-padding\">\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-card-title style=\"font-size: 18px; padding-top: 3px\" >Order customisation</ion-card-title>\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-right\">\n          <ion-buttons>\n            <ion-button  (click)=\"openCustomiseOrderModal('')\">\n              <ion-icon name=\"add-circle-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-row style=\"padding-left: 0\">\n      <ion-col size=\"10\">\n        <ion-text  color=\"primary\" style=\"font-size: 26px; font-weight: bold\">Current Customisation</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-item *ngFor=\"let customOption of this.product.customOptions\">\n      <ion-card mode=\"ios\" class=\"ion-padding\">\n        <ion-row>\n          <ion-col>\n            <ion-card-title style=\"font-size: 18px; padding-top: 3px\" >{{customOption.name}}</ion-card-title>\n          </ion-col>\n          <ion-col class=\"ion-text-right\">\n            <ion-buttons>\n              <ion-button (click)=\"openCustomiseOrderModal(customOption.name)\">\n                <ion-icon name=\"pencil-outline\"></ion-icon>\n              </ion-button>\n              <ion-button (click)=\"deleteCustomisation(customOption.name)\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-item>\n      </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 36122:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/modal/edit-item/edit-item.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditItemComponent": () => (/* binding */ EditItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-item.component.html */ 51300);
/* harmony import */ var _edit_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-item.component.scss */ 87246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ 50947);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _services_cafe_firebase_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/cafe/firebase-upload.service */ 53727);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/cafe/product.service */ 41575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _customise_order_customise_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customise-order/customise-order.page */ 87016);














let EditItemComponent = class EditItemComponent {
    constructor(firebaseUploadService, router, _firestore, ionicAuthService, afs, product, modalController, alertController) {
        this.firebaseUploadService = firebaseUploadService;
        this.router = router;
        this._firestore = _firestore;
        this.ionicAuthService = ionicAuthService;
        this.afs = afs;
        this.product = product;
        this.modalController = modalController;
        this.alertController = alertController;
        this.barStatus = false;
        this.errorMessage = '';
        this.imageUploads = [];
        this.name = '';
        this.type = false;
        this.imageUrl = '';
        this.object = Object;
        this.uid = this.ionicAuthService.getUid();
        this.initForm();
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getOptionFromFirebase();
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
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required] }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required] }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required] }),
        });
    }
    getOptionFromFirebase() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.product.customOptions = [];
            this.product.customOption = [];
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.collection)(this._firestore, 'stores/' + this.uid + '/items/' + this.product.editItemId + '/options');
            const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.query)(dataRef);
            const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.getDocs)(q);
            querySnapshot.forEach((docu) => {
                const data = docu.data();
                console.log(data);
                this.product.customOption = data;
                // delete duplicates
                if (this.product.customOptions.length === 0) {
                    this.product.customOptions.push({
                        name: this.product.customOption.name,
                        data: this.product.customOption,
                        checked: false
                    });
                }
                else {
                    for (const key in this.product.customOptions) {
                        if (this.product.customOptions[key].name !== this.product.customOption.name) {
                            this.product.customOptions.push({
                                name: this.product.customOption.name,
                                data: this.product.customOption,
                                checked: false
                            });
                        }
                        else {
                            this.product.customOptions[key].data = this.product.customOption;
                        }
                    }
                }
            });
        });
    }
    changeType() {
        this.type = !this.type;
    }
    deleteCustomisation(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.afs.collection(`stores/${(this.uid)}/items/${(this.product.editItemId)}/options`).doc(id).delete();
            yield this.ionViewWillEnter();
        });
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.form.value);
            this.errorMessage = '';
            if (!this.form.valid) {
                this.form.markAllAsTouched();
                return;
            }
            this.isLoading = true;
            yield this.edit(this.product.editItemId);
            yield this.showAlert('Editing Item', 'Item successfully edited.');
            this.isLoading = false;
            yield this.modalController.dismiss();
        });
    }
    edit(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.afs.collection(`stores/${(this.uid)}/items`).doc(id.split('@')[0]).update({
                name: this.form.value.name,
                price: this.form.value.price,
                description: this.form.value.description,
                lastUpdate: firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.FieldValue.serverTimestamp()
            });
        });
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
                component: _customise_order_customise_order_page__WEBPACK_IMPORTED_MODULE_6__.CustomiseOrderPage,
                swipeToClose: true,
                presentingElement: yield this.modalController.getTop()
            });
            yield modal.present();
            yield modal.onDidDismiss().then(r => {
                this.ionViewWillEnter();
            });
        });
    }
};
EditItemComponent.ctorParameters = () => [
    { type: _services_cafe_firebase_upload_service__WEBPACK_IMPORTED_MODULE_4__.FirebaseUploadService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.Firestore },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController }
];
EditItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-edit-item',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_item_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_item_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditItemComponent);



/***/ }),

/***/ 87246:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/modal/edit-item/edit-item.component.scss ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_components_modal_edit-item_edit-item_component_ts.js.map