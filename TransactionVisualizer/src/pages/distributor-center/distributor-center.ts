import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DistributorTransferPage } from '../distributor-transfer/distributor-transfer';
import { LoginPage } from '../login/login';
//import { CreateCustomerPage  } from '../create-customer/create-customer';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';
import { CreateCustomerPage } from '../create-customer/create-customer';
import { DistributionCenterTransferPage } from '../distribution-center-transfer/distribution-center-transfer';
/**
 * Generated class for the DistributorCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-distributor-center',
  templateUrl: 'distributor-center.html',
})
export class DistributorCenterPage {
selectOptions: any;
username: any;
name:any;
productarray:any;
arrlength:any;
arrcount:any;
supplier:any;
ordernumber:any;
productid :any;
ordered:any;
response:any;
purchaseorders:any;
owner:any;
contact:any;
brand:any;
responsedata: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider, public modalCtrl: ModalController,
    private prodblkchainPvr: ProductBlockchainProvider, private loadingCtrl : LoadingController,
    private alertCtrl : AlertController) {

	  
this.selectOptions = {
  title: 'Select Nordstrom Retail Store',
  subTitle: '',
  mode: 'md'
};
  }

   ionViewWillLoad() {
   

    console.log("retrieving didtributor data")
    this.username = this.auth.currentUser.name;
let loader = this.loadingCtrl.create({
      content: "Please Wait...Loading Data.."
    });
    loader.present();
	loader.present().then(()=>{
    this.prodblkchainPvr.getProductDetailByOwner('distribution center')
      .subscribe(data => {
        console.log(data)
        this.productarray = data;
		 this.arrlength = Object.keys(this.productarray);
		 
		 this.arrcount = this.arrlength.length;
		 this.owner = "Nordstrom";
		this.contact = "1.877.543.7463";
		this.brand = "Givenchy";
		this.supplier = "Lee Supplies";
		/* this.name = this.purchaseorders.name;
		this.supplier = this.purchaseorders.supplier;
		this.ordernumber = this.purchaseorders.ordernumber;
		this.productid = this.purchaseorders.productid;
		this.ordered = this.purchaseorders.ordered;
		this.response = this.purchaseorders.response; */
		 console.log("this"+this.arrcount);
		 for(var i=0; i<this.arrcount; i++){
		 
		console.log("purchaseorders"+this.responsedata);
		 }
        loader.dismiss();
      })
	  })
	  
  }
  
    openModal(poorder) {
		
    var modalPage = this.modalCtrl.create(DistributionCenterTransferPage,poorder);
	
    modalPage.present();
  }

  logout() {
    this.auth.logout();
    this.navCtrl.push(LoginPage);
  }
  
  	readDistributionCentre(pquote){
		 let loader = this.loadingCtrl.create({
      content: "Please Wait...Loading Data.."
    });
    loader.present();
	loader.present().then(()=>{
		console.log('pquote .....',pquote)
		 this.prodblkchainPvr.readDistributionCentre(pquote)
			.subscribe(response => {
				
				console.log('readDistributionCentre .....',response.statusCode)
				if(response.statusCode==500){
					let alert = this.alertCtrl.create({
    title: 'Error!',
    subTitle: 'PO Header ID Not Found',
    buttons: ['OK']
  });
  alert.present();
				}
				else {
		this.purchaseorders = response;
		this.supplier = this.purchaseorders.supplier;
		 loader.dismiss();
				}
				
				
			})
			})
			
			
		
	}


}
