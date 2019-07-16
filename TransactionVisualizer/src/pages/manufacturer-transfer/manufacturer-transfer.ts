import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ViewController,ToastController,AlertController,LoadingController } from 'ionic-angular';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';
import { ManufacturerPage  } from '../manufacturer/manufacturer';

/**
 * Generated class for the ManufacturerTransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manufacturer-transfer',
  templateUrl: 'manufacturer-transfer.html',
})
export class ManufacturerTransferPage {
username: any;
pname:any;
pid: any;
pmaterial:any;
mdate:any;
plocation:any;
pbrand:any;
newowner : any;
curowner : any;
mot: any;
nata : any;
createProductarr: any;
transferProductarr: any;
porders: any;
poorder: any;
selectOptions: any;
motOptions: any;
shipmentype: any;
shipmentquantity: any;
isDisabled: any = true;
nataOptions: any;
poheaderid:any;

locationOptions:any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, 
		public toastCtrl: ToastController, private prodblkchainPvr: ProductBlockchainProvider, private alertCtrl: AlertController,  public loadingCtrl: LoadingController) {
	this.pid = this.navParams.get('productid')
	this.newowner = this.navParams.get('newowner')
	this.curowner = this.navParams.get('curowner')
	this.poheaderid = this.navParams.get('poheaderid')
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
onSelectChange(){
	if(this.shipmentype=="ps"){
	this.isDisabled = false;
}
else{
	this.isDisabled = true;
	this.shipmentquantity = '';
}
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ManufacturerTransferPage');
	
  }
    transferProduct(){
		
		let loader = this.loadingCtrl.create({
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
			}

			this.prodblkchainPvr.transferProduct(this.transferProductarr)
			.subscribe(res =>{
				if(res == 'failure'){
					//alert("Unable to transfer")
					this.showSaveToast("Unable to transfer",3000);	
					loader.dismiss();	
				}
				else{
					//alert('transferred suceesfully')
					this.showSaveToast("Transfer Complete",3000);	
					this.viewCtrl.dismiss();
					this.navCtrl.push(ManufacturerPage);
					loader.dismiss();	
				}
			})
  }
  
      showSaveToast(msg,dur) {
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
