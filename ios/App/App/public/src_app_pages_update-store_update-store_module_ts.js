"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_update-store_update-store_module_ts"],{

/***/ 83654:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/update-store/update-store.page.html ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Update Store</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"ion-margin-horizontal\">\n    <ion-card mode=\"ios\" class=\"ion-padding\">\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-card-title style=\"font-size: 18px; padding-top: 3px\" >Add New Item</ion-card-title>\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-right\">\n          <ion-buttons>\n            <ion-button (click)=\"openAddItemModal()\">\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n      <ion-row style=\"padding-left: 0\">\n      <ion-col size=\"10\">\n      <ion-text  color=\"primary\" style=\"font-size: 26px; font-weight: bold\">Current Items</ion-text>\n      </ion-col>\n      </ion-row>\n    <ng-container *ngFor=\"let food of foodStore\">\n      <app-update-store-component [food]=\"food\" (childEvent)=\"addItemToStoreInit()\"></app-update-store-component>\n    </ng-container>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 67307:
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/cards/update-store/update-store.component.html ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"food\">\n<ion-card mode=\"ios\" class=\"ion-padding\">\n  <ion-row>\n    <ion-col size=\"8\">\n      <ion-card-title style=\"font-size: 18px; padding-bottom: 5px\">Item Name: {{food.name}}</ion-card-title>\n      <ion-card-subtitle>Price: RM {{food.price}}</ion-card-subtitle>\n      <ion-card-subtitle>Category: {{food.category}}</ion-card-subtitle>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-right\">\n      <ion-buttons>\n        <ion-button (click)=\"openEditItemModal(food.id, food.name, food.price, food.category, food.description)\">\n        <ion-icon name=\"pencil-outline\" ></ion-icon>\n      </ion-button>\n        <ion-button (click)=\"delete(food.id)\">\n          <ion-icon name=\"trash-outline\" ></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"soldOut(food.id)\">\n          <ion-icon name=\"lock-closed-outline\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"restock(food.id)\">\n          <ion-icon name=\"lock-open-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n</ion-card>\n</ng-container>\n");

/***/ }),

/***/ 13186:
/*!*******************************************************************!*\
  !*** ./src/app/pages/update-store/update-store-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateStorePageRoutingModule": () => (/* binding */ UpdateStorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _update_store_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-store.page */ 94361);




const routes = [
    {
        path: '',
        component: _update_store_page__WEBPACK_IMPORTED_MODULE_0__.UpdateStorePage
    }
];
let UpdateStorePageRoutingModule = class UpdateStorePageRoutingModule {
};
UpdateStorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateStorePageRoutingModule);



/***/ }),

/***/ 52548:
/*!***********************************************************!*\
  !*** ./src/app/pages/update-store/update-store.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateStorePageModule": () => (/* binding */ UpdateStorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _update_store_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-store-routing.module */ 13186);
/* harmony import */ var _update_store_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-store.page */ 94361);
/* harmony import */ var _shared_components_cards_update_store_update_store_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/cards/update-store/update-store.component */ 55653);








let UpdateStorePageModule = class UpdateStorePageModule {
};
UpdateStorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _update_store_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateStorePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_update_store_page__WEBPACK_IMPORTED_MODULE_1__.UpdateStorePage, _shared_components_cards_update_store_update_store_component__WEBPACK_IMPORTED_MODULE_2__.UpdateStoreComponent]
    })
], UpdateStorePageModule);



/***/ }),

/***/ 94361:
/*!*********************************************************!*\
  !*** ./src/app/pages/update-store/update-store.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateStorePage": () => (/* binding */ UpdateStorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_update_store_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./update-store.page.html */ 83654);
/* harmony import */ var _update_store_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-store.page.scss */ 13511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_cafe_firebase_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cafe/firebase-upload.service */ 53727);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cafe/product.service */ 41575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _shared_components_modal_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/modal/add-item/add-item.component */ 57697);













let UpdateStorePage = class UpdateStorePage {
    constructor(firebaseUploadService, router, _firestore, ionicAuthService, afs, product, modalCtrl, routerOutlet, menu) {
        this.firebaseUploadService = firebaseUploadService;
        this.router = router;
        this._firestore = _firestore;
        this.ionicAuthService = ionicAuthService;
        this.afs = afs;
        this.product = product;
        this.modalCtrl = modalCtrl;
        this.routerOutlet = routerOutlet;
        this.menu = menu;
        this.foodStore = [];
        this.barStatus = false;
        this.errorMessage = '';
        this.imageUploads = [];
        this.name = '';
        this.type = false;
        this.imageUrl = '';
        this.uid = this.ionicAuthService.getUid();
        this.initForm();
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.menu.enable(true);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.addItemToStoreInit();
        });
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.addItemToStoreInit();
            setTimeout(() => {
                event.target.complete();
            }, 1000);
        });
    }
    uploadPhoto(event) {
        this.barStatus = true;
        this.firebaseUploadService.storeImage(event.target.files[0]).then((res) => {
            if (res) {
                console.log(res);
                this.imageUrl = res;
                this.imageUploads.unshift(res);
                this.barStatus = false;
            }
        }, (error) => {
            this.errorMessage = 'File size exceeded. Maximum file size 1 MB';
            this.barStatus = false;
        });
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] }),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] }), // added email validator also
        });
    }
    changeType() {
        this.type = !this.type;
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.errorMessage = '';
            if (!this.form.valid) {
                this.form.markAllAsTouched();
                return;
            }
            if (this.imageUrl === '') {
                this.errorMessage = 'You must upload an image for your item to proceed.';
                return;
            }
            this.isLoading = true;
            console.log(this.form.value);
            yield this.uploadStoreDetails(this.form.value);
            this.isLoading = false;
            yield this.addItemToStoreInit();
        });
    }
    uploadStoreDetails(formValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-underscore-dangle
            const pushKey = this.afs.createId();
            let dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(this._firestore, `stores/${(this.uid)}/items/${(pushKey)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.setDoc)(dataRef, {
                name: formValue.name,
                price: formValue.price,
                category: formValue.category,
                description: formValue.description,
                imageUrl: this.imageUrl,
                status: 'available',
                id: pushKey
            });
            dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(this._firestore, `idOwner/${(pushKey)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.setDoc)(dataRef, {
                owner: this.uid,
            });
            // create categories
            dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(this._firestore, `stores/${(this.uid)}/categories/${(formValue.category)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.setDoc)(dataRef, {
                name: formValue.name,
            });
            // add items to categories
            yield this.afs.collection(`stores/${(this.uid)}/categories/`).doc(formValue.category).update({
                [pushKey]: 1,
            });
            dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(this._firestore, `idOwner/${(pushKey)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.setDoc)(dataRef, {
                owner: this.uid,
            });
        });
    }
    addItemToStoreInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.foodStore = [];
            const dataRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(this._firestore, 'stores/' + this.uid + '/items');
            const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.query)(dataRef);
            const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)(q);
            // eslint-disable-next-line @typescript-eslint/no-shadow
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                console.log(data);
                this.foodStore.push({
                    owner: '',
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
    openAddItemModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _shared_components_modal_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_5__.AddItemComponent,
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
            });
            modal.onDidDismiss().then((data) => {
                console.log('test');
                this.ngOnInit();
            });
            return yield modal.present();
        });
    }
    back() {
        this.router.navigateByUrl('tabs/account', { replaceUrl: true });
    }
};
UpdateStorePage.ctorParameters = () => [
    { type: _services_cafe_firebase_upload_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseUploadService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.Firestore },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRouterOutlet },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController }
];
UpdateStorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-update-store',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_update_store_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_update_store_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateStorePage);



/***/ }),

/***/ 55653:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/cards/update-store/update-store.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateStoreComponent": () => (/* binding */ UpdateStoreComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_update_store_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./update-store.component.html */ 67307);
/* harmony import */ var _update_store_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-store.component.scss */ 83841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _modal_edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal/edit-item/edit-item.component */ 36122);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/cafe/product.service */ 41575);









let UpdateStoreComponent = class UpdateStoreComponent {
    constructor(ionicAuthService, afs, modalCtrl, routerOutlet, product) {
        this.ionicAuthService = ionicAuthService;
        this.afs = afs;
        this.modalCtrl = modalCtrl;
        this.routerOutlet = routerOutlet;
        this.product = product;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.id = this.ionicAuthService.getUid();
    }
    openEditItemModal(id, name, price, category, description) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.product.editItemId = id;
            this.product.editItemName = name;
            this.product.editItemPrice = price;
            this.product.editItemCategory = category;
            this.product.editItemDescription = description;
            const modal = yield this.modalCtrl.create({
                component: _modal_edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_3__.EditItemComponent,
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
            });
            return yield modal.present();
        });
    }
    soldOut(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.afs.collection(`stores/${(this.id)}/items`).doc(id).update({
                status: 'sold out'
            });
        });
    }
    restock(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.afs.collection(`stores/${(this.id)}/items`).doc(id).update({
                status: 'available'
            });
        });
    }
    delete(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.afs.collection(`stores/${(this.id)}/items`).doc(id).delete();
            setTimeout(() => {
                this.childEvent.emit();
            }, 500);
        });
    }
};
UpdateStoreComponent.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRouterOutlet },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService }
];
UpdateStoreComponent.propDecorators = {
    food: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    childEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
UpdateStoreComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-update-store-component',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_update_store_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_update_store_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateStoreComponent);



/***/ }),

/***/ 13511:
/*!***********************************************************!*\
  !*** ./src/app/pages/update-store/update-store.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtc3RvcmUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 83841:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/cards/update-store/update-store.component.scss ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtc3RvcmUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_update-store_update-store_module_ts.js.map