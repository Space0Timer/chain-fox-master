"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 13869:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tabs/tabs.page.html ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs  #tabs (ionTabsDidChange)=\"setCurrentTab($event)\">\n\n  <ion-fab [hidden]=\"hide\" vertical=\"bottom\" horizontal=\"center\" translucent=\"true\">\n    <ion-fab-button routerLink=\"/pay\" routerDirection=\"forward\">\n      <ion-icon name=\"scan-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon [name]=\"selectedTab === 'home' ? 'home' : 'home-outline'\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"search\">\n      <ion-icon [name]=\"selectedTab === 'search' ? 'search' : 'search-outline'\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button></ion-tab-button>\n    <ion-tab-button tab=\"cafe\">\n      <ion-icon [name]=\"selectedTab === 'cafe' ? 'restaurant' : 'restaurant-outline'\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"account\">\n      <ion-icon [name]=\"selectedTab === 'account' ? 'person' : 'person-outline'\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ 26757:
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/keyboard/dist/esm/definitions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardStyle": () => (/* binding */ KeyboardStyle),
/* harmony export */   "KeyboardResize": () => (/* binding */ KeyboardResize)
/* harmony export */ });
/// <reference types="@capacitor/cli" />
var KeyboardStyle;
(function (KeyboardStyle) {
    /**
     * Dark keyboard.
     *
     * @since 1.0.0
     */
    KeyboardStyle["Dark"] = "DARK";
    /**
     * Light keyboard.
     *
     * @since 1.0.0
     */
    KeyboardStyle["Light"] = "LIGHT";
    /**
     * On iOS 13 and newer the keyboard style is based on the device appearance.
     * If the device is using Dark mode, the keyboard will be dark.
     * If the device is using Light mode, the keyboard will be light.
     * On iOS 12 the keyboard will be light.
     *
     * @since 1.0.0
     */
    KeyboardStyle["Default"] = "DEFAULT";
})(KeyboardStyle || (KeyboardStyle = {}));
var KeyboardResize;
(function (KeyboardResize) {
    /**
     * Only the `body` HTML element will be resized.
     * Relative units are not affected, because the viewport does not change.
     *
     * @since 1.0.0
     */
    KeyboardResize["Body"] = "body";
    /**
     * Only the `ion-app` HTML element will be resized.
     * Use it only for Ionic Framework apps.
     *
     * @since 1.0.0
     */
    KeyboardResize["Ionic"] = "ionic";
    /**
     * The whole native Web View will be resized when the keyboard shows/hides.
     * This affects the `vh` relative unit.
     *
     * @since 1.0.0
     */
    KeyboardResize["Native"] = "native";
    /**
     * Neither the app nor the Web View are resized.
     *
     * @since 1.0.0
     */
    KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));


/***/ }),

/***/ 28126:
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/keyboard/dist/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardResize": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.KeyboardResize),
/* harmony export */   "KeyboardStyle": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.KeyboardStyle),
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 24249);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 26757);

const Keyboard = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Keyboard');




/***/ }),

/***/ 36912:
/*!*************************************************************************!*\
  !*** ./node_modules/@robingenz/capacitor-badge/dist/esm/definitions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />



/***/ }),

/***/ 96841:
/*!*******************************************************************!*\
  !*** ./node_modules/@robingenz/capacitor-badge/dist/esm/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Badge": () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 24249);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 36912);

const Badge = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Badge', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_robingenz_capacitor-badge_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 5467)).then(m => new m.BadgeWeb()),
});




/***/ }),

/***/ 42045:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 66613);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabs_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 77788)).then(m => m.HomePageModule)
            },
            {
                path: 'search',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search/search.module */ 52691)).then(m => m.SearchPageModule)
            },
            {
                path: 'pay',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabs_pay_pay_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pay/pay.module */ 97106)).then(m => m.PayPageModule)
            },
            {
                path: 'cafe',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_cafe_cafe_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cafe/cafe.module */ 63029)).then(m => m.CafePageModule)
            },
            {
                path: 'account',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 83755)).then(m => m.AccountPageModule)
            },
        ]
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 65966:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 42045);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 66613);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 66613:
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.page.html */ 13869);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 73081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/keyboard */ 28126);
/* harmony import */ var _robingenz_capacitor_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @robingenz/capacitor-badge */ 96841);






let TabsPage = class TabsPage {
    constructor() {
        this.hide = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
            const clear = () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield _robingenz_capacitor_badge__WEBPACK_IMPORTED_MODULE_3__.Badge.clear();
            });
            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.addListener('keyboardDidShow', info => {
                this.hide = true;
            });
            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.addListener('keyboardDidHide', () => {
                this.hide = false;
            });
        });
    }
    setCurrentTab($event) {
        this.selectedTab = this.tabs.getSelected();
    }
};
TabsPage.ctorParameters = () => [];
TabsPage.propDecorators = {
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['tabs', { static: false },] }]
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tabs',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 73081:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "ion-tabs ion-tab-bar ion-tab-button {\n  --background: var(--ion-color-white);\n  --color: var(--ion-color-medium);\n  --color-selected: var(--ion-color-dark);\n}\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  font-size: 1.5rem;\n}\nion-tabs ion-fab ion-fab-button {\n  --background: var(--ion-color-primary);\n  margin-bottom: 0;\n}\nion-tabs ion-fab ion-fab-button ion-icon {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0FBSE47QUFJTTtFQUNFLGlCQUFBO0FBRlI7QUFPSTtFQUNFLHNDQUFBO0VBRUEsZ0JBQUE7QUFOTjtBQU9NO0VBQ0UsZUFBQTtBQUxSIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYnMge1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tQ3VzdG9tIFNlbWkgVHJhbnNwYXJlbnQgJiBSb3VuZGVkIFRhYnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlvbi10YWItYmFyIHtcbiAgICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1mYWIge1xuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAvLyBmb250LXNpemU6IDRyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map