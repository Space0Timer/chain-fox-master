"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_home_home_module_ts"],{

/***/ 94103:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tabs/home/home.page.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      <ion-button (click) = \"qrCode()\">\n        <ion-icon name=\"qr-code\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"title\">\n        <img style=\"height: 30px\" src='assets/header/chainfoxhome.png'>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"chat()\">\n        <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"logOut()\">\n        <ion-icon name=\"lock-closed\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"banner\">\n    <img  src=\"assets/imgs/screen1.png\" alt=\"\">\n  </div>\n  <div class=\"live-event\">\n    <img src=\"../../assets/wallet.png\" />\n    <div class=\"info\">\n      <div class=\"content\">\n        <ion-note color=\"white\">Hello, {{this.iroha.wallet.name}}!</ion-note>\n        <ion-chip>\n          <ion-label color=\"light\">\n            Balance: RM {{this.iroha.wallet.balance}}\n          </ion-label>\n        </ion-chip>\n        </div>\n      </div>\n  </div>\n  <div class=\"default-top-padding title\">\n    <h2>Wallet Management</h2>\n  </div>\n  <ion-grid style=\"margin: 5px 10px 0px 10px\" >\n    <ion-row class=\"ion-align-items-center ion-margin-top\" >\n      <ion-col size=\"6\" *ngFor=\"let feature of features\" class=\"ion-text-center\">\n        <ion-card color=\"light\" (click)=\"getRoute(feature?.id)\">\n          <ion-card-header>\n            <ion-icon name=\"{{feature?.icon}}\"></ion-icon>\n            <ion-card-title >{{feature?.name}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"default-top-padding title\">\n    <h2>Promotions</h2>\n  </div>\n  <div class=\"ion-padding\">\n    <ion-col size=\"4\">\n      <ion-slides pager #mySlider class=\"slides\" (ionSlidesDidLoad)=\"slidesDidLoad(mySlider)\">\n        <ion-slide *ngFor=\"let number of [1,2,3]\">\n          <img src=\"assets/imgs/screen{{number}}.png\" alt=\"\" width=\"640\" height=\"360\">\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 17276:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/network/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 62106:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/network/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Network": () => (/* binding */ Network)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 24249);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 17276);

const Network = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Network', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_network_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 28424)).then(m => new m.NetworkWeb()),
});




/***/ }),

/***/ 226:
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/definitions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />



/***/ }),

/***/ 23164:
/*!**********************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushNotifications": () => (/* binding */ PushNotifications)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 24249);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 226);

const PushNotifications = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('PushNotifications', {});




/***/ }),

/***/ 88167:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/home/home-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 80372);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 77788:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 88167);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 80372);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared */ 54113);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 80372:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 94103);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 48781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/iroha.service */ 49187);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/network */ 62106);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _capacitor_community_fcm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor-community/fcm */ 33506);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/push-notifications */ 23164);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/splash-screen */ 26391);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/cafe/product.service */ 41575);














let HomePage = class HomePage {
    constructor(router, ionicAuthService, _firestore, iroha, alertController, product) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this._firestore = _firestore;
        this.iroha = iroha;
        this.alertController = alertController;
        this.product = product;
        this.successMsg = '';
        this.errorMsg = '';
        this.name = '';
        this.highlights = [];
        this.highlightSlideOpts = {
            slidesPerView: 1.05,
            spaceBetween: 10,
            centeredSlides: true,
            loop: true
        };
        this.features = [
            { id: 'top-up', name: 'Top Up', icon: 'add-circle-outline', background: 'rgba(27,150,181, 0.1)', page: '' },
            { id: 'list', name: 'View History', icon: 'archive-outline', background: 'rgba(106,100,255, 0.1)', page: '' },
        ];
        this.uid = this.ionicAuthService.getUid();
        this.options = [];
    }
    getRoute(route) {
        this.router.navigate([route]);
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getUserId();
            setTimeout(() => {
                event.target.complete();
            }, 1000);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_6__.PushNotifications.requestPermissions();
                yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_6__.PushNotifications.register();
                // Enable the auto initialization of the library
                _capacitor_community_fcm__WEBPACK_IMPORTED_MODULE_5__.FCM.getToken()
                    .then((r) => console.log(` ${r.token}`))
                    .catch((err) => console.log(err));
                _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.addListener('networkStatusChange', (status) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    if (status.connected === false) {
                        yield this.showAlert('You must have an Internet Connection to use this app. You will be redirected to the login page.');
                        yield this.router.navigate(['auth-screen']);
                    }
                }));
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getUserId();
            yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_7__.SplashScreen.hide();
        });
    }
    showAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'No Internet Connection',
                message,
                buttons: ['OK'],
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
    goToLogin() {
        this.router.navigate(['auth-screen']);
    }
    chat() {
        this.router.navigate(['chat-list']);
    }
    getUserId() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-underscore-dangle
            const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)(this._firestore, 'users', this.uid);
            const docSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.getDoc)(docRef);
            if (docSnap.exists()) {
                this.id = docSnap.data().username.concat('@test');
                this.iroha.wallet.name = '';
                yield this.iroha.setName(this.id);
                this.iroha.wallet.balance = '0';
                yield this.iroha.setBalance(this.id);
            }
            else {
                // doc.data() will be undefined in this case
                console.log('No such document!');
            }
        });
    }
    qrCode() {
        this.router.navigate(['qr-code']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.Firestore },
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__.IrohaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_8__.ProductService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-home',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 48781:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.scss ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.card-padding {\n  padding-bottom: 12px;\n}\n\n.default-top-padding {\n  padding-top: 26px !important;\n}\n\nion-header {\n  position: absolute;\n}\n\n.transformCenter {\n  transform: translateY(35vh);\n}\n\nion-content .banner {\n  position: relative;\n  display: flex;\n}\n\nion-content .banner img {\n  width: 100%;\n}\n\nion-content .banner .caption {\n  position: absolute;\n  font-weight: bold;\n  width: 100%;\n  bottom: 55px;\n  font-size: 26px;\n  color: white;\n  padding-left: 26px;\n  padding-right: 26px;\n}\n\nion-content .title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 0px 0px 10px;\n}\n\nion-content .title h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n\nion-content .event-slider ion-slide {\n  width: 60%;\n  margin-right: 30px;\n}\n\nion-content .event-slider ion-slide ion-col {\n  padding-left: 0;\n}\n\nion-content .event-slider ion-slide ion-col ion-card {\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.16);\n  margin-left: 0;\n  margin-top: 0;\n}\n\nion-content .event-slider ion-slide ion-col ion-card ion-card-header img {\n  width: 100%;\n}\n\nion-content .event-slider ion-slide ion-col ion-card ion-card-content {\n  padding-top: 13px;\n}\n\nion-content .event-slider ion-slide ion-col ion-card ion-card-content .date {\n  color: #364F6B;\n  font-size: 10px;\n  margin-bottom: 5px;\n}\n\nion-content .event-slider ion-slide ion-col ion-card ion-card-content .eventname {\n  color: #364F6B;\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\nion-content .event-slider ion-slide ion-col ion-card ion-card-content .location {\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-primary);\n  font-size: 10px;\n  margin-bottom: 5px;\n}\n\nion-content .live-event {\n  position: relative;\n  background-color: var(--ion-color-warning);\n  border-radius: 10px;\n  box-shadow: 0px 3px 12px 2px rgba(0, 0, 0, 0.16);\n  margin: -30px 20px 0px 20px;\n  display: flex;\n  justify-content: space-between;\n}\n\nion-content .live-event img {\n  border-radius: 10px 0 0 10px;\n  object-fit: cover;\n  width: 100px;\n  height: 100px;\n}\n\nion-content .live-event .info {\n  padding: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\nion-content .titles {\n  padding: 0 1rem 0 20px;\n}\n\nion-content .wallet {\n  padding: 16px;\n}\n\nion-content ion-icon {\n  zoom: 1.8;\n}\n\nion-content ion-card {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 14vh;\n  margin: auto;\n  box-shadow: none;\n  border-radius: 16px;\n}\n\nion-content ion-card ion-card-header {\n  height: 100%;\n}\n\nion-content ion-card ion-card-header ion-card-title {\n  font-size: 1rem;\n  transform: translateY(2.5vh);\n}\n\nion-content ion-list {\n  background: transparent;\n}\n\nion-content ion-list ion-item-group {\n  margin-bottom: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtBQUVGOztBQUFBO0VBQ0UsNEJBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSwyQkFBQTtBQUtGOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEk7RUFDRSxXQUFBO0FBS047O0FBRkk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFJTjs7QUFBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUVOOztBQUdJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBRE47O0FBR007RUFDRSxlQUFBO0FBRFI7O0FBR1E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBRFY7O0FBSVk7RUFDRSxXQUFBO0FBRmQ7O0FBTVU7RUFDRSxpQkFBQTtBQUpaOztBQU1ZO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUpkOztBQU9ZO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTGQ7O0FBUVk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQU5kOztBQWNFO0VBQ0Usa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVpKOztBQWNJO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBWk47O0FBZUk7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQWJOOztBQWtCRTtFQUNFLHNCQUFBO0FBaEJKOztBQW1CRTtFQUNFLGFBQUE7QUFqQko7O0FBb0JFO0VBQ0UsU0FBQTtBQWxCSjs7QUFxQkU7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFuQko7O0FBb0JJO0VBQ0UsWUFBQTtBQWxCTjs7QUFtQk07RUFDRSxlQUFBO0VBQ0EsNEJBQUE7QUFqQlI7O0FBcUJFO0VBQ0UsdUJBQUE7QUFuQko7O0FBb0JJO0VBQ0Usa0JBQUE7QUFsQk4iLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZC1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG4uZGVmYXVsdC10b3AtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiAyNnB4ICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnRyYW5zZm9ybUNlbnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzNXZoKTtcbn1cbmlvbi1jb250ZW50IHtcbiAgLmJhbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNhcHRpb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvdHRvbTogNTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmctbGVmdDogMjZweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI2cHg7XG4gICAgfVxuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7XG5cbiAgICBoMiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLmV2ZW50LXNsaWRlciB7XG4gICAgaW9uLXNsaWRlIHtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG5cbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IDJweCByZ2JhKDAsMCwwLDAuMTYpO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAgICAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTNweDtcblxuICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICBjb2xvcjogIzM2NEY2QjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ldmVudG5hbWUge1xuICAgICAgICAgICAgICBjb2xvcjogIzM2NEY2QjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubG9jYXRpb24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubGl2ZS1ldmVudCB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4IDJweCByZ2JhKDAsMCwwLDAuMTYpO1xuICAgIG1hcmdpbjogLTMwcHggMjBweCAwcHggMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGltZyB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cblxuICAgIC5pbmZvIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG4gICAgfVxuXG5cbiAgLnRpdGxlcyB7XG4gICAgcGFkZGluZzogMCAxcmVtIDAgMjBweDtcbiAgfVxuXG4gIC53YWxsZXQge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgem9vbTogMS44O1xuXG4gIH1cbiAgaW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAxNHZoO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi41dmgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgaW9uLWl0ZW0tZ3JvdXAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICAgIH1cbiAgfVxufVxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_home_home_module_ts.js.map