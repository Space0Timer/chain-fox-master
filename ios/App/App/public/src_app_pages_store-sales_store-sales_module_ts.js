"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_store-sales_store-sales_module_ts"],{

/***/ 73645:
/*!*****************************************************************!*\
  !*** ./src/app/pages/store-sales/store-sales-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreSalesPageRoutingModule": () => (/* binding */ StoreSalesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _store_sales_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-sales.page */ 83077);




const routes = [
    {
        path: '',
        component: _store_sales_page__WEBPACK_IMPORTED_MODULE_0__.StoreSalesPage
    }
];
let StoreSalesPageRoutingModule = class StoreSalesPageRoutingModule {
};
StoreSalesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoreSalesPageRoutingModule);



/***/ }),

/***/ 38948:
/*!*********************************************************!*\
  !*** ./src/app/pages/store-sales/store-sales.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreSalesPageModule": () => (/* binding */ StoreSalesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _store_sales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-sales-routing.module */ 73645);
/* harmony import */ var _store_sales_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-sales.page */ 83077);
/* harmony import */ var _track_sales_track_sales_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../track-sales/track-sales.module */ 85676);








let StoreSalesPageModule = class StoreSalesPageModule {
};
StoreSalesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _store_sales_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoreSalesPageRoutingModule,
            _track_sales_track_sales_module__WEBPACK_IMPORTED_MODULE_2__.TrackSalesPageModule
        ],
        declarations: [_store_sales_page__WEBPACK_IMPORTED_MODULE_1__.StoreSalesPage]
    })
], StoreSalesPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_store-sales_store-sales_module_ts.js.map