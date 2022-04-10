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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class = ion-padding>\n    <h1 class=\"title\">Favourite</h1>\n    <ng-container *ngFor=\"let fav of fav\">\n    <app-fav-card [fav]=\"fav\" (childEvent)=\"loadFav()\"></app-fav-card>\n    </ng-container>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click) = \"goToCart()\">\n    <ion-fab-button>\n      <ion-icon name=\"cart-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);









let FavouritePage = class FavouritePage {
    constructor(router, afs, ionicAuthService, _firestore, menu) {
        this.router = router;
        this.afs = afs;
        this.ionicAuthService = ionicAuthService;
        this._firestore = _firestore;
        this.menu = menu;
        this.fav = [];
        this.owner = '';
        this.id = this.ionicAuthService.getUid();
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.menu.enable(true);
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadFav();
        });
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
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Firestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController }
];
FavouritePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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

module.exports = ".title {\n  margin-top: 0;\n  color: #434343;\n}\n\nion-img {\n  object-fit: cover;\n  height: 150px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7QUFFRiIsImZpbGUiOiJmYXZvdXJpdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICM0MzQzNDM7XG59XG5pb24taW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_favourite_favourite_module_ts.js.map