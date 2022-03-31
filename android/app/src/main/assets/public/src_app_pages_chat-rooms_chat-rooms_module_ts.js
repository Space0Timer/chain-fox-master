"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_chat-rooms_chat-rooms_module_ts"],{

/***/ 70701:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/chat-rooms/chat-rooms.page.html ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent=\"true\">\n<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n  <ion-title color = \"primary\">\n    {{this.chatService.chatName}}\n  </ion-title>\n  <ion-buttons slot=\"start\">\n    <ion-icon (click)=\"back()\" color=\"primary\" slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row *ngFor=\"let message of messages | async\">\n      <ion-col size=\"9\" class=\"message\" [offset]=\"message.myMsg ? 3 : 0\"\n               [ngClass]=\"{ 'my-message': message.myMsg, 'other-message': !message.myMsg }\">\n        <b>{{ message.fromName }}</b><br>\n        <span>{{ message.msg }}</span>\n        <span>{{ message.msg }}</span>\n        <div class=\"time ion-text-right\"><br>{{ message.createdAt?.toMillis() | date:'short' }}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"10\" >\n        <ion-textarea color=\"dark\" class=\"message-input\" autoGrow=\"true\" rows=\"1\" maxLength=\"500\" [(ngModel)]=\"newMsg\" >\n        </ion-textarea>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\"\n                    class=\"msg-btn\" (click)=\"sendMessage()\">\n          <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 78014:
/*!***************************************************************!*\
  !*** ./src/app/pages/chat-rooms/chat-rooms-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatRoomsPageRoutingModule": () => (/* binding */ ChatRoomsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _chat_rooms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-rooms.page */ 36311);




const routes = [
    {
        path: '',
        component: _chat_rooms_page__WEBPACK_IMPORTED_MODULE_0__.ChatRoomsPage
    }
];
let ChatRoomsPageRoutingModule = class ChatRoomsPageRoutingModule {
};
ChatRoomsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatRoomsPageRoutingModule);



/***/ }),

/***/ 55718:
/*!*******************************************************!*\
  !*** ./src/app/pages/chat-rooms/chat-rooms.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatRoomsPageModule": () => (/* binding */ ChatRoomsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _chat_rooms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-rooms-routing.module */ 78014);
/* harmony import */ var _chat_rooms_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-rooms.page */ 36311);







let ChatRoomsPageModule = class ChatRoomsPageModule {
};
ChatRoomsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chat_rooms_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatRoomsPageRoutingModule
        ],
        declarations: [_chat_rooms_page__WEBPACK_IMPORTED_MODULE_1__.ChatRoomsPage]
    })
], ChatRoomsPageModule);



/***/ }),

/***/ 36311:
/*!*****************************************************!*\
  !*** ./src/app/pages/chat-rooms/chat-rooms.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatRoomsPage": () => (/* binding */ ChatRoomsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chat_rooms_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./chat-rooms.page.html */ 70701);
/* harmony import */ var _chat_rooms_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-rooms.page.scss */ 15190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ 52160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);







let ChatRoomsPage = class ChatRoomsPage {
    constructor(chatService, router) {
        this.chatService = chatService;
        this.router = router;
        this.newMsg = '';
        this.text = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.messages = this.chatService.getChatMessages(this.chatService.chatId);
        });
    }
    sendMessage() {
        this.chatService.addChatMessage(this.newMsg, this.chatService.chatId).then(() => {
            this.chatService.returnChatMessage(this.newMsg, this.chatService.chatId);
            this.newMsg = '';
            this.content.scrollToBottom();
        });
    }
    back() {
        this.router.navigateByUrl('tabs/home', { replaceUrl: true });
    }
};
ChatRoomsPage.ctorParameters = () => [
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__.ChatService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ChatRoomsPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent,] }]
};
ChatRoomsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-chat-rooms',
        template: _Users_spacetimer_Documents_chain_fox_master_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chat_rooms_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chat_rooms_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatRoomsPage);



/***/ }),

/***/ 15190:
/*!*******************************************************!*\
  !*** ./src/app/pages/chat-rooms/chat-rooms.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 6px;\n  background: var(--ion-color-contrast);\n  resize: none;\n  margin-top: 0px;\n  --padding-start: 8px;\n}\n\n.message {\n  padding: 10px !important;\n  border-radius: 10px !important;\n  margin-bottom: 4px !important;\n  white-space: pre-wrap;\n}\n\n.my-message {\n  background: var(--ion-color-tertiary);\n  color: #fff;\n}\n\n.other-message {\n  background: var(--ion-color-secondary);\n  color: #fff;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtcm9vbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHNDQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImNoYXQtcm9vbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTtcbiAgcmVzaXplOiBub25lO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xufVxuXG4ubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4ubXktbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub3RoZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRpbWUge1xuICBjb2xvcjogI2RmZGZkZjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_chat-rooms_chat-rooms_module_ts.js.map