webpackJsonp([20],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__retailer_retailer__ = __webpack_require__(57);
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
 * Generated class for the CreateCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateCustomerPage = /** @class */ (function () {
    function CreateCustomerPage(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, prodblkchainPvr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
        this.pid = this.navParams.get('productid');
        this.location = this.navParams.get('location');
    }
    CreateCustomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManufacturerTransferPage');
    };
    CreateCustomerPage.prototype.initCustomer = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Customer Intialization Started"
        });
        loader.present();
        this.showSaveToast('Adding Customer...', 3000);
        this.initCustomerArray = {
            'crnumber': this.crnumber,
            'productid': this.pid,
            'dop': this.dop,
            'location': this.location
        };
        this.prodblkchainPvr.initCustomer(this.initCustomerArray)
            .subscribe(function (res) {
            if (res == 'failure') {
                _this.showSaveToast("Unable to link customer", 3000);
                var data = { 'linkcustomer': 'false' };
                loader.dismiss(data);
                _this.viewCtrl.dismiss();
            }
            else {
                _this.showSaveToast("Customer linked successfully", 3000);
                var data = { 'linkcustomer': 'true' };
                _this.viewCtrl.dismiss(data);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__retailer_retailer__["a" /* RetailerPage */]);
                loader.dismiss();
            }
        });
    };
    CreateCustomerPage.prototype.showSaveToast = function (msg, dur) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: dur,
            position: 'bottom',
            showCloseButton: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CreateCustomerPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CreateCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-customer',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/create-customer/create-customer.html"*/'<!--\n  Generated template for the ManufacturerTransferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-buttons end>\n        <a href="#" (click)="closeModal()"><ion-icon name="close-circle" class="close" ></ion-icon></a>\n      </ion-buttons>\n</ion-header>\n<ion-content padding>\n<ion-grid class="" ><h1>Link Customer</h1>\n                           <ion-row justify-content-start class="product_row ">\n                             \n                              <ion-col  col-md col-12 col-md-12>\n                                 <ion-grid class="" >\n                           <ion-row justify-content-start>\n                                       <ion-col col-6>\n                Customer Reference Number:\n                                       </ion-col>\n                                       <ion-col col-6>\n                                           <ion-input placeholder="" [(ngModel)]="crnumber"></ion-input>\n                                       </ion-col>\n                                    </ion-row>\n                                    <ion-row justify-content-start>\n                                       <ion-col col-6>\n                                          Product ID:\n                                       </ion-col>\n                                       <ion-col col-6 class="blockC">\n                                           <ion-input placeholder="" [(ngModel)]="pid" disabled></ion-input>\n                                       </ion-col>\n                                    </ion-row>\n                                  \n									 <ion-row justify-content-start>\n                                       <ion-col col-6>\n                Date of Purchase:\n                                       </ion-col>\n                                       <ion-col col-6>\n                                          <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="dop"></ion-datetime>\n                                       </ion-col>\n                                    </ion-row>\n									 <ion-row justify-content-start>\n                                       <ion-col col-6>\n                Location:\n                                       </ion-col>\n                                       <ion-col col-6 class="blockC">\n                                           <ion-input placeholder="" [(ngModel)]="location"></ion-input>\n                                       </ion-col>\n                                    </ion-row>\n                                 \n									\n									\n                                 </ion-grid>\n                              </ion-col>\n                             <ion-col  col-md-12 float-end><button ion-button color="dark" (click)="initCustomer()" float-end>Create</button></ion-col>\n                           </ion-row>\n						   \n                        </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/create-customer/create-customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */]])
    ], CreateCustomerPage);
    return CreateCustomerPage;
}());

//# sourceMappingURL=create-customer.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturerTransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manufacturer_manufacturer__ = __webpack_require__(54);
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
 * Generated class for the ManufacturerTransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManufacturerTransferPage = /** @class */ (function () {
    function ManufacturerTransferPage(navCtrl, navParams, viewCtrl, toastCtrl, prodblkchainPvr, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.isDisabled = true;
        this.pid = this.navParams.get('productid');
        this.newowner = this.navParams.get('newowner');
        this.curowner = this.navParams.get('curowner');
        this.poheaderid = this.navParams.get('poheaderid');
        this.selectOptions = {
            title: 'Select Type of Shipment',
            subTitle: '',
            mode: 'md'
        };
        this.motOptions = {
            title: 'Select Mode of Transport',
            subTitle: '',
            mode: 'md'
        };
        this.nataOptions = {
            title: 'Select Name of Transport Agency',
            subTitle: '',
            mode: 'md'
        };
        this.locationOptions = {
            title: 'Select Location',
            subTitle: '',
            mode: 'md'
        };
    }
    ManufacturerTransferPage.prototype.onSelectChange = function () {
        if (this.shipmentype == "ps") {
            this.isDisabled = false;
        }
        else {
            this.isDisabled = true;
            this.shipmentquantity = '';
        }
    };
    ManufacturerTransferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManufacturerTransferPage');
    };
    ManufacturerTransferPage.prototype.transferProduct = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Transfer Product Initialised"
        });
        loader.present();
        //this.showSaveToast('Transfer Product Initialised...',3000);
        this.transferProductarr = {
            'productid': this.pid,
            'newowner': this.newowner,
            'curowner': this.curowner,
            'mot': this.mot,
            'nata': this.nata,
            'shipmentype': this.shipmentype,
            'shipmentquantity': this.shipmentquantity,
            'location': this.plocation,
            'poheaderid': this.poorder
        };
        this.prodblkchainPvr.transferProduct(this.transferProductarr)
            .subscribe(function (res) {
            if (res == 'failure') {
                //alert("Unable to transfer")
                _this.showSaveToast("Unable to transfer", 3000);
                loader.dismiss();
            }
            else {
                //alert('transferred suceesfully')
                _this.showSaveToast("Transfer Complete", 3000);
                _this.viewCtrl.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__manufacturer_manufacturer__["a" /* ManufacturerPage */]);
                loader.dismiss();
            }
        });
    };
    ManufacturerTransferPage.prototype.showSaveToast = function (msg, dur) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: dur,
            position: 'bottom',
            showCloseButton: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ManufacturerTransferPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ManufacturerTransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-manufacturer-transfer',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/manufacturer-transfer/manufacturer-transfer.html"*/'<!--\n\n  Generated template for the ManufacturerTransferPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-buttons end>\n\n    <a href="#" (click)="closeModal()">\n\n      <ion-icon name="close-circle" class="close"></ion-icon>\n\n    </a>\n\n  </ion-buttons>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid class="manufacturer">\n\n    <h1>Transfer Product</h1>\n\n    <ion-row justify-content-start class="product_row ">\n\n\n\n      <ion-col col-md col-12 col-md-12>\n\n        <ion-grid class="">\n\n\n\n          <ion-row justify-content-start>\n\n            <ion-col col-6>\n\n              Product ID:\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <ion-input placeholder="" [(ngModel)]="pid" disabled></ion-input>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row justify-content-start>\n\n            <ion-col col-6>\n\n              Purchase Order:\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <ion-input placeholder="" [(ngModel)]="poheaderid" disabled></ion-input>\n\n\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row justify-content-start>\n\n            <ion-col col-6>\n\n              Type of Shipment:\n\n            </ion-col>\n\n            <ion-col col-6>\n\n\n\n              <ion-item>\n\n\n\n                <ion-select [(ngModel)]="shipmentype" [selectOptions]="selectOptions" (ionChange)="onSelectChange()">\n\n                  <ion-option value="fs">Full Shipment</ion-option>\n\n                  <ion-option value="ps">Partial Shipment</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row justify-content-start>\n\n            <ion-col col-6>\n\n              Quantity:\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <ion-input placeholder="" [(ngModel)]="shipmentquantity" [disabled]="isDisabled ? \'\' : null"></ion-input>\n\n\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row justify-content-start>\n\n            <ion-col col-6>\n\n              Mode of Transfer:\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n                <ion-select [(ngModel)]="mot" [selectOptions]="motOptions">\n\n                  <ion-option value="LAND SHIPMENT">LAND SHIPMENT</ion-option>\n\n                  <ion-option value="RAILWAY SHIPMENT">RAILWAY SHIPMENT</ion-option>\n\n                  <ion-option value="SEA SHIPMENT">SEA SHIPMENT</ion-option>\n\n                  <ion-option value="AIR-FREIGHT">AIR-FREIGHT</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row justify-content-start>\n\n            <ion-col col-6>\n\n              Name of Transport Agency:\n\n            </ion-col>\n\n            <ion-col col-6>\n\n\n\n              <ion-item>\n\n                <ion-select [(ngModel)]="nata" [selectOptions]="nataOptions">\n\n                  <ion-option value="UPS Supply Chain Solutions">UPS Supply Chain Solutions</ion-option>\n\n                  <ion-option value="J.B. Hunt Transport Services">J.B. Hunt Transport Services</ion-option>\n\n                  <ion-option value="Exel">Exel</ion-option>\n\n                  <ion-option value="Ryder Supply Chain Solutions">Ryder Supply Chain Solutions</ion-option>\n\n                  <ion-option value="OHL">OHL</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row justify-content-start>\n\n            <ion-col col-6>\n\n              Location:\n\n            </ion-col>\n\n            <ion-col col-6>\n\n\n\n\n\n              <ion-item>\n\n                <ion-select [(ngModel)]="plocation" [selectOptions]="locationOptions">\n\n                  <ion-option value="Customs Inspection: Seattle, WA">Customs Inspection: Seattle, WA</ion-option>\n\n\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n\n\n        </ion-grid>\n\n      </ion-col>\n\n      <ion-col col-md-12 float-end><button ion-button color="dark" (click)="transferProduct()" float-end>Transfer\n\n          Product</button></ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/manufacturer-transfer/manufacturer-transfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ManufacturerTransferPage);
    return ManufacturerTransferPage;
}());

//# sourceMappingURL=manufacturer-transfer.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
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
 * Generated class for the NewOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewOrdersPage = /** @class */ (function () {
    function NewOrdersPage(navCtrl, navParams, viewCtrl, prodblkchainPvr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
    }
    NewOrdersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad NewOrdersPage');
        this.prodblkchainPvr.getPurchaseQuotes()
            .subscribe(function (response) {
            console.log("getPurchaseQuotes", response);
            if (response != null) {
                _this.purchaseorders = response.items;
            }
        });
    };
    NewOrdersPage.prototype.closeModal = function (data) {
        this.viewCtrl.dismiss(data);
    };
    NewOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-orders',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/new-orders/new-orders.html"*/'<!--\n  Generated template for the NewOrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n   <ion-navbar>\n      <ion-title>Order Details</ion-title>\n      <ion-buttons end>\n         <button ion-button (click)="closeModal()"><ion-icon name="close-circle"></ion-icon></button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<ion-row justify-content-start class="headers">\n<ion-col col-2>\nPurchase Quote Number\n</ion-col>\n<ion-col col-2>\nOrderNumber\n</ion-col>\n<ion-col col-3>\nDate\n</ion-col>\n<ion-col col-2>\nBuyer\n</ion-col>\n<ion-col col-2>\nPrice Total\n</ion-col>\n\n\n\n</ion-row>\n<ion-row justify-content-start class="rows" *ngFor="let item of purchaseorders">\n<ion-col col-2>\n           {{item.POHeaderId}}\n          </ion-col>\n		  <ion-col col-2>\n           {{item.OrderNumber}}\n          </ion-col>\n		  <ion-col col-3>\n {{item.CreationDate}}\n</ion-col>\n<ion-col col-2>\n {{item.Buyer}}\n</ion-col>\n<ion-col col-2>\n {{item.Total}}\n</ion-col>\n		  \n		  \n</ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/new-orders/new-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */]])
    ], NewOrdersPage);
    return NewOrdersPage;
}());

//# sourceMappingURL=new-orders.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionCenterTransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__distributor_center_distributor_center__ = __webpack_require__(59);
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
 * Generated class for the DistributionCenterTransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DistributionCenterTransferPage = /** @class */ (function () {
    function DistributionCenterTransferPage(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, prodblkchainPvr, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
        this.alertCtrl = alertCtrl;
        this.fromlocation = "Prologis Distribution Center";
        console.log(this.navParams.get('poheaderid'));
        this.pname = this.navParams.get('name');
        this.productid = this.navParams.get('productid');
        this.quantity = this.navParams.get('quantity');
        this.typeofshipment = this.navParams.get('typeofshipment');
        this.poheaderid = this.navParams.get('poheaderid');
        this.selectOptions = {
            title: 'Select Nordstrom Retail Store',
            subTitle: '',
            mode: 'md'
        };
        this.motOptions = {
            title: 'Select Mode of Transport',
            subTitle: '',
            mode: 'md'
        };
        this.nataOptions = {
            title: 'Select Name of Transport Agency',
            subTitle: '',
            mode: 'md'
        };
        this.locationOptions = {
            title: 'Select Location',
            subTitle: '',
            mode: 'md'
        };
        this.readDistributionCentre(this.poheaderid);
    }
    DistributionCenterTransferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DistributionCenterTransferPage');
    };
    DistributionCenterTransferPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    DistributionCenterTransferPage.prototype.readDistributionCentre = function (pquote) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please Wait...Loading Data.."
        });
        loader.present();
        loader.present().then(function () {
            console.log('pquote .....', pquote);
            _this.prodblkchainPvr.readDistributionCentre(pquote)
                .subscribe(function (response) {
                console.log('readDistributionCentre .....', response.statusCode);
                if (response.statusCode == 500) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: 'PO Header ID Not Found',
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                else {
                    _this.purchaseorders = response;
                    _this.ordernumber = _this.purchaseorders.ordernumber;
                    _this.ordered = _this.purchaseorders.ordered;
                    loader.dismiss();
                }
            });
        });
    };
    DistributionCenterTransferPage.prototype.savedetails = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Transfer Product Initialised"
        });
        loader.present();
        this.viewCtrl.dismiss();
        this.transferProductarr = {
            'productid': this.productid,
            'newowner': 'nordstrom',
            'curowner': 'distribution center',
            'mot': this.transportation,
            'nata': this.logistics,
            'location': this.location,
            'poheaderid': this.poheaderid,
            'shipmentype': this.typeofshipment,
            'shipmentquantity': this.quantity
        };
        this.prodblkchainPvr.transferProduct(this.transferProductarr)
            .subscribe(function (res) {
            if (res == 'failure') {
                //alert("Unable to transfer")
                _this.showSaveToast("Unable to transfer", 3000);
                loader.dismiss();
                _this.viewCtrl.dismiss();
            }
            else {
                _this.showSaveToast("Transfer Complete", 3000);
                _this.viewCtrl.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__distributor_center_distributor_center__["a" /* DistributorCenterPage */]);
                loader.dismiss();
            }
        });
    };
    DistributionCenterTransferPage.prototype.showSaveToast = function (msg, dur) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: dur,
            position: 'bottom',
            showCloseButton: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    DistributionCenterTransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-distribution-center-transfer',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/distribution-center-transfer/distribution-center-transfer.html"*/'<!--\n  Generated template for the DistributionCenterTransferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-buttons end>\n        <a href="#" (click)="closeModal()"><ion-icon name="close-circle" class="close" ></ion-icon></a>\n      </ion-buttons>\n</ion-header>\n\n\n<ion-content padding>\n<ion-grid class="manufacturer" [ngClass]="create ? \'disabled\' : \'enabled\'">\n      <ion-col col-md col-12 col-md-12>\n        <h3>Transfer to Retail Store</h3>\n      </ion-col>\n      <ion-row justify-content-start class="product_row clickrow" >\n        <ion-col col-md col-12 col-md-12>\n          <ion-grid class="">\n            <ion-row justify-content-start>\n              <ion-col col-md col-12 col-md-12>\n               \n                <ion-row justify-content-start>\n                  <ion-col col-6 col-md-3 > Purchase Order: </ion-col>\n                  <ion-col col-6 col-md-8 class="blockC">\n                    {{poheaderid}}\n                  </ion-col>\n                </ion-row>\n               \n                <ion-row justify-content-start>\n                  <ion-col col-6 col-md-3> Sales Order#: </ion-col>\n                  <ion-col col-6 col-md-8 class="blockC">\n                    {{ordernumber}}\n                  </ion-col>\n                </ion-row>\n                <ion-row justify-content-start>\n                  <ion-col col-6 col-md-3> Product ID: </ion-col>\n                  <ion-col col-6 col-md-8 class="blockC">\n                    {{productid}}\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-md col-12 col-md-12>\n                \n                <ion-row justify-content-start *ngIf="quantity!=\'\'">\n                  <ion-col col-6 col-md-3> Quantity: </ion-col>\n                  <ion-col col-6 col-md-8 class="blockC">\n                    {{quantity}}\n                  </ion-col>\n                </ion-row>\n               <ion-row justify-content-start>\n                  <ion-col col-6 col-md-3> Mode of Transport: </ion-col>\n                  <ion-col col-6 col-md-8>\n                    \n					  <ion-item>\n										     <ion-select [(ngModel)]="transportation" [selectOptions]="motOptions" >\n    <ion-option value="LAND SHIPMENT">LAND SHIPMENT</ion-option>\n    <ion-option value="RAILWAY SHIPMENT">RAILWAY SHIPMENT</ion-option>\n	 <ion-option value="SEA SHIPMENT">SEA SHIPMENT</ion-option>\n	 <ion-option value=">AIR-FREIGHT">AIR-FREIGHT</ion-option>\n  </ion-select></ion-item> \n                  </ion-col>\n                </ion-row>\n				<ion-row justify-content-start>\n                  <ion-col col-6 col-md-3> Name of Transportation Agency: </ion-col>\n                  <ion-col col-6 col-md-8>\n                   \n					  <ion-item>\n										     <ion-select [(ngModel)]="logistics" [selectOptions]="nataOptions" >\n    <ion-option value="Total Quality Logistics">Total Quality Logistics</ion-option>\n    <ion-option value="Cowan Logistics">Cowan Logistics</ion-option>\n	 <ion-option value="Agility Logistics">Agility Logistics</ion-option>\n	 \n  </ion-select></ion-item>   \n                  </ion-col>\n                </ion-row>\n                <ion-row justify-content-start>\n                  <ion-col col-6 col-md-3> Shipping From: </ion-col>\n                  <ion-col col-6 col-md-8>\n                    <ion-input placeholder=""  [(ngModel)]="fromlocation" ></ion-input>\n                  </ion-col>\n                </ion-row>\n                <ion-row justify-content-start>\n                  <ion-col col-6 col-md-3> Shipping To: </ion-col>\n                  <ion-col col-6 col-md-8>\n                    <ion-item>\n                      <ion-select [selectOptions]="selectOptions" [(ngModel)]="location">\n                        <ion-option value="Nordstrom Rack Belmar">Nordstrom Rack Belmar</ion-option>\n                        <ion-option value="Nordstrom Cherry Creek Shopping Center">Nordstrom Cherry Creek Shopping Center</ion-option>\n                        <ion-option value="Nordstrom Rack Cherry Creek">Nordstrom Rack Cherry Creek</ion-option>\n                        <ion-option value="Nordstrom Rack Park Meadows">Nordstrom Rack Park Meadows</ion-option>\n                        <ion-option value="Nordstrom Park Meadows">Nordstrom Park Meadows</ion-option>\n                        <ion-option value="Nordstrom FlatIron Crossing">Nordstrom FlatIron Crossing</ion-option>\n                        <ion-option value="Nordstrom Rack Twenty Ninth Street Shopping Center">Nordstrom Rack Twenty Ninth Street Shopping Center</ion-option>\n                        <ion-option value="Nordstrom FlatIron Crossing">Nordstrom FlatIron Crossing</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n        <ion-col col-md-12 float-end>\n          <button  *ngIf="!isDisabled" ion-button color="dark" (click)="savedetails()" float-end>Transfer</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/distribution-center-transfer/distribution-center-transfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DistributionCenterTransferPage);
    return DistributionCenterTransferPage;
}());

//# sourceMappingURL=distribution-center-transfer.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrescriptionDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__distributor_distributor__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presc_hist_presc_hist__ = __webpack_require__(61);
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
 * Generated class for the DistributorTransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrescriptionDetailsPage = /** @class */ (function () {
    function PrescriptionDetailsPage(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, prodblkchainPvr, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
        this.alertCtrl = alertCtrl;
        this.showhealthdata = false;
        this.pdata = this.navParams.get('pdata');
        this.motOptions = {
            title: 'Select Mode of Transport',
            subTitle: '',
            mode: 'md'
        };
        this.nataOptions = {
            title: 'Select Name of Transport Agency',
            subTitle: '',
            mode: 'md'
        };
        this.locationOptions = {
            title: 'Select Location',
            subTitle: '',
            mode: 'md'
        };
    }
    PrescriptionDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DistributorTransferPage');
        this.curdate = new Date().toISOString();
        var loader = this.loadingCtrl.create({
            content: "Please Wait...Loading Data.."
        });
        loader.present();
        console.log("retrieving retailer data");
        loader.present().then(function () {
            _this.prodblkchainPvr.getHistoryForMedicine(_this.pdata)
                .subscribe(function (data) {
                console.log(data);
                _this.healthdata = data[0].Value;
                _this.showhealthdata = true;
                // let temp = data.filter(element => element.Value.pnumber != "none");
                _this.prescriptionData = data.map(function (element) {
                    return {
                        // docType: element.Value.docType,
                        healthID: element.Value.healthID,
                        pname: element.Value.pname,
                        medicineid: element.Value.medicineid,
                        name: element.Value.name,
                        mfd: element.Value.mfd,
                        exd: element.Value.exd,
                        owner: element.Value.owner,
                        pnumber: element.Value.pnumber,
                        medicinedelivered: element.Value.medicinedelivered,
                        pharmacyname: element.Value.pharmacyname,
                        // loc: element.Value.loc,
                        // dname: element.Value.dname,
                        // docOrg: element.Value.docOrg,
                        Timestamp: element.Timestamp
                    };
                }).reverse();
                loader.dismiss();
                // ;
            });
        });
        //this.curdate = "08/07/1987";
        console.log(this.curdate);
        // console.log("id"+this.navParams.get('productid'));
        // this.pname = this.navParams.get('Name');
        // this.mdate = this.navParams.get('dom');
        // this.pid = this.navParams.get('ProductId');
        // this.pmaterial = this.navParams.get('pmaterial');
    };
    PrescriptionDetailsPage.prototype.ionViewWillLoad = function () {
        // let loader = this.loadingCtrl.create({
        // 	content: "Please Wait...Loading Data.."
        // });
        // loader.present();
        // console.log("retrieving retailer data")
        // loader.present().then(() => {
        // 	this.prodblkchainPvr.getHistoryForProduct(this.pnumber)
        // 		.subscribe(data => {
        // 			this.healthdata = data[0].Value;
        // 			this.showhealthdata = true;
        // 			let temp = data.filter(element => element.Value.pnumber != "none");
        // 			this.prescriptionData = temp.map(element => {
        // 				return {
        // 					docType: element.Value.docType,
        // 					healthID: element.Value.healthID,
        // 					pname: element.Value.pname,
        // 					age: element.Value.age,
        // 					gender: element.Value.gender,
        // 					pnumber: element.Value.pnumber,
        // 					medicinedelivered: element.Value.medicinedelivered,
        // 					pharmacyname: element.Value.pharmacyname,
        // 					loc: element.Value.loc,
        // 					dname: element.Value.dname,
        // 					docOrg: element.Value.docOrg,
        // 					Timestamp: element.Timestamp
        // 				};
        // 			}).reverse();
        // 			loader.dismiss();
        // 			// ;
        // 		})
        // })
    };
    PrescriptionDetailsPage.prototype.savedetails = function () {
        var _this = this;
        if (this.transportation == undefined || this.logistics == undefined || this.location == undefined) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Please fill all the fields',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: "Transfer Product Initialised"
            });
            loader_1.present();
            this.viewCtrl.dismiss();
            this.transferProductarr = {
                'productid': this.pid,
                'newowner': 'distribution center',
                'curowner': 'distributor',
                'mot': this.transportation,
                'nata': this.logistics,
                'location': this.location,
                'poheaderid': this.poheaderid,
                'shipmentype': this.typeofshipment,
                'shipmentquantity': this.quantity
            };
            this.prodblkchainPvr.transferProduct(this.transferProductarr)
                .subscribe(function (res) {
                if (res == 'failure') {
                    //alert("Unable to transfer")
                    _this.showSaveToast("Unable to transfer", 3000);
                    loader_1.dismiss();
                    _this.viewCtrl.dismiss();
                }
                else {
                    _this.showSaveToast("Transfer Complete", 3000);
                    _this.viewCtrl.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__distributor_distributor__["a" /* DistributorPage */]);
                    loader_1.dismiss();
                }
            });
        }
    };
    PrescriptionDetailsPage.prototype.showSaveToast = function (msg, dur) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: dur,
            position: 'bottom',
            showCloseButton: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PrescriptionDetailsPage.prototype.openModal = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__presc_hist_presc_hist__["a" /* PrescHistPage */], { pnumber: id });
    };
    PrescriptionDetailsPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    PrescriptionDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-Prescription-details',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/Prescription-details/Prescription-details.html"*/'<!--\n\n  Generated template for the DistributorTransferPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-buttons end>\n\n    <a href="#" (click)="closeModal()">\n\n      <ion-icon name="close-circle" class="close"></ion-icon>\n\n    </a>\n\n  </ion-buttons>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid class="nopadding orderrow">\n\n    <div class="" *ngIf="prescriptionData">\n\n      <ion-row style="font-weight: bold;" justify-content-start class="headers">\n\n        <ion-col col-1>\n\n          Serial No.\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          Date and Time\n\n        </ion-col>\n\n        <ion-col col-1>\n\n            Medicine ID\n\n          </ion-col>\n\n          <ion-col col-2>\n\n              Medicine\n\n            </ion-col>\n\n        <ion-col col-2>\n\n         Manufacture Date\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          Expiry Date\n\n        </ion-col>\n\n        <ion-col col-2 >\n\n          Owner\n\n        </ion-col>\n\n        \n\n\n\n      </ion-row>\n\n      <!-- (click)="getHistoryForPrescription(item.pnumber)" -->\n\n      <ion-row justify-content-start class="transactionrows" *ngFor="let item of prescriptionData;let i = index"\n\n        >\n\n        <ion-col col-1>\n\n          {{i+1}}\n\n        </ion-col>\n\n        <ion-col col-3>\n\n            <!-- &ensp; -->\n\n              {{item.Timestamp}}\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          {{item.medicineid}}\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          {{item.name}}\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          {{item.mfd}}\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          {{item.exd}}\n\n        </ion-col>\n\n        <ion-col col-2>\n\n            {{item.owner}}\n\n          </ion-col>\n\n      </ion-row>\n\n      <ion-row justify-content-start>\n\n\n\n        <ion-col col-md col-12 col-md-12 *ngIf="arrlength==\'\'">\n\n          <p style="text-align:center">No Items Found</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/Prescription-details/Prescription-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PrescriptionDetailsPage);
    return PrescriptionDetailsPage;
}());

//# sourceMappingURL=Prescription-details.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductBlockchainProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProductBlockchainProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductBlockchainProvider = /** @class */ (function () {
    function ProductBlockchainProvider(http) {
        this.http = http;
        console.log('Hello ProductBlockchainProvider Provider');
        this.ROOT_URL = 'https://08907A5277DF46A9B24950C4023F710A.blockchain.ocp.oraclecloud.com:443/restproxy1/bcsgw/rest/v1/transaction/query';
        this.localhost_URL = 'http://localhost:8081'; //'https://hhs-gse00015257.uscom-east-1.oraclecloud.com'
        this.channel = 'default';
        this.chaincode = 'Smart6';
        this.chaincodeVer = 'v1';
    }
    //get product detail from blockchain by calling readpProduct
    // getProducHistory(): Observable<any> {
    //   console.log("getProductDetailByProductId provider -- barcode --")
    //   return this.http.post(`${this.localhost_URL}/api/readProductHistory`, {
    //     productArray: [{
    //       prodid: 4902453
    //     },
    //     {
    //       prodid: 5019492
    //     }]
    //   })
    //     .map((res: any) => {
    //       console.log('prod details blockchain provider map', res)
    //       return res;
    //     })
    // }
    ProductBlockchainProvider.prototype.transferProduct = function (productDetails) {
        console.log("transfer product", productDetails);
        return this.http.post(this.localhost_URL + "/api/transferProduct", {
            "channel": this.channel,
            "chaincode": this.chaincode,
            "args": [productDetails.productid, productDetails.mot, productDetails.nata, productDetails.shipmentype, productDetails.shipmentquantity, productDetails.newowner, productDetails.location],
            "method": "transferProduct",
            "chaincodeVer": this.chaincodeVer
        })
            .map(function (res) {
            console.log('prod details blockchain provider map', res);
            return res;
        });
    };
    ProductBlockchainProvider.prototype.createProduct = function (productDetails) {
        console.log("create product", productDetails);
        return this.http.post(this.localhost_URL + "/api/initProduct", {
            "channel": this.channel,
            "chaincode": this.chaincode,
            "method": "initProduct",
            "args": [productDetails.productid, productDetails.poid, productDetails.name, productDetails.owner, productDetails.pbrand, productDetails.mfd,
                productDetails.pmaterial,
                productDetails.plocation, productDetails.color],
            "chaincodeVer": this.chaincodeVer
        })
            .map(function (res) {
            console.log('prod details blockchain provider map', res);
            return res;
        });
    };
    ProductBlockchainProvider.prototype.getProductdetailForManufacturer = function (productId) {
        console.log(productId);
        return this.http.post(this.localhost_URL + "/api/readProduct", {
            "channel": this.channel,
            "chaincode": this.chaincode,
            "method": "readUser",
            "args": [productId],
            "chaincodeVer": this.chaincodeVer
        })
            .map(function (res) {
            console.log('prod details blockchain provider map', res);
            return res;
        });
    };
    ProductBlockchainProvider.prototype.readDistributionCentre = function (poheaderid) {
        return this.http.post(this.localhost_URL + "/api/readDistributionCentre", {
            "channel": this.channel,
            "chaincode": this.chaincode,
            "method": "readDistributionCentre",
            "args": [poheaderid],
            "chaincodeVer": this.chaincodeVer
        })
            .map(function (res) {
            console.log('reading distribution center', res);
            return res;
        });
    };
    ProductBlockchainProvider.prototype.getProductDetailByOwner1 = function (ownervalue) {
        console.log(ownervalue);
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]({
            fromObject: {
                owner: ownervalue
            }
        });
        return this.http.post(this.localhost_URL + "/api/productDetailByOwner?owner=" + ownervalue, {
            params: params
        })
            .map(function (res) {
            console.log('prod details blockchain provider map', res);
            return res;
        });
    };
    ProductBlockchainProvider.prototype.initCustomer = function (customer) {
        console.log("initt customer product", customer);
        return this.http.post(this.localhost_URL + "/api/initCustomer", {
            "channel": this.channel,
            "chaincode": this.chaincode,
            "method": "initCustomer",
            "args": [customer.crnumber, customer.dop, customer.location, customer.productid],
            "chaincodeVer": this.chaincodeVer
        })
            .map(function (res) {
            console.log('prod details blockchain provider map', res);
            return res;
        });
    };
    ProductBlockchainProvider.prototype.getProductDetailByOwner = function (ownerName) {
        console.log("prod details by owner", ownerName);
        return this.http.post(this.localhost_URL + "/api/productDetailByOwner", {
            "channel": this.channel,
            "chaincode": this.chaincode,
            "method": "queryProduct",
            "args": ["{\"selector\":{\"docType\":\"Employee\",\"EmployeeID\":\"" + ownerName + "\"}}"],
            "chaincodeVer": this.chaincodeVer
        })
            .map(function (res) {
            console.log('prod details blockchain provider map', res);
            return res;
        });
    };
    ProductBlockchainProvider.prototype.initCustomsForStatusUpdate = function (productid, status) {
        console.log("initt customer product", status);
        return this.http.post(this.localhost_URL + "/api/initCustomsStatusupdate", {
            "channel": this.channel,
            "chaincode": this.chaincode,
            "method": "initCustom",
            "args": [productid, status],
            "chaincodeVer": this.chaincodeVer
        })
            .map(function (res) {
            console.log('prod details blockchain provider map', res);
            return res;
        });
    };
    ProductBlockchainProvider.prototype.getHistoryForProduct = function (productid) {
        console.log("initt customer product", status);
        return this.http.post("" + this.ROOT_URL, {
            "channel": this.channel,
            "chaincode": this.chaincode,
            "method": "getHistoryForProduct",
            "args": [productid],
            "chaincodeVer": this.chaincodeVer
        }, {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa("api.user:J0S-puk+!SEmuyDS0G:l")
            })
        })
            .map(function (res) {
            console.log('prod details blockchain provider map---', res);
            return res.result;
        });
    };
    ProductBlockchainProvider.prototype.getHistoryForMedicine = function (pdata) {
        console.log("initt customer product", status);
        return this.http.post(this.localhost_URL + "/api/getHistoryForMedicine?pdata=" + pdata, {})
            .map(function (res) {
            console.log('prod details blockchain provider map---', res);
            return res;
        });
    };
    ProductBlockchainProvider.prototype.getPurchaseQuotes = function () {
        console.log("getPurchaseQuotes", status);
        return this.http.post(this.localhost_URL + "/api/getPurchaseQuotes", {})
            .map(function (res) {
            console.log('getPurchaseQuotes---', res.items);
            return res;
        });
    };
    ProductBlockchainProvider.prototype.readPurchaseOrderfromERP = function (orderid) {
        console.log("orderid", orderid);
        return this.http.post(this.localhost_URL + "/api/readPurchaseOrderfromERP?OrderNumber=" + orderid, {})
            .map(function (res) {
            console.log('readPurchaseOrderfromERP---', res.items);
            return res;
        });
    };
    ProductBlockchainProvider.prototype.initPurchaseReciptNumber = function (ponumber, productid) {
        console.log("initPurchaseReciptNumber", status);
        return this.http.post(this.localhost_URL + "/api/initPurchaseReciptNumber?ponumber=" + ponumber + "&productid=" + productid, {
            "channel": this.channel,
            "chaincode": this.chaincode,
            "method": "initPurchaseReciptNumber",
            "args": [ponumber, productid],
            "chaincodeVer": this.chaincodeVer
        })
            .map(function (res) {
            console.log('prod details blockchain provider map---', res);
            return res;
        });
    };
    ProductBlockchainProvider.prototype.initPurchaseQuote = function (pquote) {
        console.log(pquote.ponumber + "initPurchaseQuote");
        return this.http.post(this.localhost_URL + "/api/initPurchaseQuote", {
            "channel": this.channel,
            "chaincode": this.chaincode,
            "method": "initPurchasequote",
            "args": [pquote.ponumber, pquote.ordernumber, pquote.creationdate, pquote.statuscode, pquote.status, pquote.buyerid, pquote.buyer, pquote.supplierid, pquote.supplier, pquote.ordered, pquote.ccode, pquote.currency, pquote.totaltax, pquote.total],
            "chaincodeVer": this.chaincodeVer
        })
            .map(function (res) {
            console.log('prod details blockchain provider map---', res);
            return res;
        });
    };
    ProductBlockchainProvider.prototype.readPurchasequote = function (poid) {
        console.log("initt customer product", poid);
        return this.http.post(this.localhost_URL + "/api/readPurchasequote?poid=" + poid, {
            "channel": this.channel,
            "chaincode": this.chaincode,
            "method": "readPurchasequote",
            "args": [poid],
            "chaincodeVer": this.chaincodeVer
        })
            .map(function (res) {
            console.log('readPurchasequote---', res);
            return res;
        });
    };
    ProductBlockchainProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProductBlockchainProvider);
    return ProductBlockchainProvider;
}());

//# sourceMappingURL=product-blockchain.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Prescription-details/Prescription-details.module": [
		308,
		19
	],
	"../pages/create-customer/create-customer.module": [
		296,
		18
	],
	"../pages/customs-details/customs-details.module": [
		293,
		17
	],
	"../pages/customs-login/customs-login.module": [
		294,
		4
	],
	"../pages/customs/customs.module": [
		295,
		16
	],
	"../pages/distribution-center-transfer/distribution-center-transfer.module": [
		297,
		15
	],
	"../pages/distributor-center/distributor-center.module": [
		298,
		14
	],
	"../pages/distributor-login/distributor-login.module": [
		301,
		3
	],
	"../pages/distributor-transfer/distributor-transfer.module": [
		299,
		13
	],
	"../pages/distributor/distributor.module": [
		300,
		12
	],
	"../pages/login/login.module": [
		302,
		11
	],
	"../pages/manufacturer-login/manufacturer-login.module": [
		303,
		2
	],
	"../pages/manufacturer-transfer/manufacturer-transfer.module": [
		306,
		10
	],
	"../pages/manufacturer/manufacturer.module": [
		304,
		9
	],
	"../pages/new-orders/new-orders.module": [
		307,
		8
	],
	"../pages/presc-hist/presc-hist.module": [
		305,
		7
	],
	"../pages/product-details/product-details.module": [
		309,
		1
	],
	"../pages/purchase-order/purchase-order.module": [
		310,
		0
	],
	"../pages/retailer/retailer.module": [
		311,
		6
	],
	"../pages/transaction-visualizer/transaction-visualizer.module": [
		312,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());

var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider() {
    }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                // At this point make a request to your backend to make a real check!
                if (credentials.password === "123456" && credentials.email === "retailer@nordstorm.com") {
                    var access = true;
                    _this.currentUser = new User('Joe', 'retailer@nordstorm.com');
                    observer.next(access);
                    observer.complete();
                }
                else if (credentials.password === "123456" && credentials.email === "distributor@winsupply.com") {
                    var access = true;
                    _this.currentUser = new User('Chris', 'distributor@winsupply.com');
                    observer.next(access);
                    observer.complete();
                }
                else if (credentials.password === "123456" && credentials.email === "customs@nationalwide.com") {
                    var access = true;
                    _this.currentUser = new User('John', 'customs@nationalwide.com');
                    observer.next(access);
                    observer.complete();
                }
                else if (credentials.password === "123456" && credentials.email === "manufacturer@givenchy.com") {
                    var access = true;
                    _this.currentUser = new User('JSmith', 'manufacturer@givenchy.com');
                    observer.next(access);
                    observer.complete();
                }
                else if (credentials.password === "123456" && credentials.email === "distributorcenter@prologis.com") {
                    var access = true;
                    _this.currentUser = new User('David', 'distributorcenter@prologis.com');
                    observer.next(access);
                    observer.complete();
                }
                else if (credentials.password === "123456" && credentials.email === "admin@hhs.com") {
                    var access = true;
                    _this.currentUser = new User('Smith', 'admin@hhs.com');
                    observer.next(access);
                    observer.complete();
                }
            });
        }
    };
    AuthServiceProvider.prototype.register = function (credentials) {
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            // At this point store the credentials to your backend!
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__distributor_distributor__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__retailer_retailer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customs_customs__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manufacturer_manufacturer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__distributor_center_distributor_center__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transaction_visualizer_transaction_visualizer__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(nav, auth, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { email: '', password: '' };
    }
    LoginPage.prototype.createAccount = function () {
        this.nav.push('RegisterPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.registerCredentials).subscribe(function (allowed) {
            console.log(_this.auth.currentUser);
            if (allowed) {
                if (_this.auth.currentUser.email == 'distributor@winsupply.com') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__distributor_distributor__["a" /* DistributorPage */]);
                }
                else if (_this.auth.currentUser.email == 'retailer@nordstorm.com') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__retailer_retailer__["a" /* RetailerPage */]);
                }
                else if (_this.auth.currentUser.email == 'customs@nationalwide.com') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__customs_customs__["a" /* CustomsPage */]);
                }
                else if (_this.auth.currentUser.email == 'manufacturer@givenchy.com') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__manufacturer_manufacturer__["a" /* ManufacturerPage */]);
                }
                else if (_this.auth.currentUser.email == 'distributorcenter@prologis.com') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__distributor_center_distributor_center__["a" /* DistributorCenterPage */]);
                }
                else if (_this.auth.currentUser.email == 'admin@hhs.com') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__transaction_visualizer_transaction_visualizer__["a" /* TransactionVisualizerPage */]);
                }
            }
            else {
                _this.showError("Access Denied");
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="login-content" padding>\n<ion-col col-12="" class="login-form">\n  <ion-row class="logo-row">\n    \n    <ion-col col-12="">\n     <img src="assets/imgs/login_logo.svg" alt="Logo" class="logo">\n    </ion-col>\n    \n  </ion-row>\n  <div class="login-box">\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n         \n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n  </ion-col>\n</ion-content>\n'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_distributor_distributor__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_retailer_retailer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_distributor_transfer_distributor_transfer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_customs_customs__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_customs_details_customs_details__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_manufacturer_manufacturer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_manufacturer_transfer_manufacturer_transfer__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_create_customer_create_customer__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_distributor_center_distributor_center__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_transaction_visualizer_transaction_visualizer__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_new_orders_new_orders__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_distribution_center_transfer_distribution_center_transfer__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_Prescription_details_Prescription_details__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_presc_hist_presc_hist__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_distributor_distributor__["a" /* DistributorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_retailer_retailer__["a" /* RetailerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_distributor_transfer_distributor_transfer__["a" /* DistributorTransferPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_customs_customs__["a" /* CustomsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_customs_details_customs_details__["a" /* CustomsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_manufacturer_manufacturer__["a" /* ManufacturerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_manufacturer_transfer_manufacturer_transfer__["a" /* ManufacturerTransferPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_create_customer_create_customer__["a" /* CreateCustomerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_distributor_center_distributor_center__["a" /* DistributorCenterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_transaction_visualizer_transaction_visualizer__["a" /* TransactionVisualizerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_new_orders_new_orders__["a" /* NewOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_distribution_center_transfer_distribution_center_transfer__["a" /* DistributionCenterTransferPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_Prescription_details_Prescription_details__["a" /* PrescriptionDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_presc_hist_presc_hist__["a" /* PrescHistPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    scrollPadding: false
                }, {
                    links: [
                        { loadChildren: '../pages/customs-details/customs-details.module#CustomsDetailsPageModule', name: 'CustomsDetailsPage', segment: 'customs-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customs-login/customs-login.module#CustomsLoginPageModule', name: 'CustomsLoginPage', segment: 'customs-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customs/customs.module#CustomsPageModule', name: 'CustomsPage', segment: 'customs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-customer/create-customer.module#CreateCustomerPageModule', name: 'CreateCustomerPage', segment: 'create-customer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/distribution-center-transfer/distribution-center-transfer.module#DistributionCenterTransferPageModule', name: 'DistributionCenterTransferPage', segment: 'distribution-center-transfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/distributor-center/distributor-center.module#DistributorCenterPageModule', name: 'DistributorCenterPage', segment: 'distributor-center', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/distributor-transfer/distributor-transfer.module#DistributorTransferPageModule', name: 'DistributorTransferPage', segment: 'distributor-transfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/distributor/distributor.module#DistributorPageModule', name: 'DistributorPage', segment: 'distributor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/distributor-login/distributor-login.module#DistributorLoginPageModule', name: 'DistributorLoginPage', segment: 'distributor-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manufacturer-login/manufacturer-login.module#ManufacturerLoginPageModule', name: 'ManufacturerLoginPage', segment: 'manufacturer-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manufacturer/manufacturer.module#ManufacturerPageModule', name: 'ManufacturerPage', segment: 'manufacturer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/presc-hist/presc-hist.module#PrescriptionHistoryPageModule', name: 'PrescHistPage', segment: 'presc-hist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manufacturer-transfer/manufacturer-transfer.module#ManufacturerTransferPageModule', name: 'ManufacturerTransferPage', segment: 'manufacturer-transfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-orders/new-orders.module#NewOrdersPageModule', name: 'NewOrdersPage', segment: 'new-orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Prescription-details/Prescription-details.module#PrescriptionDetailsPageModule', name: 'PrescriptionDetailsPage', segment: 'Prescription-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/purchase-order/purchase-order.module#PurchaseOrderPageModule', name: 'PurchaseOrderPage', segment: 'purchase-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/retailer/retailer.module#RetailerPageModule', name: 'RetailerPage', segment: 'retailer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-visualizer/transaction-visualizer.module#TransactionVisualizerPageModule', name: 'TransactionVisualizerPage', segment: 'transaction-visualizer', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_distributor_distributor__["a" /* DistributorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_retailer_retailer__["a" /* RetailerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_distributor_transfer_distributor_transfer__["a" /* DistributorTransferPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_customs_customs__["a" /* CustomsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_customs_details_customs_details__["a" /* CustomsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_manufacturer_manufacturer__["a" /* ManufacturerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_manufacturer_transfer_manufacturer_transfer__["a" /* ManufacturerTransferPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_create_customer_create_customer__["a" /* CreateCustomerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_distributor_center_distributor_center__["a" /* DistributorCenterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_transaction_visualizer_transaction_visualizer__["a" /* TransactionVisualizerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_new_orders_new_orders__["a" /* NewOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_distribution_center_transfer_distribution_center_transfer__["a" /* DistributionCenterTransferPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_Prescription_details_Prescription_details__["a" /* PrescriptionDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_presc_hist_presc_hist__["a" /* PrescHistPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_transaction_visualizer_transaction_visualizer__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_transaction_visualizer_transaction_visualizer__["a" /* TransactionVisualizerPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/app/app.html"*/'\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__distributor_transfer_distributor_transfer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
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
 * Generated class for the DistributorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DistributorPage = /** @class */ (function () {
    function DistributorPage(navCtrl, navParams, auth, modalCtrl, loadingCtrl, prodblkchainPvr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
    }
    DistributorPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please Wait...Loading Data.."
        });
        loader.present();
        console.log("retrieving didtributor data");
        this.username = this.auth.currentUser.name;
        loader.present().then(function () {
            _this.prodblkchainPvr.getProductDetailByOwner('distributor')
                .subscribe(function (data) {
                console.log(data);
                _this.productarray = data;
                _this.arrlength = Object.keys(_this.productarray);
                _this.arrcount = _this.arrlength.length;
                console.log("this" + _this.arrlength);
                loader.dismiss();
            });
        });
    };
    DistributorPage.prototype.openModal = function (prodDetails) {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__distributor_transfer_distributor_transfer__["a" /* DistributorTransferPage */], prodDetails);
        modalPage.present();
    };
    DistributorPage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    DistributorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-distributor',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/distributor/distributor.html"*/'<!--\n\n   Generated template for the DistributorPage page.\n\n   \n\n   See http://ionicframework.com/docs/components/#navigation for more info on\n\n   Ionic pages and navigation.\n\n   -->\n\n\n\n<ion-content padding>\n\n   <div class="cc">\n\n    <ion-grid class="header nopadding" >\n\n         <ion-row justify-content-start>\n\n          <ion-col  col-md col-12 col-md-12 class="nopadding">\n\n		   <ion-col  col-md-12 col-md-6 class="nopadding">\n\n               <span class="customslogo web_logo">WinSupply</span><span class="subtitle">&nbsp;Distributor</span>\n\n            </ion-col>\n\n			 <ion-col  col-md-12 col-md-6 class="nopadding">\n\n                                       <div class="dropdown" float-end>\n\n                           <button class="  dropdown-toggle userdrop" type="button" data-toggle="dropdown">Hi {{username}}\n\n                           <span class="caret"></span></button>\n\n                           <ul class="dropdown-menu">\n\n                              <li><a href="#" (click)=\'logout()\'>Logout</a></li>\n\n                           </ul>\n\n                        </div>\n\n            </ion-col>\n\n		  </ion-col>\n\n	  <ion-col  col-md col-12 col-md-12 class="nopadding">\n\n		 \n\n			 <ion-col   col-lg-6 float-end class="nopadding">\n\n                                      <ion-grid class="nopadding" >\n\n                  <ion-row justify-content-end>\n\n				   <ion-col  col-md col-12 col-md-8>\n\n                        \n\n						<ion-searchbar\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="onInput($event)"\n\n  (ionCancel)="onCancel($event)" class="searchinput">\n\n</ion-searchbar>\n\n                     </ion-col>\n\n                     <ion-col  col-md-2><button ion-button full outline class="filter headerbutton">Filters</button></ion-col>\n\n                     <ion-col  col-md-2 ><button ion-button full outline class="edit headerbutton">Edit</button></ion-col>\n\n				  </ion-row>\n\n      </ion-grid>\n\n            </ion-col>\n\n		  </ion-col>\n\n         </ion-row>\n\n      </ion-grid>\n\n      <ion-grid class="" >\n\n         \n\n		 <ion-row justify-content-start class="product_row" *ngFor="let item of productarray">\n\n            <ion-col  col-md-12>\n\n               <ion-grid class="nopaddingmobile" >\n\n                  <ion-row justify-content-start>\n\n                     <ion-col  col-md col-12 col-md-6 class="lhs_col">\n\n                       \n\n                        <ion-grid class="nopaddingmobile" >\n\n                           <ion-row justify-content-start>\n\n						    \n\n                              <ion-col  col-md col-12 col-md-3 style="display:none">\n\n                                 <div class="pro_img"><img src="assets/imgs/ProductImages/_103402067.jpg" class="img-responsive"></div>\n\n                              </ion-col>\n\n                              <ion-col  col-md col-12 col-md-12 >\n\n                                 <ion-grid class="nopaddingmobile" >\n\n								  <ion-col col-md col-12 col-md-12><b>Product Details</b></ion-col>\n\n                                    <ion-row justify-content-start>\n\n                                       <ion-col col-md col-12 col-md-3>\n\n                                          Product Name\n\n                                       </ion-col>\n\n                                       <ion-col col-md col-12 col-md-7 class="blockC">\n\n                                        {{item.Record.name}}\n\n                                       </ion-col>\n\n                                    </ion-row>\n\n                                    <ion-row justify-content-start>\n\n                                       <ion-col col-md col-12 col-md-3>\n\n                                          Product ID\n\n                                       </ion-col>\n\n                                       <ion-col col-7="" class="blockC">\n\n                                        {{item.Record.productid}}\n\n                                       </ion-col>\n\n                                    </ion-row>\n\n                                    <ion-row justify-content-start>\n\n                                       <ion-col col-md col-12 col-md-3>\n\n                                          Manufactured Date:\n\n                                       </ion-col>\n\n                                       <ion-col col-7="" class="blockC">\n\n                                        {{item.Record.mfd}}\n\n                                       </ion-col>\n\n                                    </ion-row>\n\n                                   \n\n                                    <ion-row justify-content-start>\n\n                                       <ion-col col-md col-12 col-md-3>\n\n                                          Brand\n\n                                       </ion-col>\n\n                                       <ion-col col-7="" class="blockC">\n\n                                        {{item.Record.brand}}\n\n                                       </ion-col>\n\n                                    </ion-row>\n\n                                   <ion-row justify-content-start>\n\n                                       <ion-col col-md col-12 col-md-3>\n\n                                          Location\n\n                                       </ion-col>\n\n                                       <ion-col col-7="" class="blockC">\n\n                                        {{item.Record.location}}\n\n                                       </ion-col>\n\n                                    </ion-row>\n\n									\n\n                                 </ion-grid>\n\n                              </ion-col>\n\n                              <ion-col  col-md col-12 col-md-3>\n\n                                 <ion-grid class="" >\n\n                                   \n\n                                 </ion-grid>\n\n                              </ion-col>\n\n                           </ion-row>\n\n                        </ion-grid>\n\n                     </ion-col>\n\n                     <ion-col class="schedule" col-sm col-12 col-md-6>\n\n                        <ion-grid class="rhs_col" >\n\n                           <ion-row justify-content-start>\n\n                              <ion-col  col-md-12><b>Transporation and Logistics</b></ion-col>\n\n                              <ion-col col-md col-12 col-md-6>\n\n                                 Location\n\n                              </ion-col>\n\n                              <ion-col col-md col-12 col-md-6 class="blockC">\n\n                                 {{item.Record.location}}\n\n                              </ion-col>\n\n                           </ion-row>\n\n                           <ion-row justify-content-start>\n\n                              <ion-col col-md col-12 col-md-6>\n\n                                 Name of Transport Agency\n\n                              </ion-col>\n\n                              <ion-col col-md col-12 col-md-6 class="blockC">\n\n                                 {{item.Record.nameoftransportagency}}\n\n                              </ion-col>\n\n                           </ion-row>\n\n						    <ion-row justify-content-start>\n\n                              <ion-col col-md col-12 col-md-6>\n\n                                 Mode of Transport\n\n                              </ion-col>\n\n                              <ion-col col-md col-12 col-md-6 class="blockC">\n\n                                 {{item.Record.modeoftransport}}\n\n                              </ion-col>\n\n                           </ion-row>\n\n                           <ion-row justify-content-start>\n\n                              <ion-col col-md col-12 col-md-6>\n\n                                 Logistics\n\n                              </ion-col>\n\n                              <ion-col col-md col-12 col-md-6 class="blockC">\n\n                                 WA Logistics\n\n                              </ion-col>\n\n							  <button ion-button color="dark" class="transfer" (click)="openModal(item.Record)">Transfer</button>\n\n\n\n                           </ion-row>\n\n                        </ion-grid>\n\n                     </ion-col>\n\n                  </ion-row>\n\n               </ion-grid>\n\n            </ion-col>\n\n         </ion-row>\n\n	\n\n		 <ion-row justify-content-start>\n\n						    \n\n                              <ion-col  col-md col-12 col-md-12 *ngIf="arrlength==\'\'">\n\n                                <br><p style="text-align:center">No Items Found</p>\n\n                              </ion-col>\n\n							  </ion-row>\n\n		 \n\n      </ion-grid>\n\n   </div>\n\n</ion-content>'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/distributor/distributor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */]])
    ], DistributorPage);
    return DistributorPage;
}());

//# sourceMappingURL=distributor.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customs_details_customs_details__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manufacturer_transfer_manufacturer_transfer__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_orders_new_orders__ = __webpack_require__(115);
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
 * Generated class for the ManufacturerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManufacturerPage = /** @class */ (function () {
    function ManufacturerPage(navCtrl, navParams, auth, modalCtrl, toastCtrl, prodblkchainPvr, alertCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.isDisabled = false;
        this.owner = 'Givenchy';
        this.neworders = true;
        this.create = false;
    }
    ManufacturerPage.prototype.presentAlert = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Notification!',
            subTitle: 'You have a new order',
            buttons: [{
                    text: 'Cick to View',
                    role: 'click',
                    handler: function () {
                        _this.openNewOrders(item);
                    }
                }]
        });
        alert.present();
    };
    ManufacturerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManufacturerPage');
        this.username = this.auth.currentUser.name;
    };
    ManufacturerPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please Wait...Loading Data.."
        });
        loader.present();
        console.log("retrieving manufacturer data");
        this.prodblkchainPvr.getProductDetailByOwner(this.owner)
            .subscribe(function (response) {
            console.log("Data retrieved Successfully", response);
            if (response != null) {
                _this.productFromBlkChain = response;
                _this.arrlength = Object.keys(_this.productFromBlkChain);
            }
            loader.dismiss();
        });
    };
    ManufacturerPage.prototype.showNewOrders = function () {
        this.openNewOrders(this.poorders);
    };
    ManufacturerPage.prototype.openModal = function () {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__customs_details_customs_details__["a" /* CustomsDetailsPage */], undefined, { cssClass: "modal-fullscreen" });
        modalPage.present();
    };
    ManufacturerPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ManufacturerPage.prototype.openNewOrders = function (item) {
        var _this = this;
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__new_orders_new_orders__["a" /* NewOrdersPage */], { item: item }, { cssClass: "modal-screen" });
        modalPage.onDidDismiss(function (data) {
            _this.ponumber = data;
        });
        modalPage.present();
    };
    ManufacturerPage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ManufacturerPage.prototype.initProduct = function () {
        var _this = this;
        if (this.pname == undefined || this.pid == undefined || this.pbrand == undefined || this.mdate == undefined || this.pbrand == undefined || this.pmaterial == undefined || this.plocation == undefined || this.color == undefined) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Please fill all the required fields',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: "Creating Product"
            });
            loader_1.present();
            this.createProductarr = {
                'productid': this.pid,
                'poid': this.poid,
                'name': this.pname,
                'owner': this.owner,
                'pbrand': this.pbrand,
                'mfd': this.mdate,
                'pmaterial': this.pmaterial,
                'plocation': this.plocation,
                'color': this.color
            };
            loader_1.present().then(function () {
                _this.prodblkchainPvr.createProduct(_this.createProductarr)
                    .subscribe(function (response) {
                    console.log('creating data .....', response);
                    if (response == 'failure') {
                        _this.showSaveToast("Error Saving Product. Check if Product ID exists", 3000);
                        loader_1.dismiss();
                    }
                    else {
                        _this.create = false;
                        _this.isDisabled = false;
                        console.log('created', response);
                        //alert("created successfully")
                        loader_1.dismiss();
                        _this.showSaveToast("Product Created", 3000);
                        console.log('retrieving......');
                        _this.ionViewWillLoad();
                        _this.pname = "";
                        _this.pid = "";
                        _this.pmaterial = "";
                        _this.pbrand = "";
                        _this.color = "";
                        _this.plocation = "";
                        _this.mdate = "";
                        _this.ponumber = "";
                        _this.poid = "";
                    }
                });
            });
        }
    };
    ManufacturerPage.prototype.readPurchaseOrderfromERP = function (pquote) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please Wait...Loading Data.."
        });
        loader.present();
        this.prodblkchainPvr.readPurchaseOrderfromERP(pquote)
            .subscribe(function (response) {
            console.log('creating data .....', response.statusCode);
            if (response.statusCode == 500) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Order ID Not Found',
                    buttons: ['OK']
                });
                alert_2.present();
            }
            else {
                _this.purchaseorders = response.items;
                console.log("all orders ---");
            }
            loader.dismiss();
        });
    };
    ManufacturerPage.prototype.initPurchaseQuote = function (pquote) {
        var _this = this;
        console.log(pquote);
        this.pquotearr = {
            'ponumber': pquote.POHeaderId,
            'ordernumber': pquote.OrderNumber,
            'creationdate': pquote.CreationDate,
            'statuscode': pquote.StatusCode,
            'status': pquote.Status,
            'buyerid': pquote.BuyerId,
            'buyer': pquote.Buyer,
            'supplierid': pquote.SupplierId,
            'supplier': pquote.Supplier,
            'ordered': pquote.Ordered,
            'ccode': pquote.CurrencyCode,
            'currency': pquote.Currency,
            'totaltax': pquote.TotalTax,
            'total': pquote.Total,
        };
        var loader = this.loadingCtrl.create({
            content: "Please Wait...Loading Data.."
        });
        loader.present();
        this.prodblkchainPvr.initPurchaseQuote(this.pquotearr)
            .subscribe(function (response) {
            console.log('creating data .....', response);
            if (response == 'failure') {
                _this.create = true;
                _this.poid = _this.pquotearr.ponumber;
            }
            else {
                _this.create = true;
                _this.poid = _this.pquotearr.ponumber;
            }
            loader.dismiss();
        });
    };
    ManufacturerPage.prototype.transferProduct = function (productTransferDetail) {
        //alert(this.ponumber);
        this.transferProductarr = {
            'productid': productTransferDetail.productid,
            'newowner': 'customs',
            'curowner': this.owner,
            'poheaderid': productTransferDetail.poheaderid,
        };
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__manufacturer_transfer_manufacturer_transfer__["a" /* ManufacturerTransferPage */], this.transferProductarr);
        modalPage.present();
    };
    ManufacturerPage.prototype.showSaveToast = function (msg, dur) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: dur,
            position: 'bottom',
            showCloseButton: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ManufacturerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-manufacturer',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/manufacturer/manufacturer.html"*/'<!--\n  Generated template for the RetailerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n  <div class="cc">\n    <ion-grid class="header nopadding">\n      <ion-row justify-content-start>\n        <ion-col col-md col-12 col-md-12 class="nopadding">\n          <ion-col col-md-12 col-md-6 class="nopadding">\n            <img src="assets/imgs/givenchy_logo.svg" alt="Logo" class="web_logo"><span class="subtitle">&nbsp;Manufacturer</span>\n          </ion-col>\n          <ion-col col-md-12 col-md-6 class="nopadding">\n            <div class="dropdown" float-end>\n              <button class="  dropdown-toggle userdrop" type="button" data-toggle="dropdown">Hi {{username}}\n                <span class="caret"></span></button>\n              <ul class="dropdown-menu">\n               \n				<li><a href="#" (click)="showNewOrders()" class="neworders">View Orders</a></li>\n				 <li><a href="#" (click)=\'logout()\'>Logout</a></li>\n              </ul>\n            </div>\n			\n          </ion-col>\n		   \n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n <ion-grid class="manufacturer" [ngClass]="create ? \'disabled\' : \'enabled\'">\n	<ion-col col-md-12 col-md-12 class="nopadding" float-end text-right>\n           \n          </ion-col>\n      <ion-col col-md col-12 col-md-12><h3>Get Order Details</h3></ion-col>\n      <ion-row justify-content-start class="product_row ">\n\n        <ion-col col-md col-12 col-md-12>\n          <ion-grid class="">\n		   <ion-row justify-content-start>\n		  <ion-col col-md col-12 col-md-8>\n		   <ion-row justify-content-start> \n              <ion-col col-4 col-md-1 >\n               Order Id:\n              </ion-col>\n              <ion-col col-4 col-md-8>\n            <ion-input placeholder="" [(ngModel)]="ponumber"  required></ion-input>\n              </ion-col>\n			  <ion-col col-12 col-md-3 class="nopadding">\n           <button  *ngIf="!isDisabled" ion-button color="dark" (click)="readPurchaseOrderfromERP(ponumber)" >Get Order Details</button>\n              </ion-col>\n            </ion-row>\n		\n			</ion-col>\n			\n			\n </ion-row>\n          </ion-grid>\n        </ion-col>\n        \n		\n      </ion-row>\n<ion-row justify-content-start class="rows" *ngFor="let item of purchaseorders">\n		<ion-col col-12 justify-content-start class="product_row ">\n\n        <ion-col col-md col-12 col-md-12>\n          <ion-grid class="">\n		   <ion-row justify-content-start>\n		   <ion-col col-md col-12 col-md-12><h3>Order Details</h3></ion-col>\n		  <ion-col col-md col-12 col-md-6>\n		   <ion-row justify-content-start> \n              <ion-col col-6 col-md-3 >\n                PO Id:\n              </ion-col>\n              <ion-col col-6 col-md-8>\n            {{item.POHeaderId}}\n              </ion-col>\n            </ion-row>\n			\n            <ion-row justify-content-start> \n              <ion-col col-6 col-md-3>\n                Order Number:\n              </ion-col>\n              <ion-col col-6 col-md-8>\n                {{item.OrderNumber}}\n              </ion-col>\n            </ion-row>\n            <ion-row justify-content-start>\n             <ion-col col-6 col-md-3>\n                Creation Date:\n              </ion-col>\n              <ion-col col-6 col-md-8>\n               {{item.CreationDate}}\n              </ion-col>\n            </ion-row>\n            <ion-row justify-content-start>\n             <ion-col col-6 col-md-3>\n                Buyer:\n              </ion-col>\n               <ion-col col-6 col-md-8>\n                {{item.Buyer}}\n              </ion-col>\n            </ion-row>\n			</ion-col>\n			\n			<ion-col col-md col-12 col-md-6>\n			\n            <ion-row justify-content-start>\n              <ion-col col-6 col-md-3>\n                Total:\n              </ion-col>\n               <ion-col col-6 col-md-8>\n                 {{item.Total}}\n              </ion-col>\n            </ion-row>\n            <ion-row justify-content-start>\n              <ion-col col-6 col-md-3>\n                Supplier:\n              </ion-col>\n               <ion-col col-6 col-md-8>\n                {{item.Supplier}}\n              </ion-col>\n            </ion-row>\n            <ion-row justify-content-start>\n              <ion-col col-6 col-md-3>\n               Ordered:\n              </ion-col>\n               <ion-col col-6 col-md-8>\n                 {{item.Ordered}}\n              </ion-col>\n            </ion-row>\n           \n </ion-col>\n </ion-row>\n          </ion-grid>\n        </ion-col>\n        <ion-col col-md-12 float-end>\n		<button   ion-button color="dark" (click)="initPurchaseQuote(item)" float-end>NEXT</button></ion-col>\n      </ion-col>\n<ion-col col-2>\n           \n          </ion-col>\n		  <ion-col col-2>\n          \n          </ion-col>\n		  <ion-col col-2>\n \n</ion-col>\n<ion-col col-2>\n \n</ion-col>\n<ion-col col-2>\n\n</ion-col>\n\n</ion-row>\n    </ion-grid>\n    <ion-grid class="manufacturer" *ngIf="create">\n	<ion-col col-md-12 col-md-12 class="nopadding" float-end text-right>\n           \n          </ion-col>\n      <ion-col col-md col-12 col-md-12><h3>Create Product</h3></ion-col>\n      <ion-row justify-content-start class="product_row ">\n\n        <ion-col col-md col-12 col-md-12>\n          <ion-grid class="">\n		   <ion-row justify-content-start>\n		  <ion-col col-md col-12 col-md-6>\n		   <ion-row justify-content-start> \n              <ion-col col-6 col-md-3>\n                PO Id:\n              </ion-col>\n              <ion-col col-6 col-md-8>\n                <ion-input placeholder="" [(ngModel)]="poid" disabled required></ion-input>\n              </ion-col>\n            </ion-row>\n			\n            <ion-row justify-content-start> \n              <ion-col col-6 col-md-3>\n                Product Name:\n              </ion-col>\n              <ion-col col-6 col-md-8>\n                <ion-input placeholder="" [(ngModel)]="pname" disabled="{{isDisabled}}" required></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row justify-content-start>\n             <ion-col col-6 col-md-3>\n                Product ID:\n              </ion-col>\n              <ion-col col-6 col-md-8>\n                <ion-input placeholder="" [(ngModel)]="pid"  disabled="{{isDisabled}}" required></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row justify-content-start>\n             <ion-col col-6 col-md-3>\n                Product Material:\n              </ion-col>\n               <ion-col col-6 col-md-8>\n                <ion-input placeholder="" [(ngModel)]="pmaterial"  disabled="{{isDisabled}}" required></ion-input>\n              </ion-col>\n            </ion-row>\n			</ion-col>\n			\n			<ion-col col-md col-12 col-md-6>\n			\n            <ion-row justify-content-start>\n              <ion-col col-6 col-md-3>\n                Brand:\n              </ion-col>\n               <ion-col col-6 col-md-8>\n                <ion-input placeholder="" [(ngModel)]="pbrand"  disabled="{{isDisabled}}" required></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row justify-content-start>\n              <ion-col col-6 col-md-3>\n                Color:\n              </ion-col>\n               <ion-col col-6 col-md-8>\n                <ion-input placeholder="" [(ngModel)]="color"  disabled="{{isDisabled}}" required></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row justify-content-start>\n              <ion-col col-6 col-md-3>\n               Manufactured Location:\n              </ion-col>\n               <ion-col col-6 col-md-8>\n                <ion-input placeholder="" [(ngModel)]="plocation"  disabled="{{isDisabled}}" required></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row justify-content-start>\n              <ion-col col-6 col-md-3>\n                Manufactured Date:\n              </ion-col>\n               <ion-col col-6 col-md-8>\n			  <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="mdate" disabled="{{isDisabled}}" required></ion-datetime>\n               \n              </ion-col>\n			 \n            </ion-row>\n </ion-col>\n  <ion-col col-md-12 float-end>\n		<button  *ngIf="!isDisabled" ion-button color="dark" (click)="initProduct()" float-end>Create Product</button></ion-col>\n </ion-row>\n          </ion-grid>\n        </ion-col>\n       \n      </ion-row>\n\n    </ion-grid>\n    <ion-grid class="inventory_table" >\n      <div class="inventory_table_inner">\n        <ion-row justify-content-start class="headers">\n <ion-col col-1>\n            Product Id \n          </ion-col>\n          <ion-col col-3>\n            Product Name\n          </ion-col>\n          <ion-col col-1>\n            Brand\n          </ion-col>\n          \n          <ion-col col-1>\n            Product Material\n          </ion-col>\n         \n          <ion-col col-1 col-lg-1>\n           Color\n          </ion-col>\n\n          <ion-col col-1>\n            Mftd Location\n          </ion-col>\n		  <ion-col col-2>\n            Mftd Date\n          </ion-col>\n          <ion-col col-2 col-lg-2>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row justify-content-start class="rows" *ngFor="let item of productFromBlkChain">\n		<!-- <ion-row justify-content-start class="rows" *ngFor=""> -->\n<ion-col col-1>\n            {{item.Record.productid}}\n          </ion-col>\n          <ion-col col-3>\n            {{item.Record.name}}\n          </ion-col>\n           <ion-col col-1>\n            {{item.Record.brand}}\n          </ion-col>\n          \n          <ion-col col-1>\n            {{item.Record.pmaterial}}\n          </ion-col>\n         \n          <ion-col col-1 col-lg-1>\n              {{item.Record.colour}}\n          </ion-col> \n\n          <ion-col col-1>\n           {{item.Record.location}}\n          </ion-col>\n		  <ion-col col-2>\n            {{item.Record.mfd}}\n          </ion-col>\n          <ion-col col-2 col-lg-2>\n          <button ion-button color="dark" (click)="transferProduct(item.Record)" float-end>Transfer Product</button>\n          </ion-col>\n        </ion-row>\n <ion-row justify-content-start>\n						    \n                              <ion-col  col-md col-12 col-md-12 *ngIf="arrlength==\'\'">\n                                <br><p style="text-align:center">No Items Found</p>\n                              </ion-col>\n							  </ion-row>\n\n      </div>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/manufacturer/manufacturer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ManufacturerPage);
    return ManufacturerPage;
}());

//# sourceMappingURL=manufacturer.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customs_customs__ = __webpack_require__(58);
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
 * Generated class for the CustomsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomsDetailsPage = /** @class */ (function () {
    function CustomsDetailsPage(navCtrl, navParams, viewCtrl, toastCtrl, prodblkchainPvr, alertCtrl, loadingCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        console.log('Transferring----------------------', this.navParams.get('name'));
        this.casenum = this.navParams.get('case');
        this.pname = this.navParams.get('name');
        this.pid = this.navParams.get('productid');
        this.pmaterial = this.navParams.get('pmaterial');
        this.pbrand = this.navParams.get('brand');
        this.mdate = this.navParams.get('mfd');
        this.location = this.navParams.get('location');
        this.nata = this.navParams.get('nameoftransportagency');
        this.mot = this.navParams.get('modeoftransport');
        this.poheaderid = this.navParams.get('poheaderid');
        this.quantity = this.navParams.get('quantity');
        this.typeofshipment = this.navParams.get('typeofshipment');
    }
    CustomsDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomsDetailsPage');
        this.username = this.auth.currentUser.name;
        //	 this.approved = true;
    };
    CustomsDetailsPage.prototype.savedetails = function () {
        var _this = this;
        this.showSaveToast('Saving Data', 3000);
        console.log('status', this.autoManufacturers);
        this.prodblkchainPvr.initCustomsForStatusUpdate(this.pid, this.autoManufacturers)
            .subscribe(function (data) {
            console.log(data);
            if (_this.autoManufacturers == 'Approved') {
                _this.status = true;
                _this.approved = true;
            }
            else {
                _this.viewCtrl.dismiss();
            }
        });
    };
    CustomsDetailsPage.prototype.cancel = function () {
        var data = { 'status': this.autoManufacturers };
        this.viewCtrl.dismiss(data);
    };
    CustomsDetailsPage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    CustomsDetailsPage.prototype.transfer = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Transfer Product Initialised"
        });
        loader.present();
        this.transferProductarr = {
            'productid': this.pid,
            'newowner': 'distributor',
            'curowner': 'customs',
            'mot': this.mot,
            'nata': this.nata,
            'location': this.location,
            'shipmentype': this.typeofshipment,
            'shipmentquantity': this.quantity
        };
        this.prodblkchainPvr.transferProduct(this.transferProductarr)
            .subscribe(function (res) {
            if (res == 'failure') {
                //alert("Unable to transfer")
                _this.showSaveToast("Unable to transfer", 3000);
                loader.dismiss();
            }
            else {
                //alert('transferred suceesfully')
                _this.showSaveToast("Transfer Complete", 3000);
                _this.viewCtrl.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__customs_customs__["a" /* CustomsPage */]);
                loader.dismiss();
            }
        });
    };
    CustomsDetailsPage.prototype.showSaveToast = function (msg, dur) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: dur,
            position: 'bottom',
            showCloseButton: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CustomsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customs-details',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/customs-details/customs-details.html"*/'<!--\n  Generated template for the RetailerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n<div class="cc">\n <ion-grid class="header nopadding" >\n         <ion-row justify-content-start>\n          <ion-col  col-md col-12 col-md-12 class="nopadding">\n		   <ion-col  col-md-12 col-md-6 class="nopadding">\n              <span class="customslogo web_logo">Nationalwide</span><span class="subtitle">&nbsp;Customs Clearance</span>\n            </ion-col>\n			 <ion-col  col-md-12 col-md-6 class="nopadding">\n                                       <div class="dropdown" float-end>\n                           <button class="  dropdown-toggle userdrop" type="button" data-toggle="dropdown">Hi {{username}}\n                           <span class="caret"></span></button>\n                           <ul class="dropdown-menu">\n                              <li><a href="#" (click)=\'logout()\'>Logout</a></li>\n                           </ul>\n                        </div>\n            </ion-col>\n		  </ion-col>\n		 \n         </ion-row>\n      </ion-grid>\n	   \n<ion-grid class="" >\n         <ion-row justify-content-start class="product_row">\n            <ion-col  col-md-12>\n               <ion-grid class="nopaddingmobile" >\n                  <ion-row justify-content-start>\n                     <ion-col  col-lg col-12 col-lg-7 class="lhs_col">\n                        <ion-grid class="nopaddingmobile" >\n                           <ion-row justify-content-start>\n                             \n                              <ion-col  col-md col-12 col-md-12>\n                                 <ion-grid class="nopaddingmobile" >\n                                    <ion-row justify-content-start>\n									 \n                                       <ion-col col-12 col-lg-4>\n                                          Case Number:\n                                       </ion-col>\n                                       <ion-col col-12 col-lg-8>\n                                         <ion-input placeholder="" [(ngModel)]="casenum"></ion-input>\n                                       </ion-col>\n                                    </ion-row>\n                                    <ion-row justify-content-start>\n                                       <ion-col col-12 col-lg-4>\n                                          Importer Number:\n                                       </ion-col>\n                                       <ion-col col-12 col-lg-8>\n                                           <ion-input placeholder="" value="234534654"></ion-input>\n                                       </ion-col>\n                                    </ion-row>\n                                    <ion-row justify-content-start>\n                                       <ion-col col-12 col-lg-4>\n                                          Parent Document Number:\n                                       </ion-col>\n                                       <ion-col col-12 col-lg-8>\n                                          <ion-input placeholder="" value="123215"></ion-input>\n                                       </ion-col>\n                                    </ion-row>\n                                    <ion-row justify-content-start>\n                                       <ion-col col-12 col-lg-4>\n                                         Port of Entry:\n                                       </ion-col>\n                                       <ion-col col-12 col-lg-8>\n                                           <ion-input placeholder="" value="Port Huron"></ion-input>\n                                       </ion-col>\n                                    </ion-row>\n                                   <ion-row justify-content-start>\n                                       <ion-col col-12 col-lg-4>\n                                         Customer Release forms:\n                                       </ion-col>\n                                       <ion-col col-12 col-lg-8>\n                                          <div class="downloadlink"> <a href="#">Download</a></div>\n                                       </ion-col>\n                                    </ion-row>\n                                 </ion-grid>\n                              </ion-col>\n                             \n                           </ion-row>\n                        </ion-grid>\n                     </ion-col>\n                     <ion-col class="schedule" col-sm col-12 col-lg-5>\n                        <ion-grid class="rhs_col" >\n                           <ion-row justify-content-start>\n                               \n                        <ion-grid class="nopaddingmobile" >\n                           <ion-row justify-content-start>\n                             \n                              <ion-col  col-md col-12 col-md-12>\n                                 <ion-grid class="nopaddingmobile" >\n                                    <ion-row justify-content-start>\n									 <ion-col  col-12 col-md-12><b>Product Info</b></ion-col>\n                                       <ion-col col-12 col-lg-4>\n                                          Product Name\n                                       </ion-col>\n                                       <ion-col  col-12 col-lg-8 class="blockC">\n                                {{pname}}\n                                       </ion-col>\n                                    </ion-row>\n                                    <ion-row justify-content-start>\n                                       <ion-col col-12 col-lg-4>\n                                          Product ID\n                                       </ion-col>\n                                       <ion-col col-12 col-lg-8 class="blockC">\n                              {{pid}}\n                                       </ion-col>\n                                    </ion-row>\n									 <ion-row justify-content-start >\n                              <ion-col col-12 col-lg-4>\n                                PO Header ID\n                              </ion-col>\n                              <ion-col col-12 col-lg-8 class="blockC">\n                                {{poheaderid}}\n                              </ion-col>\n                            </ion-row>\n                                    <ion-row justify-content-start >\n                                       <ion-col col-12 col-lg-4>\n                                          Mftd Date\n                                       </ion-col>\n                                       <ion-col col-12 col-lg-8 class="blockC">\n                              {{mdate}}\n                                       </ion-col>\n                                    </ion-row>\n                                    <ion-row justify-content-start>\n                                       <ion-col col-12 col-lg-4>\n                                Brand\n                                       </ion-col>\n                                       <ion-col col-12 col-lg-8 class="blockC">\n                               {{pbrand}}\n                                       </ion-col>\n                                    </ion-row>\n                                    <ion-row justify-content-start >\n                                       <ion-col col-12 col-lg-4>\n                                          Location\n                                       </ion-col>\n                                       <ion-col col-12 col-lg-8 class="blockC">\n                                          {{location}}\n                                       </ion-col>\n                                    </ion-row>\n                            <ion-row justify-content-start >\n                              <ion-col col-12 col-lg-4>\n                                Mode of Transfer:\n                              </ion-col>\n                              <ion-col col-12 col-lg-8 class="blockC">\n                                {{mot}}\n                              </ion-col>\n                            </ion-row>\n                            <ion-row justify-content-start >\n                              <ion-col col-12 col-lg-4>\n                                Name of Transport Agency:\n                              </ion-col>\n                              <ion-col col-12 col-lg-8 class="blockC">\n                                {{nata}}\n                              </ion-col>\n                            </ion-row>\n							\n                                 </ion-grid>\n                              </ion-col>\n                             \n                           </ion-row>\n                        </ion-grid>\n                             \n\n                           </ion-row>\n                        </ion-grid>\n                     </ion-col>\n                  </ion-row>\n               </ion-grid>\n            </ion-col>\n         </ion-row>\n		\n		 <ion-row justify-content-start class="product_row">\n            <ion-col  col-md-12>\n               <ion-grid class="" >\n                  <ion-row justify-content-start>\n                     <ion-col  col-lg col-12 col-lg-7 class="lhs_col">\n                        <ion-grid  class="res_table" >\n                           <ion-row justify-content-start>\n                             \n                              <ion-col  col-md col-12 col-md-12>\n                                 <ion-grid class="" >\n								   <ion-row justify-content-start class="customsheadings">\n                                  <ion-col  col-md col-2 col-md-2>\n								  ID\n								   </ion-col>\n								   <ion-col  col-md col-4 col-md-4>\n								  Description\n								   </ion-col>\n								   <ion-col  col-md col-2 col-md-2>\n								  Qty\n								   </ion-col>\n								    <ion-col  col-md col-2 col-md-2>\n								  Unit Price\n								   </ion-col>\n								   <ion-col  col-md col-2 col-md-2>\n								 Total\n								   </ion-col>\n								   </ion-row>\n								   <ion-row justify-content-start>\n                                  <ion-col  col-md col-2 col-md-2>\n								  1123\n								   </ion-col>\n								   <ion-col  col-md col-4 col-md-4>\n								  GV3 Shoulder Bag GIVENCHY\n								   </ion-col>\n								   <ion-col  col-md col-2 col-md-2>\n								    <span *ngIf="quantity==\'\'">300</span>\n									 <span *ngIf="quantity!=\'\'">{{quantity}}</span>\n								   </ion-col>\n								    <ion-col  col-md col-2 col-md-2>\n								  $2000\n								   </ion-col>\n								   <ion-col  col-md col-2 col-md-2 >\n								 $60,000.00\n								   </ion-col>\n								   </ion-row>\n                                 </ion-grid>\n                              </ion-col>\n                             \n                           </ion-row>\n						   <ion-row justify-content-start>\n                             \n                              <ion-col  col-md col-12 col-md-12>\n                                 <ion-grid class="" >\n								   <ion-row justify-content-start class="customsheadings">\n                                  <ion-col  col-md col-4 col-md-4 text-center>\n								  Type of Duty\n								   </ion-col>\n								   <ion-col  col-md col-4 col-md-4 text-center>\n								  Rate of Duty\n								   </ion-col>\n								   <ion-col  col-md col-4 col-md-3 text-right>\n								  Duty Amount\n								   </ion-col>\n								   \n								   </ion-row>\n								   <ion-row justify-content-start>\n                                  <ion-col  col-md col-4 col-md-4 text-center>\n								 Countervailing Duty (CVD)\n								   </ion-col>\n								   <ion-col  col-md col-4 col-md-4 text-center>\n								  10%\n								   </ion-col>\n								   <ion-col  col-md col-3 col-md-3 text-right>\n								  $ 66,000.00\n								   </ion-col>\n								   \n								   </ion-row>\n								   <ion-row justify-content-start>\n                                  <ion-col  col-md col-4 col-md-4 text-center>\n								 Countervailing Duty (CVD)\n								   </ion-col>\n								   <ion-col  col-md col-4 col-md-4 text-center>\n								  10%\n								   </ion-col>\n								   <ion-col  col-md col-3 col-md-3 text-right>\n								  $ 66,000.00\n								   </ion-col>\n								   \n								   </ion-row>\n								   <ion-row justify-content-start>\n                                  <ion-col  col-md col-4 col-md-4 text-center>\n								 Countervailing Duty (CVD)\n								   </ion-col>\n								   <ion-col  col-md col-4 col-md-4 text-center>\n								  10%\n								   </ion-col>\n								   <ion-col  col-md col-3 col-md-3 text-right>\n								  $ 66,000.00\n								   </ion-col>\n								   \n								   </ion-row>\n								   <ion-row justify-content-start>\n                                  <ion-col  col-md col-4 col-md-4 text-center>\n								 Countervailing Duty (CVD)\n								   </ion-col>\n								   <ion-col  col-md col-4 col-md-4 text-center>\n								  10%\n								   </ion-col>\n								   <ion-col  col-md col-3 col-md-3 text-right>\n								  $ 66,000.00\n								   </ion-col>\n								   \n								   </ion-row>\n                                 </ion-grid>\n                              </ion-col>\n                             \n                           </ion-row>\n						   <ion-row justify-content-end>\n                             \n                              <ion-col  col-md col-12 col-md-12>\n                                 <ion-grid class="" >\n								   <ion-row justify-content-end>\n                                  <ion-col  col-md col-2 col-md-2 text-center>\n								 Grand Total\n								   </ion-col>\n								   <ion-col  col-md col-2 col-md-2 text-left>\n								  $ 75,600.00\n								   </ion-col>\n								   \n								   </ion-row>\n								\n                                 </ion-grid>\n                              </ion-col>\n                             \n                           </ion-row>\n                        </ion-grid>\n                     </ion-col>\n                     <ion-col class="schedule" col-sm col-12 col-lg-5>\n                        <ion-grid class="rhs_col" >\n                           <ion-row justify-content-start>\n                               \n                        <ion-grid class="" >\n                           <ion-row justify-content-start>\n                             \n                              <ion-col  col-md col-12 col-md-12>\n                                 <ion-grid class="" >\n                                    <ion-row justify-content-start>\n									 <ion-col  col-md-12><b>Inspection Result</b></ion-col>\n									 <ion-col  col-md-12>\n                                      <ion-list radio-group [(ngModel)]="autoManufacturers">\n\n\n\n  <ion-item> \n  <ion-radio value="Approved"></ion-radio>\n    <ion-label>Approved</ion-label>\n   \n  </ion-item>\n  <ion-item> \n  <ion-radio value="Denied"></ion-radio>\n    <ion-label>Denied</ion-label>\n   \n  </ion-item>\n    <ion-item> \n  <ion-radio value="Hold"></ion-radio>\n    <ion-label>On Hold for more information</ion-label>\n   \n  </ion-item>\n</ion-list></ion-col>\n                                    </ion-row>\n                                   \n                                 </ion-grid>\n                              </ion-col>\n                             \n                           </ion-row>\n                        </ion-grid>\n                             \n\n                           </ion-row>\n                        </ion-grid>\n                     </ion-col>\n                  </ion-row>\n               </ion-grid>\n            </ion-col>\n         </ion-row>\n		  <ion-row justify-content-end>\n           \n			<ion-col col-md col-4 col-md-2 col-xl-1 justify-content-end>\n              \n			    <button ion-button color="dark" (click)="cancel()" float-end>Cancel</button>\n			     \n            </ion-col>\n			 <ion-col  col-md col-4 col-md-2 col-xl-1 text-center>\n              \n			    <button ion-button color="dark" (click)="savedetails()" >Submit</button>\n			     \n            </ion-col>\n			 <ion-col  col-md col-4 col-md-2 col-xl-1 *ngIf="approved">\n              \n			    <button ion-button color="dark" (click)="transfer()" float-start *ngIf="approved">Transfer</button>\n			     \n            </ion-col>\n         </ion-row>\n		\n      </ion-grid>\n\n								    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/customs-details/customs-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], CustomsDetailsPage);
    return CustomsDetailsPage;
}());

//# sourceMappingURL=customs-details.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributorTransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__distributor_distributor__ = __webpack_require__(36);
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
 * Generated class for the DistributorTransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DistributorTransferPage = /** @class */ (function () {
    function DistributorTransferPage(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, prodblkchainPvr, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
        this.alertCtrl = alertCtrl;
        this.pname = this.navParams.get('name');
        this.pmaterial = this.navParams.get('pmaterial');
        this.pbrand = this.navParams.get('brand');
        this.mdate = this.navParams.get('mfd');
        this.poheaderid = this.navParams.get('poheaderid');
        this.pid = this.navParams.get('productid');
        this.quantity = this.navParams.get('quantity');
        this.typeofshipment = this.navParams.get('typeofshipment');
        this.motOptions = {
            title: 'Select Mode of Transport',
            subTitle: '',
            mode: 'md'
        };
        this.nataOptions = {
            title: 'Select Name of Transport Agency',
            subTitle: '',
            mode: 'md'
        };
        this.locationOptions = {
            title: 'Select Location',
            subTitle: '',
            mode: 'md'
        };
    }
    DistributorTransferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DistributorTransferPage');
        this.curdate = new Date().toISOString();
        //this.curdate = "08/07/1987";
        console.log(this.curdate);
        // console.log("id"+this.navParams.get('productid'));
        // this.pname = this.navParams.get('Name');
        // this.mdate = this.navParams.get('dom');
        // this.pid = this.navParams.get('ProductId');
        // this.pmaterial = this.navParams.get('pmaterial');
    };
    DistributorTransferPage.prototype.savedetails = function () {
        var _this = this;
        if (this.transportation == undefined || this.logistics == undefined || this.location == undefined) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Please fill all the fields',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: "Transfer Product Initialised"
            });
            loader_1.present();
            this.viewCtrl.dismiss();
            this.transferProductarr = {
                'productid': this.pid,
                'newowner': 'distribution center',
                'curowner': 'distributor',
                'mot': this.transportation,
                'nata': this.logistics,
                'location': this.location,
                'poheaderid': this.poheaderid,
                'shipmentype': this.typeofshipment,
                'shipmentquantity': this.quantity
            };
            this.prodblkchainPvr.transferProduct(this.transferProductarr)
                .subscribe(function (res) {
                if (res == 'failure') {
                    //alert("Unable to transfer")
                    _this.showSaveToast("Unable to transfer", 3000);
                    loader_1.dismiss();
                    _this.viewCtrl.dismiss();
                }
                else {
                    _this.showSaveToast("Transfer Complete", 3000);
                    _this.viewCtrl.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__distributor_distributor__["a" /* DistributorPage */]);
                    loader_1.dismiss();
                }
            });
        }
    };
    DistributorTransferPage.prototype.showSaveToast = function (msg, dur) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: dur,
            position: 'bottom',
            showCloseButton: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    DistributorTransferPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    DistributorTransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-distributor-transfer',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/distributor-transfer/distributor-transfer.html"*/'<!--\n\n  Generated template for the DistributorTransferPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-buttons end>\n\n        <a href="#" (click)="closeModal()"><ion-icon name="close-circle" class="close" ></ion-icon></a>\n\n      </ion-buttons>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n <ion-grid class="manufacturer" ><h1>Schedule Transportation and Logistics</h1>\n\n                                    <ion-row justify-content-start>\n\n                                       <ion-col col-md col-12 col-md-4 >\n\n                                          Product Name\n\n                                       </ion-col>\n\n                                       <ion-col col-md col-12 col-md-8 class="blockC">\n\n                                         {{pname}}\n\n                                       </ion-col>\n\n                                    </ion-row>\n\n                                    <ion-row justify-content-start>\n\n                                       <ion-col col-md col-12 col-md-4>\n\n                                          Product ID\n\n                                       </ion-col>\n\n                                       <ion-col col-md col-12 col-md-8 class="blockC">\n\n                                          {{pid}}\n\n                                       </ion-col>\n\n                                    </ion-row>\n\n                                    <ion-row justify-content-start>\n\n                                       <ion-col col-md col-12 col-md-4>\n\n                                          Manufactured Date\n\n                                       </ion-col>\n\n                                       <ion-col col-md col-12 col-md-8 class="blockC">\n\n                                         {{mdate}}\n\n                                       </ion-col>\n\n                                    </ion-row>\n\n                                    <ion-row justify-content-start>\n\n                                       <ion-col col-md col-12 col-md-4 >\n\n                                          Owner\n\n                                       </ion-col>\n\n                                       <ion-col col-md col-12 col-md-8 class="blockC">\n\n                                        {{pbrand}}\n\n                                       </ion-col>\n\n                                    </ion-row>\n\n									\n\n									<ion-row justify-content-start *ngIf="quantity!=\'\'">\n\n                                       <ion-col col-md col-12 col-md-4 >\n\n                                          Quantity\n\n                                       </ion-col>\n\n                                       <ion-col col-md col-12 col-md-8 class="blockC">\n\n                                       {{quantity}}\n\n                                       </ion-col>\n\n                                    </ion-row>\n\n									\n\n                                    <ion-row justify-content-start>\n\n                                       <ion-col col-md col-12 col-md-4 >\n\n                                          Location\n\n                                       </ion-col>\n\n                                       <ion-col col-md col-12 col-md-8>\n\n          \n\n<ion-item>\n\n										     <ion-select [(ngModel)]="location" [selectOptions]="locationOptions" >\n\n    <ion-option value="Prologis Distribution Center">Prologis Distribution Center</ion-option>\n\n    <ion-option value="K.B. Distribution Center">K.B. Distribution Center</ion-option>\n\n	 <ion-option value="Averitt Distribution Center">Averitt Distribution Center</ion-option>\n\n  </ion-select></ion-item>   \n\n\n\n                                       </ion-col>\n\n                                    </ion-row>\n\n                                    <ion-row justify-content-start class="location">\n\n                                       <ion-col col-md col-12 col-md-4>\n\n                                          Mode of Transport\n\n                                       </ion-col>\n\n                                       <ion-col col-md col-12 col-md-8> <ion-item>\n\n        \n\n		  <ion-item>\n\n										     <ion-select [(ngModel)]="transportation" [selectOptions]="motOptions" >\n\n    <ion-option value="LAND SHIPMENT">LAND SHIPMENT</ion-option>\n\n    <ion-option value="RAILWAY SHIPMENT">RAILWAY SHIPMENT</ion-option>\n\n	 <ion-option value="SEA SHIPMENT">SEA SHIPMENT</ion-option>\n\n	 <ion-option value=">AIR-FREIGHT">AIR-FREIGHT</ion-option>\n\n  </ion-select></ion-item> \n\n</ion-item>\n\n                                       </ion-col>\n\n                                    </ion-row>\n\n									 <ion-row justify-content-start class="location">\n\n                                       <ion-col col-md col-12 col-md-4>\n\n                                          Name of Transportation Agency\n\n                                       </ion-col>\n\n                                       <ion-col col-md col-12 col-md-8>          \n\n										   <ion-item>\n\n										     <ion-select [(ngModel)]="logistics" [selectOptions]="nataOptions" >\n\n    <ion-option value="APL Logistics">APL Logistics</ion-option>\n\n    <ion-option value="Werner Global Logistics">Werner Global Logistics</ion-option>\n\n	 <ion-option value="DB Schenker USA">DB Schenker USA</ion-option>\n\n	 \n\n  </ion-select></ion-item>   \n\n                                       </ion-col>\n\n                                    </ion-row>\n\n									  <ion-row justify-content-end>\n\n           \n\n			<ion-col  col-md-2 justify-content-end>\n\n              \n\n			    <button ion-button color="dark" (click)="closeModal()" float-end>Cancel</button>\n\n			     \n\n            </ion-col>\n\n			\n\n			 <ion-col  col-md-2 >\n\n              \n\n			    <button ion-button color="dark" (click)="savedetails()" float-start >Transfer</button>\n\n			     \n\n            </ion-col>\n\n         </ion-row>\n\n                                 </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/distributor-transfer/distributor-transfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DistributorTransferPage);
    return DistributorTransferPage;
}());

//# sourceMappingURL=distributor-transfer.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__distributor_transfer_distributor_transfer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_customer_create_customer__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { CreateCustomerPage  } from '../create-customer/create-customer';


/**
 * Generated class for the RetailerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RetailerPage = /** @class */ (function () {
    function RetailerPage(navCtrl, navParams, auth, modalCtrl, prodblkchainPvr, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
        this.loadingCtrl = loadingCtrl;
    }
    RetailerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DistributorPage');
        this.username = this.auth.currentUser.name;
    };
    RetailerPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please Wait...Loading Data.."
        });
        loader.present();
        console.log("retrieving retailer data");
        loader.present().then(function () {
            _this.prodblkchainPvr.getProductDetailByOwner('nordstrom')
                .subscribe(function (data) {
                console.log(data);
                _this.productarray = data;
                _this.arrlength = Object.keys(_this.productarray);
                _this.arrcount = _this.arrlength.length;
                console.log(_this.arrlength.length);
                loader.dismiss();
                // ;
            });
        });
    };
    RetailerPage.prototype.openModal = function () {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__distributor_transfer_distributor_transfer__["a" /* DistributorTransferPage */]);
        modalPage.present();
    };
    RetailerPage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RetailerPage.prototype.linkCustomer = function (product) {
        // this.transferProductarr = {
        //   'productid': this.pid,
        //   'newowner': 'Custom',
        //   'curowner': 'Manufacturer',
        //   'mot': this.mdate,
        //   'nata': this.pmaterial,
        //   'location': this.plocation
        // }
        console.log(product);
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__create_customer_create_customer__["a" /* CreateCustomerPage */], product);
        /* modalPage.onDidDismiss(data => {
     console.log("from modal"+data.linkcustomer);
     if(data.linkcustomer){
     this.linkcustomer = data.linkcustomer;
     }
     else{
         this.linkcustomer = false;
     }
   }); */
        modalPage.present();
    };
    RetailerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-retailer',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/retailer/retailer.html"*/'<!--\n  Generated template for the RetailerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n<div class="cc">\n <ion-grid class="header nopadding" >\n         <ion-row justify-content-start>\n          <ion-col  col-md col-12 col-md-12 class="nopadding">\n		   <ion-col  col-md-12 col-md-6 class="nopadding">\n               <img src="assets/imgs/nordstorm_logo_text.jpg" class="web_logo"><span class="subtitle">Retailer</span>\n            </ion-col>\n			 <ion-col  col-md-12 col-md-6 class="nopadding">\n                                       <div class="dropdown" float-end>\n                           <button class="  dropdown-toggle userdrop" type="button" data-toggle="dropdown">Hi {{username}}\n                           <span class="caret"></span></button>\n                           <ul class="dropdown-menu">\n                              <li><a href="#" (click)=\'logout()\'>Logout</a></li>\n                           </ul>\n                        </div>\n            </ion-col>\n		  </ion-col>\n		  <ion-col  col-md col-12 col-md-12 class="nopadding">\n		 \n			 <ion-col   col-md-6 float-end class="nopadding">\n                                      <ion-grid class="nopadding" >\n                  <ion-row justify-content-end>\n				   <ion-col  col-md col-12 col-md-8>\n                        \n						<ion-searchbar\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)" class="searchinput">\n</ion-searchbar>\n                     </ion-col>\n                     <ion-col  col-md-2><button ion-button full outline class="filter headerbutton">Filters</button></ion-col>\n                     <ion-col  col-md-2 ><button ion-button full outline class="edit headerbutton">Edit</button></ion-col>\n				  </ion-row>\n      </ion-grid>\n            </ion-col>\n		  </ion-col>\n         </ion-row>\n      </ion-grid>\n	   <ion-grid class="pagination nopadding" >\n         <ion-row justify-content-end>\n		  <ion-col  col-md-12 class="" float-end>{{arrcount}} items</ion-col>\n		 </ion-row>\n		  </ion-grid>\n <ion-grid class="inventory_table" >\n <div class="inventory_table_inner">\n                                    <ion-row justify-content-start class="headers">\n                                       <ion-col col-1>\n                                         Image\n                                       </ion-col>\n                                       <ion-col col-2>\n                                          Product Name\n                                       </ion-col>\n									   <ion-col col-1>\n                                         Product Id\n                                       </ion-col>\n                                       <ion-col col-1>\n                                          Mftd Date\n                                       </ion-col>\n									   <ion-col col-2>\n                                         Product Material\n                                       </ion-col>\n                                       <ion-col col-1>\n                                          Brand\n                                       </ion-col>\n									   <ion-col col-1>\n                                         Bar Code\n                                       </ion-col>\n									   <ion-col col-1>\n                                         Price\n                                       </ion-col>\n                                      \n									    <ion-col col-1>\n                                         Color\n                                       </ion-col>\n									    <ion-col col-1>\n                                          CR #\n                                       </ion-col>\n                                    </ion-row>\n\n        <ion-row justify-content-start class="rows" *ngFor="let item of productarray">\n          <ion-col col-1>\n            <div class="pro_img"><img src="assets/imgs/ProductImages/_103402067.jpg" class="img-responsive prod"></div>\n          </ion-col>\n          <ion-col col-2>\n            {{item.Record.name}}\n          </ion-col>\n          <ion-col col-1>\n            {{item.Record.productid}}\n          </ion-col>\n          <ion-col col-1>\n            {{item.Record.mfd}}\n          </ion-col>\n          <ion-col col-2>\n            {{item.Record.pmaterial}}\n          </ion-col>\n          <ion-col col-1>\n            {{item.Record.brand}}\n          </ion-col>\n          <ion-col col-1>\n            {{item.Record.productid}}\n          </ion-col>\n		   <ion-col col-1>\n$1456\n          </ion-col>\n          \n									    <ion-col col-1>\n                        {{item.Record.colour}}\n                      </ion-col>\n          <ion-col col-1 *ngIf="item.Record.crnumber==\'none\'">\n            <button ion-button color="dark" (click)="linkCustomer(item.Record)" float-end > Link Customer</button>\n		\n          </ion-col>\n		  <ion-col col-1 *ngIf="item.Record.crnumber!=\'none\'">\n            {{item.Record.crnumber}}\n		\n          </ion-col>\n\n        </ion-row>\n <ion-row justify-content-start>\n						    \n                              <ion-col  col-md col-12 col-md-12 *ngIf="arrlength==\'\'">\n                                <p style="text-align:center">No Items Found</p>\n                              </ion-col>\n							  </ion-row>\n\n      </div>\n    </ion-grid>\n\n								    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/retailer/retailer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RetailerPage);
    return RetailerPage;
}());

//# sourceMappingURL=retailer.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customs_details_customs_details__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
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
 * Generated class for the CustomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomsPage = /** @class */ (function () {
    function CustomsPage(navCtrl, navParams, auth, modalCtrl, loadingCtrl, prodblkchainPvr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
    }
    CustomsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomsPage');
        this.username = this.auth.currentUser.name;
        this.casenumber = "CASE_" + Math.floor(Math.random() * 21) + "_" + Math.floor(Math.random() * 21);
    };
    CustomsPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please Wait...Loading Data.."
        });
        loader.present();
        loader.present().then(function () {
            _this.prodblkchainPvr.getProductDetailByOwner('customs')
                .subscribe(function (data) {
                console.log(data);
                _this.productarray = data;
                _this.arrlength = Object.keys(_this.productarray);
                _this.arrcount = _this.arrlength.length;
                _this.approved = false;
                for (var i = 0; i < _this.productarray.length; i++) {
                    _this.productarray[i].Record.case = "CASE_" + Math.floor(Math.random() * 21) + "_" + Math.floor(Math.random() * 21);
                }
                loader.dismiss();
            });
        });
    };
    CustomsPage.prototype.openModal = function (productDetail) {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__customs_details_customs_details__["a" /* CustomsDetailsPage */], productDetail, { cssClass: "modal-fullscreen" });
        modalPage.onDidDismiss(function (data) {
        });
        modalPage.present();
    };
    CustomsPage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    CustomsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customs',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/customs/customs.html"*/'<!--\n  Generated template for the RetailerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n<div class="cc">\n <ion-grid class="header nopadding" >\n         <ion-row justify-content-start>\n          <ion-col  col-md col-12 col-md-12 class="nopadding">\n		   <ion-col  col-md-12 col-md-6 class="nopadding">\n               <span class="customslogo web_logo">Nationalwide</span><span class="subtitle">&nbsp;Customs Clearance</span>\n            </ion-col>\n			 <ion-col  col-md-12 col-md-6 class="nopadding">\n                                       <div class="dropdown" float-end>\n                           <button class="  dropdown-toggle userdrop" type="button" data-toggle="dropdown">Hi {{username}}\n                           <span class="caret"></span></button>\n                           <ul class="dropdown-menu">\n                              <li><a href="#" (click)=\'logout()\'>Logout</a></li>\n                           </ul>\n                        </div>\n            </ion-col>\n		  </ion-col>\n		  <ion-col  col-md col-12 col-md-12 class="nopadding">\n		 \n			 <ion-col   col-lg-6 float-end class="nopadding">\n                                      <ion-grid class="nopadding" >\n                  <ion-row justify-content-end>\n				   <ion-col  col-md col-12 col-md-8>\n                        \n						<ion-searchbar\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)" class="searchinput">\n</ion-searchbar>\n                     </ion-col>\n                     <ion-col  col-md-2><button ion-button full outline class="filter headerbutton">Filters</button></ion-col>\n                     <ion-col  col-md-2 ><button ion-button full outline class="edit headerbutton">Edit</button></ion-col>\n				  </ion-row>\n      </ion-grid>\n            </ion-col>\n		  </ion-col>\n         </ion-row>\n      </ion-grid>\n	   <ion-grid class="pagination nopadding" >\n         <ion-row justify-content-end>\n		  <ion-col  col-md-12 class="" float-end>{{arrcount}} items</ion-col>\n		 </ion-row>\n		  </ion-grid>\n <ion-grid class="inventory_table" >\n <div class="inventory_table_inner">\n                                    <ion-row justify-content-start class="headers">\n                                       <ion-col col-1>\n                                         Case Number\n                                       </ion-col>\n                                       <ion-col col-3>\n                                          Product Name\n                                       </ion-col>\n									   <ion-col col-1>\n                                         Product Id\n                                       </ion-col>\n                                      \n									   <ion-col col-1>\n                                         Color\n                                       </ion-col>\n <ion-col col-1>\n           Brand\n          </ion-col>\n		  <ion-col col-1>\n            Material\n          </ion-col><ion-col col-1>\n            Location\n          </ion-col><ion-col col-2>\n            Transport Agency\n          </ion-col>\n                                       <ion-col col-1>\n                                         Status\n                                       </ion-col>\n									   \n                                    </ion-row>\n\n        <ion-row justify-content-start class="custom rows" *ngFor="let item of productarray" (click)="openModal(item.Record)">\n		<ion-col col-1>\n                                        {{item.Record.case}}\n                                       </ion-col>\n          <ion-col col-3 class="blockC">\n            {{item.Record.name}}\n          </ion-col>\n          <ion-col col-1 class="blockC">\n            {{item.Record.productid}}\n          </ion-col>\n		   <ion-col col-1 class="blockC">\n            {{item.Record.colour}}\n          </ion-col>\n          <ion-col col-1 class="blockC">\n            {{item.Record.brand}}\n          </ion-col>\n          <ion-col col-1 class="blockC">\n            {{item.Record.pmaterial}}\n          </ion-col>\n		  <ion-col col-1 class="blockC">\n            {{item.Record.location}} \n          </ion-col>\n		  <ion-col col-2 class="blockC">\n           {{item.Record.nameoftransportagency}} \n          </ion-col>\n          <ion-col col-1>\n           Pending\n          </ion-col>\n\n          <div class="morebutton">\n            <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n          </div>\n        </ion-row>\n		\n		 <ion-row justify-content-start>\n						    \n                              <ion-col  col-md col-12 col-md-12 *ngIf="arrlength==\'\'">\n                                <p style="text-align:center">No Items Found</p>\n                              </ion-col>\n							  </ion-row>\n\n\n      </div>\n    </ion-grid>\n\n								    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/customs/customs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */]])
    ], CustomsPage);
    return CustomsPage;
}());

//# sourceMappingURL=customs.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributorCenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__distribution_center_transfer_distribution_center_transfer__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { CreateCustomerPage  } from '../create-customer/create-customer';


/**
 * Generated class for the DistributorCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DistributorCenterPage = /** @class */ (function () {
    function DistributorCenterPage(navCtrl, navParams, auth, modalCtrl, prodblkchainPvr, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.selectOptions = {
            title: 'Select Nordstrom Retail Store',
            subTitle: '',
            mode: 'md'
        };
    }
    DistributorCenterPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        console.log("retrieving didtributor data");
        this.username = this.auth.currentUser.name;
        var loader = this.loadingCtrl.create({
            content: "Please Wait...Loading Data.."
        });
        loader.present();
        loader.present().then(function () {
            _this.prodblkchainPvr.getProductDetailByOwner('distribution center')
                .subscribe(function (data) {
                console.log(data);
                _this.productarray = data;
                _this.arrlength = Object.keys(_this.productarray);
                _this.arrcount = _this.arrlength.length;
                _this.owner = "Nordstrom";
                _this.contact = "1.877.543.7463";
                _this.brand = "Givenchy";
                _this.supplier = "Lee Supplies";
                /* this.name = this.purchaseorders.name;
                this.supplier = this.purchaseorders.supplier;
                this.ordernumber = this.purchaseorders.ordernumber;
                this.productid = this.purchaseorders.productid;
                this.ordered = this.purchaseorders.ordered;
                this.response = this.purchaseorders.response; */
                console.log("this" + _this.arrcount);
                for (var i = 0; i < _this.arrcount; i++) {
                    console.log("purchaseorders" + _this.responsedata);
                }
                loader.dismiss();
            });
        });
    };
    DistributorCenterPage.prototype.openModal = function (poorder) {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__distribution_center_transfer_distribution_center_transfer__["a" /* DistributionCenterTransferPage */], poorder);
        modalPage.present();
    };
    DistributorCenterPage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    DistributorCenterPage.prototype.readDistributionCentre = function (pquote) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please Wait...Loading Data.."
        });
        loader.present();
        loader.present().then(function () {
            console.log('pquote .....', pquote);
            _this.prodblkchainPvr.readDistributionCentre(pquote)
                .subscribe(function (response) {
                console.log('readDistributionCentre .....', response.statusCode);
                if (response.statusCode == 500) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: 'PO Header ID Not Found',
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                else {
                    _this.purchaseorders = response;
                    _this.supplier = _this.purchaseorders.supplier;
                    loader.dismiss();
                }
            });
        });
    };
    DistributorCenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-distributor-center',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/distributor-center/distributor-center.html"*/'<!--\n  Generated template for the RetailerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <div class="cc">\n    <ion-grid class="header nopadding">\n      <ion-row justify-content-start>\n        <ion-col col-md col-12 col-md-12 class="nopadding">\n          <ion-col col-md-12 col-md-6 class="nopadding"> <span class="customslogo web_logo">Prologis</span><span class="subtitle">&nbsp;Distribution Center</span> </ion-col>\n          <ion-col col-md-12 col-md-6 class="nopadding">\n            <div class="dropdown" float-end>\n              <button class="  dropdown-toggle userdrop" type="button" data-toggle="dropdown">Hi {{username}} <span class="caret"></span></button>\n              <ul class="dropdown-menu">\n                <li><a href="#" (click)=\'logout()\'>Logout</a></li>\n              </ul>\n            </div>\n          </ion-col>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n	<ion-grid>\n      <ion-row>\n        <ion-col  col-md col-12 col-md-12 class="nopadding header">\n          <ion-col   col-md-12 class="nopadding">\n            <ion-grid class="nopadding" >\n              <ion-row>\n                <ion-col   col-md-8 class="nopadding flexVcenter">  </ion-col>\n                <ion-col   col-md-4 class="nopadding">\n                  <ion-grid class="nopadding" >\n                    <ion-row>\n                      <ion-col   col-md-8 class="">\n                        <ion-searchbar\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)" class="searchinput"> </ion-searchbar>\n                      </ion-col>\n                      <ion-col   col-md-2 class="">\n                        <button ion-button full outline class="filter headerbutton">Filters</button>\n                      </ion-col>\n                      <ion-col   col-md-2 class="">\n                        <button ion-button full outline class="edit headerbutton">Edit</button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n	\n    <ion-grid class="inventory_table">\n	 \n      <div class="inventory_table_inner">\n	  \n        <ion-row justify-content-start class="headers">\n          <ion-col col-2> Product Name </ion-col>\n          <ion-col col-2> Purchase Order# </ion-col>\n          <ion-col col-1> Product ID </ion-col>\n          <ion-col col-2>   Manufactured Date:</ion-col>\n          <ion-col col-2>  Brand Name </ion-col>\n		  <ion-col col-1> Color</ion-col>\n          <ion-col col-2> Name of Transport Agency</ion-col>\n          \n        \n          \n        </ion-row>\n        <ion-row justify-content-start class="visualizerrow " (click)="openModal(item.Record)" *ngFor="let item of productarray"  >\n          <ion-col col-2>  {{item.Record.name}} </ion-col>\n          <ion-col col-2 class="blockC">  {{item.Record.poheaderid}} </ion-col>\n          <ion-col col-1 class="blockC"> {{item.Record.productid}}</ion-col>\n          <ion-col col-2> {{item.Record.mfd}}</ion-col>\n          <ion-col col-2 class="blockC">  {{item.Record.brand}}  </ion-col>\n		      <ion-col col-1 class="blockC">       {{item.Record.colour}}                          </ion-col>\n          <ion-col col-2 class="blockC">       {{item.Record.nameoftransportagency}}                          </ion-col>\n       \n          \n        </ion-row>\n		 <ion-row justify-content-start class="visualizerrow" *ngIf="arrcount<=0">\n          <ion-col col-12> <p align="center">No Items Found</p> </ion-col>\n         \n          \n        </ion-row>\n      </div>\n    </ion-grid>\n	<br>\n    \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/distributor-center/distributor-center.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DistributorCenterPage);
    return DistributorCenterPage;
}());

//# sourceMappingURL=distributor-center.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionVisualizerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__presc_hist_presc_hist__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { CreateCustomerPage  } from '../create-customer/create-customer';


/**
 * Generated class for the TransactionVisualizerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionVisualizerPage = /** @class */ (function () {
    function TransactionVisualizerPage(navCtrl, navParams, auth, modalCtrl, prodblkchainPvr, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
        this.loadingCtrl = loadingCtrl;
        this.showhealthdata = false;
        this.selectOptions = {
            title: 'Please Select',
            subTitle: '',
            mode: 'md'
        };
    }
    TransactionVisualizerPage.prototype.onSelectChange = function () {
        if (this.idType == "Health") {
            this.showHealth = false;
        }
    };
    TransactionVisualizerPage.prototype.ionViewDidLoad = function () {
        this.username = "Komal";
    };
    TransactionVisualizerPage.prototype.ionViewWillLoad = function () {
        //this.getHistoryForProduct();
        // let loader = this.loadingCtrl.create({
        //   content: "Please Wait...Loading Data.."
        // });
        // loader.present();
        // console.log("retrieving retailer data")
        // loader.present().then(() => {
        //   this.getHistoryForProduct();
        //   this.prodblkchainPvr.initPurchaseReciptNumber("300000172091034", "25112525")
        //     .subscribe(data => {
        //       console.log(data)
        //       this.productarray = data;
        //       this.arrlength = Object.keys(this.productarray);
        //       this.arrcount = this.arrlength.length;
        //       console.log(this.arrlength.length);
        //       loader.dismiss();
        //       // ;
        //     })
        // })
    };
    TransactionVisualizerPage.prototype.getHistoryForProduct = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please Wait...Loading Data.."
        });
        loader.present();
        console.log("retrieving retailer data");
        loader.present().then(function () {
            _this.prodblkchainPvr.getHistoryForProduct(_this.myInput)
                .subscribe(function (data) {
                console.log(JSON.parse(data.payload));
                _this.healthdata = JSON.parse(data.payload)[0].Value;
                _this.showhealthdata = true;
                //  let temp = data.filter(element => element.Value.pnumber != "none");
                _this.prescriptionData = JSON.parse(data.payload).map(function (element) {
                    return {
                        txId: element.TxId,
                        lastName: element.Value.lastName,
                        workEmail: element.Value.workEmail,
                        address: element.Value.addressLine
                    };
                }).reverse();
                console.log(_this.prescriptionData);
                loader.dismiss();
                // ;
            });
        });
    };
    TransactionVisualizerPage.prototype.getHistoryForPrescription = function (id) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please Wait...Loading Data.."
        });
        loader.present();
        console.log("retrieving retailer data");
        loader.present().then(function () {
            _this.prodblkchainPvr.getHistoryForProduct(id)
                .subscribe(function (data) {
                loader.dismiss();
                console.log(data);
                _this.healthdata = data[0].Value;
                _this.showhealthdata = true;
                var temp = data.filter(function (element) { return element.Value.pnumber != "none"; });
                _this.prescriptionData = temp.map(function (element) {
                    return {
                        docType: element.Value.docType,
                        healthID: element.Value.healthID,
                        pname: element.Value.pname,
                        age: element.Value.age,
                        gender: element.Value.gender,
                        pnumber: element.Value.pnumber,
                        Timestamp: element.Timestamp
                    };
                });
                // ;
            });
        });
    };
    TransactionVisualizerPage.prototype.openModal = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__presc_hist_presc_hist__["a" /* PrescHistPage */], { pnumber: id });
    };
    TransactionVisualizerPage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    TransactionVisualizerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-visualizer',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/transaction-visualizer/transaction-visualizer.html"*/'<!--\n  Generated template for the RetailerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n	<div class="cc">\n		<ion-grid class="header nopadding">\n			<ion-row justify-content-end>\n				<ion-col col-md col-12 col-md-12 class="nopadding">\n						<ion-col col-md-12 col-md-1>\n								<img src="../../assets/imgs/smart_erp.png" alt="Logo" class="logo">\n							   </ion-col>\n					\n					<ion-col col-md-12 col-md-6 class="nopadding">\n						<div class="dropdown" float-end>\n							<button class="  dropdown-toggle userdrop" type="button" data-toggle="dropdown">Hi {{username}}\n								<span class="caret"></span></button>\n							<ul class="dropdown-menu">\n								<li><a href="#" (click)=\'logout()\'>Logout</a></li>\n							</ul>\n						</div>\n					</ion-col>\n				</ion-col>\n				<ion-col class="nopadding ">\n						\n						<ion-col style="color: black; font-size: 13px" col-md-12 offset-9  >\n								<span class="nopadding">Blockchain Transaction Visualizer</span>\n							</ion-col>\n					<!-- <ion-col   col-md-12  class="nopadding">\n                                      <ion-grid class="nopadding" >\n									  <ion-row>\n									   <ion-col  col-md col-12 col-md-6 class="nopadding">\n									  <b> Document Type:</b> Purchase Order | <b>Document No.:</b> 163424\n									   </ion-col>\n									    <ion-col  col-md col-12 col-md-6 text-right>\n									   <b>Email:</b> nsupport@nordstrom.com <b>Phone:</b> +1 800 000 0000\n									   </ion-col>\n									  </ion-row>\n                 \n      </ion-grid>\n            </ion-col> -->\n				</ion-col>\n				<ion-col col-md col-12 col-md-12 class="nopadding">\n						<ion-col col-md-12 class="nopadding">\n							<ion-grid class="nopadding">\n								<ion-row>\n										<ion-col col-md-8 class="nopadding flexVcenter">\n												\n										</ion-col>\n																			\n									<ion-col col-md-4 class="nopadding">\n										<ion-grid class="nopadding">\n											<ion-row>\n												<!-- <ion-col col-md-5 class="">\n													<ion-item>\n														<ion-label>Type Filter</ion-label>\n														<ion-select [(ngModel)]="idType" [selectOptions]="selectOptions" (ionChange)="onSelectChange()">\n															<ion-option value="Health">Health ID</ion-option>\n															<ion-option value="Prescription">Prescription Number</ion-option>\n														</ion-select>\n													</ion-item>\n													 <button ion-button full outline class="filter headerbutton">Filters</button>\n												</ion-col> -->\n												<ion-col col-sm-2 class="nopadding flexVcenter">\n														Employee ID:\n												</ion-col>\n												<ion-col col-md-6 class="" >\n														<div class="searchbar" float-end>\n															<ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" class="searchinput">\n															</ion-searchbar>\n														</div>\n												</ion-col>\n	\n												<ion-col col-md-4 class="" width-33 >\n													<div class="sbutton">  \n													<button ion-button full outline (click)="getHistoryForProduct()" class="edit headerbutton" >Search</button>\n													</div>\n												</ion-col>\n											</ion-row>\n										</ion-grid>\n									</ion-col>\n								</ion-row>\n							</ion-grid>\n						</ion-col>\n					</ion-col>\n				<ion-col col-md col-12 col-md-12 class="nopadding orderrow" *ngIf="showhealthdata">\n					<ion-col col-md-12 class="nopadding">\n						<ion-grid class="nopadding">\n							<ion-row>\n								<ion-col col-md col-12 col-md-6 class="nopadding">\n									<ion-grid class="nopadding">\n										<ion-row>\n											<ion-col style="font-weight: bold;"  col-md col-12 col-md-4 >\n													First Name	:\n											</ion-col>\n											<ion-col col-md col-12 col-md-4 >\n												{{healthdata.firstName}}\n											</ion-col>\n										</ion-row>\n										<ion-row>\n											<ion-col style="font-weight: bold;"  col-md col-12 col-md-4 >\n												Last Name :\n											</ion-col>\n											<ion-col col-md col-12 col-md-4 >\n													{{healthdata.lastName}}\n											</ion-col>\n										</ion-row>\n										<ion-row>\n											<ion-col style="font-weight: bold;"  col-md col-12 col-md-4 >\n												User Name				:\n											</ion-col>\n											<ion-col col-md col-12 col-md-4 >\n													{{healthdata.userName}}\n											</ion-col>\n										</ion-row>\n										<ion-row>\n											<ion-col style="font-weight: bold;"  col-md col-12 col-md-4 >\n													Gender		:\n											</ion-col>\n											<!-- <ion-col style="font-weight: bold;" col-md-1>\n												:\n											</ion-col> -->\n											<ion-col col-md col-12 col-md-4 >\n													{{healthdata.gender}}\n											</ion-col>\n										</ion-row>\n\n									</ion-grid>\n								</ion-col>\n								<!-- <ion-col col-md col-12 col-md-6>\n									<ion-grid class="nopadding">\n										<ion-row>\n											<ion-col col-md col-12 col-md-4 class="nopadding">\n												Status:\n											</ion-col>\n											<ion-col col-md col-12 col-md-8>\n												Open\n											</ion-col>\n										</ion-row>\n										<ion-row>\n											<ion-col col-md col-12 col-md-4 class="nopadding">\n												Comments:\n											</ion-col>\n											<ion-col col-md col-12 col-md-8>\n												Antique‑gold logo‑engraved hardware enhances the signature opulence of\n												an Italian‑crafted shoulder bag in soft suede, crinkled patent and smooth\n												leather.\n											</ion-col>\n										</ion-row>\n\n									</ion-grid>\n								</ion-col> -->\n							</ion-row>\n\n						</ion-grid>\n					</ion-col>\n				</ion-col>\n				\n			</ion-row>\n		</ion-grid>\n		<!-- <ion-grid class="pagination nopadding">\n			<ion-row justify-content-end>\n				<ion-col col-md-12 class="" float-end>{{arrcount}} items</ion-col>\n			</ion-row>\n		</ion-grid> -->\n		<ion-grid class="nopadding orderrow" *ngIf="showhealthdata">\n			<div class="inventory_table_inner" *ngIf="prescriptionData">\n				<ion-row style="font-weight: bold;" justify-content-start class="header">\n					<ion-col col-1>\n							Serial No.\n					</ion-col>\n					<ion-col col-5>\n							Transaction ID\n						</ion-col>\n					<ion-col col-1>\n							LastName\n					</ion-col>\n					<ion-col col-3>\n							Work Email\n					</ion-col>\n					<ion-col col-2>\n						Address\n					</ion-col>\n\n				</ion-row>\n\n				<ion-row justify-content-start  class="transactionrows" *ngFor="let item of prescriptionData;let i = index" (click)="openModal(item.pnumber)">\n					<!-- <ion-col>\n							{{prescriptionData[prescriptionData.length-i-1]}}\n					</ion-col> -->\n					<ion-col col-1>\n					{{i+1}}\n					</ion-col>\n					<ion-col col-5 >\n						{{item.txId}}	\n					</ion-col>\n					\n					<ion-col col-1>\n						{{item.lastName}}\n					</ion-col>\n					<ion-col col-3>\n						{{item.workEmail}}\n					</ion-col>\n					<ion-col col-2>\n						{{item.address}}\n					</ion-col>\n					<!-- <ion-col col-2>\n						Nordstrom\n					</ion-col>\n					<ion-col col-2>\n						WA , United States\n					</ion-col> -->\n				</ion-row>\n				<ion-row justify-content-start>\n\n					<ion-col col-md col-12 col-md-12 *ngIf="arrlength==\'\'">\n						<p style="text-align:center">No Items Found</p>\n					</ion-col>\n				</ion-row>\n\n			</div>\n		</ion-grid>\n\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/transaction-visualizer/transaction-visualizer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], TransactionVisualizerPage);
    return TransactionVisualizerPage;
}());

//# sourceMappingURL=transaction-visualizer.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrescHistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__distributor_distributor__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Prescription_details_Prescription_details__ = __webpack_require__(117);
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
 * Generated class for the PrescHistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrescHistPage = /** @class */ (function () {
    function PrescHistPage(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, prodblkchainPvr, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.prodblkchainPvr = prodblkchainPvr;
        this.alertCtrl = alertCtrl;
        this.showhealthdata = false;
        this.pname = this.navParams.get('name');
        this.pmaterial = this.navParams.get('pmaterial');
        this.pbrand = this.navParams.get('brand');
        this.mdate = this.navParams.get('mfd');
        this.poheaderid = this.navParams.get('poheaderid');
        this.pid = this.navParams.get('productid');
        this.quantity = this.navParams.get('quantity');
        this.typeofshipment = this.navParams.get('typeofshipment');
        this.pnumber = this.navParams.get('pnumber');
        this.motOptions = {
            title: 'Select Mode of Transport',
            subTitle: '',
            mode: 'md'
        };
        this.nataOptions = {
            title: 'Select Name of Transport Agency',
            subTitle: '',
            mode: 'md'
        };
        this.locationOptions = {
            title: 'Select Location',
            subTitle: '',
            mode: 'md'
        };
    }
    PrescHistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DistributorTransferPage');
        this.curdate = new Date().toISOString();
        //this.curdate = "08/07/1987";
        console.log(this.curdate);
        // console.log("id"+this.navParams.get('productid'));
        // this.pname = this.navParams.get('Name');
        // this.mdate = this.navParams.get('dom');
        // this.pid = this.navParams.get('ProductId');
        // this.pmaterial = this.navParams.get('pmaterial');
    };
    PrescHistPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please Wait...Loading Data.."
        });
        loader.present();
        console.log("retrieving retailer data");
        loader.present().then(function () {
            _this.prodblkchainPvr.getHistoryForProduct(_this.pnumber)
                .subscribe(function (data) {
                _this.healthdata = data[0].Value;
                _this.showhealthdata = true;
                var temp = data.filter(function (element) { return element.Value.healthID != "none"; });
                // let temp1 = temp.filter(element => element.Value.pnumber != );
                var saveIndex = 0;
                _this.prescriptionData = temp.map(function (element, index) {
                    element.Value.doctorid ? saveIndex = index : '';
                    var tempObj = {
                        docType: element.Value.docType,
                        healthID: element.Value.healthID,
                        pname: element.Value.pname,
                        pdata: element.Value.pdata || temp[saveIndex]['Value']['pdata'],
                        gender: element.Value.gender,
                        pnumber: element.Value.pnumber,
                        medicinedelivered: element.Value.medicinedelivered,
                        doctorid: element.Value.doctorid || temp[saveIndex]['Value']['doctorid'],
                        loc: element.Value.loc,
                        dname: element.Value.dname || temp[saveIndex]['Value']['dname'],
                        docOrg: element.Value.docOrg || temp[saveIndex]['Value']['docOrg'],
                        pharmacyname: element.Value.pharmacyname,
                        Timestamp: element.Timestamp
                    };
                    return tempObj;
                }).reverse();
                console.log(_this.prescriptionData);
                // localStorage.setItem('docid',this.prescriptionData[1].doctorid);
                // this.temp1= localStorage.getItem('docid');
                // localStorage.setItem('dnam',this.prescriptionData[1].dname);
                // this.temp2= localStorage.getItem('dnam');
                // localStorage.setItem('docOr',this.prescriptionData[1].docOrg);
                // this.temp3= localStorage.getItem('docOr');
                // localStorage.setItem('pdat',this.prescriptionData[1].pdata);
                // this.temp4= localStorage.getItem('pdat');
                loader.dismiss();
            });
        });
    };
    PrescHistPage.prototype.savedetails = function () {
        var _this = this;
        if (this.transportation == undefined || this.logistics == undefined || this.location == undefined) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Please fill all the fields',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: "Transfer Product Initialised"
            });
            loader_1.present();
            this.viewCtrl.dismiss();
            this.transferProductarr = {
                'productid': this.pid,
                'newowner': 'distribution center',
                'curowner': 'distributor',
                'mot': this.transportation,
                'nata': this.logistics,
                'location': this.location,
                'poheaderid': this.poheaderid,
                'shipmentype': this.typeofshipment,
                'shipmentquantity': this.quantity
            };
            this.prodblkchainPvr.transferProduct(this.transferProductarr)
                .subscribe(function (res) {
                if (res == 'failure') {
                    //alert("Unable to transfer")
                    _this.showSaveToast("Unable to transfer", 3000);
                    loader_1.dismiss();
                    _this.viewCtrl.dismiss();
                }
                else {
                    _this.showSaveToast("Transfer Complete", 3000);
                    _this.viewCtrl.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__distributor_distributor__["a" /* DistributorPage */]);
                    loader_1.dismiss();
                }
            });
        }
    };
    PrescHistPage.prototype.showSaveToast = function (msg, dur) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: dur,
            position: 'bottom',
            showCloseButton: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PrescHistPage.prototype.openModal = function (pdata) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__Prescription_details_Prescription_details__["a" /* PrescriptionDetailsPage */], { pdata: pdata });
    };
    PrescHistPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    PrescHistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-presc-hist',template:/*ion-inline-start:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/presc-hist/presc-hist.html"*/'<!--\n  Generated template for the DistributorTransferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-buttons end>\n      <a href="#" (click)="closeModal()">\n        <ion-icon name="close-circle" class="close"></ion-icon>\n      </a>\n    </ion-buttons>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-grid class="nopadding orderrow">\n      <div class="" *ngIf="prescriptionData">\n        <ion-row style="font-weight: bold;" justify-content-start class="headers">\n          <ion-col col-1>\n              Prescription No.\n          </ion-col>\n          <ion-col col-3>\n            Date and Time\n          </ion-col>\n          <ion-col col-1 >\n              Doctor ID\n            </ion-col>\n            <ion-col col-1 >\n                 Role\n              </ion-col>\n          <ion-col col-1>\n            Doctor Name\n          </ion-col>\n          <ion-col col-1>\n            Organization\n          </ion-col>\n          <ion-col col-2>\n            Prescription/Medicine\n          </ion-col>\n          <ion-col col-2>\n              Pharmacy Name\n            </ion-col>  \n        </ion-row>\n  \n        <ion-row justify-content-start class="transactionrows" *ngFor="let item of prescriptionData;let i = index"\n          (click)="openModal(item.pdata)">\n          <ion-col col-1>\n              {{item.pnumber}}\n          </ion-col>\n          <ion-col col-3>\n             {{item.Timestamp}}\n          </ion-col>\n          <ion-col col-1 *ngIf="item.doctorid != none;">\n                                     \n              {{item.doctorid}}\n            </ion-col>\n            <ion-col col-1 *ngIf="item.doctorid == none;">\n                {{temp1}}\n            </ion-col>\n            <ion-col col-1 *ngIf="item.pharmacyname != none;" >\n                Pharmacy\n              </ion-col>\n              <ion-col col-1 *ngIf="item.pharmacyname == none;" >\n                  Doctor\n                </ion-col>\n\n            <ion-col col-1 *ngIf="item.doctorid != none;">\n                                     \n                {{item.dname}}\n              </ion-col>\n              <ion-col col-1 *ngIf="item.doctorid == none;">\n                  {{temp2}}\n              </ion-col>\n              <ion-col col-1 *ngIf="item.doctorid != none;">\n                                     \n                  {{item.docOrg}}\n                </ion-col>\n                <ion-col col-1 *ngIf="item.doctorid == none;">\n                    {{temp3}}\n                </ion-col>\n                <ion-col col-2 *ngIf="item.doctorid != none;">\n                                     \n                    {{item.pdata}}\n                  </ion-col>\n                  <ion-col col-2 *ngIf="item.doctorid == none;">\n                      {{temp4}}\n                  </ion-col>\n          <ion-col col-2>\n              {{item.pharmacyname}} \n          </ion-col>\n          \n        </ion-row>\n        <ion-row justify-content-start>\n  \n          <ion-col col-md col-12 col-md-12 *ngIf="arrlength==\'\'">\n            <p style="text-align:center">No Items Found</p>\n          </ion-col>\n        </ion-row>\n  \n      </div>\n    </ion-grid>\n  </ion-content>'/*ion-inline-end:"/Users/GI68L7/code/InnovationDays/SmartErp/SmartERPInnovationDay/TransactionVisualizer/src/pages/presc-hist/presc-hist.html"*/,
        })
        // export class PrescHistPage {
        //   constructor(public navCtrl: NavController, public navParams: NavParams) {
        //   }
        //   ionViewDidLoad() {
        //     console.log('ionViewDidLoad PrescHistPage');
        //   }
        // }
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_blockchain_product_blockchain__["a" /* ProductBlockchainProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PrescHistPage);
    return PrescHistPage;
}());

//# sourceMappingURL=presc-hist.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map