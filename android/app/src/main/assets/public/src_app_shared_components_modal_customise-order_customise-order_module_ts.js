"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shared_components_modal_customise-order_customise-order_module_ts"],{

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

/***/ 55293:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/modal/customise-order/customise-order-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomiseOrderPageRoutingModule": () => (/* binding */ CustomiseOrderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _customise_order_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customise-order.page */ 87016);




const routes = [
    {
        path: '',
        component: _customise_order_page__WEBPACK_IMPORTED_MODULE_0__.CustomiseOrderPage
    }
];
let CustomiseOrderPageRoutingModule = class CustomiseOrderPageRoutingModule {
};
CustomiseOrderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomiseOrderPageRoutingModule);



/***/ }),

/***/ 98318:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/modal/customise-order/customise-order.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomiseOrderPageModule": () => (/* binding */ CustomiseOrderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _customise_order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customise-order-routing.module */ 55293);
/* harmony import */ var _customise_order_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customise-order.page */ 87016);







let CustomiseOrderPageModule = class CustomiseOrderPageModule {
};
CustomiseOrderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _customise_order_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomiseOrderPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_customise_order_page__WEBPACK_IMPORTED_MODULE_1__.CustomiseOrderPage]
    })
], CustomiseOrderPageModule);



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

/***/ 25734:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/modal/customise-order/customise-order.page.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21pc2Utb3JkZXIucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_shared_components_modal_customise-order_customise-order_module_ts.js.map