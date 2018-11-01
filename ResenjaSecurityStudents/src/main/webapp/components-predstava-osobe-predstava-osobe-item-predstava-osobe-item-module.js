(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-predstava-osobe-predstava-osobe-item-predstava-osobe-item-module"],{

/***/ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-body\">\n    <div class=\"container-predstava\" *ngIf=\"predstavaOsobe\">\n        <div class=\"predstava\">\n            <div class=\"container-left\">\n                <div class=\"left\">\n                    <div class=\"up-frame\">\n                        <div></div>\n                    </div>\n                    <div class=\"down-frame\">\n                        <div></div>\n                    </div>\n                    <div #panel class=\"frame-img\">\n                        <div *ngFor=\"let s of slike; let i = index\">\n                            <div *ngIf=\"provera(s.namena, predstavaOsobe[0].predstava.naslov)\">\n                                <img  src=\"/assets/images/Predstave/{{s.sadrzaj}}.jpg\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"container-right\">\n                <div class=\"right\">\n                    <div class=\"content\">\n                        <div *ngFor=\"let a of predstavaOsobe; let i = index\">\n                            <div class=\"reziser\" *ngIf=\"a.uloga=='Reziser'\">{{a.osoba.ime}} {{a.osoba.prezime}}</div>\n                        </div>\n                        <div class=\"naziv\">{{predstavaOsobe[0].predstava.naslov}}</div>\n                        <div class=\"ornament\"></div>\n                        <div class=\"sadrzaj\">{{predstavaOsobe[0].predstava.opis}}\n                        </div>\n                        <div class=\"naslov-uloge\">ULOGE:</div>\n                        <div *ngFor=\"let a of predstavaOsobe; let i = index\">\n                            <div class=\"person\" *ngIf=\"a.uloga!='Reziser'\">\n                                <img class=\"img\" src=\"/assets/images/Ensemble/Small/img_{{a.osoba.id}}_1.png\">\n                                <div class=\"full-name\">\n                                    <h2>{{a.uloga}}</h2>\n                                    <h1>{{a.osoba.ime}} {{a.osoba.prezime}}</h1>\n                                </div>\n                            </div>\n                            <!-- <div class=\"uloga\">\n                                <div class=\"naziv-uloga\">Дон Рамиро, принц Салерна</div>\n                                <div class=\"osoba-uloga\">Саша Младов</div>\n                            </div> -->\n                            <!-- <div class=\"uloga\">\n                                <div class=\"naziv-uloga\">Дон Рамиро, принц Салерна</div>\n                                <div class=\"osoba-uloga\">Саша Младов</div>\n                            </div> -->\n                            <!-- <div class=\"uloga\">\n                                <div class=\"naziv-uloga\">Дон Рамиро, принц Салерна</div>\n                                <div class=\"osoba-uloga\">Саша Младов</div>\n                            </div> -->\n                        </div>\n                    </div>\n                    <div class=\"rezervacija\">\n                        <div>\n                            <div class=text [routerLink]=\"['/kontakt']\">REZERVIŠI</div>\n                            <div class=line></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n<!-- <div *ngIf=\"predstavaOsobe\"> \n    <div *ngFor=\"let a of predstavaOsobe; let i = index\">\n        <div style=\"margin-left: 100px;\">{{a.uloga}}</div>\n        <div style=\"margin-left: 100px;\">{{a.osoba.ime}}</div>\n        <div style=\"margin-left: 100px;\">{{a.predstava.naslov}}</div>\n    </div>\n</div> -->"

/***/ }),

/***/ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PredstavaOsobeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredstavaOsobeItemComponent", function() { return PredstavaOsobeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_predstava_osobe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/predstava-osobe.service */ "./src/app/services/predstava-osobe.service.ts");
/* harmony import */ var src_app_services_slike_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/slike.service */ "./src/app/services/slike.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PredstavaOsobeItemComponent = /** @class */ (function () {
    function PredstavaOsobeItemComponent(slikeService, predstavaOsobeItemService, route) {
        this.slikeService = slikeService;
        this.predstavaOsobeItemService = predstavaOsobeItemService;
        this.route = route;
        this.trazeneSlike = new Array();
    }
    PredstavaOsobeItemComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.loadPhotos();
        this.brojSlike = 0;
    };
    PredstavaOsobeItemComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.isDataAvailable = false;
            _this.id = +params['id'];
        });
        this.predstavaOsobeItemService.getPredstavaOsobeId(this.id)
            .subscribe(function (data) {
            _this.predstavaOsobe = data;
            console.log(data);
            // tslint:disable-next-line:no-unused-expression
            _this.isDataAvailable;
        });
    };
    PredstavaOsobeItemComponent.prototype.loadPhotos = function () {
        var _this = this;
        this.slikeService.getSlika(0, 20000)
            .subscribe(function (data) {
            _this.slike = data.body;
            console.log(data);
        });
    };
    PredstavaOsobeItemComponent.prototype.provera = function (x, y) {
        if (x == y) {
            this.brojSlike = this.brojSlike + 1;
            if (this.brojSlike < 5) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    PredstavaOsobeItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-predstava-osobe-item',
            template: __webpack_require__(/*! ./predstava-osobe-item.component.html */ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.html"),
            styles: [__webpack_require__(/*! ./predstava-osobe-item.component.css */ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_slike_service__WEBPACK_IMPORTED_MODULE_2__["SlikeService"], src_app_services_predstava_osobe_service__WEBPACK_IMPORTED_MODULE_1__["PredstavaOsobeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PredstavaOsobeItemComponent);
    return PredstavaOsobeItemComponent;
}());



/***/ }),

/***/ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.module.ts ***!
  \************************************************************************************************/
/*! exports provided: PredstavaOsobeItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredstavaOsobeItemModule", function() { return PredstavaOsobeItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _predstava_osobe_item_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predstava-osobe-item.routing */ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.routing.ts");
/* harmony import */ var src_app_components_predstava_osobe_predstava_osobe_item_predstava_osobe_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component */ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PredstavaOsobeItemModule = /** @class */ (function () {
    function PredstavaOsobeItemModule() {
    }
    PredstavaOsobeItemModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _predstava_osobe_item_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_predstava_osobe_predstava_osobe_item_predstava_osobe_item_component__WEBPACK_IMPORTED_MODULE_3__["PredstavaOsobeItemComponent"]],
            providers: []
        })
    ], PredstavaOsobeItemModule);
    return PredstavaOsobeItemModule;
}());



/***/ }),

/***/ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.routing.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.routing.ts ***!
  \*************************************************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_predstava_osobe_predstava_osobe_item_predstava_osobe_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component */ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.ts");


var routes = [
    { path: '', component: src_app_components_predstava_osobe_predstava_osobe_item_predstava_osobe_item_component__WEBPACK_IMPORTED_MODULE_1__["PredstavaOsobeItemComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/services/predstava-osobe.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/predstava-osobe.service.ts ***!
  \*****************************************************/
/*! exports provided: PredstavaOsobeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredstavaOsobeService", function() { return PredstavaOsobeService; });
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




var PredstavaOsobeService = /** @class */ (function () {
    function PredstavaOsobeService(http) {
        this.http = http;
        this.repertoar = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.path = '/api/predstavaOsoba';
        this.path2 = 'osobe';
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    PredstavaOsobeService.prototype.getPredstavaOsobe = function () {
        return this.http.get(this.path);
    };
    PredstavaOsobeService.prototype.getPredstavaOsobeId = function (id) {
        // console.log('JEDAN USER ID', id);
        return this.http.get(this.path + "/" + id + "/" + this.path2);
    };
    PredstavaOsobeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PredstavaOsobeService);
    return PredstavaOsobeService;
}());



/***/ })

}]);
//# sourceMappingURL=components-predstava-osobe-predstava-osobe-item-predstava-osobe-item-module.js.map