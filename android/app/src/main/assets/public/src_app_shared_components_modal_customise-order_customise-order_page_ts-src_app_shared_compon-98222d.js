"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shared_components_modal_customise-order_customise-order_page_ts-src_app_shared_compon-98222d"],{

/***/ 93011:
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/modal/customise-order/customise-order.page.html ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Name: {{this.name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card mode=\"ios\" class=\"ion-padding\" *ngIf=\"this.product.customNew\">\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-card-title style=\"font-size: 18px; padding-top: 3px\" >Edit Customisation Name</ion-card-title>\n      </ion-col>\n      <ion-col size=\"2\" class=\"ion-text-right\">\n        <ion-buttons>\n          <ion-button  (click)=\"addName()\">\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-list lines=\"none\">\n    <form [formGroup]=\"form\">\n      <ion-item *ngFor=\"let control of form.controls | keyvalue\">\n        <ion-input requiredtype=\"text\" [formControlName]=\"control.key\" placeHolder=\"option names...\"></ion-input>\n        <ion-icon (click)=\"removeControl(control)\" name=\"close-circle\"></ion-icon>\n      </ion-item>\n    </form>\n  </ion-list>\n\n  <ion-button expand=\"full\" color=\"light\" (click)=\"addControl()\">Add Option</ion-button>\n  <div class=\"ion-margin-horizontal\">\n    <ion-button\n      *ngIf=\"!isLoading\"\n      size=\"large\"\n      expand=\"block\"\n      shape=\"round\"\n      color=\"primary\" (click)=\"submitRequest()\">\n      Confirm\n    </ion-button>\n    <ion-button\n      *ngIf=\"isLoading\"\n      size=\"large\"\n      expand=\"block\"\n      shape=\"round\"\n      color=\"primary\">\n      <ion-spinner></ion-spinner>\n    </ion-button>\n  </div>\n</ion-content>\n");

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
    constructor(formBuilder, modalController, product, alertController) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.product = product;
        this.alertController = alertController;
        this.customOptions = [];
        this.isLoading = false;
        this.type = false;
        this.name = 'Not set';
        this.optionCount = 1;
    }
    ionViewWillEnter() {
        this.init();
    }
    init() {
        if (this.product.customOption.length === 0) {
            this.form = this.formBuilder.group({
                1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
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
            const group = {};
            for (let i = 0; i < keys.length; i++) {
                group[`${keys[i]}`] = [temp.get(`${keys[i]}`), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required];
            }
            this.optionCount = keys.length + 1;
            group[`${this.optionCount}`] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required];
            this.form = this.formBuilder.group(group);
            this.product.customOption = [];
            this.product.customOptions = [];
        }
    }
    addName() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            this.name = data.name;
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    addControl() {
        this.optionCount++;
        this.form.addControl(String(this.optionCount), new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required));
    }
    removeControl(control) {
        this.form.removeControl(control.key);
    }
    submitRequest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.product.customOptions = [];
            this.product.customOption = [];
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
                this.isLoading = false;
            }
            else {
                yield this.showAlert('Invalid name', 'Please set the name of your customisation.');
            }
        });
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.product.customNew = true;
            yield this.modalController.dismiss();
        });
    }
    showAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
CustomiseOrderPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
CustomiseOrderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-customise-order',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customise_order_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_customise_order_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomiseOrderPage);



/***/ }),

/***/ 44479:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/modal/edit-item/edit-item-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditItemPageRoutingModule": () => (/* binding */ EditItemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _edit_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-item.component */ 36122);




const routes = [
    {
        path: '',
        component: _edit_item_component__WEBPACK_IMPORTED_MODULE_0__.EditItemComponent
    }
];
let EditItemPageRoutingModule = class EditItemPageRoutingModule {
};
EditItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditItemPageRoutingModule);



/***/ }),

/***/ 91321:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/modal/edit-item/edit-item.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditItemModule": () => (/* binding */ EditItemModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _edit_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-item.component */ 36122);
/* harmony import */ var _edit_item_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-item-routing.module */ 44479);







let EditItemModule = class EditItemModule {
};
EditItemModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_item_routing_module__WEBPACK_IMPORTED_MODULE_1__.EditItemPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_edit_item_component__WEBPACK_IMPORTED_MODULE_0__.EditItemComponent]
    })
], EditItemModule);



/***/ }),

/***/ 25734:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/modal/customise-order/customise-order.page.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21pc2Utb3JkZXIucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_shared_components_modal_customise-order_customise-order_page_ts-src_app_shared_compon-98222d.js.map