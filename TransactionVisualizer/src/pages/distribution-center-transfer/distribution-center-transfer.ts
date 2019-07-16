import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ToastController,AlertController,LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { LoginPage } from '../login/login';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';
import { DistributorCenterPage } from '../distributor-center/distributor-center';
/**
 * Generated class for the DistributionCenterTransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-distribution-center-transfer',
  templateUrl: 'distribution-center-transfer.html',
})
export class DistributionCenterTransferPage {
pname:any;
supplier:any;
ordernumber:any;
productid:any;
ordered:any;
response:any;
poheaderid:any;
transportation : any;
logistics : any;
location : any;
fromlocation : any = "Prologis Distribution Center";
transferProductarr : any;
selectOptions: any;
purchaseorders: any;
typeofshipment: any;
  quantity:any;
motOptions: any;
nataOptions:any;
locationOptions:any;
  	constructor(public navCtrl: NavController, public navParams: NavParams,
		public viewCtrl: ViewController, private loadingCtrl: LoadingController,
		public toastCtrl: ToastController, private prodblkchainPvr: ProductBlockchainProvider,private alertCtrl: AlertController) {
			console.log(this.navParams.get('poheaderid'));
			this.pname = this.navParams.get('name')
						this.productid = this.navParams.get('productid')
			this.quantity = this.navParams.get('quantity')
	this.typeofshipment = this.navParams.get('typeofshipment')
			this.poheaderid = this.navParams.get('poheaderid')
			this.selectOptions = {
  title: 'Select Nordstrom Retail Store',
  subTitle: '',
  mode: 'md'
}

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

		this.readDistributionCentre(this.poheaderid)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DistributionCenterTransferPage');
  }
 closeModal(){
 this.viewCtrl.dismiss();
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
		this.ordernumber = this.purchaseorders.ordernumber;
		this.ordered = this.purchaseorders.ordered;
		 loader.dismiss();
				}
				
				
			})
			})
			
			
		
	}
savedetails(){

let loader = this.loadingCtrl.create({
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
      }
	  		

      this.prodblkchainPvr.transferProduct(this.transferProductarr)
      .subscribe(res =>{
				if(res == 'failure'){
					//alert("Unable to transfer")
					this.showSaveToast("Unable to transfer",3000);	
loader.dismiss()
					this.viewCtrl.dismiss();
				}
				else{	//	alert('transferred suceesfully')
					this.showSaveToast("Transfer Complete", 3000);
					this.viewCtrl.dismiss();
					this.navCtrl.push(DistributorCenterPage);
					loader.dismiss();

				}
			})
    
  }
  
  showSaveToast(msg, dur) {
		let toast = this.toastCtrl.create({
			message: msg,
			duration: dur,
			position: 'bottom',
			showCloseButton: true
		});

		toast.onDidDismiss(() => {
			console.log('Dismissed toast');
		});

		toast.present();
	}
}
