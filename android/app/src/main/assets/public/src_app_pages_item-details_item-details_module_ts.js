"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_item-details_item-details_module_ts"],{

/***/ 30863:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/item-details/item-details.page.html ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color =\"primary\">{{this.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <div class = ion-padding >\n    <ion-col size=\"4\">\n          <img [src] = this.image alt=\"\">\n    </ion-col>\n  </div>\n\n  <div color=\"primary\">\n    <h1 class=\"item-name\">{{this.name}}</h1>\n\n    <h4 class=\"price\">\n      RM {{this.price}}\n    </h4>\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n\n  <div class=\"description\" color=\"light\">\n    <h5>Description</h5>\n\n    <p>\n      {{this.description}}\n    </p>\n\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click) = \"goToCart()\">\n    <ion-fab-button>\n      <ion-icon name=\"cart-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" color=\"light\" [disabled]=\"cartIcon==='Sold Out'\" (click)=\"addToCart(this.id, this.owner)\">{{cartIcon}}</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" color=\"dark\" (click)=\"addToFav(this.id, this.owner)\">Add to Favourites</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ 9585:
/*!*******************************************************************!*\
  !*** ./src/app/pages/item-details/item-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDetailsPageRoutingModule": () => (/* binding */ ItemDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-details.page */ 41968);




const routes = [
    {
        path: '',
        component: _item_details_page__WEBPACK_IMPORTED_MODULE_0__.ItemDetailsPage
    }
];
let ItemDetailsPageRoutingModule = class ItemDetailsPageRoutingModule {
};
ItemDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemDetailsPageRoutingModule);



/***/ }),

/***/ 34520:
/*!***********************************************************!*\
  !*** ./src/app/pages/item-details/item-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDetailsPageModule": () => (/* binding */ ItemDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _item_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-details-routing.module */ 9585);
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-details.page */ 41968);







let ItemDetailsPageModule = class ItemDetailsPageModule {
};
ItemDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _item_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemDetailsPageRoutingModule
        ],
        declarations: [_item_details_page__WEBPACK_IMPORTED_MODULE_1__.ItemDetailsPage]
    })
], ItemDetailsPageModule);



/***/ }),

/***/ 41968:
/*!*********************************************************!*\
  !*** ./src/app/pages/item-details/item-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDetailsPage": () => (/* binding */ ItemDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_item_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./item-details.page.html */ 30863);
/* harmony import */ var _item_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-details.page.scss */ 51865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cafe/product.service */ 41575);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);









let ItemDetailsPage = class ItemDetailsPage {
    constructor(animatioCntrl, router, afs, _firestore, product, alertController) {
        this.animatioCntrl = animatioCntrl;
        this.router = router;
        this.afs = afs;
        this._firestore = _firestore;
        this.product = product;
        this.alertController = alertController;
        this.cartIcon = 'Add to Cart';
    }
    ngOnInit() {
        this.getItemDetails();
        if (this.product.item.status === 'available') {
            this.cartIcon = 'Add to Cart';
        }
        else if (this.product.item.status === 'sold out') {
            this.cartIcon = 'Sold Out';
        }
    }
    addToCart(id, owner) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.product.addToCart(id, owner);
            yield this.showAlert(this.product.item.name + ' (x1) is added to your cart!');
        });
    }
    addToFav(id, owner) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.product.addToFav(id, owner);
            yield this.showAlert(this.product.item.name + ' is added to your favourites!');
        });
    }
    getItemDetails() {
        this.name = this.product.item.name;
        this.price = this.product.item.price;
        this.description = this.product.item.description;
        this.owner = this.product.item.owner;
        this.id = this.product.item.id;
        this.image = this.product.item.image;
    }
    back() {
        this.router.navigate(['lunch']);
    }
    goToCart() {
        this.router.navigate(['my-cart']);
    }
    showAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
ItemDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AnimationController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.Firestore },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
ItemDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-item-details',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_item_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_item_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemDetailsPage);



/***/ }),

/***/ 51865:
/*!***********************************************************!*\
  !*** ./src/app/pages/item-details/item-details.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.item-name {\n  color: var(--ion-color-primary);\n}\n\n.price {\n  color: var(--ion-color-primary);\n}\n\n.price span {\n  color: #2a2a2a;\n  text-decoration: line-through;\n  margin-left: 20px;\n  font-size: medium;\n  vertical-align: top;\n}\n\n.seperator hr {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  background: #e2e2e2;\n}\n\n.review {\n  margin-top: 16px;\n  color: #2a2a2a;\n}\n\n.review .rating {\n  display: inline-block;\n  color: #ffffff;\n  background: var(--ion-color-primary);\n  padding: 10px 20px 10px 20px;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n\n.review .count {\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: var(--ion-color-primary);\n}\n\n.description h5 {\n  color: var(--ion-color-primary);\n  padding-top: 10px;\n}\n\n.description p {\n  color: var(--ion-color-primary);\n}\n\n.variation {\n  padding-top: 16px;\n}\n\n.variation ion-segment-button {\n  color: #2a2a2a;\n}\n\n.variation-selector {\n  margin-top: 30px;\n  display: flex;\n  position: relative;\n}\n\n.variation-selector .active-variation {\n  opacity: 1 !important;\n  z-index: 1 !important;\n}\n\n.variation-selector .sizes {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n  z-index: 0;\n  padding-bottom: 30px;\n}\n\n.variation-selector .sizes .active {\n  color: #ffffff;\n  background-color: var(--ion-color-primary);\n}\n\n.variation-selector .colors {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n  z-index: 0;\n  padding-bottom: 30px;\n}\n\n.variation-selector .colors .active {\n  color: #ffffff;\n  background-color: var(--ion-color-primary);\n}\n\nion-footer ion-row {\n  padding: 0;\n}\n\nion-footer ion-row ion-col {\n  padding: 0;\n}\n\nion-footer ion-row ion-col ion-button {\n  margin: 0;\n  height: 50px;\n  font-size: 18px;\n  box-shadow: none;\n}\n\n.footer-md::before {\n  background-image: none !important;\n}\n\nion-card {\n  width: 100%;\n  height: 160px;\n  box-shadow: none;\n  border-radius: 12px;\n}\n\n.swiper-slide-active {\n  transform: scale(1.05, 1.05);\n}\n\n.swiper-slide-active ion-card img {\n  transform: scale(1, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSjs7QUFDSTtFQUNJLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNSOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRFI7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFJSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRlI7O0FBS0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQUhSOztBQVFJO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtBQUxSOztBQVFJO0VBQ0ksK0JBQUE7QUFOUjs7QUFVQTtFQUNJLGlCQUFBO0FBUEo7O0FBU0k7RUFDSSxjQUFBO0FBUFI7O0FBV0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVVJO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtBQVJSOztBQVdJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBVFI7O0FBWVE7RUFDSSxjQUFBO0VBQ0EsMENBQUE7QUFWWjs7QUFjSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQVpSOztBQWVRO0VBQ0ksY0FBQTtFQUNBLDBDQUFBO0FBYlo7O0FBbUJJO0VBQ0ksVUFBQTtBQWhCUjs7QUFrQlE7RUFDSSxVQUFBO0FBaEJaOztBQWtCWTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBaEJoQjs7QUF1QkE7RUFDSSxpQ0FBQTtBQXBCSjs7QUF3QkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFyQkY7O0FBeUJBO0VBQ0UsNEJBQUE7QUF0QkY7O0FBeUJJO0VBQ0Usc0JBQUE7QUF2Qk4iLCJmaWxlIjoiaXRlbS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMjZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyNnB4O1xufVxuXG4uaXRlbS1uYW1lIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ucHJpY2Uge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICMyYTJhMmE7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgfVxufVxuXG4uc2VwZXJhdG9yIHtcbiAgICBociB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gICAgfVxufVxuXG4ucmV2aWV3IHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuXG4gICAgLnJhdGluZyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmNvdW50IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBoNSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbn1cblxuLnZhcmlhdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG5cbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICBjb2xvcjogIzJhMmEyYTtcbiAgICB9XG59XG5cbi52YXJpYXRpb24tc2VsZWN0b3Ige1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuYWN0aXZlLXZhcmlhdGlvbiB7XG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zaXplcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcblxuXG4gICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29sb3JzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuXG5cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBUaGlzIHdpbGwgcmVtb3ZlIGZvb3RlciBzaGFkb3cgb24gYW5kcm9pZFxuLmZvb3Rlci1tZDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcblxufVxuXG4uc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4wNSk7XG5cbiAgaW9uLWNhcmQge1xuICAgIGltZyB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_item-details_item-details_module_ts.js.map