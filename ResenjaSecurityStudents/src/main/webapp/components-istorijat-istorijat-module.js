(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-istorijat-istorijat-module"],{

/***/ "./src/app/components/istorijat/istorijat.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/istorijat/istorijat.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/istorijat/istorijat.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/istorijat/istorijat.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"istorijat--wrapper\" *ngFor=\"let istorijat of istorijats\">  \r\n  <div class=\"istorijat\">  \r\n    <img class=\"istorijat--slike\" src=\"{{istorijats.slike}}\">  \r\n    <h1 class=\"istorijat--tekst\">{{istorijats.tekst}}</h1>  \r\n  </div>  \r\n</div>  \r\nRadi -->\r\n<div *ngFor=\"let istorijat of istorijats; let i = index\">  \r\n<h1> zdravo ovo je opis {{istorijat.tekst}}</h1>\r\n<img class=\"car--image\" src=\"{{istorijat.slike.sadrzaj}}\"> \r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/istorijat/istorijat.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/istorijat/istorijat.component.ts ***!
  \*************************************************************/
/*! exports provided: IstorijatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IstorijatComponent", function() { return IstorijatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_istorijat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/istorijat.service */ "./src/app/services/istorijat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IstorijatComponent = /** @class */ (function () {
    function IstorijatComponent(istorijatService) {
        this.istorijatService = istorijatService;
    }
    IstorijatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.istorijatService.getIstorijat().subscribe(function (istorijats) {
            _this.istorijats = istorijats;
        });
        this.istorijatService.getIstorijat();
        // this.istorijatService.istorijats.subscribe(data => console.log(data));
    };
    IstorijatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-istorijat',
            template: __webpack_require__(/*! ./istorijat.component.html */ "./src/app/components/istorijat/istorijat.component.html"),
            styles: [__webpack_require__(/*! ./istorijat.component.css */ "./src/app/components/istorijat/istorijat.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_istorijat_service__WEBPACK_IMPORTED_MODULE_1__["IstorijatService"]])
    ], IstorijatComponent);
    return IstorijatComponent;
}());



/***/ }),

/***/ "./src/app/components/istorijat/istorijat.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/istorijat/istorijat.module.ts ***!
  \**********************************************************/
/*! exports provided: IstorijatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IstorijatModule", function() { return IstorijatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _istorijat_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./istorijat.routing */ "./src/app/components/istorijat/istorijat.routing.ts");
/* harmony import */ var src_app_components_istorijat_istorijat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/istorijat/istorijat.component */ "./src/app/components/istorijat/istorijat.component.ts");
/* harmony import */ var src_app_services_istorijat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/istorijat.service */ "./src/app/services/istorijat.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var IstorijatModule = /** @class */ (function () {
    function IstorijatModule() {
    }
    IstorijatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _istorijat_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_istorijat_istorijat_component__WEBPACK_IMPORTED_MODULE_3__["IstorijatComponent"]],
            providers: [src_app_services_istorijat_service__WEBPACK_IMPORTED_MODULE_4__["IstorijatService"]]
        })
    ], IstorijatModule);
    return IstorijatModule;
}());



/***/ }),

/***/ "./src/app/components/istorijat/istorijat.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/istorijat/istorijat.routing.ts ***!
  \***********************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_istorijat_istorijat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/istorijat/istorijat.component */ "./src/app/components/istorijat/istorijat.component.ts");


var routes = [
    { path: '', component: src_app_components_istorijat_istorijat_component__WEBPACK_IMPORTED_MODULE_1__["IstorijatComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/services/istorijat.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/istorijat.service.ts ***!
  \***********************************************/
/*! exports provided: IstorijatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IstorijatService", function() { return IstorijatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IstorijatService = /** @class */ (function () {
    function IstorijatService(http) {
        this.http = http;
        this.istorijats = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.path = '/api/istorijat';
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    IstorijatService.prototype.getIstorijat = function () {
        return this.http.get(this.path);
    };
    IstorijatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IstorijatService);
    return IstorijatService;
}());



/***/ })

}]);
//# sourceMappingURL=components-istorijat-istorijat-module.js.map