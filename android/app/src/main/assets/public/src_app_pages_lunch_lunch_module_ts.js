"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_lunch_lunch_module_ts"],{

/***/ 91217:
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/lunch/lunch.page.html ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color =\"primary\">{{this.storeName}}</ion-title>\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"chat()\">\n      <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar animated=\"true\" debounce=\"800\" placeholder=\"Enter store name\" show-cancel-button=\"focus\" (ionChange)=\"_ionChange($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"background-color: #F7F7FA\">\n  <div class=\"fixed w-full row-start-1 row-span-1 col-start-1 col-span-1 z-40 border-orange-400\" >\n    <ion-accordion-group>\n      <ion-accordion value=\"starter\">\n        <ion-item slot=\"header\">\n          <ion-label class=\"text-center pl-10\" color=\"primary\">\n            {{this.category}}\n          </ion-label>\n        </ion-item>\n        <ion-list slot=\"content\" lines=\"none\">\n          <ng-container *ngFor=\"let option of drawerOptions\">\n            <ion-item class=\"h-10\" (click)=\"selectCategory(option.name)\">\n              <ion-label class=\"text-center\" color=\"primary\">\n                    <span\n                      [class.font-medium]=\"option.type === 'sectionHeader'\"\n                      [class.text-brand-gray-dark]=\"option.type === 'sectionHeader'\"\n                      [class.text-xl]=\"option.type === 'sectionHeader'\">\n                    {{ option.name }}\n                    </span>\n              </ion-label>\n            </ion-item>\n          </ng-container>\n        </ion-list>\n      </ion-accordion>\n    </ion-accordion-group>\n  </div>\n  <div class=\"grid grid-rows-1 grid-cols-1\">\n    <div class=\"row-start-1 row-span-1 col-start-1 col-span-1 p-1 mt-12 \">\n      <ng-container *ngFor=\"let food of searchedItem\" >\n        <div class=\"ion-text-left\">\n          <app-food-card (click)=\"itemDetails(food.id, food.name, food.price, food.description, food.owner, food.image, food.status)\" [food]=\"food\"></app-food-card>\n        </div>\n      </ng-container>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 4825:
/*!*****************************************************!*\
  !*** ./src/app/pages/lunch/lunch-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LunchPageRoutingModule": () => (/* binding */ LunchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _lunch_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lunch.page */ 98230);




const routes = [
    {
        path: '',
        component: _lunch_page__WEBPACK_IMPORTED_MODULE_0__.LunchPage,
    },
];
let LunchPageRoutingModule = class LunchPageRoutingModule {
};
LunchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LunchPageRoutingModule);



/***/ }),

/***/ 34109:
/*!*********************************************!*\
  !*** ./src/app/pages/lunch/lunch.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LunchPageModule": () => (/* binding */ LunchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _lunch_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lunch.page */ 98230);
/* harmony import */ var _lunch_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lunch-routing.module */ 4825);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 54113);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);









let LunchPageModule = class LunchPageModule {
};
LunchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _lunch_routing_module__WEBPACK_IMPORTED_MODULE_1__.LunchPageRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_lunch_page__WEBPACK_IMPORTED_MODULE_0__.LunchPage],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy },
        ],
    })
], LunchPageModule);



/***/ }),

/***/ 98230:
/*!*******************************************!*\
  !*** ./src/app/pages/lunch/lunch.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LunchPage": () => (/* binding */ LunchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lunch_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./lunch.page.html */ 91217);
/* harmony import */ var _lunch_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lunch.page.scss */ 4051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cafe/product.service */ 41575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);









let LunchPage = class LunchPage {
    constructor(router, afs, _firestore, product, menu) {
        this.router = router;
        this.afs = afs;
        this._firestore = _firestore;
        this.product = product;
        this.menu = menu;
        this.foodOptions = [];
        this.drawerOptions = [];
        this.name = '';
        this.category = 'All';
        this.foodList = [];
        this.storeName = '';
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.menu.enable(true);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getStoreName();
            yield this.setCategory();
            yield this.addItemToStoreInit();
            this.searchedItem = this.foodOptions;
        });
    }
    _ionChange(event) {
        const val = event.target.value;
        this.searchedItem = this.foodOptions;
        if (val && val.trim() !== '') {
            this.searchedItem = this.searchedItem.filter((item) => (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
        }
        // this.search.getInputElement().then(item => console.log(item))
    }
    back() {
        this.router.navigateByUrl('/tabs/cafe', { replaceUrl: true });
    }
    getStoreName() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const ownerRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, `stores/${(this.product.store.name)}`);
            const ownerSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(ownerRef);
            const ownerName = ownerSnap.data();
            this.storeName = ownerName.name;
        });
    }
    setCategory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.drawerOptions.push({
                name: 'All',
                type: 'sectionHeader'
            });
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this._firestore, 'stores/' + this.product.store.name + '/categories');
            const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(dataRef);
            const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(q);
            querySnapshot.forEach((docu) => {
                const data = docu.data();
                this.drawerOptions.push({
                    name: data.name,
                    type: 'sectionHeader'
                });
            });
        });
    }
    addItemToStoreInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this._firestore, 'stores/' + this.product.store.name + '/items');
            const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(dataRef);
            const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(q);
            // eslint-disable-next-line @typescript-eslint/no-shadow
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                this.foodOptions.push({
                    owner: this.product.store.name,
                    name: data.name,
                    description: data.description,
                    image: data.imageUrl,
                    price: data.price,
                    id: data.id,
                    category: data.category,
                    status: data.status
                });
            });
        });
    }
    addItemToStore() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-underscore-dangle
            for (const entry of this.foodList) {
                console.log(entry);
                const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this._firestore, 'stores/' + this.product.store.name + '/items');
                const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(dataRef);
                const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(q);
                // eslint-disable-next-line @typescript-eslint/no-shadow
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.id === entry) {
                        this.foodOptions.push({
                            owner: this.product.store.name,
                            name: data.name,
                            description: data.description,
                            image: data.imageUrl,
                            price: data.price,
                            id: data.id,
                            category: data.category,
                            status: data.status
                        });
                    }
                });
            }
        });
    }
    ionViewWillEnter() {
        setTimeout(() => {
            var _a;
            (_a = this.search) === null || _a === void 0 ? void 0 : _a.setFocus();
        });
    }
    selectCategory(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (name === 'All') {
                this.foodOptions = [];
                this.category = 'All';
                yield this.addItemToStoreInit();
            }
            else {
                this.foodList = [];
                let data;
                const itemIdRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this._firestore, 'stores/' + this.product.store.name + '/categories/' + name);
                yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(itemIdRef)
                    .then(snap => { data = snap.data(); console.log(data, this.product.store.name, name); delete data.name; });
                for (const key in data) {
                    console.log(key);
                    this.foodList.push(key);
                    console.log(this.foodList);
                }
                this.category = name;
                this.foodOptions = [];
                yield this.addItemToStore();
            }
        });
    }
    itemDetails(id, name, price, description, owner, image, status) {
        this.product.item.id = id;
        this.product.item.name = name;
        this.product.item.price = price;
        this.product.item.owner = owner;
        this.product.item.description = description;
        this.product.item.image = image;
        this.product.item.status = status;
        this.router.navigateByUrl('/item-details', { replaceUrl: true });
    }
    chat() {
        this.router.navigate(['chat']);
    }
};
LunchPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Firestore },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController }
];
LunchPage.propDecorators = {
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['search', { static: false },] }]
};
LunchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-lunch',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lunch_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_lunch_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LunchPage);



/***/ }),

/***/ 4051:
/*!*********************************************!*\
  !*** ./src/app/pages/lunch/lunch.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsdW5jaC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_lunch_lunch_module_ts.js.map