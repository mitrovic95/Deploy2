(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-slike-slike-module"],{

/***/ "./src/app/components/slike/slike.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/slike/slike.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/slike/slike.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/slike/slike.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-body\">\r\n    <div class=\"container-repertoire\">\r\n      <div *ngFor=\"let slika of slike; let i = index\">\r\n        <div>{{slika.namena}}</div>\r\n        <div>{{slika.datum | date:'shortDate'}}</div>\r\n        <img src=\"{{slika.sadrzaj}}\">\r\n      </div>\r\n      <div class=\"pagination\">\r\n        <div class=\"left\" (click)=\"ocitajStranu(currentPageNumber-1)\" style=\"margin-left: 1px\"></div>\r\n        <div class=\"page\" >\r\n          <span><span *ngIf= \"currentPageNumber<10\">0</span>{{currentPageNumber+1}}</span>\r\n        </div>\r\n        <div class=\"line\" >\r\n            *ngFor=\"let number of ukupnoStranaNiz; let i=index\"\r\n          <a [ngStyle]=\"{'border': currentPageNumber == i ? '2px solid #337ab7' : '#ddd'}\"\r\n              (click)=\"ocitajStranu(i)\" class=\"page-link\" style=\"margin-left: 1px\">{{i+1}}</a> \r\n        </div>\r\n        <div class=\"pages\">\r\n            <span><span *ngIf= \"ukupnoStrana<10\">0</span>{{ukupnoStrana}}</span>\r\n        </div>\r\n        <div class=\"right\"  (click)=\"ocitajSledecuStranu()\" style=\"margin-left: 1px\"></div>\r\n      </div>\r\n    </div>\r\n</div> -->\r\n\r\n\r\n<div class=\"container-body\">\r\n  <div class=\"container-gallery\">\r\n    <div class=\"title\">Galerija</div>\r\n    \r\n    <div *ngIf=\"vidljivostKategorije && slike\" class=\"container-category\">\r\n      <div class=\"container-img-s\">\r\n\r\n        <div *ngFor=\"let predstava of predstave; let i = index\" class=\"container-img\">\r\n          <div (mouseenter)=\"izmenaTexta(predstava.naslov)\" (mouseleave)=\"ugasiText()\" class=\"okvir\">\r\n              <img  (click)=\"vidljivostKategorije=false; otvoriGaleriju(predstava.naslov); vidljivostGalerije=true;\" src=\"/assets/images/Predstave/{{predstava.slika}}.jpg\">\r\n          </div>\r\n        </div>\r\n       \r\n        <div *ngIf=\"vidljivostTeksta\" class=\"text\">{{text}}</div>\r\n        <div class=\"container-pagination\">\r\n          <div class=\"pagination\">\r\n            <div class=\"left-a\" (click)=\"ocitajPrethodnuStranu(currentPageNumber)\"></div>\r\n            <div class=\"page-a\">\r\n              <span><span *ngIf=\"currentPageNumber<10\">0</span>{{currentPageNumber+1}}</span> \r\n              \r\n            </div>\r\n            <div class=\"line-a\">\r\n            </div>\r\n            <div class=\"pages-a\">\r\n             <span><span *ngIf=\"ukupnoStrana<10\">0</span>{{ukupnoStrana}}</span> \r\n             \r\n            </div>\r\n            <div class=\"right-a\" (click)=\"ocitajSledecuStranu()\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"vidljivostGalerije\" class=\"gallery-c\">\r\n        <div class=\"gallery\">\r\n          <div class=\"left-side\">\r\n            <div class=\"center\">\r\n              <div (click)=\"prethodnaSlika(trazeneSlike[slikaUnizu])\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"center-side\">\r\n            <div class=\"basic\">\r\n              <div class=\"center\">\r\n                <img *ngIf=\"trazeneSlike\"  src=\"/assets/images/Predstave/{{trazeneSlike[slikaUnizu].sadrzaj}}.jpg\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"right-side\">\r\n            <div class=\"center\">\r\n              <div (click)=\"sledecaSlika(trazeneSlike[slikaUnizu])\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"vidljivostGalerije\" class=\"archive\">\r\n        <div>\r\n          <div (click)=\"zatvoriGaleriju()\" class=text>ZATVORI</div>\r\n          <div class=line></div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/slike/slike.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/slike/slike.component.ts ***!
  \*****************************************************/
/*! exports provided: SlikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlikeComponent", function() { return SlikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_slike_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/slike.service */ "./src/app/services/slike.service.ts");
/* harmony import */ var src_app_services_predstave_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/predstave.service */ "./src/app/services/predstave.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlikeComponent = /** @class */ (function () {
    function SlikeComponent(slikeService, predstavaService) {
        this.slikeService = slikeService;
        this.predstavaService = predstavaService;
        this.trazeneSlike = new Array();
        this.sizePage = 6;
        this.vidljivostTeksta = false;
        this.vidljivostKategorije = true;
        this.vidljivostGalerije = false;
    }
    SlikeComponent.prototype.ngOnInit = function () {
        this.currentPageNumber = 0;
        this.loadPhotos();
        this.loadDate();
    };
    SlikeComponent.prototype.loadDate = function () {
        var _this = this;
        this.predstavaService.getPredstave(this.currentPageNumber, this.sizePage)
            .subscribe(function (data) {
            _this.predstave = data.body;
            _this.ukupnoPredstava = +data.headers.get('X-Total-Count');
            _this.ukupnoStrana = Math.ceil(_this.ukupnoPredstava / _this.sizePage);
            // this.ukupnoStranaNiz = Array(this.ukupnoStrana).fill(4);
            console.log(data);
        });
    };
    SlikeComponent.prototype.loadPhotos = function () {
        var _this = this;
        this.slikeService.getSlika(0, 20000)
            .subscribe(function (data) {
            _this.slike = data.body;
            console.log(data);
        });
    };
    SlikeComponent.prototype.delete = function (index) {
        console.log(this.slike[index]);
    };
    SlikeComponent.prototype.ocitajPrethodnuStranu = function () {
        if (this.currentPageNumber == 0) {
            return;
        }
        this.currentPageNumber = this.currentPageNumber - 1;
        this.loadDate();
    };
    // ocitajSledecuStranu() {
    //   if (this.currentPageNumber == this.ukupnoStrana - 1){
    //     return
    //   }
    //   this.currentPageNumber = this.currentPageNumber+1;
    //   this.loadDate();
    // }
    SlikeComponent.prototype.ocitajStranu = function (i) {
        if (this.currentPageNumber >= 1) {
            this.currentPageNumber = i;
        }
        this.loadDate();
    };
    SlikeComponent.prototype.ocitajSledecuStranu = function () {
        if (this.currentPageNumber == this.ukupnoStrana - 1) {
            return;
        }
        this.currentPageNumber = this.currentPageNumber + 1;
        this.loadDate();
    };
    SlikeComponent.prototype.izmenaTexta = function (t) {
        this.text = t;
        this.vidljivostTeksta = true;
    };
    SlikeComponent.prototype.ugasiText = function () {
        this.vidljivostTeksta = false;
        this.text = "";
    };
    SlikeComponent.prototype.ugasiKategorije = function () {
        this.vidljivostKategorije = false;
    };
    SlikeComponent.prototype.otvoriGaleriju = function (uslov) {
        var _this = this;
        this.slike.forEach(function (slika, index) {
            console.log(slika);
            console.log(index);
            if (slika.namena == uslov) {
                _this.trazeneSlike.push(slika);
            }
        });
        this.slikaUnizu = 0;
    };
    SlikeComponent.prototype.zatvoriGaleriju = function () {
        this.vidljivostKategorije = true;
        this.vidljivostGalerije = false;
        this.trazeneSlike = new Array();
        this.slikaUnizu = 0;
    };
    SlikeComponent.prototype.sledecaSlika = function (s) {
        if (this.trazeneSlike[this.trazeneSlike.length - 1] == s) {
            return;
        }
        else {
            this.slikaUnizu = this.slikaUnizu + 1;
        }
    };
    SlikeComponent.prototype.prethodnaSlika = function (s) {
        if (this.trazeneSlike[0] == s) {
            return;
        }
        else {
            this.slikaUnizu = this.slikaUnizu - 1;
        }
    };
    SlikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slike',
            template: __webpack_require__(/*! ./slike.component.html */ "./src/app/components/slike/slike.component.html"),
            styles: [__webpack_require__(/*! ./slike.component.css */ "./src/app/components/slike/slike.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_slike_service__WEBPACK_IMPORTED_MODULE_1__["SlikeService"], src_app_services_predstave_service__WEBPACK_IMPORTED_MODULE_2__["PredstaveService"]])
    ], SlikeComponent);
    return SlikeComponent;
}());



/***/ }),

/***/ "./src/app/components/slike/slike.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/slike/slike.module.ts ***!
  \**************************************************/
/*! exports provided: SlikeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlikeModule", function() { return SlikeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _slike_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slike.routing */ "./src/app/components/slike/slike.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_slike_slike_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/slike/slike.component */ "./src/app/components/slike/slike.component.ts");
/* harmony import */ var src_app_services_slike_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/slike.service */ "./src/app/services/slike.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SlikeModule = /** @class */ (function () {
    function SlikeModule() {
    }
    SlikeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _slike_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_slike_slike_component__WEBPACK_IMPORTED_MODULE_4__["SlikeComponent"]],
            providers: [src_app_services_slike_service__WEBPACK_IMPORTED_MODULE_5__["SlikeService"]]
        })
    ], SlikeModule);
    return SlikeModule;
}());



/***/ }),

/***/ "./src/app/components/slike/slike.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/components/slike/slike.routing.ts ***!
  \***************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_slike_slike_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/slike/slike.component */ "./src/app/components/slike/slike.component.ts");


var routes = [
    { path: '', component: src_app_components_slike_slike_component__WEBPACK_IMPORTED_MODULE_1__["SlikeComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=components-slike-slike-module.js.map