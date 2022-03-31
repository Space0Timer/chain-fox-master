"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shared_components_modal_add-item_add-item_module_ts"],{

/***/ 59269:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/modal/add-item/add-item-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddItemPageRoutingModule": () => (/* binding */ AddItemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _add_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-item.component */ 57697);




const routes = [
    {
        path: '',
        component: _add_item_component__WEBPACK_IMPORTED_MODULE_0__.AddItemComponent
    }
];
let AddItemPageRoutingModule = class AddItemPageRoutingModule {
};
AddItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddItemPageRoutingModule);



/***/ }),

/***/ 14782:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/modal/add-item/add-item.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddItemPageModule": () => (/* binding */ AddItemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _add_item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-item-routing.module */ 59269);
/* harmony import */ var _add_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-item.component */ 57697);







let AddItemPageModule = class AddItemPageModule {
};
AddItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_item_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddItemPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_add_item_component__WEBPACK_IMPORTED_MODULE_1__.AddItemComponent]
    })
], AddItemPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_shared_components_modal_add-item_add-item_module_ts.js.map