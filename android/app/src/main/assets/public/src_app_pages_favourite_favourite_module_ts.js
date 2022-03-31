"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_favourite_favourite_module_ts"],{

/***/ 29701:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/favourite/favourite.page.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"title\">Favourite</h1>\n\n  <ion-row class=\"favorite-items\">\n    <ng-container *ngFor=\"let fav of fav\">\n    <app-fav-card [fav]=\"fav\"></app-fav-card>\n    </ng-container>\n  </ion-row>\n  <div class = ion-padding>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click) = \"goToCart()\">\n    <ion-fab-button>\n      <ion-icon name=\"cart-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 16860:
/*!*************************************************************!*\
  !*** ./src/app/pages/favourite/favourite-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritePageRoutingModule": () => (/* binding */ FavouritePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _favourite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourite.page */ 64242);




const routes = [
    {
        path: '',
        component: _favourite_page__WEBPACK_IMPORTED_MODULE_0__.FavouritePage
    }
];
let FavouritePageRoutingModule = class FavouritePageRoutingModule {
};
FavouritePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavouritePageRoutingModule);



/***/ }),

/***/ 84643:
/*!*****************************************************!*\
  !*** ./src/app/pages/favourite/favourite.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritePageModule": () => (/* binding */ FavouritePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _favourite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourite-routing.module */ 16860);
/* harmony import */ var _favourite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourite.page */ 64242);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 54113);








let FavouritePageModule = class FavouritePageModule {
};
FavouritePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _favourite_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavouritePageRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_favourite_page__WEBPACK_IMPORTED_MODULE_1__.FavouritePage]
    })
], FavouritePageModule);



/***/ }),

/***/ 64242:
/*!***************************************************!*\
  !*** ./src/app/pages/favourite/favourite.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritePage": () => (/* binding */ FavouritePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favourite_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./favourite.page.html */ 29701);
/* harmony import */ var _favourite_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourite.page.scss */ 30187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);








let FavouritePage = class FavouritePage {
    constructor(router, afs, ionicAuthService, _firestore) {
        this.router = router;
        this.afs = afs;
        this.ionicAuthService = ionicAuthService;
        this._firestore = _firestore;
        this.fav = [];
        this.owner = '';
        this.id = this.ionicAuthService.getUid();
    }
    ngOnInit() {
        this.loadFav();
    }
    loadFav() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let data;
            // eslint-disable-next-line no-underscore-dangle
            const itemIdRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, `favourites/${(this.id)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(itemIdRef)
                .then(snap => { data = snap.data(); delete data.lastUpdate; delete data.id; });
            for (const key in data) {
                const idOwnerRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, `idOwner/${(key)}`);
                const idOwnerSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(idOwnerRef);
                const idOwnerName = idOwnerSnap.data();
                this.owner = idOwnerName.owner;
                const ownerRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, `stores/${(this.owner)}`);
                const ownerSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(ownerRef);
                const ownerName = ownerSnap.data();
                // eslint-disable-next-line no-underscore-dangle
                const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, `stores/${(this.owner)}/items/${(key)}`);
                const docSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(dataRef);
                const dataSnap = docSnap.data();
                this.fav.push({
                    name: dataSnap.name,
                    owner: ownerName.name,
                    price: dataSnap.price,
                    image: dataSnap.imageUrl,
                    itemId: key,
                    ownerId: idOwnerName.owner,
                    id: key,
                });
            }
            console.log(this.fav);
        });
    }
    back() {
        this.router.navigateByUrl('tabs/account', { replaceUrl: true });
    }
    goToCart() {
        this.router.navigate(['my-cart']);
    }
};
FavouritePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Firestore }
];
FavouritePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-favorite',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favourite_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_favourite_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavouritePage);



/***/ }),

/***/ 30187:
/*!*****************************************************!*\
  !*** ./src/app/pages/favourite/favourite.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.favorite-items {\n  margin-top: 20px;\n}\n\n.favorite-items ion-col {\n  padding: 10px;\n}\n\n.favorite-items ion-col img {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n.favorite-items ion-col p {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.favorite-items ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.padding-left0 {\n  padding-left: 0 !important;\n}\n\n.padding-right0 {\n  padding-right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDSTtFQUNJLGFBQUE7QUFDUjs7QUFDUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNaOztBQUVRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQVo7O0FBR1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFEWjs7QUFNQTtFQUNJLDBCQUFBO0FBSEo7O0FBTUE7RUFDSSwyQkFBQTtBQUhKIiwiZmlsZSI6ImZhdm91cml0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjZweDtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiAjNDM0MzQzO1xufVxuXG4uZmF2b3JpdGUtaXRlbXMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGg2IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wYWRkaW5nLWxlZnQwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnBhZGRpbmctcmlnaHQwIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_favourite_favourite_module_ts.js.map