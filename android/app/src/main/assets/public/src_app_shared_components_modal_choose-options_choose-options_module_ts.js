"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shared_components_modal_choose-options_choose-options_module_ts"],{

/***/ 77531:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/modal/choose-options/choose-options-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseOptionsPageRoutingModule": () => (/* binding */ ChooseOptionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _choose_options_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-options.page */ 17542);




const routes = [
    {
        path: '',
        component: _choose_options_page__WEBPACK_IMPORTED_MODULE_0__.ChooseOptionsPage
    }
];
let ChooseOptionsPageRoutingModule = class ChooseOptionsPageRoutingModule {
};
ChooseOptionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChooseOptionsPageRoutingModule);



/***/ }),

/***/ 26564:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/modal/choose-options/choose-options.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseOptionsPageModule": () => (/* binding */ ChooseOptionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _choose_options_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-options-routing.module */ 77531);
/* harmony import */ var _choose_options_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-options.page */ 17542);







let ChooseOptionsPageModule = class ChooseOptionsPageModule {
};
ChooseOptionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _choose_options_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChooseOptionsPageRoutingModule
        ],
        declarations: [_choose_options_page__WEBPACK_IMPORTED_MODULE_1__.ChooseOptionsPage]
    })
], ChooseOptionsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_shared_components_modal_choose-options_choose-options_module_ts.js.map