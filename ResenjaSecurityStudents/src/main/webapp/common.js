(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/predstave.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/predstave.service.ts ***!
  \***********************************************/
/*! exports provided: PredstaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredstaveService", function() { return PredstaveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PredstaveService = /** @class */ (function () {
    function PredstaveService(http) {
        this.http = http;
        this.repertoar = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.path = '/api/predstava';
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    PredstaveService.prototype.getPredstave = function (page, size) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('page', page.toString());
        params = params.append('size', size.toString());
        return this.http.get(this.path, { params: params, observe: 'response' });
    };
    PredstaveService.prototype.getPredstavaOsobeId = function (id) {
        // console.log('JEDAN USER ID', id);
        return this.http.get(this.path + "/" + id);
    };
    PredstaveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PredstaveService);
    return PredstaveService;
}());



/***/ }),

/***/ "./src/app/services/slike.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/slike.service.ts ***!
  \*******************************************/
/*! exports provided: SlikeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlikeService", function() { return SlikeService; });
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





var SlikeService = /** @class */ (function () {
    function SlikeService(http) {
        this.http = http;
        this.slike = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.path = '/api/slike';
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    SlikeService.prototype.getSlika = function (page, size) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('page', page.toString());
        params = params.append('size', size.toString());
        return this.http.get(this.path, { params: params, observe: 'response' });
    };
    SlikeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SlikeService);
    return SlikeService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map