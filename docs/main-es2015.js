(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comps_siginin_siginin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/siginin/siginin.component */ "./src/app/comps/siginin/siginin.component.ts");
/* harmony import */ var _comps_chet_chet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/chet/chet.component */ "./src/app/comps/chet/chet.component.ts");
/* harmony import */ var _comps_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/home/home.component */ "./src/app/comps/home/home.component.ts");







const routes = [
    { path: 'home', component: _comps_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        children: [
            { path: 'siginin/:id', component: _comps_siginin_siginin_component__WEBPACK_IMPORTED_MODULE_2__["SigininComponent"],
                canActivate: [_comps_siginin_siginin_component__WEBPACK_IMPORTED_MODULE_2__["SigininGuardService"]], },
        ] },
    { path: 'chet', component: _comps_chet_chet_component__WEBPACK_IMPORTED_MODULE_3__["ChetComponent"] },
    { path: '', redirectTo: 'home/siginin/0', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'slakProj';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_chet_chet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/chet/chet.component */ "./src/app/comps/chet/chet.component.ts");
/* harmony import */ var _comps_siginin_siginin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/siginin/siginin.component */ "./src/app/comps/siginin/siginin.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_slak_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/slak-service.service */ "./src/app/services/slak-service.service.ts");
/* harmony import */ var _comps_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/home/home.component */ "./src/app/comps/home/home.component.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/analytics */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_ngrx_event__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/ngrx/event */ "./src/app/services/ngrx/event.ts");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_slak_service_service__WEBPACK_IMPORTED_MODULE_7__["SlakServiceService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_12__["AngularFireAnalyticsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot({ users: _services_ngrx_event__WEBPACK_IMPORTED_MODULE_16__["reducerUser"] }, {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                }
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({ maxAge: 25 })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _comps_chet_chet_component__WEBPACK_IMPORTED_MODULE_4__["ChetComponent"],
        _comps_siginin_siginin_component__WEBPACK_IMPORTED_MODULE_5__["SigininComponent"],
        _comps_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_12__["AngularFireAnalyticsModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _comps_chet_chet_component__WEBPACK_IMPORTED_MODULE_4__["ChetComponent"],
                    _comps_siginin_siginin_component__WEBPACK_IMPORTED_MODULE_5__["SigininComponent"],
                    _comps_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
                    _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_12__["AngularFireAnalyticsModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot({ users: _services_ngrx_event__WEBPACK_IMPORTED_MODULE_16__["reducerUser"] }, {
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true,
                        }
                    }),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({ maxAge: 25 })
                ],
                providers: [
                    _services_slak_service_service__WEBPACK_IMPORTED_MODULE_7__["SlakServiceService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comps/chet/chet.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/chet/chet.component.ts ***!
  \**********************************************/
/*! exports provided: ChetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChetComponent", function() { return ChetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_modals_respons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/respons */ "./src/app/modals/respons.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var src_app_services_slak_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/slak-service.service */ "./src/app/services/slak-service.service.ts");
/* harmony import */ var src_app_services_ngrx_sort_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ngrx/sort.service */ "./src/app/services/ngrx/sort.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function ChetComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userCorrentLocalStorge.name);
} }
function ChetComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5);
} }
function ChetComponent_div_42_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.userCorrentLocalStorge.name);
} }
function ChetComponent_div_42_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.userCorrentLocalStorge.name);
} }
function ChetComponent_div_42_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10);
} }
function ChetComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChetComponent_div_42_a_2_Template, 2, 1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChetComponent_div_42_span_9_Template, 2, 1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChetComponent_div_42_div_14_Template, 3, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.userCorrentLocalStorge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.createTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.userCorrentLocalStorge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r6.messeges);
} }
class ChetComponent {
    constructor(fireS, usersService, storeService) {
        this.fireS = fireS;
        this.usersService = usersService;
        this.storeService = storeService;
        this.userCorrentSubj = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.userCorrent2 = {
            islogin: true,
            name: "",
            mail: '',
            password: ''
        };
        this.postCorrent2 = new src_app_modals_respons__WEBPACK_IMPORTED_MODULE_2__["Conversation"]();
        this.usersArr2 = [];
        this.postArr2 = [];
        this.messeges = ['ברוך הבא'];
        this.newPost = new src_app_modals_respons__WEBPACK_IMPORTED_MODULE_2__["Conversation"]();
        this.userCorrentLocalStorge = JSON.parse(localStorage.getItem('userCurrent'));
        this.userCorrentSubj.next(this.userCorrentLocalStorge);
        this.userCorrentSubj.pipe();
        console.log(this.userCorrentLocalStorge);
        this.userCorrent2 = this.storeService.currentUser;
        // console.log();
        this.userCorrent = this.storeService.currentUserSub;
        this.merge = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(this.userCorrent, this.userCorrentSubj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            this.userCorrentLocalStorge = JSON.parse(localStorage.getItem('userCurrent'));
            return this.userCorrentLocalStorge;
        }));
        this.userCorrent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return JSON.parse(localStorage.getItem('userCurrent'));
        }))
            .subscribe(res => {
            this.userCorrentLocalStorge = res;
            console.log(res);
        });
        this.postCorrent = this.usersService.postCorrent;
        this.postArr = this.usersService.getPostes();
        this.timeOb = this.usersService.timeCurrent;
        this.timeOb.subscribe(res => this.timeString = res);
        this.postArr.subscribe(res => {
            console.log(res);
            this.postArr2 = res;
        });
        this.postCorrent.subscribe(res => {
            this.postCorrent2 = res;
            // this.postArr2.push(this.postCorrent2)
            console.log(this.postArr2);
        });
    }
    ngOnChanges() {
        // this.storeService.currentUserSub.next(JSON.parse(localStorage.getItem('userCurrent') ))
    }
    ngOnInit() {
        this.storeService.currentUserSub.next(JSON.parse(localStorage.getItem('userCurrent')));
    }
    ngAfterViewInit() {
        // this.storeService.currentUserSub.next(JSON.parse(localStorage.getItem('userCurrent') ))
    }
    ngOnDestroy() {
    }
    addPost() {
        this.postCorrent.subscribe(res => {
            this.postCorrent2 = res;
            // this.postArr2.push(this.postCorrent2)
            console.log(this.postArr);
        });
    }
    addMessage(val) {
        console.log(this.newPost);
        this.postCorrent2.messeges.push(val);
        this.usersService.setPost(Object.assign({}, this.postCorrent2));
    }
}
ChetComponent.ɵfac = function ChetComponent_Factory(t) { return new (t || ChetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slak_service_service__WEBPACK_IMPORTED_MODULE_5__["SlakServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ngrx_sort_service__WEBPACK_IMPORTED_MODULE_6__["SortService"])); };
ChetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChetComponent, selectors: [["chet"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 51, vars: 4, consts: [[1, "p-client"], ["role", "navigation", "aria-label", "History and search", "data-qa", "top-nav", 1, "p-top_nav"], [1, "p-top_nav__sidebar"], ["type", "button", "aria-label", "Show history", "data-qa", "top-nav-history-menu", "delay", "150", "aria-haspopup", "true", "data-sk", "tooltip_parent", "aria-describedby", "sk-tooltip-1", 1, "c-button-unstyled", "p-top_nav__button", "p-top_nav__history_menu"], ["type", "clock-o", "aria-hidden", "true", 1, "c-icon", "c-icon--clock-o"], ["type", "button", "aria-label", "Search", "data-qa", "top_nav_search", 1, "c-button-unstyled", "p-top_nav__search", "p-top_nav__search--windows"], ["type", "search-medium", "aria-hidden", "true", 1, "c-icon", "p-top_nav__search__icon", "c-icon--search-medium", "c-icon--inherit"], [1, "p-top_nav__search__text"], [1, "p-top_nav__right"], ["data-qa", "top-nav-help-button", "delay", "150", "aria-haspopup", "true", "data-sk", "tooltip_parent", "aria-describedby", "sk-tooltip-2", 1, "p-top_nav__windows_controls_container"], ["type", "button", "aria-label", "Help", 1, "c-button-unstyled", "p-top_nav__button", "p-top_nav__help"], ["type", "question-circle", "aria-hidden", "true", 1, "c-icon", "c-icon--question-circle"], ["role", "tabpanel", "aria-label", "AvraTech7", 1, "p-workspace-layout"], [1, "p-workspace__sidebar"], ["class", "p-ia__sidebar_header__user__name", 4, "ngIf"], [1, "p-channel_sidebar"], ["id", "channel_sidebar_aria_label", 1, "offscreen"], ["role", "presentation"], ["click", "addPost()"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-file-plus"], ["fill-rule", "evenodd", "d", "M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"], ["fill-rule", "evenodd", "d", "M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"], ["placeholder", "\u05D4\u05D6\u05DE\u05DF \u05D7\u05D1\u05E8\u05D9\u05DD", 1, "invite-frindes"], ["inviteFrindes", ""], ["class", "p-channel_sidebar__list", 4, "ngFor", "ngForOf"], [1, "p-workspace__primary_view_contents"], ["role", "presentation", 1, "c-virtual_list__scroll_container"], ["tabindex", "-1", "role", "listitem", "id", "1595451600000divider", "data-qa", "virtual-list-item", 1, "c-virtual_list__item", 2, "top", "587px"], ["data-stringify-ignore", "true", 1, "c-message_list__day_divider"], ["data-stringify-ignore", "true", 1, "c-message_list__day_divider__line"], ["tabindex", "-1", 1, "c-virtual_list__item"], [1, "c-message_kit__background"], ["role", "document", 1, "c-message_kit__hover"], [1, "c-message_kit__actions"], [1, "c-message_kit__gutter"], [1, "c-message_kit__gutter__left"], ["type", "button", "aria-hidden", "true", "tabindex", "-1", "aria-haspopup", "true", 1, "button-gutter"], ["src", "https://ca.slack-edge.com/TL18TV7R6-U016YLXE9NX-gcc26af105e6-48", "srcset", "https://ca.slack-edge.com/TL18TV7R6-U016YLXE9NX-gcc26af105e6-72 2x", "alt", "", 1, "c-avatar__image"], ["class", "c-message_kit__gutter__right", 4, "ngFor", "ngForOf"], [1, "workspace__primary_view_footer"], [1, "p-message_pane_input"], [1, "p-message_pane_input_inner"], [1, "p-workspace__input"], [1, "c-texty_input__container"], [1, "p-message_input_field"], ["contenteditable", "true", "dir", "auto", "role", "textbox", "tabindex", "0", 1, "ql-editor", 3, "keyup.enter"], ["message", ""], [1, "p-ia__sidebar_header__user__name"], [1, "p-channel_sidebar__list"], [1, "c-message_kit__gutter__right"], [1, "c-message__sender"], ["href", "/team/U016YLXE9NX", 4, "ngIf"], [1, "c-timestamp__label"], [1, "c-files_container"], [1, "c-message_kit__file__meta"], ["class", "c-message_kit__file__meta__text", 4, "ngIf"], ["type", "button", 1, "c-button-unstyled"], ["type", "caret-down", "aria-hidden", "true", 1, "c-icon"], [1, "c-pillow_file"], ["class", "c-pillow_file__description", 4, "ngFor", "ngForOf"], ["href", "/team/U016YLXE9NX"], [1, "c-message_kit__file__meta__text"], [1, "c-pillow_file__description"], ["dir", "auto", 1, "c-pillow_file__title"]], template: function ChetComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search AvraTech7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChetComponent_span_16_Template, 2, 1, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nav", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ChetComponent_div_28_Template, 3, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ChetComponent_div_42_Template, 15, 4, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "footer", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ChetComponent_Template_input_keyup_enter_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); return ctx.addMessage(_r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userCorrentLocalStorge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersArr2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.postArr2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".p-client[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    line-height: 1.46668;\r\n    font-weight: 400;\r\n    color: rgba(var(--sk_primary_foreground,29,28,29),1);\r\n    font-variant-ligatures: common-ligatures;\r\n    -webkit-font-smoothing: antialiased;\r\n    font-family: Slack-Lato,appleLogo,sans-serif;\r\n    \r\n    \r\n    background: rgba(var(--sk_primary_background,255,255,255),1);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    grid-template-rows: 38px auto -webkit-min-content;\r\n    grid-template-rows: 38px auto min-content;\r\n    grid-template-areas: \"p-client--iap1__top_nav\" \"p-client__workspace\" \"p-client__banners\";\r\n}\r\n\r\n.p-top_nav[_ngcontent-%COMP%]{\r\n    background: #3F0E40;\r\n    font-size: 15px;\r\n    line-height: 1.46668;\r\n    font-weight: 400;\r\n    font-variant-ligatures: common-ligatures;\r\n    -webkit-font-smoothing: antialiased;\r\n    font-family: Slack-Lato,appleLogo,sans-serif;\r\n    box-sizing: inherit;\r\n     grid-area: p-client--iap1__top_nav; \r\n     min-width: 0;\r\n    -webkit-app-region: drag;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    z-index: 203;\r\n    color: #D1D2D3;\r\n    box-shadow: 0 1px 0 0 rgba(209,210,211,0.1);\r\n}\r\n\r\n.p-top_nav__sidebar[_ngcontent-%COMP%]{\r\n        color: #D1D2D3;\r\ndisplay: flex;\r\nalign-items: center;\r\npadding-left: 16px;\r\npadding-right: 32px;\r\nflex: 1;\r\nmin-width: 128px;\r\njustify-content: flex-end;\r\n    }\r\n\r\n.p-workspace-layout[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    line-height: 1.46668;\r\n    font-weight: 400;\r\n    color: rgba(var(--sk_primary_foreground,29,28,29),1);\r\n    font-variant-ligatures: common-ligatures;\r\n    -webkit-font-smoothing: antialiased;\r\n    font-family: Slack-Lato,appleLogo,sans-serif;\r\n    box-sizing: inherit;\r\n    display: grid;\r\n    grid-template-rows: auto;\r\n    overflow: hidden;\r\n    position: relative;\r\n    grid-template-columns: 180px auto;\r\n    grid-template-areas: 'p-workspace__sidebar p-workspace__primary_view';\r\n}\r\n\r\n.p-workspace__sidebar[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    line-height: 1.46668;\r\n    font-weight: 400;\r\n    color: rgba(var(--sk_primary_foreground,29,28,29),1);\r\n    font-variant-ligatures: common-ligatures;\r\n    -webkit-font-smoothing: antialiased;\r\n    font-family: Slack-Lato,appleLogo,sans-serif;\r\n    box-sizing: inherit;\r\n    grid-area: p-workspace__sidebar;\r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    position: relative;\r\n    grid-template-areas: \"p-workspace__channel_sidebar\";\r\n    grid-template-rows: auto;\r\n    overflow: hidden;\r\n    width: 180px;\r\n    background: #3F0E40;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.p-channel_sidebar__list[_ngcontent-%COMP%]{\r\n    -webkit-tap-highlight-color: transparent;\r\n--blue: #007bff;\r\n--indigo: #6610f2;\r\n--purple: #6f42c1;\r\n--pink: #e83e8c;\r\n--red: #dc3545;\r\n--orange: #fd7e14;\r\n--yellow: #ffc107;\r\n--green: #28a745;\r\n--teal: #20c997;\r\n--cyan: #17a2b8;\r\n--white: #fff;\r\n--gray: #6c757d;\r\n--gray-dark: #343a40;\r\n--primary: #007bff;\r\n--secondary: #6c757d;\r\n--success: #28a745;\r\n--info: #17a2b8;\r\n--warning: #ffc107;\r\n--danger: #dc3545;\r\n--light: #f8f9fa;\r\n--dark: #343a40;\r\n--breakpoint-xs: 0;\r\n--breakpoint-sm: 576px;\r\n--breakpoint-md: 768px;\r\n--breakpoint-lg: 992px;\r\n--breakpoint-xl: 1200px;\r\n--font-family-sans-serif: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\r\n--font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;\r\ntext-align: left;\r\nfont-size: 15px;\r\nline-height: 1.46668;\r\nfont-weight: 400;\r\nfont-variant-ligatures: common-ligatures;\r\n-webkit-font-smoothing: antialiased;\r\nfont-family: Slack-Lato,appleLogo,sans-serif;\r\ncolor: #FFFFFF;\r\nbox-sizing: border-box;\r\nheight: 755.361px;\r\ntransform: translateY(0px);\r\n}\r\n\r\n.invite-frindes[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n}\r\n\r\n.p-workspace__primary_view_contents[_ngcontent-%COMP%]{\r\n  \r\n    \r\n    position: absolute;\r\n    width: 88%;\r\n    \r\n    padding-bottom: 24px;\r\n    right: 10px;\r\n    left: 200px;\r\n    bottom: 0;\r\n    \r\n    \r\n}\r\n\r\n.c-virtual_list__scroll_container[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: auto;\r\n    \r\n}\r\n\r\n.p-file_drag_drop__container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    top: 1120.7px;\r\n    \r\n}\r\n\r\n.c-message_kit__gutter[_ngcontent-%COMP%]{\r\n \r\n   \r\n    padding: 8px 20px;\r\n}\r\n\r\n.c-message_kit__gutter__left[_ngcontent-%COMP%]{\r\n    \r\n     \r\n    flex-shrink: 1;\r\n    margin-right: 8px;\r\n    display: flex;\r\n}\r\n\r\n.button-gutter[_ngcontent-%COMP%]{\r\n    height: 35%;\r\n}\r\n\r\n.c-avatar__image[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    \r\n    border-radius: 3px;\r\n    display: block;\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n}\r\n\r\n.c-message_kit__gutter__right[_ngcontent-%COMP%]{\r\n    -webkit-user-select: text;\r\n       -moz-user-select: text;\r\n        -ms-user-select: text;\r\n            user-select: text;\r\n    line-height: 1.46668;\r\n    flex: 1 1 0;\r\n    min-width: 0;\r\n    padding: 8px;\r\n    padding-left: 16px;\r\n    margin: -12px -8px -16px -16px;\r\n}\r\n\r\n.p-message_input_field[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    --saf-0: rgba(var(--sk_foreground_high_solid,134,134,134),1);\r\n    border: 1px solid var(--saf-0);\r\n    position: relative;\r\n    padding-bottom: 48px;\r\n    background: rgba(var(--sk_primary_background,255,255,255),1);\r\n    border-radius: 4px;\r\n    border-width: 1px;\r\n    max-height: 70px;\r\n    min-width: 1px;\r\n    padding-left: 10px;\r\n    padding-top: 3px;\r\n    padding-right: 10px;\r\n    flex: 1;\r\n    \r\n    \r\n}\r\n\r\n.ql-editor[_ngcontent-%COMP%]{\r\n    \r\n    -webkit-user-modify: read-write;\r\n    \r\n    unicode-bidi: -webkit-isolate;\r\n    cursor: text;\r\n    \r\n    text-align: right;\r\n    white-space: pre-wrap;\r\n    padding: 0;\r\n    font-variant-ligatures: none;\r\n    overflow: auto;\r\n    box-sizing: content-box;\r\n    -moz-tab-size: 8;\r\n      -o-tab-size: 8;\r\n         tab-size: 8;\r\n    -webkit-user-select: text;\r\n       -moz-user-select: text;\r\n        -ms-user-select: text;\r\n            user-select: text;\r\n    \r\n    max-height: 45px;\r\n    width: auto;\r\n    line-height: 1.46668;\r\n    margin-top: 4px;\r\n    padding-bottom: 4px;\r\n    padding-top: 5px;\r\n    padding-right: 9px;\r\n    min-height: 22px;\r\n    \r\n    display: block;\r\n}\r\n\r\n.ql-placeholder[_ngcontent-%COMP%]{\r\n    direction: rtl;\r\nfont-variant-ligatures: common-ligatures;\r\n-webkit-font-smoothing: antialiased;\r\n--saf-0: rgba(var(--sk_foreground_high_solid,134,134,134),1);\r\nfont-family: Slack-Lato,appleLogo,sans-serif;\r\n\r\npadding: 0;\r\ntext-overflow: ellipsis;\r\noverflow: hidden;\r\nwhite-space: nowrap;\r\ncolor: rgba(var(--sk_primary_foreground,29,28,29),1);\r\n-webkit-filter: grayscale(100%);\r\n        filter: grayscale(100%);\r\nfont-style: normal;\r\nmax-height: 100%;\r\nopacity: .5;\r\npointer-events: none;\r\nposition: absolute;\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n}\r\n\r\n.c-texty_input__placeholder[_ngcontent-%COMP%]{\r\n    direction: rtl;\r\nfont-style: normal;\r\npointer-events: none;\r\nline-height: 1.46668;\r\nbox-sizing: inherit;\r\ndisplay: flex;\r\nalign-items: flex-end;\r\n\r\ntext-overflow: ellipsis;\r\noverflow: hidden;\r\nwhite-space: nowrap;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2hldC9jaGV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixvREFBb0Q7SUFDcEQsd0NBQXdDO0lBQ3hDLG1DQUFtQztJQUNuQyw0Q0FBNEM7SUFDNUMseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0REFBNEQ7SUFDNUQsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGlEQUF5QztJQUF6Qyx5Q0FBeUM7SUFDekMsd0ZBQXdGO0FBQzVGOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHdDQUF3QztJQUN4QyxtQ0FBbUM7SUFDbkMsNENBQTRDO0lBQzVDLG1CQUFtQjtLQUNsQixrQ0FBa0M7S0FDbEMsWUFBWTtJQUNiLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCwyQ0FBMkM7QUFDL0M7O0FBRUk7UUFDSSxjQUFjO0FBQ3RCLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixPQUFPO0FBQ1AsZ0JBQWdCO0FBQ2hCLHlCQUF5QjtJQUNyQjs7QUFFSjtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG9EQUFvRDtJQUNwRCx3Q0FBd0M7SUFDeEMsbUNBQW1DO0lBQ25DLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxxRUFBcUU7QUFDekU7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixvREFBb0Q7SUFDcEQsd0NBQXdDO0lBQ3hDLG1DQUFtQztJQUNuQyw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixtREFBbUQ7SUFDbkQsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUMsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YsZUFBZTtBQUNmLGFBQWE7QUFDYixlQUFlO0FBQ2Ysb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QixvTUFBb007QUFDcE0sdUdBQXVHO0FBQ3ZHLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2Ysb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQix3Q0FBd0M7QUFDeEMsbUNBQW1DO0FBQ25DLDRDQUE0QztBQUM1QyxjQUFjO0FBQ2Qsc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQiwwQkFBMEI7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBSUE7O0lBRUkseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7OztBQUdiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTs7QUFFakI7O0FBR0E7OztJQUdJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJOzs7NEJBR3dCO0tBQ3ZCLDBCQUEwQjtJQUMzQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTs7OztzQkFJa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXOztBQUVmOztBQUVBO0lBQ0kseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksU0FBUztJQUNULDREQUE0RDtJQUM1RCw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiw0REFBNEQ7SUFDNUQsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLE9BQU87SUFDUDs7d0JBRW9CO0lBQ3BCLDhEQUE4RDtBQUNsRTs7QUFFQTs7SUFFSSwrQkFBK0I7SUFDL0IsMkNBQTJDO0lBQzNDLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGdCQUFXO01BQVgsY0FBVztTQUFYLFdBQVc7SUFDWCx5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCLHdDQUF3QztBQUN4QyxtQ0FBbUM7QUFDbkMsNERBQTREO0FBQzVELDRDQUE0QztBQUM1Qyx5QkFBeUI7QUFDekIsVUFBVTtBQUNWLHVCQUF1QjtBQUN2QixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLG9EQUFvRDtBQUNwRCwrQkFBdUI7UUFBdkIsdUJBQXVCO0FBQ3ZCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLHFCQUFxQjtBQUNyQiwwQkFBMEI7Q0FDekIsMkJBQTJCO0FBQzVCLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakIsY0FBYztBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQixvQkFBb0I7QUFDcEIsdUJBQXVCO0FBQ3ZCLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jaGV0L2NoZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wLWNsaWVudHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ2NjY4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKHZhcigtLXNrX3ByaW1hcnlfZm9yZWdyb3VuZCwyOSwyOCwyOSksMSk7XHJcbiAgICBmb250LXZhcmlhbnQtbGlnYXR1cmVzOiBjb21tb24tbGlnYXR1cmVzO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICBmb250LWZhbWlseTogU2xhY2stTGF0byxhcHBsZUxvZ28sc2Fucy1zZXJpZjtcclxuICAgIC8qIGJveC1zaXppbmc6IGluaGVyaXQ7ICovXHJcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1za19wcmltYXJ5X2JhY2tncm91bmQsMjU1LDI1NSwyNTUpLDEpO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM4cHggYXV0byBtaW4tY29udGVudDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicC1jbGllbnQtLWlhcDFfX3RvcF9uYXZcIiBcInAtY2xpZW50X193b3Jrc3BhY2VcIiBcInAtY2xpZW50X19iYW5uZXJzXCI7XHJcbn1cclxuXHJcbi5wLXRvcF9uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0YwRTQwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDY2Njg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC12YXJpYW50LWxpZ2F0dXJlczogY29tbW9uLWxpZ2F0dXJlcztcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgZm9udC1mYW1pbHk6IFNsYWNrLUxhdG8sYXBwbGVMb2dvLHNhbnMtc2VyaWY7XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gICAgIGdyaWQtYXJlYTogcC1jbGllbnQtLWlhcDFfX3RvcF9uYXY7IFxyXG4gICAgIG1pbi13aWR0aDogMDtcclxuICAgIC13ZWJraXQtYXBwLXJlZ2lvbjogZHJhZztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyMDM7XHJcbiAgICBjb2xvcjogI0QxRDJEMztcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMCByZ2JhKDIwOSwyMTAsMjExLDAuMSk7XHJcbn0gXHJcblxyXG4gICAgLnAtdG9wX25hdl9fc2lkZWJhcntcclxuICAgICAgICBjb2xvcjogI0QxRDJEMztcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxucGFkZGluZy1sZWZ0OiAxNnB4O1xyXG5wYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG5mbGV4OiAxO1xyXG5taW4td2lkdGg6IDEyOHB4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuLnAtd29ya3NwYWNlLWxheW91dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ2NjY4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKHZhcigtLXNrX3ByaW1hcnlfZm9yZWdyb3VuZCwyOSwyOCwyOSksMSk7XHJcbiAgICBmb250LXZhcmlhbnQtbGlnYXR1cmVzOiBjb21tb24tbGlnYXR1cmVzO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICBmb250LWZhbWlseTogU2xhY2stTGF0byxhcHBsZUxvZ28sc2Fucy1zZXJpZjtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTgwcHggYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdwLXdvcmtzcGFjZV9fc2lkZWJhciBwLXdvcmtzcGFjZV9fcHJpbWFyeV92aWV3JztcclxufVxyXG5cclxuLnAtd29ya3NwYWNlX19zaWRlYmFye1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDY2Njg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEodmFyKC0tc2tfcHJpbWFyeV9mb3JlZ3JvdW5kLDI5LDI4LDI5KSwxKTtcclxuICAgIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGNvbW1vbi1saWdhdHVyZXM7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIGZvbnQtZmFtaWx5OiBTbGFjay1MYXRvLGFwcGxlTG9nbyxzYW5zLXNlcmlmO1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgIGdyaWQtYXJlYTogcC13b3Jrc3BhY2VfX3NpZGViYXI7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJwLXdvcmtzcGFjZV9fY2hhbm5lbF9zaWRlYmFyXCI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzNGMEU0MDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4ucC1jaGFubmVsX3NpZGViYXJfX2xpc3R7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4tLWJsdWU6ICMwMDdiZmY7XHJcbi0taW5kaWdvOiAjNjYxMGYyO1xyXG4tLXB1cnBsZTogIzZmNDJjMTtcclxuLS1waW5rOiAjZTgzZThjO1xyXG4tLXJlZDogI2RjMzU0NTtcclxuLS1vcmFuZ2U6ICNmZDdlMTQ7XHJcbi0teWVsbG93OiAjZmZjMTA3O1xyXG4tLWdyZWVuOiAjMjhhNzQ1O1xyXG4tLXRlYWw6ICMyMGM5OTc7XHJcbi0tY3lhbjogIzE3YTJiODtcclxuLS13aGl0ZTogI2ZmZjtcclxuLS1ncmF5OiAjNmM3NTdkO1xyXG4tLWdyYXktZGFyazogIzM0M2E0MDtcclxuLS1wcmltYXJ5OiAjMDA3YmZmO1xyXG4tLXNlY29uZGFyeTogIzZjNzU3ZDtcclxuLS1zdWNjZXNzOiAjMjhhNzQ1O1xyXG4tLWluZm86ICMxN2EyYjg7XHJcbi0td2FybmluZzogI2ZmYzEwNztcclxuLS1kYW5nZXI6ICNkYzM1NDU7XHJcbi0tbGlnaHQ6ICNmOGY5ZmE7XHJcbi0tZGFyazogIzM0M2E0MDtcclxuLS1icmVha3BvaW50LXhzOiAwO1xyXG4tLWJyZWFrcG9pbnQtc206IDU3NnB4O1xyXG4tLWJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xyXG4tLWJyZWFrcG9pbnQtbGc6IDk5MnB4O1xyXG4tLWJyZWFrcG9pbnQteGw6IDEyMDBweDtcclxuLS1mb250LWZhbWlseS1zYW5zLXNlcmlmOiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxcIk5vdG8gU2Fuc1wiLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiLFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG4tLWZvbnQtZmFtaWx5LW1vbm9zcGFjZTogU0ZNb25vLVJlZ3VsYXIsTWVubG8sTW9uYWNvLENvbnNvbGFzLFwiTGliZXJhdGlvbiBNb25vXCIsXCJDb3VyaWVyIE5ld1wiLG1vbm9zcGFjZTtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuZm9udC1zaXplOiAxNXB4O1xyXG5saW5lLWhlaWdodDogMS40NjY2ODtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuZm9udC12YXJpYW50LWxpZ2F0dXJlczogY29tbW9uLWxpZ2F0dXJlcztcclxuLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbmZvbnQtZmFtaWx5OiBTbGFjay1MYXRvLGFwcGxlTG9nbyxzYW5zLXNlcmlmO1xyXG5jb2xvcjogI0ZGRkZGRjtcclxuYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuaGVpZ2h0OiA3NTUuMzYxcHg7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG59XHJcblxyXG4uaW52aXRlLWZyaW5kZXN7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5wLXdvcmtzcGFjZV9fcHJpbWFyeV92aWV3X2NvbnRlbnRze1xyXG4gIFxyXG4gICAgLyogYm94LXNpemluZzogaW5oZXJpdDsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgICAvKiBtYXgtd2lkdGg6IDY1MHB4OyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGxlZnQ6IDIwMHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLmMtdmlydHVhbF9saXN0X19zY3JvbGxfY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG4ucC1maWxlX2RyYWdfZHJvcF9fY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDExMjAuN3B4O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uYy1tZXNzYWdlX2tpdF9fZ3V0dGVye1xyXG4gXHJcbiAgIFxyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbn1cclxuXHJcbi5jLW1lc3NhZ2Vfa2l0X19ndXR0ZXJfX2xlZnR7XHJcbiAgICAvKiBjb2xvcjogcmdiYSh2YXIoLS1za19wcmltYXJ5X2ZvcmVncm91bmQsMjksMjgsMjkpLDEpO1xyXG4gICAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2xvd19zb2xpZCwyMjEsMjIxLDIyMSksMSk7XHJcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcclxuICAgICBsaW5lLWhlaWdodDogMS40NjY2ODsgKi9cclxuICAgICAvKiBib3gtc2l6aW5nOiBpbmhlcml0OyAgKi9cclxuICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYnV0dG9uLWd1dHRlcntcclxuICAgIGhlaWdodDogMzUlO1xyXG59XHJcblxyXG4uYy1hdmF0YXJfX2ltYWdle1xyXG4gICAgLyogdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAqL1xyXG4gICAgLyogbGluZS1oZWlnaHQ6IDM2cHg7ICovXHJcbiAgICAvKiBib3gtc2l6aW5nOiBpbmhlcml0OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5jLW1lc3NhZ2Vfa2l0X19ndXR0ZXJfX3JpZ2h0e1xyXG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS40NjY2ODtcclxuICAgIGZsZXg6IDEgMSAwO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiAtMTJweCAtOHB4IC0xNnB4IC0xNnB4O1xyXG59XHJcblxyXG4ucC1tZXNzYWdlX2lucHV0X2ZpZWxke1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2hpZ2hfc29saWQsMTM0LDEzNCwxMzQpLDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2FmLTApO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNrX3ByaW1hcnlfYmFja2dyb3VuZCwyNTUsMjU1LDI1NSksMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbiAgICBtaW4td2lkdGg6IDFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgZmxleDogMTtcclxuICAgIC8qIHotaW5kZXg6IDIwMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMDsgKi9cclxuICAgIC8qIGJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX21heCwyOSwyOCwyOSksLjcpOyAqL1xyXG59XHJcblxyXG4ucWwtZWRpdG9ye1xyXG4gICAgXHJcbiAgICAtd2Via2l0LXVzZXItbW9kaWZ5OiByZWFkLXdyaXRlO1xyXG4gICAgLyogLXdlYmtpdC1saW5lLWJyZWFrOiBhZnRlci13aGl0ZS1zcGFjZTsgKi9cclxuICAgIHVuaWNvZGUtYmlkaTogLXdlYmtpdC1pc29sYXRlO1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgLyogb3V0bGluZTogbm9uZTsgKi9cclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgdGFiLXNpemU6IDg7XHJcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcclxuICAgIC8qIGhlaWdodDogYXV0bzsgKi9cclxuICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ2NjY4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMnB4O1xyXG4gICAgLyogYm9yZGVyLXJpZ2h0OiBub25lOyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5xbC1wbGFjZWhvbGRlcntcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG5mb250LXZhcmlhbnQtbGlnYXR1cmVzOiBjb21tb24tbGlnYXR1cmVzO1xyXG4td2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2hpZ2hfc29saWQsMTM0LDEzNCwxMzQpLDEpO1xyXG5mb250LWZhbWlseTogU2xhY2stTGF0byxhcHBsZUxvZ28sc2Fucy1zZXJpZjtcclxuLyogYm94LXNpemluZzogaW5oZXJpdDsgKi9cclxucGFkZGluZzogMDtcclxudGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbndoaXRlLXNwYWNlOiBub3dyYXA7XHJcbmNvbG9yOiByZ2JhKHZhcigtLXNrX3ByaW1hcnlfZm9yZWdyb3VuZCwyOSwyOCwyOSksMSk7XHJcbmZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbm1heC1oZWlnaHQ6IDEwMCU7XHJcbm9wYWNpdHk6IC41O1xyXG5wb2ludGVyLWV2ZW50czogbm9uZTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG4vKiByaWdodDogOHB4OyAqL1xyXG4vKiBmb250LXNpemU6IDE1cHg7ICovXHJcbi8qIGxpbmUtaGVpZ2h0OiAxLjQ2NjY4OyAqL1xyXG4gLyogZGlzcGxheTogaW5saW5lLWZsZXg7ICAqL1xyXG4vKiBhbGlnbi1pdGVtczogY2VudGVyOyAgKi9cclxuLyogbGVmdDogNTUwcHg7ICovXHJcbi8qIHRvcDogOXB4OyAqL1xyXG59XHJcblxyXG4uYy10ZXh0eV9pbnB1dF9fcGxhY2Vob2xkZXJ7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5wb2ludGVyLWV2ZW50czogbm9uZTtcclxubGluZS1oZWlnaHQ6IDEuNDY2Njg7XHJcbmJveC1zaXppbmc6IGluaGVyaXQ7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuLyogZGlzcGxheTogYmxvY2s7ICovXHJcbnRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG53aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4gXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chet',
                templateUrl: './chet.component.html',
                styleUrls: ['./chet.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: src_app_services_slak_service_service__WEBPACK_IMPORTED_MODULE_5__["SlakServiceService"] }, { type: src_app_services_ngrx_sort_service__WEBPACK_IMPORTED_MODULE_6__["SortService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() {
        this.showp = true;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 76, vars: 0, consts: [[1, "d-flex", "flex-column", "flex-md-row", "align-items-center", "p-3", "px-md-4", "mb-3", "bg-white", "border-bottom", "shadow-sm"], [1, "my-0", "mr-md-auto", "font-weight-normal"], [1, "my-2", "my-md-0", "mr-md-3"], ["href", "#", 1, "p-2", "text-dark"], ["href", "#", 1, "btn", "btn-outline-primary"], [1, "container", "page_contents"], [1, "pt-4", "my-md-5", "pt-md-5", "border-top"], [1, "row"], [1, "col-12", "col-md"], ["src", "/docs/4.5/assets/brand/bootstrap-solid.svg", "alt", "", "width", "24", "height", "24", 1, "mb-2"], [1, "d-block", "mb-3", "text-muted"], [1, "col-6", "col-md"], [1, "list-unstyled", "text-small"], ["href", "#", 1, "text-muted"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00A9 2017-2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cool stuff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Random feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Team feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Stuff for developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Another one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Last time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Resource name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Another resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Final resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".page_contents[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\nline-height: 1.46668;\r\nfont-weight: initial;\r\ncolor: #1d1c1d;\r\nfont-variant-ligatures: common-ligatures;\r\n-webkit-font-smoothing: antialiased;\r\nfont-family: Slack-Lato,appleLogo,sans-serif;\r\nbox-sizing: inherit;\r\nmargin: 0 auto;\r\npadding: 8rem 2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsY0FBYztBQUNkLHdDQUF3QztBQUN4QyxtQ0FBbUM7QUFDbkMsNENBQTRDO0FBQzVDLG1CQUFtQjtBQUNuQixjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZV9jb250ZW50c3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxubGluZS1oZWlnaHQ6IDEuNDY2Njg7XHJcbmZvbnQtd2VpZ2h0OiBpbml0aWFsO1xyXG5jb2xvcjogIzFkMWMxZDtcclxuZm9udC12YXJpYW50LWxpZ2F0dXJlczogY29tbW9uLWxpZ2F0dXJlcztcclxuLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbmZvbnQtZmFtaWx5OiBTbGFjay1MYXRvLGFwcGxlTG9nbyxzYW5zLXNlcmlmO1xyXG5ib3gtc2l6aW5nOiBpbmhlcml0O1xyXG5tYXJnaW46IDAgYXV0bztcclxucGFkZGluZzogOHJlbSAycmVtO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/siginin/siginin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comps/siginin/siginin.component.ts ***!
  \****************************************************/
/*! exports provided: SigininComponent, SigininGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigininComponent", function() { return SigininComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigininGuardService", function() { return SigininGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var src_app_services_ngrx_sort_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ngrx/sort.service */ "./src/app/services/ngrx/sort.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_slak_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/slak-service.service */ "./src/app/services/slak-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function SigininComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05D4\u05DB\u05E0\u05E1 \u05D0\u05EA \u05E9\u05DD \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 \u05E9\u05DC\u05DA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05D5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u05D5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u05E1\u05D9\u05E1\u05DE\u05D0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/home/siginin/1"]; };
function SigininComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E2\u05D3\u05D9\u05D9\u05DF \u05D0\u05D9\u05DA \u05DC\u05DA \u05D7\u05E9\u05D1\u05D5\u05DF \u05E1\u05DC\u05D0\u05E7?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u05E6\u05D5\u05E8 \u05D7\u05E9\u05D1\u05D5\u05DF \u05E1\u05DC\u05D0\u05E7 \u05D7\u05D3\u05E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class SigininComponent {
    constructor(fireS, storSeevice, route, mySvc) {
        this.fireS = fireS;
        this.storSeevice = storSeevice;
        this.route = route;
        this.mySvc = mySvc;
        this.formSign = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
        });
        this.formToS = { headerS: "Sign in to your workspace", placeHOW: "your workspace", placeHOP: "your password", bouttnP: "Sigin in", showP: true, type: "enter" };
        this.forms = {
            "0": { headerS: "הכנס לחשבון הסלאק שלך", placeHOW: "שם המשתמש שלך", placeHOP: "הסיסמא שלך", bouttnP: "הכנס", showP: true, type: "enter" },
            "1": { headerS: "צור את החשבון שלך", placeHOW: "בחר שם משתמש", placeHOP: "בחר סיסמא", bouttnP: "צור", showP: false, type: "add" }
        };
        this.subs = [];
        this.itemCollection = fireS.collection('users');
        route.params.subscribe(p => {
            console.log(p);
            this.formToS = this.forms[p['id']];
        });
    }
    ngOnInit() {
        this.items = this.itemCollection.valueChanges();
        console.log(this.formToS);
    }
    add() {
        this.itemCollection.add(this.formSign.value);
        this.enter();
        this.formSign.reset();
    }
    enter() {
        this.storSeevice.login(this.formSign.value);
        this.formSign.reset();
    }
    onSubmit(type) {
        if (type == this.forms[0].type) {
            this.enter();
        }
        if (type == this.forms[1].type) {
            this.add();
        }
    }
    ngOnDestroy() {
        this.subs.forEach(s => s.unsubscribe());
    }
}
SigininComponent.ɵfac = function SigininComponent_Factory(t) { return new (t || SigininComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ngrx_sort_service__WEBPACK_IMPORTED_MODULE_3__["SortService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slak_service_service__WEBPACK_IMPORTED_MODULE_5__["SlakServiceService"])); };
SigininComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigininComponent, selectors: [["siginin"]], decls: 23, vars: 9, consts: [[1, "card-deck", "mb-3", "text-center", "real_content", "heb"], [1, "form-signin", 3, "formGroup"], [1, "text-center", "mb-4"], ["src", "/docs/4.5/assets/brand/bootstrap-solid.svg", "alt", "", "width", "72", "height", "72", 1, "mb-4"], [1, "h3", "mb-3", "font-weight-normal"], [4, "ngIf"], [1, "form-label-group"], ["id", "inputName", "type", "text", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["for", "inputEmail"], ["type", "email", "id", "inputEmail", "formControlName", "mail", "placeholder", "you@example.com", "required", "", "autofocus", "", 1, "form-control"], ["user", ""], ["type", "password", "id", "inputPassword", "formControlName", "password", "required", "", 1, "form-control", 3, "placeholder"], ["for", "inputPassword"], ["type", "submit", "routerLink", "/chet", 1, "btn", "btn-lg", "btn-primary", "btn-block", "btn-sigin", 3, "disabled", "click"], ["class", "heb", 4, "ngIf"], [1, "heb"], ["href", "", 3, "routerLink"]], template: function SigininComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SigininComponent_div_6_Template, 10, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05DE\u05D9\u05D9\u05DC \u05E9\u05DC\u05DA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u05E1\u05D9\u05E1\u05DE\u05D0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigininComponent_Template_button_click_20_listener() { return ctx.onSubmit(ctx.formToS.type); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SigininComponent_div_22_Template, 5, 2, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formSign);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formToS.headerS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formToS.showP);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.formToS.placeHOW);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formToS.placeHOW);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.formToS.placeHOP);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formSign.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formToS.bouttnP);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formToS.showP);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".btn-sigin[_ngcontent-%COMP%]{\r\n    background-color: #007a5a;\r\n}\r\n\r\n.real_content[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\nline-height: 1.46668;\r\nfont-weight: initial;\r\ncolor: #1d1c1d;\r\nfont-variant-ligatures: common-ligatures;\r\n-webkit-font-smoothing: antialiased;\r\nfont-family: Slack-Lato,appleLogo,sans-serif;\r\nbox-sizing: inherit;\r\nfloat: none;\r\ntext-align: center;\r\nmargin-bottom: 2rem;\r\nmargin-left: auto;\r\nmargin-right: auto;\r\npadding-right: 1rem;\r\npadding-bottom: 2rem;\r\nbackground-color: #fff;\r\nborder-radius: .25rem;\r\nbox-shadow: 0 1px 0 rgba(0,0,0,.25);\r\nposition: relative;\r\nborder: 1px solid #ddd;\r\npadding: 1rem;\r\ndisplay: block;\r\nmargin: auto;\r\nwidth: 100%;\r\n}\r\n\r\n.heb[_ngcontent-%COMP%]{\r\n    text-align: start;\r\n    direction: rtl; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvc2lnaW5pbi9zaWdpbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25CLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsY0FBYztBQUNkLHdDQUF3QztBQUN4QyxtQ0FBbUM7QUFDbkMsNENBQTRDO0FBQzVDLG1CQUFtQjtBQUNuQixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixvQkFBb0I7QUFDcEIsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQixtQ0FBbUM7QUFDbkMsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2IsY0FBYztBQUNkLFlBQVk7QUFDWixXQUFXO0FBQ1g7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3NpZ2luaW4vc2lnaW5pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zaWdpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdhNWE7XHJcbn1cclxuXHJcbi5yZWFsX2NvbnRlbnR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbmxpbmUtaGVpZ2h0OiAxLjQ2NjY4O1xyXG5mb250LXdlaWdodDogaW5pdGlhbDtcclxuY29sb3I6ICMxZDFjMWQ7XHJcbmZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGNvbW1vbi1saWdhdHVyZXM7XHJcbi13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG5mb250LWZhbWlseTogU2xhY2stTGF0byxhcHBsZUxvZ28sc2Fucy1zZXJpZjtcclxuYm94LXNpemluZzogaW5oZXJpdDtcclxuZmxvYXQ6IG5vbmU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubWFyZ2luLWJvdHRvbTogMnJlbTtcclxubWFyZ2luLWxlZnQ6IGF1dG87XHJcbm1hcmdpbi1yaWdodDogYXV0bztcclxucGFkZGluZy1yaWdodDogMXJlbTtcclxucGFkZGluZy1ib3R0b206IDJyZW07XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsMCwwLC4yNSk7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxucGFkZGluZzogMXJlbTtcclxuZGlzcGxheTogYmxvY2s7XHJcbm1hcmdpbjogYXV0bztcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWJ7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGRpcmVjdGlvbjogcnRsOyBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigininComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'siginin',
                templateUrl: './siginin.component.html',
                styleUrls: ['./siginin.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: src_app_services_ngrx_sort_service__WEBPACK_IMPORTED_MODULE_3__["SortService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_slak_service_service__WEBPACK_IMPORTED_MODULE_5__["SlakServiceService"] }]; }, null); })();
class SigininGuardService {
    constructor(router) {
        this.router = router;
        this.islogin = false;
    }
    canActivate(aaaa) {
        if (this.islogin) {
            // this.router.navigate(['chet']);
            return false;
        }
        return true;
    }
}
SigininGuardService.ɵfac = function SigininGuardService_Factory(t) { return new (t || SigininGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SigininGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SigininGuardService, factory: SigininGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigininGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modals/respons.ts":
/*!***********************************!*\
  !*** ./src/app/modals/respons.ts ***!
  \***********************************/
/*! exports provided: User, Conversation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conversation", function() { return Conversation; });
class User {
}
class Conversation {
    constructor() {
        this.messeges = ['ברוך הבא'];
    }
}


/***/ }),

/***/ "./src/app/services/ngrx/event.ts":
/*!****************************************!*\
  !*** ./src/app/services/ngrx/event.ts ***!
  \****************************************/
/*! exports provided: addUsers, addUser, deleteUser, getAllusers, loginData, getUser, initialState, reducerUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUsers", function() { return addUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllusers", function() { return getAllusers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginData", function() { return loginData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerUser", function() { return reducerUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

/*
        actions
*/
const addUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Add Users] Users', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Add single User] Users', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[delete single User] Users', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getAllusers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Get all Users] Users', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[login data] login', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Get  User] Users', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const initialState = {
    users: [],
    paidUsers: []
};
/*
   reducer
*/
const usersReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(addUsers, (state, users) => {
    return Object.assign(Object.assign({}, state), { users: users.users });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(addUser, (state, user) => {
    return Object.assign(Object.assign({}, state), { users: [...state.users, user.user] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(loginData, (state, user) => {
    const data = user.loginData;
    // data.islogin = true
    return Object.assign(Object.assign({}, state), { users: [data] });
}));
function reducerUser(state, action) {
    return usersReducer(state, action);
}


/***/ }),

/***/ "./src/app/services/ngrx/sort.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/ngrx/sort.service.ts ***!
  \***********************************************/
/*! exports provided: SortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortService", function() { return SortService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _users_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.selector */ "./src/app/services/ngrx/users.selector.ts");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event */ "./src/app/services/ngrx/event.ts");
/* harmony import */ var src_app_modals_respons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/respons */ "./src/app/modals/respons.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _slak_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../slak-service.service */ "./src/app/services/slak-service.service.ts");











class SortService {
    constructor(fs, svc, store) {
        this.fs = fs;
        this.svc = svc;
        this.store = store;
        this.usersPATH = 'users';
        this.currentUserSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.newPost = new src_app_modals_respons__WEBPACK_IMPORTED_MODULE_6__["Conversation"]();
        this.userCollection = this.fs.collection(this.usersPATH);
        this.store
            .subscribe(res => {
            console.log(res.users);
            // localStorage.setItem('userCurrent', JSON.stringify(res.users[0] || null))
        });
        this.currentUserSub.next(JSON.parse(localStorage.getItem('userCurrent')));
    }
    login(user) {
        this.fs.collection(this.usersPATH, ref => ref
            .where('mail', '==', user.mail)
            .where('password', '==', user.password)).valueChanges({ idFaild: 'id' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            console.log(res);
            this.getCurrentUser();
            localStorage.setItem('userCurrent', JSON.stringify(res[0]) || null);
            this.newPost.me = Object.assign({}, res[0]);
            this.addPost(Object.assign({}, this.newPost));
        }))
            .subscribe(res => {
            this.currentUserSub.next(res[0]);
            this.userCorrentLocalStorge = JSON.parse(localStorage.getItem('userCurrent'));
            this.store.dispatch(Object(_event__WEBPACK_IMPORTED_MODULE_5__["loginData"])({ loginData: res[0] }));
        });
    }
    getCurrentUser() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_users_selector__WEBPACK_IMPORTED_MODULE_4__["userCurrent"])).subscribe(res => {
            this.currentUser = res;
            console.log(res);
        });
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_users_selector__WEBPACK_IMPORTED_MODULE_4__["userCurrent"]));
    }
    addPost(post) {
        let currentId = '';
        let currentTime = this.svc.time.toLocaleTimeString();
        post.createTime = currentTime;
        this.svc.postCollection.add(post).then(res => {
            console.log(res.id);
            currentId = res.id;
            console.log(currentId);
            this.svc.postCollection.doc(`${currentId}`)
                .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
                console.log(res.payload.id);
                const id = res.payload.id;
                return Object.assign({ id }, res.payload.data());
            })).subscribe(res => {
                this.svc.postCorrent.next(res);
            });
        });
    }
    ;
}
SortService.ɵfac = function SortService_Factory(t) { return new (t || SortService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_slak_service_service__WEBPACK_IMPORTED_MODULE_8__["SlakServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
SortService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SortService, factory: SortService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }, { type: _slak_service_service__WEBPACK_IMPORTED_MODULE_8__["SlakServiceService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/ngrx/users.selector.ts":
/*!*************************************************!*\
  !*** ./src/app/services/ngrx/users.selector.ts ***!
  \*************************************************/
/*! exports provided: selectUSersFeature, usersFeature, selectUsersName, currentUserSelector, userCurrent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUSersFeature", function() { return selectUSersFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersFeature", function() { return usersFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUsersName", function() { return selectUsersName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUserSelector", function() { return currentUserSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCurrent", function() { return userCurrent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const selectUSersFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('users');
const usersFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUSersFeature, (state) => state.users);
const selectUsersName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(usersFeature, (users) => users.map(user => user.name));
const currentUserSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('users');
const userCurrent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(currentUserSelector, (state) => state.users[0]);


/***/ }),

/***/ "./src/app/services/slak-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/slak-service.service.ts ***!
  \**************************************************/
/*! exports provided: SlakServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlakServiceService", function() { return SlakServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _modals_respons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/respons */ "./src/app/modals/respons.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");






class SlakServiceService {
    constructor(fs) {
        this.fs = fs;
        this.usersPATH = 'users';
        this.postsPATH = 'postes';
        this.userCorrentBeh = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.newUser);
        this.usersArr = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.userCorrentSubj = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.newPost = new _modals_respons__WEBPACK_IMPORTED_MODULE_2__["Conversation"]();
        this.postCorrent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.newPost);
        this.postArr = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.timeCurrent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.time = new Date();
        this.seconds = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        this.userCollection = this.fs.collection(this.usersPATH);
        this.postCollection = this.fs.collection(this.postsPATH);
        this.clock = this.seconds.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(tick => new Date()));
        this.clock.subscribe(res => {
            this.timeCurrent.next(res.toLocaleTimeString());
        });
    }
    getUsers() {
        this.userCollection.valueChanges()
            .subscribe(res => this.usersArr.next(res));
    }
    getPostes() {
        this.postCollection.valueChanges()
            .subscribe(res => this.postArr.next(res));
        return this.postArr;
    }
    login(user) {
        this.fs.collection(this.usersPATH, ref => ref
            .where('mail', '==', user.mail)
            .where('password', '==', user.password)).valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            console.log(res);
            //  this.newPost.me = {...res[0] as IUser};
            //  this.addPost({...this.newPost})
        }))
            .subscribe(res => this.userCorrentBeh.next(res[0]));
    }
    addPost(post) {
        let currentId = '';
        let currentTime = this.time.toLocaleTimeString();
        post.createTime = currentTime;
        this.postCollection.add(post).then(res => {
            console.log(res.id);
            currentId = res.id;
            console.log(currentId);
            this.postCollection.doc(`${currentId}`)
                .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
                console.log(res.payload.id);
                const id = res.payload.id;
                return Object.assign({ id }, res.payload.data());
            })).subscribe(res => {
                this.postCorrent.next(res);
            });
        });
    }
    ;
    setPost(post) {
        console.log(post.id);
        this.postCollection.doc(`${post.id}`).update(post).then(res => console.log(res));
        this.postCollection.doc(`${post.id}`)
            .valueChanges().subscribe(res => {
            console.log(res);
            this.postCorrent.next(res);
        });
    }
}
SlakServiceService.ɵfac = function SlakServiceService_Factory(t) { return new (t || SlakServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"])); };
SlakServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SlakServiceService, factory: SlakServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlakServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAO6WWOW_xVcb7qNAVvj4MbPI1K2KidDfI',
        authDomain: 'slakproj.firebaseapp.com',
        databaseURL: 'https://slakproj.firebaseio.com',
        projectId: 'slakproj',
        storageBucket: 'slakproj.appspot.com',
        messagingSenderId: '159571033850',
        appId: "1:159571033850:web:68435f9b781e802cc89343",
        measurementId: "G-0F5RGDS32G"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\stu\Desktop\angular\slakProj\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map