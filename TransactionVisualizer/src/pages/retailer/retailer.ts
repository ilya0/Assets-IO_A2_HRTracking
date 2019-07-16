import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DistributorTransferPage } from '../distributor-transfer/distributor-transfer';
import { LoginPage } from '../login/login';
//import { CreateCustomerPage  } from '../create-customer/create-customer';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';
import { CreateCustomerPage } from '../create-customer/create-customer';



/**
 * Generated class for the RetailerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-retailer',
  templateUrl: 'retailer.html',
})
export class RetailerPage {
	username: any;
	pname: any;
	pid: any;
	pmaterial: any;
	mdate: any;
	plocation: any;
	pbrand: any;
	color : any;
	create: any;
	createProductarr: any;
	transferProductarr: any;
	linkcustomer: any;
productarray: any;
arrlength: any;
arrcount: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider, public modalCtrl: ModalController,
    private prodblkchainPvr: ProductBlockchainProvider, private loadingCtrl : LoadingController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DistributorPage');
    this.username = this.auth.currentUser.name;

  }

  ionViewWillLoad() {
    let loader = this.loadingCtrl.create({
			content: "Please Wait...Loading Data.."
		});
    loader.present();
    console.log("retrieving retailer data")
	loader.present().then(()=>{
    this.prodblkchainPvr.getProductDetailByOwner('nordstrom')
      .subscribe(data => {
        console.log(data)
        this.productarray = data;
		this.arrlength = Object.keys(this.productarray);
		this.arrcount = this.arrlength.length;
		console.log(this.arrlength.length);
		 loader.dismiss();
       // ;
      })
	 })
  }

 
  openModal() {
    var modalPage = this.modalCtrl.create(DistributorTransferPage);
	
    modalPage.present();
  }

  logout() {
    this.auth.logout();
    this.navCtrl.push(LoginPage);
  }

  linkCustomer(product) {

    // this.transferProductarr = {
    //   'productid': this.pid,
    //   'newowner': 'Custom',
    //   'curowner': 'Manufacturer',
    //   'mot': this.mdate,
    //   'nata': this.pmaterial,
    //   'location': this.plocation
    // }
    console.log(product)
    	var modalPage = this.modalCtrl.create(CreateCustomerPage,product);
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

  }
}


