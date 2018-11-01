(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-page-not-found-page-not-found-module"],{

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Wrong page buddy :)\r\n</h1>\r\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.module.ts ***!
  \********************************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_not_found_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.routing */ "./src/app/components/page-not-found/page-not-found.routing.ts");
/* harmony import */ var src_app_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageNotFoundModule = /** @class */ (function () {
    function PageNotFoundModule() {
    }
    PageNotFoundModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _page_not_found_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]],
            providers: []
        })
    ], PageNotFoundModule);
    return PageNotFoundModule;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.routing.ts ***!
  \*********************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");


var routes = [
    { path: '**', component: src_app_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"] }
    // { path: '', redirectTo: 'login', pathMatch: 'full'},
    // { path: 'login', loadChildren: './components/login/login.module#LoginModule'}
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=components-page-not-found-page-not-found-module.js.map