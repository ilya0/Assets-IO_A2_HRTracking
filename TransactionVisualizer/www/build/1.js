webpackJsonp([1],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]),
            ],
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());

//# sourceMappingURL=product-details.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageslides = [{ image: "../../assets/imgs/ProductImages/_103401668.jpg" }, { image: "../../assets/imgs/ProductImages/_103401989.jpg" }, { image: "../../assets/imgs/ProductImages/_103402004.jpg" }];
    }
    ProductDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDetailsPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], ProductDetailsPage.prototype, "slides", void 0);
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-details',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/product-details/product-details.html"*/'<!--\n  Generated template for the ProductDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button class="backbutton">\n      <ion-icon name="arrow-back"></ion-icon> Back\n    </button>\n    <ion-title>Product Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n <ion-row>\n<ion-col col-12="" class="slider">\n  <ion-slides autoplay="false" loop="true" speed="3000" pager>\n    <ion-slide *ngFor="let slide of imageslides">\n      <img src="{{slide.image}}" />\n    </ion-slide>\n  </ion-slides>\n  </ion-col>\n</ion-row>\n\n<ion-grid class="productdetails" >\n  <ion-row justify-content-start>\n    <ion-col col-6>\n     Product Name\n    </ion-col>\n    <ion-col col-6>\n     Medium GV3 Leather & Suede Handbag\n    </ion-col>\n  </ion-row>\n<ion-row justify-content-start>\n   <ion-col col-6="">\n      Product ID\n    </ion-col>\n    <ion-col col-6="">\n     1123\n    </ion-col>\n  </ion-row>\n\n<ion-row justify-content-start>\n     <ion-col col-6="">\n      Mfd\n    </ion-col>\n    <ion-col col-6="">\n     GIVENCHY\n    </ion-col>\n  </ion-row>\n  <ion-row justify-content-start>\n   <ion-col col-6="">\n      Owner\n    </ion-col>\n    <ion-col col-6="">\n     GIVENCHY Leather\n    </ion-col>\n  </ion-row>\n  \n  \n    <ion-row justify-content-start>\n     <ion-col col-6="">\n      Date\n    </ion-col>\n    <ion-col col-6="">\n     10-9-10\n    </ion-col>\n  </ion-row>\n  \n    \n    <ion-row justify-content-start>\n     <ion-col col-6="">\n      Time\n    </ion-col>\n    <ion-col col-6="">\n    11:45\n    </ion-col>\n  </ion-row>\n      <ion-row justify-content-start class="location">\n     <ion-col col-6="">\n      Location 1\n    </ion-col>\n    <ion-col col-6="">\n    11:45\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n\n\n\n<ion-footer>\n  <ion-toolbar >\n    <ion-buttons start class="report">\n      <button ion-button>\n        REPORT\n      </button>\n    </ion-buttons>\n\n   \n\n    <ion-buttons start>\n      <button ion-button>\n        HISTORY\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/product-details/product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ })

});
//# sourceMappingURL=1.js.map