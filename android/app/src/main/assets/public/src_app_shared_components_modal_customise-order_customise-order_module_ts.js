"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shared_components_modal_customise-order_customise-order_module_ts"],{

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



/***/ })

}]);
//# sourceMappingURL=src_app_shared_components_modal_customise-order_customise-order_module_ts.js.map