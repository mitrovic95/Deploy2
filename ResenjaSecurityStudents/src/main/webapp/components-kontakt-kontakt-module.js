(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-kontakt-kontakt-module"],{

/***/ "./src/app/components/kontakt/kontakt.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/kontakt/kontakt.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/kontakt/kontakt.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/kontakt/kontakt.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-body\">\r\n    <div class=\"container-contact\">\r\n        <div class=\"title\">Kontakt</div>\r\n\r\n        <div class=\"letter\">\r\n            <div class=\"left\">\r\n                <div class=\"message\">\r\n                    <div class=\"massage-label\"> Vaša poruka:</div>\r\n                    <textarea ng-model=\"myTextarea\" class=\"massage-input\"></textarea>\r\n                </div>\r\n                <div class=\"container-mail\">\r\n                    <label class=mail-label>Vaša mejl adresa:</label>\r\n                    <input class=\"mail\">\r\n                </div>\r\n                <div class=\"container-name\">\r\n                    <label class=\"name-label\">Vaše ime:</label>\r\n                    <div>\r\n                        <input class=\"name\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"conf\">\r\n                    <button class=\"conf-bt\"> POŠALJI</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"right\">\r\n                <div class=\"container-stamp\">\r\n                    <div class=\"stamp\">\r\n                        <div class=\"text-1\">POZORŠTE</div>\r\n                        <div class=\"text-2\">PROMENA</div>\r\n                        <div class=\"line\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"line\"></div>\r\n                <div class=\"t-data\">\r\n                    <div class=\"data-label\">Telefon</div>\r\n                    <div class=\"data-text\">021 / 521 - 826</div>\r\n                </div>\r\n                <div class=\"t-data\">\r\n                    <div class=\"data-label\">Mejl Adresa</div>\r\n                    <div class=\"data-text\">teatarpromena@gmail.com</div>\r\n                </div>\r\n                <div class=\"t-data\">\r\n                    <div class=\"data-label\">Adresa</div>\r\n                    <div class=\"data-text\">Đure Jakšića 7, Novi Sad</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--\r\n<h1>Kontakt pozorista</h1>\r\n<div>Facebook: <a href=\"https://web.facebook.com/promenapozoriste/\">facebook</a> </div>\r\n<div>Mail: <a>teatarpromena@gmail.com</a></div>\r\n<div>Broj telefona: 0000-0000</div>\r\n<div>Youtube kanal: <a>https://www.youtube.com/channel/UCVKjvnkck4QtTBZmAPu80vA</a></div>\r\n-->"

/***/ }),

/***/ "./src/app/components/kontakt/kontakt.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/kontakt/kontakt.component.ts ***!
  \*********************************************************/
/*! exports provided: KontaktComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontaktComponent", function() { return KontaktComponent; });
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

var KontaktComponent = /** @class */ (function () {
    function KontaktComponent() {
    }
    KontaktComponent.prototype.ngOnInit = function () {
    };
    KontaktComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kontakt',
            template: __webpack_require__(/*! ./kontakt.component.html */ "./src/app/components/kontakt/kontakt.component.html"),
            styles: [__webpack_require__(/*! ./kontakt.component.css */ "./src/app/components/kontakt/kontakt.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KontaktComponent);
    return KontaktComponent;
}());



/***/ }),

/***/ "./src/app/components/kontakt/kontakt.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/kontakt/kontakt.module.ts ***!
  \******************************************************/
/*! exports provided: KontaktModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontaktModule", function() { return KontaktModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _kontakt_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kontakt.routing */ "./src/app/components/kontakt/kontakt.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/kontakt/kontakt.component */ "./src/app/components/kontakt/kontakt.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var KontaktModule = /** @class */ (function () {
    function KontaktModule() {
    }
    KontaktModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _kontakt_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_4__["KontaktComponent"]],
            providers: []
        })
    ], KontaktModule);
    return KontaktModule;
}());



/***/ }),

/***/ "./src/app/components/kontakt/kontakt.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/kontakt/kontakt.routing.ts ***!
  \*******************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/kontakt/kontakt.component */ "./src/app/components/kontakt/kontakt.component.ts");


var routes = [
    { path: '', component: src_app_components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_1__["KontaktComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=components-kontakt-kontakt-module.js.map