(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-predstave-predstave-module"],{

/***/ "./src/app/components/predstave/predstave.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/predstave/predstave.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/predstave/predstave.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/predstave/predstave.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-body\">\n  <div class=\"container-archive\">\n    <div class=\"title\">Predstave</div>\n    <div class=\"predstave\">\n      <div *ngFor=\"let predstava of predstave; let i = index let last = last\" class=\"lista-predstava\">\n        <div class=\"predstava\">\n          <div class=\"left\"><div></div></div>\n          <div class=\"right\">\n            <div class=\"naziv\" [routerLink]=\"['/predstava',predstava.id]\">{{predstava.naslov}}</div>\n            <div class=\"opis\">\n              <div class=\"kategorija\" [routerLink]=\"['/predstava',predstava.id]\">{{kategorija(predstava.opis)}} </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"!last\" class=\"prazna-linija\">\n          <div class=\"left\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pagination\">\n      <div class=\"left\" (click)=\"ocitajStranu(currentPageNumber-1)\"></div>\n      <div class=\"page\">\n        <span>\n          <span *ngIf=\"currentPageNumber<10\">0</span>{{currentPageNumber+1}}</span>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"pages\">\n        <span>\n          <span *ngIf=\"ukupnoStrana<10\">0</span>{{ukupnoStrana}}</span>\n      </div>\n      <div class=\"right\" (click)=\"ocitajSledecuStranu()\"></div>\n    </div>\n    <div class=\"archive\">\n      <div>\n        <div class=text [routerLink]=\"['/repertoar']\">REPERTOAR</div>\n        <div class=line></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/predstave/predstave.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/predstave/predstave.component.ts ***!
  \*************************************************************/
/*! exports provided: PredstaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredstaveComponent", function() { return PredstaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_predstave_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/predstave.service */ "./src/app/services/predstave.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PredstaveComponent = /** @class */ (function () {
    function PredstaveComponent(predstavaService) {
        this.predstavaService = predstavaService;
        // tslint:disable-next-line:no-inferrable-types
        this.sizePage = 6;
    }
    PredstaveComponent.prototype.ngOnInit = function () {
        this.currentPageNumber = 0;
        //html
        this.visina = window.screen.height;
        this.sizePage = Math.round((this.visina - 117 - 58) / 83);
        if (this.sizePage >= 7) {
            this.sizePage = 7;
        }
        this.loadDate();
    };
    PredstaveComponent.prototype.loadDate = function () {
        var _this = this;
        this.predstavaService.getPredstave(this.currentPageNumber, this.sizePage)
            .subscribe(function (data) {
            _this.predstave = data.body;
            _this.ukupnoPredstava = +data.headers.get('X-Total-Count');
            _this.ukupnoStrana = Math.ceil(_this.ukupnoPredstava / _this.sizePage);
            // this.ukupnoStranaNiz = Array(this.ukupnoStrana).fill(4);
            // console.log(this.ukupnoStranaNiz);
        });
    };
    PredstaveComponent.prototype.delete = function (index) {
        console.log(this.predstave[index]);
    };
    PredstaveComponent.prototype.ocitajStranu = function (i) {
        this.currentPageNumber = i;
        this.loadDate();
    };
    PredstaveComponent.prototype.ocitajSledecuStranu = function () {
        if (this.currentPageNumber == this.ukupnoStrana - 1) {
            return;
        }
        this.currentPageNumber = this.currentPageNumber + 1;
        this.loadDate();
    };
    // izvlaci kategoriju iz opisa - potrebno je da opis u svom sadrzaju ima podeljen sadrzaj sa * primer: komedija*Ovo je predstava o tome i tome...
    PredstaveComponent.prototype.kategorija = function (s) {
        var array = s.split('*');
        return array[0];
    };
    PredstaveComponent.prototype.onResize = function (event) {
        this.visina = window.screen.height;
        this.sizePage = Math.round((this.visina - 117 - 58) / 83);
        if (this.sizePage >= 7) {
            this.sizePage = 7;
        }
        this.loadDate();
    };
    PredstaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-predstave',
            template: __webpack_require__(/*! ./predstave.component.html */ "./src/app/components/predstave/predstave.component.html"),
            styles: [__webpack_require__(/*! ./predstave.component.css */ "./src/app/components/predstave/predstave.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_predstave_service__WEBPACK_IMPORTED_MODULE_1__["PredstaveService"]])
    ], PredstaveComponent);
    return PredstaveComponent;
}());



/***/ }),

/***/ "./src/app/components/predstave/predstave.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/predstave/predstave.module.ts ***!
  \**********************************************************/
/*! exports provided: PredstaveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredstaveModule", function() { return PredstaveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _predstave_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predstave.routing */ "./src/app/components/predstave/predstave.routing.ts");
/* harmony import */ var src_app_components_predstave_predstave_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/predstave/predstave.component */ "./src/app/components/predstave/predstave.component.ts");
/* harmony import */ var src_app_services_predstave_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/predstave.service */ "./src/app/services/predstave.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PredstaveModule = /** @class */ (function () {
    function PredstaveModule() {
    }
    PredstaveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _predstave_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_predstave_predstave_component__WEBPACK_IMPORTED_MODULE_3__["PredstaveComponent"]],
            providers: [src_app_services_predstave_service__WEBPACK_IMPORTED_MODULE_4__["PredstaveService"]]
        })
    ], PredstaveModule);
    return PredstaveModule;
}());



/***/ }),

/***/ "./src/app/components/predstave/predstave.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/predstave/predstave.routing.ts ***!
  \***********************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_predstave_predstave_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/predstave/predstave.component */ "./src/app/components/predstave/predstave.component.ts");


var routes = [
    { path: '', component: src_app_components_predstave_predstave_component__WEBPACK_IMPORTED_MODULE_1__["PredstaveComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=components-predstave-predstave-module.js.map