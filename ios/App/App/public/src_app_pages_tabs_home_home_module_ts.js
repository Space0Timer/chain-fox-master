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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      <ion-button (click) = \"qrCode()\">\n        <ion-icon name=\"qr-code\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"title\">\n        <img style=\"height: 30px\" src='assets/header/chainfoxhome.png'>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"chat()\">\n        <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"logOut()\">\n        <ion-icon name=\"lock-closed\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"ion-padding\">\n    <ion-text color=\"primary\" style=\"font-size: 20px; font-weight: bold; padding-bottom: 15px\">UNM Wallet</ion-text>\n    <ion-card color=\"warning\">\n      <ion-card-content>\n        <ion-col class=\"ion-no-padding\">\n          <ion-note class=\"no\" color=\"black\">Hello, {{this.iroha.wallet.name}}!</ion-note>\n          <ion-chip color=\"warning\" style=\"margin-left:35px \" class=\"ion-no-padding\">\n            <ion-button shape=\"round\" size=\"small\" routerLink=\"/list\" routerDirection=\"forward\">\n              <ion-text>History</ion-text>\n              <ion-icon name=\"archive-outline\" slot=\"start\"></ion-icon>\n            </ion-button>\n          </ion-chip>\n          <ion-chip>\n            <ion-label color=\"light\">\n              Balance: RM {{this.iroha.wallet.balance}}\n            </ion-label>\n          </ion-chip>\n        </ion-col>\n        <ion-col class=\"ion-no-padding\">\n          <ion-chip color=\"warning\" style=\"margin-left:30px \" class=\"ion-no-padding\">\n          <ion-button shape=\"round\" size=\"small\" routerLink=\"/top-up\" routerDirection=\"forward\">\n            <ion-text>Top Up</ion-text>\n            <ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon>\n          </ion-button>\n          </ion-chip>\n        </ion-col>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div class=\"ion-padding\">\n    <ion-col size=\"4\">\n      <ion-slides pager=“true” autoplay=“2000” loop=“true”>\n        <ion-slide>\n          <img  src=\"assets/imgs/screen1.png\" alt=\"\">\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/imgs/screen2.png\" alt=\"\" width=\"640\" height=\"360\">\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/imgs/screen3.png\" alt=\"\">\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </div>\n\n</ion-content>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 94103);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 48781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/iroha.service */ 49187);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/network */ 62106);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _capacitor_community_fcm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor-community/fcm */ 33506);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/push-notifications */ 23164);












let HomePage = class HomePage {
    constructor(router, ionicAuthService, _firestore, iroha, alertController, menu) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this._firestore = _firestore;
        this.iroha = iroha;
        this.alertController = alertController;
        this.menu = menu;
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
        this.uid = this.ionicAuthService.getUid();
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getUserId();
            setTimeout(() => {
                event.target.complete();
            }, 1000);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_6__.PushNotifications.requestPermissions();
                yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_6__.PushNotifications.register();
                // Enable the auto initialization of the library
                _capacitor_community_fcm__WEBPACK_IMPORTED_MODULE_5__.FCM.getToken()
                    .then((r) => console.log(` ${r.token}`))
                    .catch((err) => console.log(err));
                _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.addListener('networkStatusChange', (status) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getUserId();
        });
    }
    showAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-underscore-dangle
            const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(this._firestore, 'users', this.uid);
            const docSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.getDoc)(docRef);
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.Firestore },
    { type: _services_iroha_service__WEBPACK_IMPORTED_MODULE_3__.IrohaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
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

module.exports = ".title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.card-padding {\n  padding-bottom: 12px;\n}\n\nion-content ion-icon {\n  zoom: 1;\n}\n\nion-content .titles {\n  padding: 0 1rem 0 20px;\n}\n\nion-content .wallet {\n  padding: 16px;\n}\n\nion-content ion-card {\n  overflow: visible;\n  height: 120px;\n  box-shadow: none;\n  border-radius: 8px;\n  margin: 26px 0;\n}\n\nion-content ion-card ion-col ion-img {\n  position: relative;\n  bottom: 36px;\n  width: 120px;\n}\n\nion-content ion-card .mask img {\n  width: 240px;\n  position: absolute;\n  bottom: 0px;\n  left: 140px;\n  -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));\n          mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));\n}\n\nion-content ion-card ion-badge {\n  margin-top: 8px;\n  background: rgba(0, 0, 0, 0.08);\n}\n\nion-content ion-card ion-card-title {\n  font-weight: 900;\n}\n\nion-content ion-card ion-card-header {\n  position: relative;\n}\n\nion-content ion-card .center-right {\n  position: absolute;\n  top: 50%;\n  right: 0px;\n  transform: translateY(-50%);\n}\n\nion-content ion-card ion-card-subtitle {\n  font-weight: bold;\n  font-size: 16px;\n}\n\nion-content ion-card .no {\n  color: rgba(0, 0, 0, 0.66);\n  font-weight: bold;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtBQUVGOztBQUVFO0VBQ0UsT0FBQTtBQUNKOztBQUVFO0VBQ0Usc0JBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7QUFESjs7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBS007RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSFI7O0FBUU07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlGQUFBO1VBQUEseUVBQUE7QUFOUjs7QUFVSTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtBQVJOOztBQVdJO0VBQ0UsZ0JBQUE7QUFUTjs7QUFZSTtFQUFrQixrQkFBQTtBQVR0Qjs7QUFVSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQVJOOztBQVdJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBVE47O0FBV0k7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVROIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQtcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuaW9uLWNvbnRlbnQge1xuXG4gIGlvbi1pY29uIHtcbiAgICB6b29tOiAxO1xuXG4gIH1cbiAgLnRpdGxlcyB7XG4gICAgcGFkZGluZzogMCAxcmVtIDAgMjBweDtcbiAgfVxuXG4gIC53YWxsZXQge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICBpb24tY2FyZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW46IDI2cHggMDtcblxuICAgIGlvbi1jb2wge1xuICAgICAgaW9uLWltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiAzNnB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hc2sge1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAxNDBweDtcbiAgICAgICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAuMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1iYWRnZSB7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4wOCk7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICB9XG5cbiAgICBpb24tY2FyZC1oZWFkZXIgeyBwb3NpdGlvbjogcmVsYXRpdmUgfVxuICAgIC5jZW50ZXItcmlnaHR7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5ubyB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNjYpO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG5cbiAgfVxufVxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_home_home_module_ts.js.map