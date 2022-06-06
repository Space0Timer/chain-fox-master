"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_cafe_cafe_module_ts"],{

/***/ 19090:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tabs/cafe/cafe.page.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      <ion-button (click) = \"qrCode()\">\n        <ion-icon name=\"qr-code\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"title\">\n        <img style=\"height: 30px\" src='assets/header/chainfoxcafe.png'>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"chat()\">\n        <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"showAlertLogOut('Log out', 'Are you sure?')\">\n        <ion-icon name=\"lock-closed\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-padding-top\">\n    <ion-searchbar animated=\"true\" debounce=\"800\" placeholder=\"Enter store name\" show-cancel-button=\"focus\" (ionChange)=\"_ionChange($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"background-color: #F7F7FA\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"p-1\">\n    <ng-container *ngFor=\"let option of searchedItem\">\n      <div>\n        <app-cafe-card (click)=\"goToLunch(option.id)\" [option]=\"option\"></app-cafe-card>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>\n\n");

/***/ }),

/***/ 66657:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/cafe/cafe-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CafePageRoutingModule": () => (/* binding */ CafePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _cafe_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cafe.page */ 40023);




const routes = [
    {
        path: '',
        component: _cafe_page__WEBPACK_IMPORTED_MODULE_0__.CafePage,
    }
];
let CafePageRoutingModule = class CafePageRoutingModule {
};
CafePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], CafePageRoutingModule);



/***/ }),

/***/ 63029:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/cafe/cafe.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CafePageModule": () => (/* binding */ CafePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _cafe_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cafe.page */ 40023);
/* harmony import */ var _cafe_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cafe-routing.module */ 66657);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared */ 54113);
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/store.module */ 62462);









let CafePageModule = class CafePageModule {
};
CafePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _cafe_routing_module__WEBPACK_IMPORTED_MODULE_1__.CafePageRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _store_store_module__WEBPACK_IMPORTED_MODULE_3__.StorePageModule,
        ],
        declarations: [_cafe_page__WEBPACK_IMPORTED_MODULE_0__.CafePage],
    })
], CafePageModule);



/***/ }),

/***/ 40023:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/cafe/cafe.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CafePage": () => (/* binding */ CafePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_2_2_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cafe_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cafe.page.html */ 19090);
/* harmony import */ var _cafe_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cafe.page.scss */ 80055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 68927);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_store_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/store/product.service */ 86250);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);










// @ts-ignore
let CafePage = class CafePage {
    constructor(ionicAuthService, router, afs, _firestore, product, alertController) {
        this.ionicAuthService = ionicAuthService;
        this.router = router;
        this.afs = afs;
        this._firestore = _firestore;
        this.product = product;
        this.alertController = alertController;
        this.successMsg = '';
        this.errorMsg = '';
        this.options = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.addStoreToCafe();
            this.searchedItem = this.options;
        });
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.addStoreToCafe();
            this.searchedItem = this.options;
            setTimeout(() => {
                event.target.complete();
            }, 1000);
        });
    }
    chat() {
        this.router.navigate(['chat-list']);
    }
    qrCode() {
        this.router.navigate(['qr-code']);
    }
    addStoreToCafe() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.options = [];
            // eslint-disable-next-line no-underscore-dangle
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(this._firestore, 'stores');
            const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.query)(dataRef);
            const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(q);
            // eslint-disable-next-line @typescript-eslint/no-shadow
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                this.options.push({
                    name: data.name,
                    image: data.imageUrl,
                    id: data.id
                });
            });
        });
    }
    _ionChange(event) {
        const val = event.target.value;
        this.searchedItem = this.options;
        if (val && val.trim() !== '') {
            this.searchedItem = this.searchedItem.filter((item) => (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
        }
        // this.search.getInputElement().then(item => console.log(item))
    }
    showAlertLogOut(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            this.logOut();
                        })
                    }
                ]
            });
            yield alert.present();
        });
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
    goToLunch(storeName) {
        this.product.store.name = storeName;
        this.router.navigate(['store']);
    }
    goToLogin() {
        this.router.navigate(['auth-screen']);
    }
};
CafePage.ctorParameters = () => [
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.Firestore },
    { type: _services_store_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
CafePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home',
        template: _Users_spacetimer_Documents_chain_fox_master_2_2_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cafe_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cafe_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CafePage);



/***/ }),

/***/ 80055:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/cafe/cafe.page.scss ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".option-image-mask {\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhZmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0dBQUE7QUFDRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUhGIiwiZmlsZSI6ImNhZmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbi1pbWFnZS1tYXNrIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gYm90dG9tLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjMpLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjUpLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjMpXG4gICk7XG59XG4udGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_cafe_cafe_module_ts.js.map