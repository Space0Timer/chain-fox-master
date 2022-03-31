"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_chat-list_chat-list_module_ts"],{

/***/ 41814:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/chat-list/chat-list.page.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent=\"true\">\n<ion-toolbar color=\"white\">\n  <ion-buttons slot=\"start\">\n    <ion-button color=\"primary\" (click)=\"back()\" routerDirection=\"forward\">\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-title>\n    <div class=\"title\">\n      <ion-text>Chat</ion-text>\n    </div>\n  </ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"ion-padding\">\n    <ng-container *ngFor=\"let chat of chat\">\n      <div>\n        <app-chat-list-component [chat]=\"chat\"></app-chat-list-component>\n      </div>\n    </ng-container>\n  </div>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ 89114:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/cards/chat-list/chat-list.component.html ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item (click)=\"this.goToChat(chat.name, chat.id)\">\n  <ion-label>\n    <h2>{{chat.name}}</h2>\n    <p>{{chat.message}}</p>\n  </ion-label>\n  <ion-label slot=\"end\" class=\"ion-text-right\">\n    <p *ngIf=\"this.chatService.today\">{{chat.time}}</p>\n    <p *ngIf=\"!this.chatService.today\">{{chat.date}}</p>\n    <p>&nbsp;</p>\n  </ion-label>\n</ion-item>\n");

/***/ }),

/***/ 4959:
/*!*************************************************************!*\
  !*** ./src/app/pages/chat-list/chat-list-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatListPageRoutingModule": () => (/* binding */ ChatListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _chat_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-list.page */ 42681);




const routes = [
    {
        path: '',
        component: _chat_list_page__WEBPACK_IMPORTED_MODULE_0__.ChatListPage
    }
];
let ChatListPageRoutingModule = class ChatListPageRoutingModule {
};
ChatListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatListPageRoutingModule);



/***/ }),

/***/ 42648:
/*!*****************************************************!*\
  !*** ./src/app/pages/chat-list/chat-list.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatListPageModule": () => (/* binding */ ChatListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-list-routing.module */ 4959);
/* harmony import */ var _chat_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-list.page */ 42681);
/* harmony import */ var _shared_components_cards_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/cards/chat-list/chat-list.component */ 72270);








let ChatListPageModule = class ChatListPageModule {
};
ChatListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatListPageRoutingModule
        ],
        declarations: [_chat_list_page__WEBPACK_IMPORTED_MODULE_1__.ChatListPage, _shared_components_cards_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_2__.ChatListComponent]
    })
], ChatListPageModule);



/***/ }),

/***/ 42681:
/*!***************************************************!*\
  !*** ./src/app/pages/chat-list/chat-list.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatListPage": () => (/* binding */ ChatListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chat_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./chat-list.page.html */ 41814);
/* harmony import */ var _chat_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-list.page.scss */ 15544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ 68927);
/* harmony import */ var _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cafe/product.service */ 41575);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/app */ 50947);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 26039);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chat.service */ 52160);












let ChatListPage = class ChatListPage {
    constructor(router, ionicAuthService, afs, product, _firestore, chatService) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this.afs = afs;
        this.product = product;
        this._firestore = _firestore;
        this.chatService = chatService;
        this.chat = [];
        this.id = this.ionicAuthService.getUid();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.addChatToChatList();
        });
    }
    addChatToChatList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let data;
            // eslint-disable-next-line no-underscore-dangle
            const userRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(this._firestore, `messages/${(this.id)}`);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(userRef)
                .then(snap => {
                data = snap.data();
            });
            for (const key in data) {
                this.chatService.keys.push(key);
                // get name
                const nameRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(this._firestore, `users/${(key)}`);
                yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(nameRef)
                    .then(snap => {
                    data = snap.data();
                });
                // get time
                this.subscribe = firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore()
                    .collection(`messages/${(this.id)}/${(key)}`)
                    .orderBy('createdAt', 'desc')
                    .onSnapshot((docSnapshot) => {
                    const dataSource = [];
                    docSnapshot.forEach((docu) => {
                        dataSource.push((docu.data().createdAt.toDate()));
                        this.chat.push({
                            name: data.username,
                            time: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(docu.data().createdAt.toDate(), 'HH:MM'),
                            message: docu.data().msg,
                            date: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(docu.data().createdAt.toDate(), 'yyyy-MM-dd'),
                            id: key
                        });
                    });
                    this.chat.length = 1;
                    dataSource.length = 1;
                    this.chatService.getDate(dataSource[0]);
                });
            }
        });
    }
    back() {
        this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
    }
};
ChatListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore },
    { type: _services_cafe_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.Firestore },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_5__.ChatService }
];
ChatListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-chat-list',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chat_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chat_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatListPage);



/***/ }),

/***/ 72270:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/cards/chat-list/chat-list.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatListComponent": () => (/* binding */ ChatListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chat_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./chat-list.component.html */ 89114);
/* harmony import */ var _chat_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-list.component.scss */ 20930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/chat.service */ 52160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);






let ChatListComponent = class ChatListComponent {
    constructor(chatService, router) {
        this.chatService = chatService;
        this.router = router;
    }
    ngOnInit() { }
    goToChat(name, id) {
        console.log(id);
        this.chatService.chatName = name;
        this.chatService.chatId = id;
        this.router.navigate(['chat-rooms']);
    }
};
ChatListComponent.ctorParameters = () => [
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__.ChatService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ChatListComponent.propDecorators = {
    chat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ChatListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-chat-list-component',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chat_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chat_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatListComponent);



/***/ }),

/***/ 15544:
/*!*****************************************************!*\
  !*** ./src/app/pages/chat-list/chat-list.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "ion-segment {\n  --background: #128c7e;\n}\nion-segment ion-segment-button {\n  --color: #87c5be;\n  --color-checked: #FFFFFF;\n}\nion-segment ion-segment-button:first-of-type {\n  --padding-end: 0;\n  --padding-start: 0;\n  min-width: 16px;\n}\nion-fab-button {\n  --background: #00cc3f;\n}\n.read {\n  color: #43b5ef;\n}\n.title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQkFBQTtBQUFGO0FBRUU7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREo7QUFNQTtFQUNFLHFCQUFBO0FBSEY7QUFNQTtFQUNFLGNBQUE7QUFIRjtBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRkYiLCJmaWxlIjoiY2hhdC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6ICMxMjhjN2U7XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWNvbG9yOiAjODdjNWJlO1xuICAgIC0tY29sb3ItY2hlY2tlZDogI0ZGRkZGRjtcbiAgfVxuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICBtaW4td2lkdGg6IDE2cHg7XG4gIH1cblxufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzAwY2MzZjtcbn1cblxuLnJlYWQge1xuICBjb2xvcjogIzQzYjVlZjtcbn1cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 20930:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/cards/chat-list/chat-list.component.scss ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_chat-list_chat-list_module_ts.js.map