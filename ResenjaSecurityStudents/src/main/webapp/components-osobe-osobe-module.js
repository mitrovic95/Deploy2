(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-osobe-osobe-module"],{

/***/ "./src/app/components/osobe/osobe-item/osobe-item.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/osobe/osobe-item/osobe-item.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/osobe/osobe-item/osobe-item.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/osobe/osobe-item/osobe-item.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-body\">\n  <div class=\"container-ensemble\">\n    <div class=\"title\">Ansambl</div>\n    <div class=\"content\"> -->\n<!-- <div *ngIf=\"osobe\"> -->\n<div class=\"left\" (mouseover)=\"imgVersion = 2\" (mouseout)=\"imgVersion = 1\">\n    <div class=\"basic\">\n      <div class=\"center\">\n        <img class=\"img\" src=\"/assets/images/Ensemble/img_1_{{imgVersion}}.png\">\n        <div class=\"name-s\" >{{this.osobe.ime}} {{this.osobe.prezime}}</div>\n        <div class=\"information\">\n          <div class=\"line\">\n            <div></div>\n          </div>\n          <div class=\"name-full\">{{this.osobe.ime}} {{this.osobe.prezime}}</div>\n          <div class=\"line-v\"></div>\n          <div class=\"position\">{{this.osobe.opis}}</div>\n        </div>\n\n      </div>\n\n    </div>\n    <div class=\"mail-address\">\n      <div class=\"text\">Kontakt</div>\n      <div class=\"small-line\"></div>\n      <div class=\"text\">{{this.osobe.mejl}}</div>\n    </div>\n  </div>\n\n<!-- </div> -->\n\n<!-- </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/components/osobe/osobe-item/osobe-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/osobe/osobe-item/osobe-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: OsobeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsobeItemComponent", function() { return OsobeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_osobe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/osobe.service */ "./src/app/services/osobe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OsobeItemComponent = /** @class */ (function () {
    function OsobeItemComponent(osobeItemService, route) {
        this.osobeItemService = osobeItemService;
        this.route = route;
        this.imgVersion = 1;
    }
    OsobeItemComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    OsobeItemComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.isDataAvailable = false;
            _this.id = +params['id'];
        });
        this.osobeItemService.getOsobeId(this.id)
            .subscribe(function (data) {
            _this.osobe = data;
            console.log(data);
            // tslint:disable-next-line:no-unused-expression
            _this.isDataAvailable;
        });
    };
    OsobeItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-osobe-item',
            template: __webpack_require__(/*! ./osobe-item.component.html */ "./src/app/components/osobe/osobe-item/osobe-item.component.html"),
            styles: [__webpack_require__(/*! ./osobe-item.component.css */ "./src/app/components/osobe/osobe-item/osobe-item.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_osobe_service__WEBPACK_IMPORTED_MODULE_1__["OsobeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OsobeItemComponent);
    return OsobeItemComponent;
}());



/***/ }),

/***/ "./src/app/components/osobe/osobe.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/osobe/osobe.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/osobe/osobe.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/osobe/osobe.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-body\">\r\n    <div class=\"container-ensemble\" *ngIf=\"osobe\">\r\n      <div class=\"title\">Ansambl</div>\r\n      <div class=\"content\">\r\n        <div class=\"left\" (mouseover)=\"imgVersion = 2\" (mouseout)=\"imgVersion = 1\">\r\n          <div class=\"basic\">\r\n            <div class=\"center\">\r\n              <img class=\"img\" src=\"/assets/images/Ensemble/Big/img_{{izabranaOsoba.id}}_{{imgVersion}}.png\">\r\n              <div class=\"name-s\">{{izabranaOsoba.ime}} {{izabranaOsoba.prezime}}</div>\r\n              <div class=\"information\">\r\n                <div class=\"line\">\r\n                  <div></div>\r\n                </div>\r\n                <div class=\"name-full\">{{izabranaOsoba.ime}} {{izabranaOsoba.prezime}}</div>\r\n                <div class=\"line-v\"></div>\r\n                <div class=\"position\">{{izabranaOsoba.opis}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mail-address\">\r\n            <div class=\"text\">Kontakt</div>\r\n            <div class=\"small-line\"></div>\r\n            <div class=\"text\">{{izabranaOsoba.mejl}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"right\">\r\n          <div class=\"container-list\">\r\n            <div class=\"title\">GLUMCI</div>\r\n            <div class=\"title\">/</div>\r\n            <div class=\"title\">Dramaturzi</div>\r\n            <div class=\"list\" *ngFor=\"let osoba of osobe; let i = index\">\r\n              <div class=\"person\" (click)=\" promenaIzabraneOsobe(osoba)\">\r\n                <img class=\"img\" src=\"/assets/images/Ensemble/Small/img_{{osoba.id}}_1.png\">\r\n                <div class=\"full-name\">\r\n                  <h1>{{osoba.ime}} {{osoba.prezime}}</h1>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"pagination\">\r\n              <div class=\"left-a\" (click)=\"ocitajStranu(currentPageNumber-1)\" ></div>\r\n              <div class=\"page-a\">\r\n                <span>\r\n                  <span *ngIf=\"currentPageNumber<10\">0</span>{{currentPageNumber+1}}</span>\r\n              </div>\r\n              <div class=\"line-a\">\r\n              </div>\r\n              <div class=\"pages-a\">\r\n                <span>\r\n                  <span *ngIf=\"ukupnoStrana<10\">0</span>{{ukupnoStrana}}</span>\r\n              </div>\r\n              <div class=\"right-a\" (click)=\"ocitajSledecuStranu()\" ></div>\r\n            </div>\r\n  \r\n            <!-- <div class=\"pagination\">\r\n              <div class=\"left-a\"></div>\r\n              <div class=\"page-a\">\r\n                <span>01</span>\r\n              </div>\r\n              <div class=\"line-a\"></div>\r\n              <div class=\"pages-a\">\r\n                <span>05</span>\r\n              </div>\r\n              <div class=\"right-a\"></div>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  <!--\r\n  \r\n  <div *ngFor=\"let osoba of osobe; let i = index\">\r\n    <div>{{osoba.ime}}</div>\r\n    <div>{{osoba.prezime}}</div>\r\n    <div>{{osoba.slika1}}</div>\r\n    <div>{{osoba.slika2}}</div>\r\n    <div>{{osoba.opis}}</div>\r\n    <div>{{osoba.prioritet}}</div>\r\n    <div>{{osoba.brojTelefona}}</div>\r\n    <div>{{osoba.mejl}}</div>\r\n  </div>\r\n  -->\r\n  <!-- export interface Osoba {\r\n    id?: number;\r\n    ime: string;\r\n    prezime: string;\r\n    slika1: string;\r\n    slika2: string;\r\n    opis: string;\r\n    prioritet: number;\r\n    brojTelefona: number;\r\n    mejl: string;\r\n  } -->"

/***/ }),

/***/ "./src/app/components/osobe/osobe.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/osobe/osobe.component.ts ***!
  \*****************************************************/
/*! exports provided: OsobeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsobeComponent", function() { return OsobeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_osobe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/osobe.service */ "./src/app/services/osobe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OsobeComponent = /** @class */ (function () {
    function OsobeComponent(osobeService) {
        this.osobeService = osobeService;
        this.imgVersion = 1;
    }
    OsobeComponent.prototype.ngOnInit = function () {
        this.currentPageNumber = 0;
        this.visina = window.screen.height;
        this.sizePage = Math.round((this.visina - 117 - 195 - 50) / 100);
        if (this.sizePage >= 7) {
            this.sizePage = 6;
        }
        this.loadDate();
    };
    OsobeComponent.prototype.loadDate = function () {
        var _this = this;
        this.osobeService.getOsoba(this.currentPageNumber, this.sizePage)
            .subscribe(function (data) {
            _this.osobe = data.body;
            _this.ukupnoRepertoara = +data.headers.get('X-Total-Count');
            _this.ukupnoStrana = Math.ceil(_this.ukupnoRepertoara / _this.sizePage);
            _this.ukupnoStranaNiz = Array(_this.ukupnoStrana).fill(4);
            if (!_this.izabranaOsoba) {
                _this.izabranaOsoba = _this.osobe[0];
            }
            console.log(_this.osobe);
        });
    };
    OsobeComponent.prototype.delete = function (index) {
        console.log(this.osobe[index]);
    };
    OsobeComponent.prototype.ocitajStranu = function (i) {
        if (this.currentPageNumber >= 1) {
            this.currentPageNumber = i;
        }
        this.loadDate();
    };
    OsobeComponent.prototype.ocitajSledecuStranu = function () {
        if (this.currentPageNumber == this.ukupnoStrana - 1) {
            return;
        }
        this.currentPageNumber = this.currentPageNumber + 1;
        this.loadDate();
    };
    OsobeComponent.prototype.promenaIzabraneOsobe = function (osoba) {
        this.izabranaOsoba = osoba;
    };
    OsobeComponent.prototype.onResize = function (event) {
        this.visina = window.screen.height;
        this.sizePage = Math.round((this.visina - 117 - 195 - 50) / 100);
        if (this.sizePage >= 7) {
            this.sizePage = 6;
        }
        this.loadDate();
    };
    OsobeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-osobe',
            template: __webpack_require__(/*! ./osobe.component.html */ "./src/app/components/osobe/osobe.component.html"),
            styles: [__webpack_require__(/*! ./osobe.component.css */ "./src/app/components/osobe/osobe.component.css")],
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }),
        __metadata("design:paramtypes", [src_app_services_osobe_service__WEBPACK_IMPORTED_MODULE_1__["OsobeService"]])
    ], OsobeComponent);
    return OsobeComponent;
}());



/***/ }),

/***/ "./src/app/components/osobe/osobe.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/osobe/osobe.module.ts ***!
  \**************************************************/
/*! exports provided: OsobeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsobeModule", function() { return OsobeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _osobe_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./osobe.routing */ "./src/app/components/osobe/osobe.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_osobe_osobe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/osobe/osobe.component */ "./src/app/components/osobe/osobe.component.ts");
/* harmony import */ var src_app_services_osobe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/osobe.service */ "./src/app/services/osobe.service.ts");
/* harmony import */ var src_app_components_osobe_osobe_item_osobe_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/osobe/osobe-item/osobe-item.component */ "./src/app/components/osobe/osobe-item/osobe-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var OsobeModule = /** @class */ (function () {
    function OsobeModule() {
    }
    OsobeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _osobe_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_osobe_osobe_component__WEBPACK_IMPORTED_MODULE_4__["OsobeComponent"], src_app_components_osobe_osobe_item_osobe_item_component__WEBPACK_IMPORTED_MODULE_6__["OsobeItemComponent"]],
            providers: [src_app_services_osobe_service__WEBPACK_IMPORTED_MODULE_5__["OsobeService"]]
        })
    ], OsobeModule);
    return OsobeModule;
}());



/***/ }),

/***/ "./src/app/components/osobe/osobe.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/components/osobe/osobe.routing.ts ***!
  \***************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_osobe_osobe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/osobe/osobe.component */ "./src/app/components/osobe/osobe.component.ts");


var routes = [
    { path: '', component: src_app_components_osobe_osobe_component__WEBPACK_IMPORTED_MODULE_1__["OsobeComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/services/osobe.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/osobe.service.ts ***!
  \*******************************************/
/*! exports provided: OsobeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsobeService", function() { return OsobeService; });
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





var OsobeService = /** @class */ (function () {
    function OsobeService(http) {
        this.http = http;
        this.osobe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.path = '/api/osoba';
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    OsobeService.prototype.getOsoba = function (page, size) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('page', page.toString());
        params = params.append('size', size.toString());
        return this.http.get(this.path, { params: params, observe: 'response' });
    };
    OsobeService.prototype.getOsobeId = function (id) {
        // console.log('JEDAN USER ID', id);
        return this.http.get(this.path + "/" + id);
    };
    OsobeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OsobeService);
    return OsobeService;
}());



/***/ })

}]);
//# sourceMappingURL=components-osobe-osobe-module.js.map