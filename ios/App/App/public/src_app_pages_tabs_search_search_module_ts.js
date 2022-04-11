"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_search_search_module_ts"],{

/***/ 83027:
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tabs/search/search.page.html ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      <ion-button (click) = \"qrCode()\">\n        <ion-icon name=\"qr-code\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"title\">\n        <img style=\"height: 30px\" src='assets/header/chainfoxsend.png'>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"chat()\">\n        <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"logOut()\">\n        <ion-icon name=\"lock-closed\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar animated=\"true\" debounce=\"800\" placeholder=\"Enter username\" show-cancel-button=\"focus\" (ionChange)=\"_ionChange($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-spinner *ngIf=\"spinner\"></ion-spinner>\n    <div class=\"default-top-padding title\" *ngIf=\"notFound\">\n      <h2>User not found</h2>\n    </div>\n    <ion-list  *ngIf=\"this.iroha.otherWallet.name !== ''\">\n      <ion-item routerLink=\"/user-details\">\n        <ion-label>{{this.iroha.otherWallet.name}}</ion-label>\n      </ion-item>\n    </ion-list>\n    <div class=\"default-top-padding title\">\n      <h2>Most Frequent Receivers</h2>\n    </div>\n    <ion-list *ngFor=\"let fav of fav\">\n      <ion-item *ngIf=\"fav!==''\" routerLink=\"/test\" (click)=\"frequentReceivers(fav)\">\n        <ion-label >{{fav}}</ion-label>\n      </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 88114:
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/search/search-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 92476);




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ 52691:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/search/search.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 88114);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 92476);







let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule,
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 92476:
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/search/search.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search.page.html */ 83027);
/* harmony import */ var _search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.scss */ 87529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 68927);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/iroha.service */ 49187);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/storage.service */ 17208);










let SearchPage = class SearchPage {
    constructor(router, ionicAuthService, _firestore, navCtrl, navParams, iroha, storage) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this._firestore = _firestore;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iroha = iroha;
        this.storage = storage;
        this.fav = [];
        this.spinner = false;
        this.notFound = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.fav = [yield this.storage.get('favperson')];
            this.iroha.otherWallet.name = '';
        });
    }
    ionViewWillEnter() {
        setTimeout(() => {
            var _a;
            (_a = this.search) === null || _a === void 0 ? void 0 : _a.setFocus();
        });
    }
    chat() {
        this.router.navigate(['chat-list']);
    }
    frequentReceivers(fav) {
        this.iroha.otherWallet.name = fav;
        this.getRoute();
    }
    _ionChange(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.notFound = false;
            const val = event.target.value.toLowerCase();
            if (val.trim() !== this.iroha.otherWallet.name) {
                this.iroha.otherWallet.name = '';
            }
            if (val && val.trim() !== '') {
                this.spinner = true;
                yield this.iroha.setOtherName(val + '@test')
                    .then(r => this.spinner = false)
                    .catch(e => { this.spinner = false; this.notFound = true; });
                this.spinner = false;
            }
        });
    }
    getRoute() {
        this.router.navigate(['user-details']);
    }
    logOut() {
        this.ionicAuthService.logout()
            .then((response) => {
            this.errorMsg = '';
            this.successMsg = 'Logout successful.';
            this.goToLogin();
        }, error => {
            this.errorMsg = error.message;
            this.successMsg = '';
        });
    }
    goToLogin() {
        this.router.navigate(['auth-screen']);
    }
    qrCode() {
        this.router.navigate(['qr-code']);
    }
};
SearchPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.Firestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams },
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__.IrohaService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService }
];
SearchPage.propDecorators = {
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['search', { static: false },] }]
};
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-search',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchPage);



/***/ }),

/***/ 87529:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/search/search.page.scss ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".ios ion-searchbar {\n  margin-top: 1rem;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\nion-content .title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 100px 0px 0px 10px;\n  margin-top: 40px;\n}\n\nion-content .title h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n\nion-content .default-top-padding {\n  padding-top: 26px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQUFSOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBREY7O0FBS0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFHSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUROOztBQUtFO0VBQ0UsNEJBQUE7QUFISiIsImZpbGUiOiJzZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvcyB7XG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxufVxuXG4udGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwMHB4IDBweCAwcHggMTBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGgyIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICAuZGVmYXVsdC10b3AtcGFkZGluZyB7XG4gICAgcGFkZGluZy10b3A6IDI2cHggIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_search_search_module_ts.js.map