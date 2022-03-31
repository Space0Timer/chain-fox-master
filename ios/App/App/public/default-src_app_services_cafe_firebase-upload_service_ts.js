"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_cafe_firebase-upload_service_ts"],{

/***/ 43430:
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/fire/fesm2015/angular-fire-compat-storage.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularFireStorage": () => (/* binding */ AngularFireStorage),
/* harmony export */   "AngularFireStorageModule": () => (/* binding */ AngularFireStorageModule),
/* harmony export */   "BUCKET": () => (/* binding */ BUCKET),
/* harmony export */   "GetDownloadURLPipe": () => (/* binding */ GetDownloadURLPipe),
/* harmony export */   "GetDownloadURLPipeModule": () => (/* binding */ GetDownloadURLPipeModule),
/* harmony export */   "MAX_OPERATION_RETRY_TIME": () => (/* binding */ MAX_OPERATION_RETRY_TIME),
/* harmony export */   "MAX_UPLOAD_RETRY_TIME": () => (/* binding */ MAX_UPLOAD_RETRY_TIME),
/* harmony export */   "USE_EMULATOR": () => (/* binding */ USE_EMULATOR),
/* harmony export */   "createStorageRef": () => (/* binding */ createStorageRef),
/* harmony export */   "createUploadTask": () => (/* binding */ createUploadTask),
/* harmony export */   "fromTask": () => (/* binding */ fromTask)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4108);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 38365);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 41346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 21346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8343);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 62257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 83154);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ 54385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 33467);
/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/storage */ 35499);
/* harmony import */ var _angular_fire_app_check__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/app-check */ 33578);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 50947);












 // Things aren't working great, I'm having to put in a lot of work-arounds for what
// appear to be Firebase JS SDK bugs https://github.com/firebase/firebase-js-sdk/issues/4158

function fromTask(task) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    const progress = snap => subscriber.next(snap);

    const error = e => subscriber.error(e);

    const complete = () => subscriber.complete(); // emit the current snapshot, so they don't have to wait for state_changes
    // to fire next... this is stale if the task is no longer running :(


    progress(task.snapshot);
    const unsub = task.on('state_changed', progress); // it turns out that neither task snapshot nor 'state_changed' fire the last
    // snapshot before completion, the one with status 'success" and 100% progress
    // so let's use the promise form of the task for that

    task.then(snapshot => {
      progress(snapshot);
      complete();
    }, e => {
      // TODO investigate, again this is stale, we never fire a canceled or error it seems
      progress(task.snapshot);
      error(e);
    }); // on's type if Function, rather than () => void, need to wrap

    return function unsubscribe() {
      unsub();
    };
  }).pipe( // deal with sync emissions from first emitting `task.snapshot`, this makes sure
  // that if the task is already finished we don't emit the old running state
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(0));
}
/**
 * Create an AngularFireUploadTask from a regular UploadTask from the Storage SDK.
 * This method creates an observable of the upload and returns on object that provides
 * multiple methods for controlling and monitoring the file upload.
 */


function createUploadTask(task) {
  const inner$ = fromTask(task);
  return {
    task,
    then: task.then.bind(task),
    catch: task.catch.bind(task),
    pause: task.pause.bind(task),
    cancel: task.cancel.bind(task),
    resume: task.resume.bind(task),
    snapshotChanges: () => inner$,
    percentageChanges: () => inner$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(s => s.bytesTransferred / s.totalBytes * 100))
  };
}
/**
 * Create an AngularFire wrapped Storage Reference. This object
 * creates observable methods from promise based methods.
 */


function createStorageRef(ref) {
  return {
    getDownloadURL: () => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(undefined).pipe(_angular_fire__WEBPACK_IMPORTED_MODULE_6__.observeOutsideAngular, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => ref.getDownloadURL()), _angular_fire__WEBPACK_IMPORTED_MODULE_6__.keepUnstableUntilFirst),
    getMetadata: () => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(undefined).pipe(_angular_fire__WEBPACK_IMPORTED_MODULE_6__.observeOutsideAngular, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => ref.getMetadata()), _angular_fire__WEBPACK_IMPORTED_MODULE_6__.keepUnstableUntilFirst),
    delete: () => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(ref.delete()),
    child: path => createStorageRef(ref.child(path)),
    updateMetadata: meta => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(ref.updateMetadata(meta)),
    put: (data, metadata) => {
      const task = ref.put(data, metadata);
      return createUploadTask(task);
    },
    putString: (data, format, metadata) => {
      const task = ref.putString(data, format, metadata);
      return createUploadTask(task);
    },
    list: options => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(ref.list(options)),
    listAll: () => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(ref.listAll())
  };
}

const BUCKET = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.InjectionToken('angularfire2.storageBucket');
const MAX_UPLOAD_RETRY_TIME = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.InjectionToken('angularfire2.storage.maxUploadRetryTime');
const MAX_OPERATION_RETRY_TIME = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.InjectionToken('angularfire2.storage.maxOperationRetryTime');
const USE_EMULATOR = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.InjectionToken('angularfire2.storage.use-emulator');
/**
 * AngularFireStorage Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for uploading and downloading binary files from Cloud Storage for
 * Firebase.
 */

class AngularFireStorage {
  constructor(options, name, storageBucket, // tslint:disable-next-line:ban-types
  platformId, zone, schedulers, maxUploadRetryTime, maxOperationRetryTime, _useEmulator, _appCheckInstances) {
    const app = (0,_angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__["ɵfirebaseAppFactory"])(options, zone, name);
    this.storage = (0,_angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__["ɵcacheInstance"])(`${app.name}.storage.${storageBucket}`, 'AngularFireStorage', app.name, () => {
      const storage = zone.runOutsideAngular(() => app.storage(storageBucket || undefined));
      const useEmulator = _useEmulator;

      if (useEmulator) {
        storage.useEmulator(...useEmulator);
      }

      if (maxUploadRetryTime) {
        storage.setMaxUploadRetryTime(maxUploadRetryTime);
      }

      if (maxOperationRetryTime) {
        storage.setMaxOperationRetryTime(maxOperationRetryTime);
      }

      return storage;
    }, [maxUploadRetryTime, maxOperationRetryTime]);
  }

  ref(path) {
    return createStorageRef(this.storage.ref(path));
  }

  refFromURL(path) {
    return createStorageRef(this.storage.refFromURL(path));
  }

  upload(path, data, metadata) {
    const storageRef = this.storage.ref(path);
    const ref = createStorageRef(storageRef);
    return ref.put(data, metadata);
  }

}

AngularFireStorage.ɵfac = function AngularFireStorage_Factory(t) {
  return new (t || AngularFireStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.FIREBASE_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.FIREBASE_APP_NAME, 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](BUCKET, 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_6__["ɵAngularFireSchedulers"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](MAX_UPLOAD_RETRY_TIME, 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](MAX_OPERATION_RETRY_TIME, 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](USE_EMULATOR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_fire_app_check__WEBPACK_IMPORTED_MODULE_11__.AppCheckInstances, 8));
};

AngularFireStorage.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: AngularFireStorage,
  factory: AngularFireStorage.ɵfac,
  providedIn: 'any'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](AngularFireStorage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable,
    args: [{
      providedIn: 'any'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [_angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.FIREBASE_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [_angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.FIREBASE_APP_NAME]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [BUCKET]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_9__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }, {
      type: _angular_fire__WEBPACK_IMPORTED_MODULE_6__["ɵAngularFireSchedulers"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [MAX_UPLOAD_RETRY_TIME]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [MAX_OPERATION_RETRY_TIME]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [USE_EMULATOR]
      }]
    }, {
      type: _angular_fire_app_check__WEBPACK_IMPORTED_MODULE_11__.AppCheckInstances,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }]
    }];
  }, null);
})();
/** to be used with in combination with | async */


class GetDownloadURLPipe {
  constructor(storage, cdr, state) {
    this.storage = storage;
    this.state = state;
    this.asyncPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe(cdr);
  }

  transform(path) {
    var _a;

    if (path !== this.path) {
      this.path = path;
      const key = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.makeStateKey)(`|getDownloadURL|${path}`);
      const existing = (_a = this.state) === null || _a === void 0 ? void 0 : _a.get(key, undefined);
      this.downloadUrl$ = existing ? (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(existing) : this.storage.ref(path).getDownloadURL().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(it => {
        var _a;

        return (_a = this.state) === null || _a === void 0 ? void 0 : _a.set(key, it);
      }));
    }

    return this.asyncPipe.transform(this.downloadUrl$);
  }

  ngOnDestroy() {
    this.asyncPipe.ngOnDestroy();
  }

}

GetDownloadURLPipe.ɵfac = function GetDownloadURLPipe_Factory(t) {
  return new (t || GetDownloadURLPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](AngularFireStorage, 16), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef, 16), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.TransferState, 24));
};

GetDownloadURLPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefinePipe"]({
  name: "getDownloadURL",
  type: GetDownloadURLPipe,
  pure: false
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](GetDownloadURLPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Pipe,
    args: [{
      name: 'getDownloadURL',
      pure: false
    }]
  }], function () {
    return [{
      type: AngularFireStorage
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.TransferState,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }]
    }];
  }, null);
})();

class GetDownloadURLPipeModule {}

GetDownloadURLPipeModule.ɵfac = function GetDownloadURLPipeModule_Factory(t) {
  return new (t || GetDownloadURLPipeModule)();
};

GetDownloadURLPipeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: GetDownloadURLPipeModule,
  declarations: [GetDownloadURLPipe],
  exports: [GetDownloadURLPipe]
});
GetDownloadURLPipeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](GetDownloadURLPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule,
    args: [{
      declarations: [GetDownloadURLPipe],
      exports: [GetDownloadURLPipe]
    }]
  }], null, null);
})();

class AngularFireStorageModule {
  constructor() {
    firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].registerVersion('angularfire', _angular_fire__WEBPACK_IMPORTED_MODULE_6__.VERSION.full, 'gcs-compat');
  }

}

AngularFireStorageModule.ɵfac = function AngularFireStorageModule_Factory(t) {
  return new (t || AngularFireStorageModule)();
};

AngularFireStorageModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AngularFireStorageModule,
  exports: [GetDownloadURLPipeModule]
});
AngularFireStorageModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [AngularFireStorage],
  imports: [GetDownloadURLPipeModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](AngularFireStorageModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule,
    args: [{
      exports: [GetDownloadURLPipeModule],
      providers: [AngularFireStorage]
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 35499:
/*!****************************************************************!*\
  !*** ./node_modules/firebase/compat/storage/dist/index.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_storage_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/storage-compat */ 14484);



/***/ }),

/***/ 53727:
/*!**********************************************************!*\
  !*** ./src/app/services/cafe/firebase-upload.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseUploadService": () => (/* binding */ FirebaseUploadService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/storage */ 43430);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 68927);




let FirebaseUploadService = class FirebaseUploadService {
    constructor(angularFireStorage, ionicAuthService) {
        this.angularFireStorage = angularFireStorage;
        this.ionicAuthService = ionicAuthService;
        this.location = 'uploads/';
        this.uid = this.ionicAuthService.getUid();
    }
    /* Image name generator time */
    imageName() {
        const newTime = Math.floor(Date.now() / 1000);
        return Math.floor(Math.random() * 20) + newTime;
    }
    storeImage(imageData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const imageName = this.imageName();
                return new Promise((resolve, reject) => {
                    const pictureRef = this.angularFireStorage.ref(this.location + `${this.uid}` + imageName);
                    pictureRef
                        .put(imageData)
                        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                        .then(function () {
                        pictureRef.getDownloadURL().subscribe((url) => {
                            resolve(url);
                        });
                    })
                        .catch((error) => {
                        reject(error);
                    });
                });
            }
            catch (e) { }
        });
    }
};
FirebaseUploadService.ctorParameters = () => [
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_2__.AngularFireStorage },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
FirebaseUploadService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], FirebaseUploadService);



/***/ }),

/***/ 14484:
/*!*************************************************************************!*\
  !*** ./node_modules/@firebase/storage-compat/dist/esm/index.esm2017.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerStorage": () => (/* binding */ registerStorage)
/* harmony export */ });
/* harmony import */ var _firebase_app_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app-compat */ 71818);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/storage */ 49876);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/component */ 30504);




/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UploadTaskSnapshotCompat {
    constructor(_delegate, task, ref) {
        this._delegate = _delegate;
        this.task = task;
        this.ref = ref;
    }
    get bytesTransferred() {
        return this._delegate.bytesTransferred;
    }
    get metadata() {
        return this._delegate.metadata;
    }
    get state() {
        return this._delegate.state;
    }
    get totalBytes() {
        return this._delegate.totalBytes;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UploadTaskCompat {
    constructor(_delegate, _ref) {
        this._delegate = _delegate;
        this._ref = _ref;
        this.cancel = this._delegate.cancel.bind(this._delegate);
        this.catch = this._delegate.catch.bind(this._delegate);
        this.pause = this._delegate.pause.bind(this._delegate);
        this.resume = this._delegate.resume.bind(this._delegate);
    }
    get snapshot() {
        return new UploadTaskSnapshotCompat(this._delegate.snapshot, this, this._ref);
    }
    then(onFulfilled, onRejected) {
        return this._delegate.then(snapshot => {
            if (onFulfilled) {
                return onFulfilled(new UploadTaskSnapshotCompat(snapshot, this, this._ref));
            }
        }, onRejected);
    }
    on(type, nextOrObserver, error, completed) {
        let wrappedNextOrObserver = undefined;
        if (!!nextOrObserver) {
            if (typeof nextOrObserver === 'function') {
                wrappedNextOrObserver = (taskSnapshot) => nextOrObserver(new UploadTaskSnapshotCompat(taskSnapshot, this, this._ref));
            }
            else {
                wrappedNextOrObserver = {
                    next: !!nextOrObserver.next
                        ? (taskSnapshot) => nextOrObserver.next(new UploadTaskSnapshotCompat(taskSnapshot, this, this._ref))
                        : undefined,
                    complete: nextOrObserver.complete || undefined,
                    error: nextOrObserver.error || undefined
                };
            }
        }
        return this._delegate.on(type, wrappedNextOrObserver, error || undefined, completed || undefined);
    }
}

class ListResultCompat {
    constructor(_delegate, _service) {
        this._delegate = _delegate;
        this._service = _service;
    }
    get prefixes() {
        return this._delegate.prefixes.map(ref => new ReferenceCompat(ref, this._service));
    }
    get items() {
        return this._delegate.items.map(ref => new ReferenceCompat(ref, this._service));
    }
    get nextPageToken() {
        return this._delegate.nextPageToken || null;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ReferenceCompat {
    constructor(_delegate, storage) {
        this._delegate = _delegate;
        this.storage = storage;
    }
    get name() {
        return this._delegate.name;
    }
    get bucket() {
        return this._delegate.bucket;
    }
    get fullPath() {
        return this._delegate.fullPath;
    }
    toString() {
        return this._delegate.toString();
    }
    /**
     * @returns A reference to the object obtained by
     * appending childPath, removing any duplicate, beginning, or trailing
     * slashes.
     */
    child(childPath) {
        const reference = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__._getChild)(this._delegate, childPath);
        return new ReferenceCompat(reference, this.storage);
    }
    get root() {
        return new ReferenceCompat(this._delegate.root, this.storage);
    }
    /**
     * @returns A reference to the parent of the
     * current object, or null if the current object is the root.
     */
    get parent() {
        const reference = this._delegate.parent;
        if (reference == null) {
            return null;
        }
        return new ReferenceCompat(reference, this.storage);
    }
    /**
     * Uploads a blob to this object's location.
     * @param data - The blob to upload.
     * @returns An UploadTask that lets you control and
     * observe the upload.
     */
    put(data, metadata) {
        this._throwIfRoot('put');
        return new UploadTaskCompat((0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.uploadBytesResumable)(this._delegate, data, metadata), this);
    }
    /**
     * Uploads a string to this object's location.
     * @param value - The string to upload.
     * @param format - The format of the string to upload.
     * @returns An UploadTask that lets you control and
     * observe the upload.
     */
    putString(value, format = _firebase_storage__WEBPACK_IMPORTED_MODULE_1__.StringFormat.RAW, metadata) {
        this._throwIfRoot('putString');
        const data = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__._dataFromString)(format, value);
        const metadataClone = Object.assign({}, metadata);
        if (metadataClone['contentType'] == null && data.contentType != null) {
            metadataClone['contentType'] = data.contentType;
        }
        return new UploadTaskCompat(new _firebase_storage__WEBPACK_IMPORTED_MODULE_1__._UploadTask(this._delegate, new _firebase_storage__WEBPACK_IMPORTED_MODULE_1__._FbsBlob(data.data, true), metadataClone), this);
    }
    /**
     * List all items (files) and prefixes (folders) under this storage reference.
     *
     * This is a helper method for calling list() repeatedly until there are
     * no more results. The default pagination size is 1000.
     *
     * Note: The results may not be consistent if objects are changed while this
     * operation is running.
     *
     * Warning: listAll may potentially consume too many resources if there are
     * too many results.
     *
     * @returns A Promise that resolves with all the items and prefixes under
     *  the current storage reference. `prefixes` contains references to
     *  sub-directories and `items` contains references to objects in this
     *  folder. `nextPageToken` is never returned.
     */
    listAll() {
        return (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.listAll)(this._delegate).then(r => new ListResultCompat(r, this.storage));
    }
    /**
     * List items (files) and prefixes (folders) under this storage reference.
     *
     * List API is only available for Firebase Rules Version 2.
     *
     * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
     * delimited folder structure. Refer to GCS's List API if you want to learn more.
     *
     * To adhere to Firebase Rules's Semantics, Firebase Storage does not
     * support objects whose paths end with "/" or contain two consecutive
     * "/"s. Firebase Storage List API will filter these unsupported objects.
     * list() may fail if there are too many unsupported objects in the bucket.
     *
     * @param options - See ListOptions for details.
     * @returns A Promise that resolves with the items and prefixes.
     * `prefixes` contains references to sub-folders and `items`
     * contains references to objects in this folder. `nextPageToken`
     * can be used to get the rest of the results.
     */
    list(options) {
        return (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.list)(this._delegate, options || undefined).then(r => new ListResultCompat(r, this.storage));
    }
    /**
     * A `Promise` that resolves with the metadata for this object. If this
     * object doesn't exist or metadata cannot be retreived, the promise is
     * rejected.
     */
    getMetadata() {
        return (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getMetadata)(this._delegate);
    }
    /**
     * Updates the metadata for this object.
     * @param metadata - The new metadata for the object.
     * Only values that have been explicitly set will be changed. Explicitly
     * setting a value to null will remove the metadata.
     * @returns A `Promise` that resolves
     * with the new metadata for this object.
     * @see firebaseStorage.Reference.prototype.getMetadata
     */
    updateMetadata(metadata) {
        return (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.updateMetadata)(this._delegate, metadata);
    }
    /**
     * @returns A `Promise` that resolves with the download
     * URL for this object.
     */
    getDownloadURL() {
        return (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)(this._delegate);
    }
    /**
     * Deletes the object at this location.
     * @returns A `Promise` that resolves if the deletion succeeds.
     */
    delete() {
        this._throwIfRoot('delete');
        return (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.deleteObject)(this._delegate);
    }
    _throwIfRoot(name) {
        if (this._delegate._location.path === '') {
            throw (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__._invalidRootOperation)(name);
        }
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 */
class StorageServiceCompat {
    constructor(app, _delegate) {
        this.app = app;
        this._delegate = _delegate;
    }
    get maxOperationRetryTime() {
        return this._delegate.maxOperationRetryTime;
    }
    get maxUploadRetryTime() {
        return this._delegate.maxUploadRetryTime;
    }
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    ref(path) {
        if (isUrl(path)) {
            throw (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__._invalidArgument)('ref() expected a child path but got a URL, use refFromURL instead.');
        }
        return new ReferenceCompat((0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(this._delegate, path), this);
    }
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */
    refFromURL(url) {
        if (!isUrl(url)) {
            throw (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__._invalidArgument)('refFromURL() expected a full URL but got a child path, use ref() instead.');
        }
        try {
            _firebase_storage__WEBPACK_IMPORTED_MODULE_1__._Location.makeFromUrl(url, this._delegate.host);
        }
        catch (e) {
            throw (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__._invalidArgument)('refFromUrl() expected a valid full URL but got an invalid one.');
        }
        return new ReferenceCompat((0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(this._delegate, url), this);
    }
    setMaxUploadRetryTime(time) {
        this._delegate.maxUploadRetryTime = time;
    }
    setMaxOperationRetryTime(time) {
        this._delegate.maxOperationRetryTime = time;
    }
    useEmulator(host, port, options = {}) {
        (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.connectStorageEmulator)(this._delegate, host, port, options);
    }
}
function isUrl(path) {
    return /^[A-Za-z]+:\/\//.test(path);
}

const name = "@firebase/storage-compat";
const version = "0.1.10";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Storage.
 */
const STORAGE_TYPE = 'storage-compat';
function factory(container, { instanceIdentifier: url }) {
    // Dependencies
    const app = container.getProvider('app-compat').getImmediate();
    const storageExp = container
        .getProvider('storage')
        .getImmediate({ identifier: url });
    const storageServiceCompat = new StorageServiceCompat(app, storageExp);
    return storageServiceCompat;
}
function registerStorage(instance) {
    const namespaceExports = {
        // no-inline
        TaskState: _firebase_storage__WEBPACK_IMPORTED_MODULE_1__._TaskState,
        TaskEvent: _firebase_storage__WEBPACK_IMPORTED_MODULE_1__._TaskEvent,
        StringFormat: _firebase_storage__WEBPACK_IMPORTED_MODULE_1__.StringFormat,
        Storage: StorageServiceCompat,
        Reference: ReferenceCompat
    };
    instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__.Component(STORAGE_TYPE, factory, "PUBLIC" /* PUBLIC */)
        .setServiceProps(namespaceExports)
        .setMultipleInstances(true));
    instance.registerVersion(name, version);
}
registerStorage(_firebase_app_compat__WEBPACK_IMPORTED_MODULE_0__["default"]);




/***/ })

}]);
//# sourceMappingURL=default-src_app_services_cafe_firebase-upload_service_ts.js.map