(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/istorijat/istorijat.module": [
		"./src/app/components/istorijat/istorijat.module.ts",
		"components-istorijat-istorijat-module"
	],
	"./components/kontakt/kontakt.module": [
		"./src/app/components/kontakt/kontakt.module.ts",
		"components-kontakt-kontakt-module"
	],
	"./components/login/login.module": [
		"./src/app/components/login/login.module.ts",
		"components-login-login-module"
	],
	"./components/nova-radi/nova-radi.module": [
		"./src/app/components/nova-radi/nova-radi.module.ts",
		"components-nova-radi-nova-radi-module"
	],
	"./components/osobe/osobe.module": [
		"./src/app/components/osobe/osobe.module.ts",
		"components-osobe-osobe-module"
	],
	"./components/page-not-found/page-not-found.module": [
		"./src/app/components/page-not-found/page-not-found.module.ts",
		"components-page-not-found-page-not-found-module"
	],
	"./components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.module": [
		"./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.module.ts",
		"common",
		"components-predstava-osobe-predstava-osobe-item-predstava-osobe-item-module"
	],
	"./components/predstave/predstave.module": [
		"./src/app/components/predstave/predstave.module.ts",
		"common",
		"components-predstave-predstave-module"
	],
	"./components/repertoar/repertoar.module": [
		"./src/app/components/repertoar/repertoar.module.ts",
		"components-repertoar-repertoar-module"
	],
	"./components/slike/slike.module": [
		"./src/app/components/slike/slike.module.ts",
		"common",
		"components-slike-slike-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation-group\">\r\n  <div [hidden]=\"bigNavigation\" (mouseenter)=\"showHideBigNav()\" class=\"container-small-navigation\">\r\n    <div href=\"home\" class=\"logo\">\r\n      <div class=\"img\"></div>\r\n    </div>\r\n    <div class=\"navlist\">\r\n      <p>\r\n        <!--<a class=\"navbar-brand\" href=\"nova\">Predstava</a>-->\r\n        <a href=\"kontakt\">Kontakt</a>\r\n        <a href=\"galerija\">Galerija</a>\r\n        <a href=\"ansambl\">Ansambl</a>\r\n        <a href=\"repertoar\">Repertoar</a>\r\n        <a href=\"onama\">O nama</a>\r\n      </p>\r\n    </div>\r\n    <div class=\"nav-social\">\r\n      <div class=\"line\"></div>\r\n      <div class=\"twiter\">\r\n        <div class=\"img\"></div>\r\n      </div>\r\n      <div class=\"facebook\">\r\n        <div class=\"img\"></div>\r\n      </div>\r\n      <div class=\"youtube\">\r\n        <div class=\"img\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div [hidden]=\"!bigNavigation\" (mouseleave)=\"showHideBigNav()\" class=\"container-big-navigation\">\r\n    <div class=\"logo\" [routerLink]=\"['/onama']\">\r\n      <div class=\"img\"></div>\r\n      <div class=\"title\">\r\n        <div>POZORIŠTE</div>\r\n        <div>PROMENA</div>\r\n      </div>\r\n      <div class=\"line\"></div>\r\n    </div>\r\n    <div class=\"navlist\">\r\n      <a href=\"onama\">O nama</a>\r\n      <a href=\"repertoar\">Repertoar</a>\r\n      <a href=\"ansambl\">Ansambl</a>\r\n      <a href=\"galerija\">Galerija</a>\r\n      <a href=\"kontakt\">Kontakt</a>\r\n    </div>\r\n    <div class=\"nav-social\">\r\n      <div class=\"line\"></div>\r\n      <div class=\"twiter\" onclick=\"window.location.href='https://twitter.com/teatarpromena?lang=en'\">\r\n        <div class=\"img\"></div>\r\n      </div>\r\n      <div class=\"facebook\" onclick=\"window.location.href='https://web.facebook.com/promenapozoriste'\">\r\n        <div class=\"img\"></div>\r\n      </div>\r\n      <div class=\"youtube\" onclick=\"window.location.href='https://www.youtube.com/channel/UCVKjvnkck4QtTBZmAPu80vA'\">\r\n        <div class=\"img\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- \r\n<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container\">\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav pull-right\">\r\n        \r\n        <li *ngIf=\"isLoggedIn()\" [routerLink]=\"['../nova']\">\r\n          <a (click)=\"logout()\">Logout</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav> -->\r\n\r\n\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_login_service_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/login-service/authentication-service.service */ "./src/app/login-service/authentication-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.title = 'PozoristePromena';
        this.logIn = false;
        //html
        this.bigNavigation = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user.username, this.user.password).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['nova']);
            }
        }, function (err) {
            if (err.toString() === 'Ilegal login') {
                _this.wrongUsernameOrPass = true;
                console.log(err);
            }
            else {
                rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err);
            }
        });
    };
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['home']);
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    AppComponent.prototype.toggleLogIn = function () {
        this.logIn = !this.logIn;
    };
    AppComponent.prototype.isAdmin = function () {
        return this.authenticationService.isAdmin();
    };
    //html
    AppComponent.prototype.showHideBigNav = function () {
        this.bigNavigation = !this.bigNavigation;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_login_service_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var src_app_login_service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/login-service/token-interceptor.service */ "./src/app/login-service/token-interceptor.service.ts");
/* harmony import */ var src_app_login_service_authentication_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/login-service/authentication-service.service */ "./src/app/login-service/authentication-service.service.ts");
/* harmony import */ var src_app_login_service_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/login-service/can-activate-auth.guard */ "./src/app/login-service/can-activate-auth.guard.ts");
/* harmony import */ var src_app_login_service_jwt_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/login-service/jwt-utils.service */ "./src/app/login-service/jwt-utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: src_app_login_service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptorService"],
                    multi: true
                },
                src_app_login_service_authentication_service_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
                src_app_login_service_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_8__["CanActivateAuthGuard"],
                src_app_login_service_jwt_utils_service__WEBPACK_IMPORTED_MODULE_9__["JwtUtilsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    { path: '', redirectTo: 'onama', pathMatch: 'full' },
    // { path: 'login', redirectTo: 'uloguj', pathMatch: 'full'},
    // { path: 'home', loadChildren: './components/pronadjena-strana/pronadjena-strana.module#PronadjenaStranaModule'},
    { path: 'login', loadChildren: './components/login/login.module#LoginModule' },
    { path: 'onama', loadChildren: './components/nova-radi/nova-radi.module#NovaRadiModule' },
    { path: 'istorijat', loadChildren: './components/istorijat/istorijat.module#IstorijatModule' },
    { path: 'ansambl', loadChildren: './components/osobe/osobe.module#OsobeModule' },
    { path: 'galerija', loadChildren: './components/slike/slike.module#SlikeModule' },
    { path: 'kontakt', loadChildren: './components/kontakt/kontakt.module#KontaktModule' },
    { path: 'repertoar', loadChildren: './components/repertoar/repertoar.module#RepertoarModule' },
    { path: 'predstave', loadChildren: './components/predstave/predstave.module#PredstaveModule' },
    { path: 'predstava/:id',
        loadChildren: './components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.module#PredstavaOsobeItemModule' },
    { path: 'osoba/:id',
        loadChildren: './components/osobe/osobe.module#OsobeModule' },
    { path: '**', loadChildren: './components/page-not-found/page-not-found.module#PageNotFoundModule' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/login-service/authentication-service.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/login-service/authentication-service.service.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _jwt_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt-utils.service */ "./src/app/login-service/jwt-utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginPath, JSON.stringify({ username: username, password: password }), { headers: headers })
            .map(function (res) {
            var token = res && res['token'];
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({
                    username: username,
                    roles: _this.jwtUtilsService.getRoles(token),
                    token: token
                }));
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (error) {
            if (error.status === 400) {
                return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw('Ilegal login');
            }
            else {
                return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error.json().error || 'Server error');
            }
        });
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : '';
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.getToken() !== '') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    };
    AuthenticationService.prototype.isAdmin = function () {
        if (this.getCurrentUser()) {
            return this.getCurrentUser().roles.indexOf('ADMIN') >= 0;
        }
        return false;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _jwt_utils_service__WEBPACK_IMPORTED_MODULE_3__["JwtUtilsService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/login-service/can-activate-auth.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/login-service/can-activate-auth.guard.ts ***!
  \**********************************************************/
/*! exports provided: CanActivateAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateAuthGuard", function() { return CanActivateAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication-service.service */ "./src/app/login-service/authentication-service.service.ts");
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



var CanActivateAuthGuard = /** @class */ (function () {
    function CanActivateAuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    CanActivateAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CanActivateAuthGuard);
    return CanActivateAuthGuard;
}());



/***/ }),

/***/ "./src/app/login-service/jwt-utils.service.ts":
/*!****************************************************!*\
  !*** ./src/app/login-service/jwt-utils.service.ts ***!
  \****************************************************/
/*! exports provided: JwtUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtUtilsService", function() { return JwtUtilsService; });
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

var JwtUtilsService = /** @class */ (function () {
    function JwtUtilsService() {
    }
    JwtUtilsService.prototype.getRoles = function (token) {
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(function (x) { return x.authority; }) || [];
    };
    JwtUtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JwtUtilsService);
    return JwtUtilsService;
}());



/***/ }),

/***/ "./src/app/login-service/token-interceptor.service.ts":
/*!************************************************************!*\
  !*** ./src/app/login-service/token-interceptor.service.ts ***!
  \************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication-service.service */ "./src/app/login-service/authentication-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(inj) {
        this.inj = inj;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var authenticationService = this.inj.get(_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': "" + authenticationService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dejan\Desktop\PP-Cli\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map