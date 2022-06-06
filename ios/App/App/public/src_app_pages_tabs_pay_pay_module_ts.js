"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_pay_pay_module_ts"],{

/***/ 56101:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tabs/pay/pay.page.html ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Scan to Pay</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" [style.--background]=\"scanActive ? 'transparent' : '#ffffff'\">\n</ion-content>\n");

/***/ }),

/***/ 85908:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/pay/pay-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayPageRoutingModule": () => (/* binding */ PayPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pay_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pay.page */ 84867);




const routes = [
    {
        path: '',
        component: _pay_page__WEBPACK_IMPORTED_MODULE_0__.PayPage
    },
];
let PayPageRoutingModule = class PayPageRoutingModule {
};
PayPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PayPageRoutingModule);



/***/ }),

/***/ 97106:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/pay/pay.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayPageModule": () => (/* binding */ PayPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _pay_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pay-routing.module */ 85908);
/* harmony import */ var _pay_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pay.page */ 84867);







let PayPageModule = class PayPageModule {
};
PayPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pay_routing_module__WEBPACK_IMPORTED_MODULE_0__.PayPageRoutingModule
        ],
        declarations: [_pay_page__WEBPACK_IMPORTED_MODULE_1__.PayPage]
    })
], PayPageModule);



/***/ }),

/***/ 84867:
/*!********************************************!*\
  !*** ./src/app/pages/tabs/pay/pay.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayPage": () => (/* binding */ PayPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_2_2_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pay_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pay.page.html */ 56101);
/* harmony import */ var _pay_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pay.page.scss */ 26596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor-community/barcode-scanner */ 72807);
/* harmony import */ var _services_iroha_iroha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/iroha/iroha.service */ 52857);








let PayPage = class PayPage {
    constructor(router, platform, iroha, alertController) {
        this.router = router;
        this.platform = platform;
        this.iroha = iroha;
        this.alertController = alertController;
        this.scanActive = false;
        this.result = null;
    }
    ngAfterViewInit() {
        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.prepare();
        this.startScanner();
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.platform.ready().then(() => {
                document.body.classList.toggle('dark', false);
            });
        });
    }
    ngOnDestroy() {
        this.stopScanner();
    }
    startScanner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const allowed = yield this.checkPermissions();
            if (allowed) {
                this.scanActive = true;
                const result = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.startScan({ targetedFormats: [_capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.SupportedFormat.QR_CODE] });
                if (result.hasContent) {
                    this.iroha.result = result.content;
                    this.scanActive = false;
                    this.iroha.setOtherName(this.iroha.result + '@test').catch((e) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        yield this.showAlert('Invalid code', e);
                        yield this.router.navigate(['tabs']);
                    }));
                    yield this.router.navigate(['scan-pay']);
                }
            }
        });
    }
    checkPermissions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                const status = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.checkPermission({ force: true });
                if (status.granted) {
                    resolve(true);
                }
                else if (status.denied) {
                    const alert = yield this.alertController.create({
                        header: 'No permissions',
                        message: 'Please enable camera in your settings.',
                        buttons: [{
                                text: 'No',
                                role: 'cancel'
                            },
                            {
                                text: 'Open Settings',
                                handler: () => {
                                    resolve(false);
                                    _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.openAppSettings();
                                }
                            }]
                    });
                }
                else {
                    resolve(false);
                }
            }));
        });
    }
    stopScanner() {
        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.stopScan();
        this.scanActive = false;
    }
    showAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['Ok'],
            });
            yield alert.present();
        });
    }
    back() {
        this.router.navigateByUrl('/tabs', { replaceUrl: true });
    }
};
PayPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _services_iroha_iroha_service__WEBPACK_IMPORTED_MODULE_3__.IrohaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
PayPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _Users_spacetimer_Documents_chain_fox_master_2_2_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pay_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pay_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PayPage);



/***/ }),

/***/ 26596:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/pay/pay.page.scss ***!
  \**********************************************/
/***/ ((module) => {

module.exports = ".scan-box {\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);\n  content: \"\";\n  display: block;\n  left: 50%;\n  height: 300px;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n}\n\n.scan-button {\n  margin: 0px;\n  position: absolute;\n  bottom: 100px;\n  width: 100vw;\n  height: 50px;\n  z-index: 11;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVGIiwiZmlsZSI6InBheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nhbi1ib3gge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMCAxMDB2bWF4IHJnYigwLCAwLCAwLCAwLjUpO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLnNjYW4tYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDBweDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDExO1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_pay_pay_module_ts.js.map