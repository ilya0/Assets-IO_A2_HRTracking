import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ToastController,AlertController,LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { LoginPage } from '../login/login';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';
import { DistributorPage } from '../distributor/distributor';

/**
 * Generated class for the DistributorTransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-distributor-transfer',
  templateUrl: 'distributor-transfer.html',
})
export class DistributorTransferPage {
curdate : any;
username: any;
pname:any;
pid: any;
pmaterial:any;
mdate:any;
plocation:any;
pbrand:any;
createProductarr: any;
transferProductarr: any;
productarray: any;
transportation : any;
logistics : any;
location : any;
poheaderid:any;
typeofshipment: any;
motOptions: any;
nataOptions:any;
locationOptions:any;
quantity:any;
	constructor(public navCtrl: NavController, public navParams: NavParams,
		public viewCtrl: ViewController, private loadingCtrl: LoadingController,
		public toastCtrl: ToastController, private prodblkchainPvr: ProductBlockchainProvider,private alertCtrl: AlertController) {

	this.pname = this.navParams.get('name')
		this.pmaterial = this.navParams.get('pmaterial')
		this.pbrand = this.navParams.get('brand')
		this.mdate = this.navParams.get('mfd')
        this.poheaderid = this.navParams.get('poheaderid')
		this.pid = this.navParams.get('productid')
this.quantity = this.navParams.get('quantity')
	this.typeofshipment = this.navParams.get('typeofshipment')
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad DistributorTransferPage');
	this.curdate = new Date().toISOString();
	//this.curdate = "08/07/1987";
	console.log(this.curdate);
		// console.log("id"+this.navParams.get('productid'));
		// this.pname = this.navParams.get('Name');
		// this.mdate = this.navParams.get('dom');
		// this.pid = this.navParams.get('ProductId');
		// this.pmaterial = this.navParams.get('pmaterial');
  }
  
  savedetails(){
	  if(this.transportation==undefined || this.logistics==undefined || this.location==undefined){
	let alert = this.alertCtrl.create({
    title: 'Error!',
    subTitle: 'Please fill all the fields',
    buttons: ['OK']
  });
  alert.present();
}
else {
let loader = this.loadingCtrl.create({
			content: "Transfer Product Initialised"
		});
		loader.present();
		
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
					this.navCtrl.push(DistributorPage);
					loader.dismiss();

				}
			})
    }
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
 closeModal(){
 this.viewCtrl.dismiss();
}

}
