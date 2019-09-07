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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<easter-egg-modal *ngIf=\"easterEgg\"></easter-egg-modal>\n\n<div\n  class=\"full-height\"\n  [class.dark]=\"!themeService.isPink && themeService.isDark\"\n  [class.pink]=\"themeService.isPink\"\n>\n  <router-outlet></router-outlet>\n  <cookie-bar></cookie-bar>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"full-height bg-img\">\n    <div class=\"full-height position-relative bg-opa\">\n      <div class=\"center text-justify\">\n        <h1>SIMON BERNARD</h1>\n        <p>{{ \"a1\" | translate }}</p>\n        <p>{{ \"a2\" | translate }}</p>\n        <a href=\"{{'mailto:' + properties.mail}}\">{{ \"cme\" | translate }} ></a>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-bg text-center\">\n  <h1 data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" class=\"cat-title\">\n    {{ \"c\" | translate }}\n  </h1>\n  <div class=\"container\">\n    <button (click)=\"mail()\" class=\"grd-btn mb-3\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"50\">\n      <i class=\"far fa-envelope\"></i> {{ properties.mail }}\n    </button>\n    <small class=\"mb-1\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\"\n      data-aos-delay=\"100\">{{ \"c1\" | translate }}</small><br />\n    <img class=\"qr mb-3\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"150\"\n      src=\"../../../img/qr.png\" />\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cookie-bar/cookie-bar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cookie-bar/cookie-bar.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isVisible\" class=\"cookie-bar text-center p-bg\">\n  <span>{{ \"co\" | translate }}</span>\n  <a class=\"cookie-bar-btn\" (click)=\"close()\">\n    <i class=\"far fa-times-circle\"></i>\n  </a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/easter-egg-modal/easter-egg-modal.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/easter-egg-modal/easter-egg-modal.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-easter-egg\">\n  <div class=\"content text-center center\">\n    <img src=\"assets/img/snap.gif\" />\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid footer p-bg text-center\">\n  <span>\n    Made by me with\n    <i class=\"fas fa-heart\"></i>\n    (and <i class=\"fab fa-angular\"></i>) &emsp;\n  </span>\n  <span class=\"d-none d-md-inline-block\"> | &emsp; 2019 ©</span>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lang-button/lang-button.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lang-button/lang-button.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li class=\"nav-item text-center\">\n  <a class=\"nav-link\" (click)=\"langService.change()\" [title]=\"'cla' | translate\">\n    <span>{{ \"la\" | translate }}</span>\n  </a>\n</li>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/legal-footer/legal-footer.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/legal-footer/legal-footer.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid legal-bar s-bg text-center\">\n  <a routerLink=\"legal\">\n    <i class=\"fas fa-balance-scale\"></i> {{ \"l\" | translate }} >\n  </a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/passions/passions.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/passions/passions.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-bg text-center\">\n  <h1 data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" class=\"cat-title\">\n    {{ \"p\" | translate }}\n  </h1>\n  <h2 data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"50\">\n    {{ \"p1\" | translate }}\n  </h2>\n  <div id=\"wmap\" class=\"wmap\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"100\"></div>\n  <ul class=\"inline-list w-100\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"150\">\n    <li>\n      <img alt=\"Las Vegas\" title=\"Las Vegas\" src=\"/assets/img/travel/lasvegas.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Chutes d'Iguazu\" title=\"Chutes d'Iguazu\" src=\"/assets/img/travel/iguazu.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Marseille\" title=\"Marseille\" src=\"/assets/img/travel/marseille.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Monaco\" title=\"Monaco\" src=\"/assets/img/travel/monaco.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Nice\" title=\"Nice\" src=\"/assets/img/travel/nice.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Paris\" title=\"Paris\" src=\"/assets/img/travel/paris.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Miami\" title=\"Miami\" src=\"/assets/img/travel/miami.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Rome\" title=\"Rome\" src=\"/assets/img/travel/rome.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Bruxelles\" title=\"Bruxelles\" src=\"/assets/img/travel/bruxelles.jpg\" />\n    </li>\n    <li>\n      <img alt=\"New York City\" title=\"New York City\" src=\"/assets/img/travel/nyc.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Mont Rushmore\" title=\"Mont Rushmore\" src=\"/assets/img/travel/rushmore.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Chicago\" title=\"Chicago\" src=\"/assets/img/travel/chicago.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Cannes\" title=\"Cannes\" src=\"/assets/img/travel/cannes.jpg\" />\n    </li>\n    <li>\n      <img alt=\"New York City\" title=\"New York City\" src=\"/assets/img/travel/nyc2.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Los Angeles\" title=\"Los Angeles\" src=\"/assets/img/travel/la.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Philadelphie\" title=\"Philadelphie\" src=\"/assets/img/travel/phila.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Route 66\" title=\"Route 66\" src=\"/assets/img/travel/66.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Rio de Janeiro\" title=\"Rio de Janeiro\" src=\"/assets/img/travel/rio.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Parc National Yosemite\" title=\"Parc National Yosemite\" src=\"/assets/img/travel/yosemite.jpg\" />\n    </li>\n    <li>\n      <img alt=\"San Fransisco\" title=\"San Fransisco\" src=\"/assets/img/travel/sf.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Venice\" title=\"Venice\" src=\"/assets/img/travel/venice.jpg\" />\n    </li>\n    <li>\n      <img alt=\"USA\" title=\"USA\" src=\"/assets/img/travel/mount.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Washington DC\" title=\"Washington DC\" src=\"/assets/img/travel/wash.jpg\" />\n    </li>\n    <li>\n      <img alt=\"Toronto\" title=\"Toronto\" src=\"/assets/img/travel/toronto.jpg\" />\n    </li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"s-bg\">\n  <div class=\"container text-center\">\n    <h1 data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" class=\"cat-title\">\n      {{ \"s\" | translate }}\n    </h1>\n    <h2 data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"50\">\n      {{ \"s1\" | translate }}\n    </h2>\n    <div class=\"row\">\n      <div class=\"col tech\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"100\">\n        <a href=\"https://angular.io\" target=\"_blank\" title=\"Angular\"><img alt=\"Angular\"\n            src=\"../../../assets/img/techno/angular.png\" /></a>\n      </div>\n      <div class=\"col tech\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"150\">\n        <a href=\"https://nodejs.org/\" target=\"_blank\" title=\"Node.js\"><img alt=\"Node.js\"\n            src=\"../../../assets/img/techno/node.png\" /></a>\n      </div>\n      <div class=\"col tech\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"200\">\n        <a href=\"https://www.java.com\" target=\"_blank\" title=\"Java\"><img alt=\"Java\"\n            src=\"../../../assets/img/techno/java.svg\" /></a>\n      </div>\n      <div class=\"col tech\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"250\">\n        <a href=\"https://spring.io/projects/spring-boot\" target=\"_blank\" title=\"Spring Boot\"><img alt=\"Spring Boot\"\n            src=\"../../../assets/img/techno/spring.png\" /></a>\n      </div>\n      <div class=\"col tech\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"300\">\n        <a href=\"https://firebase.google.com/\" target=\"_blank\" title=\"Google Firebase\"><img alt=\"Firebase\"\n            src=\"../../../assets/img/techno/firebase.png\" /></a>\n      </div>\n      <div class=\"col tech\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"350\">\n        <a href=\"https://facebook.github.io/react-native/\" target=\"_blank\" title=\"React Native\">\n          <img alt=\"React Native\" src=\"../../../assets/img/techno/reactnative.svg\" />\n        </a>\n      </div>\n      <div class=\"col tech\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"400\">\n        <a href=\"https://getbootstrap.com/\" target=\"_blank\" title=\"Front end + Bootstrap\"><img alt=\"Bootstrap\"\n            src=\"../../../assets/img/techno/front.png\" /></a>\n      </div>\n    </div>\n    <h2 data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"500\">\n      {{ \"s2\" | translate }}\n    </h2>\n    <div class=\"row\">\n      <!--\n        <div\n          class=\"col\"\n          data-aos=\"fade-up\"\n          data-aos-easing=\"ease-in-out\"\n          data-aos-delay=\"550\"\n        >\n          <a [href]=\"properties.fiverr\" target=\"_blank\" title=\"Fiverr\"\n            ><img alt=\"Fiverr\" src=\"../../../assets/img/fiverr.png\"\n          /></a>\n        </div>\n        <div\n          class=\"col\"\n          data-aos=\"fade-up\"\n          data-aos-easing=\"ease-in-out\"\n          data-aos-delay=\"600\"\n        >\n          <a [href]=\"properties.malt\" target=\"_blank\" title=\"Malt\"\n            ><img alt=\"Malt\" src=\"../../../assets/img/malt.png\"\n          /></a>\n        </div>\n        -->\n      <div class=\"col\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-delay=\"650\">\n        <a [href]=\"properties.linkedin\" target=\"_blank\" title=\"Malt\"><i class=\"fab fa-linkedin\"></i></a>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/theme-button/theme-button.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/theme-button/theme-button.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li class=\"nav-item text-center\">\n  <a class=\"nav-link\" (click)=\"themeServive.changeTheme()\" [title]=\"'ct' | translate\">\n    <i [class.fa-lightbulb]=\"themeServive.isDark\" [class.fa-moon]=\"!themeServive.isDark\" class=\"far\"></i>\n  </a>\n</li>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md fixed-top\" [class.p-bg]=\"isScrolled\">\n    <a class=\"navbar-brand\" routerLink=\"\">\n      <img src=\"assets/img/icon.png\" width=\"30\" height=\"30\" alt=\"Icon\" />\n    </a>\n    <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nContent\"\n      aria-controls=\"nContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <div class=\"navbar-toggler-icon-bar\">\n        <div class=\"bar\"></div>\n        <div class=\"bar\"></div>\n        <div class=\"bar\"></div>\n      </div>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"nContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"scroll(about)\">\n            <span class=\"text-uppercase\">{{ \"a\" | translate }}</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"scroll(services)\">\n            <span class=\"text-uppercase\">{{ \"s\" | translate }}</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"scroll(passion)\">\n            <span class=\"text-uppercase\">{{ \"p\" | translate }}</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"scroll(contact)\">\n            <span class=\"text-uppercase\">{{ \"c\" | translate }}</span>\n          </a>\n        </li>\n        <li class=\"nav-item item-linkedin\">\n          <a class=\"nav-link\" title=\"Linkedin\" [href]=\"properties.linkedin\" target=\"_blank\">\n            <span class=\"d-md-none text-uppercase\">Linkedin</span>\n            <i class=\"fab fa-linkedin-in d-none d-md-inline-block\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" title=\"Github\" [href]=\"properties.github\" target=\"_blank\">\n            <span class=\"d-md-none text-uppercase\">Github</span>\n            <i class=\"fab fa-github d-none d-md-inline-block\"></i>\n          </a>\n        </li>\n        <theme-button></theme-button>\n        <lang-button></lang-button>\n      </ul>\n    </div>\n  </nav>\n  \n  <span #about></span>\n  <about></about>\n  \n  <span #services></span>\n  <services></services>\n  \n  <span #passion></span>\n  <passions></passions>\n  \n  <div #contact id=\"map\" class=\"map-height\"></div>\n  \n  <contact></contact>\n  \n  <legal-footer></legal-footer>\n  \n  <footer></footer>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/insta/insta.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/insta/insta.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>insta works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/legal/legal.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/legal/legal.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-bg\">\n  <nav class=\"navbar not-responsive-nb\">\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <img src=\"assets/img/icon.png\" width=\"30\" height=\"30\" alt=\"Icon\" />\n    </a>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item text-center\">\n        <a class=\"nav-link\" routerLink=\"/\" [title]=\"'r' | translate\">\n          <i class=\"fas fa-reply\"></i>\n        </a>\n      </li>\n      <theme-button></theme-button>\n      <lang-button></lang-button>\n    </ul>\n  </nav>\n  <div class=\"container\">\n    <h1 class=\"text-center cat-title\">\n      {{ \"l\" | translate }}\n    </h1>\n    <p>{{ \"l1\" | translate }}</p>\n    <h2>1- {{ \"lh\" | translate }}</h2>\n    <p>{{ \"lh1\" | translate }}</p>\n    <p class=\"font-italic\">\n      <strong>{{ properties.adresse1 }}</strong>\n      <br />\n      {{ properties.adresse2 }}\n    </p>\n    <p>{{ \"lhe\" | translate }} {{ properties.mail }}</p>\n    <p>{{ \"lhs\" | translate }} {{ properties.siret }}</p>\n    <p>\n      {{ \"lh2\" | translate }}\n      <a [href]=\"properties.hebergementLink\" target=\"_blank\">{{\n        properties.hebergement\n      }}</a>\n    </p>\n    <h2>2- {{ \"lc\" | translate }}</h2>\n    <p>{{ \"lc1\" | translate }}</p>\n    <p>{{ \"lc2\" | translate }} (<i class=\"fas fa-sad-tear\"></i>).</p>\n    <h2>3- {{ \"lr\" | translate }}</h2>\n    <p>{{ \"lr1\" | translate }}</p>\n    <h2>4- {{ \"lcr\" | translate }}</h2>\n    <p>{{ \"lcr1\" | translate }}</p>\n    <p>{{ \"lcr2\" | translate }} (<i class=\"fas fa-heart\"></i>)</p>\n    <h2>5- {{ \"ld\" | translate }}</h2>\n    <p>{{ \"ld1\" | translate }}</p>\n    <h2>6- {{ \"lu\" | translate }}</h2>\n    <p>{{ \"lu1\" | translate }}</p>\n    <p>{{ \"lu2\" | translate }}</p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"not-found full-height\">\n  <div class=\"full-height trans-bg\">\n    <div class=\"center text-center\">\n      <h1>404</h1>\n      <p>{{ \"nf\" | translate }}</p>\n      <button class=\"grd-btn w-grd-btn\" routerLink=\"/\">\n        {{ \"r\" | translate }}\n      </button>\n    </div>\n    <img class=\"travolta\" src=\"../../../assets/img/notfound.gif\" />\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_insta_insta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/insta/insta.component */ "./src/app/pages/insta/insta.component.ts");
/* harmony import */ var _pages_legal_legal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/legal/legal.component */ "./src/app/pages/legal/legal.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");







const routes = [
    { path: "insta", component: _pages_insta_insta_component__WEBPACK_IMPORTED_MODULE_3__["InstaComponent"], pathMatch: "full" },
    { path: "legal", component: _pages_legal_legal_component__WEBPACK_IMPORTED_MODULE_4__["LegalComponent"], pathMatch: "full" },
    { path: "", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], pathMatch: "full" },
    { path: "**", component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/theme.service */ "./src/app/services/theme.service.ts");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);





let AppComponent = class AppComponent {
    constructor(langService, themeService) {
        this.langService = langService;
        this.themeService = themeService;
        this.konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        this.keyIndex = 0;
        this.easterEgg = false;
        langService.init();
        aos__WEBPACK_IMPORTED_MODULE_4__["init"]();
    }
    keyListen(e) {
        if (e.keyCode == this.konamiCode[this.keyIndex++]) {
            if (this.keyIndex === this.konamiCode.length) {
                this.keyIndex = 0;
                this.easterEgg = true;
                setTimeout(() => {
                    this.themeService.pink();
                    this.easterEgg = false;
                    let audio = new Audio();
                    audio.src = "../assets/wow.mp3";
                    audio.load();
                    audio.play();
                }, 1650);
            }
        }
        else {
            this.keyIndex = 0;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"] },
    { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:keydown", ["$event"])
], AppComponent.prototype, "keyListen", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_cookie_bar_cookie_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cookie-bar/cookie-bar.component */ "./src/app/components/cookie-bar/cookie-bar.component.ts");
/* harmony import */ var _components_easter_egg_modal_easter_egg_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/easter-egg-modal/easter-egg-modal.component */ "./src/app/components/easter-egg-modal/easter-egg-modal.component.ts");
/* harmony import */ var _components_lang_button_lang_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/lang-button/lang-button.component */ "./src/app/components/lang-button/lang-button.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_legal_footer_legal_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/legal-footer/legal-footer.component */ "./src/app/components/legal-footer/legal-footer.component.ts");
/* harmony import */ var _components_passions_passions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/passions/passions.component */ "./src/app/components/passions/passions.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_theme_button_theme_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/theme-button/theme-button.component */ "./src/app/components/theme-button/theme-button.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_insta_insta_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/insta/insta.component */ "./src/app/pages/insta/insta.component.ts");
/* harmony import */ var _pages_legal_legal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/legal/legal.component */ "./src/app/pages/legal/legal.component.ts");






















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
            _components_cookie_bar_cookie_bar_component__WEBPACK_IMPORTED_MODULE_10__["CookieBarComponent"],
            _components_easter_egg_modal_easter_egg_modal_component__WEBPACK_IMPORTED_MODULE_11__["EasterEggModalComponent"],
            _components_lang_button_lang_button_component__WEBPACK_IMPORTED_MODULE_12__["LangButtonComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _components_legal_footer_legal_footer_component__WEBPACK_IMPORTED_MODULE_14__["LegalFooterComponent"],
            _components_passions_passions_component__WEBPACK_IMPORTED_MODULE_15__["PassionsComponent"],
            _components_services_services_component__WEBPACK_IMPORTED_MODULE_16__["ServicesComponent"],
            _components_theme_button_theme_button_component__WEBPACK_IMPORTED_MODULE_17__["ThemeButtonComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
            _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"],
            _pages_insta_insta_component__WEBPACK_IMPORTED_MODULE_20__["InstaComponent"],
            _pages_legal_legal_component__WEBPACK_IMPORTED_MODULE_21__["LegalComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-img {\n    background: url('bg.jpg') no-repeat center center;\n    background-size: cover;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaURBQXNFO0lBSXRFLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWcge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JnL2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties */ "./src/app/properties.ts");



let AboutComponent = class AboutComponent {
    constructor() {
        this.properties = _properties__WEBPACK_IMPORTED_MODULE_2__["properties"];
    }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".qr {\n    background-color: #fff;\n    padding: 10px;\n    width: 300px;\n    max-width: 90%;\n}\n\n.qr:hover {\n    cursor: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbn1cblxuLnFyOmhvdmVyIHtcbiAgICBjdXJzb3I6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties */ "./src/app/properties.ts");



let ContactComponent = class ContactComponent {
    constructor() {
        this.properties = _properties__WEBPACK_IMPORTED_MODULE_2__["properties"];
    }
    ngOnInit() {
    }
    mail() {
        location.href = "mailto:" + _properties__WEBPACK_IMPORTED_MODULE_2__["properties"].mail;
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/components/cookie-bar/cookie-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/cookie-bar/cookie-bar.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cookie-bar {\n  min-height: 75px;\n  height: auto;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-right: 50px;\n  padding-left: 15px;\n}\n\n.cookie-bar-btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding-top: 20px;\n  width: 50px;\n  height: 100%;\n}\n\n.cookie-bar-btn:hover {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb29raWUtYmFyL2Nvb2tpZS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29va2llLWJhci9jb29raWUtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29va2llLWJhciB7XG4gIG1pbi1oZWlnaHQ6IDc1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmNvb2tpZS1iYXItYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvb2tpZS1iYXItYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/cookie-bar/cookie-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/cookie-bar/cookie-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: CookieBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieBarComponent", function() { return CookieBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CookieBarComponent = class CookieBarComponent {
    constructor() {
        this.isVisible = true;
        this.COOKIE_ACCEPT_KEY = "cookie-accept";
    }
    ngOnInit() {
        if (localStorage.getItem(this.COOKIE_ACCEPT_KEY))
            this.isVisible = false;
    }
    close() {
        this.isVisible = false;
        localStorage.setItem(this.COOKIE_ACCEPT_KEY, new Date().toISOString());
    }
};
CookieBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cookie-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cookie-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cookie-bar/cookie-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cookie-bar.component.css */ "./src/app/components/cookie-bar/cookie-bar.component.css")).default]
    })
], CookieBarComponent);



/***/ }),

/***/ "./src/app/components/easter-egg-modal/easter-egg-modal.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/easter-egg-modal/easter-egg-modal.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-easter-egg {\n  z-index: 3000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(#AA0505, #FBCA03);\n}\n\n.content,\nimg {\n  width: 500px;\n  max-width: 90%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lYXN0ZXItZWdnLW1vZGFsL2Vhc3Rlci1lZ2ctbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULDZDQUE2QztBQUMvQzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWFzdGVyLWVnZy1tb2RhbC9lYXN0ZXItZWdnLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtZWFzdGVyLWVnZyB7XG4gIHotaW5kZXg6IDMwMDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0FBMDUwNSwgI0ZCQ0EwMyk7XG59XG5cbi5jb250ZW50LFxuaW1nIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/easter-egg-modal/easter-egg-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/easter-egg-modal/easter-egg-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: EasterEggModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasterEggModalComponent", function() { return EasterEggModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EasterEggModalComponent = class EasterEggModalComponent {
    constructor() { }
    ngOnInit() {
    }
};
EasterEggModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'easter-egg-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./easter-egg-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/easter-egg-modal/easter-egg-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./easter-egg-modal.component.css */ "./src/app/components/easter-egg-modal/easter-egg-modal.component.css")).default]
    })
], EasterEggModalComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  height: 75px;\n  padding: 25px 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/lang-button/lang-button.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/lang-button/lang-button.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZy1idXR0b24vbGFuZy1idXR0b24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/lang-button/lang-button.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/lang-button/lang-button.component.ts ***!
  \*****************************************************************/
/*! exports provided: LangButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangButtonComponent", function() { return LangButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lang.service */ "./src/app/services/lang.service.ts");



let LangButtonComponent = class LangButtonComponent {
    constructor(langService) {
        this.langService = langService;
    }
    ngOnInit() { }
};
LangButtonComponent.ctorParameters = () => [
    { type: src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] }
];
LangButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "lang-button",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lang-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lang-button/lang-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lang-button.component.css */ "./src/app/components/lang-button/lang-button.component.css")).default]
    })
], LangButtonComponent);



/***/ }),

/***/ "./src/app/components/legal-footer/legal-footer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/legal-footer/legal-footer.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".legal-bar {\n  height: 75px;\n  padding: 25px 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWdhbC1mb290ZXIvbGVnYWwtZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sZWdhbC1mb290ZXIvbGVnYWwtZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVnYWwtYmFyIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/legal-footer/legal-footer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/legal-footer/legal-footer.component.ts ***!
  \*******************************************************************/
/*! exports provided: LegalFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalFooterComponent", function() { return LegalFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LegalFooterComponent = class LegalFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
LegalFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'legal-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./legal-footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/legal-footer/legal-footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./legal-footer.component.css */ "./src/app/components/legal-footer/legal-footer.component.css")).default]
    })
], LegalFooterComponent);



/***/ }),

/***/ "./src/app/components/passions/passions.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/passions/passions.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wmap {\n  width: 100%;\n  max-width: 600px;\n  height: 400px;\n  margin: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\nimg {\n  width: 200px;\n  transition: width 150ms linear !important;\n}\n\nimg:hover {\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXNzaW9ucy9wYXNzaW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBR1oseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXNzaW9ucy9wYXNzaW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAxNTBtcyBsaW5lYXIgIWltcG9ydGFudDtcbiAgLW1zLXRyYW5zaXRpb246IHdpZHRoIDE1MG1zIGxpbmVhciAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxNTBtcyBsaW5lYXIgIWltcG9ydGFudDtcbn1cblxuaW1nOmhvdmVyIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/passions/passions.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/passions/passions.component.ts ***!
  \***********************************************************/
/*! exports provided: PassionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassionsComponent", function() { return PassionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PassionsComponent = class PassionsComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const color = "#a8e063";
        $("#wmap").vectorMap({
            backgroundColor: "transparent",
            map: "world_mill",
            series: {
                regions: [
                    {
                        values: {
                            CA: color,
                            FR: color,
                            BR: color,
                            GB: color,
                            US: color,
                            ES: color,
                            LU: color,
                            BE: color,
                            CH: color,
                            IT: color
                        }
                    }
                ]
            },
            regionStyle: {
                initial: { "stroke-width": 0.5, fill: "#e5e5e5" }
            },
            hoverOpacity: 0.7,
            hoverColor: false,
            zoomOnScroll: false,
            zoomButtons: false
        });
    }
};
PassionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'passions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./passions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/passions/passions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./passions.component.css */ "./src/app/components/passions/passions.component.css")).default]
    })
], PassionsComponent);



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/services/services.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tech {\n  opacity: .8;\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n  transition: all ease .5s;\n}\n\n.tech:hover {\n  opacity: 1;\n  -webkit-filter: none;\n  filter: none;\n}\n\n.col {\n  text-align: center;\n  padding-left: 15px;\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n\n.tech img {\n  height: 65px !important;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col img {\n  height: 75px;\n}\n\n.fa-linkedin {\n  font-size: 50pt;\n  color: #0077b5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlY2gge1xuICBvcGFjaXR5OiAuODtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbn1cblxuLnRlY2g6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgZmlsdGVyOiBub25lO1xufVxuXG4uY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuLnRlY2ggaW1nIHtcbiAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLmNvbCBpbWcge1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbi5mYS1saW5rZWRpbiB7XG4gIGZvbnQtc2l6ZTogNTBwdDtcbiAgY29sb3I6ICMwMDc3YjU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties */ "./src/app/properties.ts");



let ServicesComponent = class ServicesComponent {
    constructor() {
        this.properties = _properties__WEBPACK_IMPORTED_MODULE_2__["properties"];
    }
    ngOnInit() {
    }
};
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")).default]
    })
], ServicesComponent);



/***/ }),

/***/ "./src/app/components/theme-button/theme-button.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/theme-button/theme-button.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhlbWUtYnV0dG9uL3RoZW1lLWJ1dHRvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/theme-button/theme-button.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/theme-button/theme-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: ThemeButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeButtonComponent", function() { return ThemeButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/services/theme.service.ts");



let ThemeButtonComponent = class ThemeButtonComponent {
    constructor(themeServive) {
        this.themeServive = themeServive;
    }
    ngOnInit() { }
};
ThemeButtonComponent.ctorParameters = () => [
    { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }
];
ThemeButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "theme-button",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./theme-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/theme-button/theme-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./theme-button.component.css */ "./src/app/components/theme-button/theme-button.component.css")).default]
    })
], ThemeButtonComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map-height {\n  height: 50vh;\n}\n\n@media (min-width: 768px) {\n  .item-linkedin:hover {\n    color: rgba(255, 255, 255, .9) !important;\n    background-color: #0077b5 !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLHlDQUF5QztJQUN6QyxvQ0FBb0M7RUFDdEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1oZWlnaHQge1xuICBoZWlnaHQ6IDUwdmg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaXRlbS1saW5rZWRpbjpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdiNSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties */ "./src/app/properties.ts");



let HomeComponent = class HomeComponent {
    constructor() {
        this.isScrolled = false;
        this.properties = _properties__WEBPACK_IMPORTED_MODULE_2__["properties"];
    }
    ngOnInit() {
        try {
            eval("initMap();");
        }
        catch (err) { }
    }
    scroll(el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
    onWindowScroll($event) {
        this.isScrolled = window.scrollY > 5;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])
], HomeComponent.prototype, "onWindowScroll", null);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/insta/insta.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/insta/insta.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RhL2luc3RhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/insta/insta.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/insta/insta.component.ts ***!
  \************************************************/
/*! exports provided: InstaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstaComponent", function() { return InstaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InstaComponent = class InstaComponent {
    constructor() { }
    ngOnInit() {
        window.location.replace("https://www.instagram.com/simonbe59");
    }
};
InstaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'insta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./insta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/insta/insta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./insta.component.css */ "./src/app/pages/insta/insta.component.css")).default]
    })
], InstaComponent);



/***/ }),

/***/ "./src/app/pages/legal/legal.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/legal/legal.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  text-align: justify;\n  text-justify: inter-word;\n  margin-bottom: 0;\n  padding-bottom: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVnYWwvbGVnYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlZ2FsL2xlZ2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/legal/legal.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/legal/legal.component.ts ***!
  \************************************************/
/*! exports provided: LegalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalComponent", function() { return LegalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties */ "./src/app/properties.ts");



let LegalComponent = class LegalComponent {
    constructor() {
        this.properties = _properties__WEBPACK_IMPORTED_MODULE_2__["properties"];
    }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
};
LegalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'legal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./legal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/legal/legal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./legal.component.css */ "./src/app/pages/legal/legal.component.css")).default]
    })
], LegalComponent);



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".not-found {\n  color: rgba(255, 255, 255, 1) !important;\n  background: url('universe.jpg') no-repeat center center fixed;\n  background-color: transparent !important;\n  background-size: cover;\n  padding: 0;\n}\n\n.trans-bg {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\nh1 {\n  font-weight: 300 !important;\n  font-size: 60px;\n}\n\np {\n  font-size: 28px;\n  font-weight: 200 !important;\n}\n\n.travolta {\n  position: absolute;\n  bottom: 0px;\n  height: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQXdDO0VBQ3hDLDZEQUFvRjtFQUNwRix3Q0FBd0M7RUFDeEMsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvdW5pdmVyc2UuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udHJhbnMtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDYwcHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcbn1cblxuLnRyYXZvbHRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/properties.ts":
/*!*******************************!*\
  !*** ./src/app/properties.ts ***!
  \*******************************/
/*! exports provided: properties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "properties", function() { return properties; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const properties = {
    mail: "pro.simonbe@gmail.com",
    adresse1: "Simon BERNARD",
    adresse2: "69004 LYON",
    siret: "N/A",
    hebergement: "github.com",
    hebergementLink: "https://help.github.com/en/articles/github-terms-of-service",
    linkedin: "https://www.linkedin.com/in/simonbernard94/",
    malt: "https://www.malt.fr",
    fiverr: "https://www.fiverr.com/",
    github: "https://github.com/simflouzz59"
};


/***/ }),

/***/ "./src/app/services/lang.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/lang.service.ts ***!
  \******************************************/
/*! exports provided: LangService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangService", function() { return LangService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let LangService = class LangService {
    constructor(translate) {
        this.translate = translate;
        this.LANG_KEY = "lang";
    }
    init() {
        this.translate.setDefaultLang("fr");
        const lng = localStorage.getItem(this.LANG_KEY);
        if (!lng) {
            localStorage.setItem(this.LANG_KEY, "fr");
        }
        this.translate.use(lng);
    }
    change() {
        const lng = localStorage.getItem(this.LANG_KEY);
        if (lng == "en") {
            localStorage.setItem(this.LANG_KEY, "fr");
            this.translate.use("fr");
        }
        else {
            localStorage.setItem(this.LANG_KEY, "en");
            this.translate.use("en");
        }
    }
};
LangService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
LangService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], LangService);



/***/ }),

/***/ "./src/app/services/theme.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ThemeService = class ThemeService {
    constructor() {
        this.THEME_KEY = "theme";
        this.isDark = false;
        this.isPink = false;
        this.isDark = localStorage.getItem(this.THEME_KEY) === "dark";
    }
    changeTheme() {
        if (this.isPink) {
            this.isPink = false;
        }
        else {
            if (this.isDark) {
                localStorage.removeItem(this.THEME_KEY);
            }
            else {
                localStorage.setItem(this.THEME_KEY, "dark");
            }
            this.isDark = !this.isDark;
        }
    }
    pink() {
        this.isPink = true;
    }
};
ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ThemeService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/simflouzz/Documents/Programmation/angular/me-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map