"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_shared_components_modal_customise-order_customise-order_page_ts"],{

/***/ 93011:
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/modal/customise-order/customise-order.page.html ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-text>Cancel</ion-text>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button\n        *ngIf=\"!isLoading\"\n        color=\"primary\" (click)=\"submitRequest()\">\n        <ion-text style=\"font-weight: bold\">Confirm</ion-text>\n      </ion-button>\n      <ion-button\n        *ngIf=\"isLoading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n  <ion-row style=\"padding-left: 0\">\n    <ion-col size=\"10\">\n      <ion-text  color=\"primary\" style=\"font-size: 26px; font-weight: bold\">Name: {{this.name}}</ion-text>\n    </ion-col>\n  </ion-row>\n  <ion-card mode=\"ios\" class=\"ion-padding\" *ngIf=\"this.product.customNew\">\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-card-title style=\"font-size: 18px; padding-top: 3px\" >Edit Customisation Name</ion-card-title>\n      </ion-col>\n      <ion-col size=\"2\" class=\"ion-text-right\">\n        <ion-buttons>\n          <ion-button  (click)=\"addName()\">\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-list lines=\"none\">\n    <form [formGroup]=\"form\">\n      <ion-item *ngFor=\"let control of form.controls | keyvalue\">\n        <ion-input requiredtype=\"text\" [formControlName]=\"control.key\" placeHolder=\"option names...\"></ion-input>\n        <p style=\"color: #9ca3af; margin-inline: 10px\" *ngIf=\"this.prices.get(form.value[control.key])!==undefined\">Add on price: RM {{this.prices.get(form.value[control.key])}} </p>\n        <ion-icon *ngIf=\"form.value[control.key]!==''\" (click)=\"removeControl(control)\" name=\"close-circle\"></ion-icon>\n      </ion-item>\n    </form>\n  </ion-list>\n  <ion-button expand=\"full\" color=\"light\" (click)=\"addControl()\">Add Option</ion-button>\n  </div>\n</ion-content>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customise_order_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./customise-order.page.html */ 93011);
/* harmony import */ var _customise_order_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customise-order.page.scss */ 25734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ 68927);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/cafe/product.service */ 41575);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/storage.service */ 17208);










let CustomiseOrderPage = class CustomiseOrderPage {
    constructor(formBuilder, modalController, product, alertController, _firestore, ionicAuthService, storage) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.product = product;
        this.alertController = alertController;
        this._firestore = _firestore;
        this.ionicAuthService = ionicAuthService;
        this.storage = storage;
        this.customOptions = [];
        this.isLoading = false;
        this.type = false;
        this.name = 'Not set';
        this.group = {};
        this.optionCount = 1;
        this.addValue = false;
        this.uid = this.ionicAuthService.getUid();
        this.prices = new Map();
    }
    ionViewWillEnter() {
        this.init();
        this.product.customOption = [];
        this.product.customOptions = [];
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.product.customNew === true) {
                this.form = this.formBuilder.group({
                    1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]]
                });
            }
            else {
                const temp = new Map();
                this.name = this.product.customOption.name;
                for (const key in this.product.customOption) {
                    if (key !== 'name') {
                        temp.set(key, this.product.customOption[key]);
                    }
                }
                const keys = [...temp.keys()];
                for (let i = 0; i < keys.length; i++) {
                    // eslint-disable-next-line max-len
                    this.group[`${keys[i]}`] = [temp.get(`${keys[i]}`), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]];
                    const key = Number(keys[i]);
                    this.optionCount = key + 1;
                    // eslint-disable-next-line max-len
                }
                this.group[`${this.optionCount}`] = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]];
                this.form = this.formBuilder.group(this.group);
                for (let i = 0; i < keys.length; i++) {
                    // eslint-disable-next-line max-len
                    const key = this.name + this.form.value[keys[i]];
                    console.log(`stores/${(this.product.ownerId)}/items/${(this.product.editItemId)}/optionPrice/${(key)}`);
                    const optionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(this._firestore, `stores/${(this.uid)}/items/${(this.product.editItemId)}/optionPrice/${(key)}`);
                    const optSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(optionRef);
                    const optionSnap = optSnap.data().price;
                    console.log(this.form.value[keys[i]], optionSnap);
                    this.prices.set(this.form.value[keys[i]], optionSnap);
                    console.log(this.prices[this.form.value[keys[i]]]);
                }
            }
        });
    }
    refreshPrice(id, price) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.prices.set(id, price);
        });
    }
    addName() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Customisation name',
                inputs: [
                    {
                        name: 'name',
                        placeholder: 'Enter name',
                        type: 'text'
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
                            if (!data.name.match('^[a-zA-Z]+$')) {
                                yield this.showAlert('Invalid name.', 'Only characters a-z and A-Z are allowed.');
                            }
                            else if (!data.name.match('^.{6,}$')) {
                                yield this.showAlert('Invalid name.', 'Your customisation name must have at least 6 characters.');
                            }
                            else if (!data.name.match('^.{6,15}$')) {
                                yield this.showAlert('Invalid name.', 'Your customisation name must have at most 15 characters.');
                            }
                            else {
                                this.name = data.name;
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    addControl() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.value[this.optionCount] !== '') {
                if (!this.form.value[this.optionCount].match('^[a-zA-Z]+$')) {
                    yield this.showAlert('Invalid option.', 'Only characters a-z and A-Z are allowed.');
                }
                else if (!this.form.value[this.optionCount].match('^.{6,}$')) {
                    yield this.showAlert('Invalid option.', 'Your option must have at least 6 characters.');
                }
                else if (!this.form.value[this.optionCount].match('^.{6,15}$')) {
                    yield this.showAlert('Invalid option.', 'Your option must have at most 15 characters.');
                }
                else {
                    yield this.presentPrompt();
                }
            }
            else {
                yield this.showAlert('Invalid option.', 'Empty option not allowed!');
            }
        });
    }
    removeControl(control) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.cancelAlert('Remove option', 'Are you sure you want to remove this option?', control);
            // eslint-disable-next-line max-len
        });
    }
    submitRequest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.product.customOptions = [];
            this.product.customOption = [];
            let dataRef;
            if (this.name !== 'Not set') {
                const optionCount = this.optionCount;
                this.isLoading = true;
                delete this.form.value[optionCount];
                this.form.value.name = this.name;
                this.product.customOption = this.form.value;
                const temp = [];
                for (const key in this.product.customOption) {
                    if (key !== 'name') {
                        console.log(key);
                        temp.push(this.product.customOption[key]);
                    }
                }
                if (new Set(temp).size !== temp.length) {
                    yield this.showAlert('Invalid customisation', 'Duplication options are not permitted.');
                    this.isLoading = false;
                    return;
                }
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
                if (this.product.customOptions !== []) {
                    for (const key in this.product.customOptions) {
                        // eslint-disable-next-line max-len
                        dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(this._firestore, `stores/${(this.uid)}/items/${(this.product.editItemId)}/options/${(this.product.customOptions[key].name)}`);
                        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.setDoc)(dataRef, this.product.customOptions[key].data);
                    }
                    yield this.modalController.dismiss();
                }
                this.isLoading = false;
            }
            else {
                yield this.showAlert('Invalid name', 'Please set the name of your customisation.');
            }
        });
    }
    presentPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.optionCount);
            const alert = yield this.alertController.create({
                header: 'Enter price',
                inputs: [
                    {
                        name: 'price',
                        placeholder: 'Enter price',
                        type: 'number'
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
                            console.log(data.price);
                            const key = this.name + this.form.value[this.optionCount];
                            console.log(`stores/${(this.uid)}/items/${(this.product.editItemId)}/optionPrice/${(key)}`);
                            const trackOrderRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(this._firestore, `stores/${(this.uid)}/items/${(this.product.editItemId)}/optionPrice/${(key)}`);
                            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.setDoc)(trackOrderRef, {
                                price: data.price
                            });
                            yield this.refreshPrice(this.form.value[this.optionCount], data.price);
                            // eslint-disable-next-line max-len
                            this.optionCount++;
                            // eslint-disable-next-line max-len
                            while (this.form.value[this.optionCount] !== undefined) {
                                this.optionCount++;
                            }
                            // eslint-disable-next-line max-len
                            this.form.addControl(String(this.optionCount), new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]));
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.product.customNew = true;
            yield this.modalController.dismiss();
        });
    }
    showAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Confirm',
                    }],
            });
            yield alert.present();
        });
    }
    cancelAlert(header, message, control) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
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
                        handler: data => {
                            this.form.removeControl(control.key);
                            // eslint-disable-next-line max-len
                            this.form.addControl(String(this.optionCount), new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]));
                        }
                    }
                ],
            });
            yield alert.present();
        });
    }
};
CustomiseOrderPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.Firestore },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService }
];
CustomiseOrderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-customise-order',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customise_order_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_customise_order_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomiseOrderPage);



/***/ }),

/***/ 25734:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/modal/customise-order/customise-order.page.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21pc2Utb3JkZXIucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_components_modal_customise-order_customise-order_page_ts.js.map