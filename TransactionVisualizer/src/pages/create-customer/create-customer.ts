import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ToastController, LoadingController } from 'ionic-angular';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';
import { RetailerPage } from '../retailer/retailer';

/**
 * Generated class for the CreateCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-customer',
  templateUrl: 'create-customer.html',
})
export class CreateCustomerPage {
username: any;
pname:any;
pid: any;

location: any;
crnumber : any;
dop : any;
initCustomerArray : any;
linkcustomer: any;
	constructor(public navCtrl: NavController, public navParams: NavParams, 
		public viewCtrl : ViewController, private loadingCtrl : LoadingController,
		public toastCtrl: ToastController, private prodblkchainPvr: ProductBlockchainProvider) {
			this.pid = this.navParams.get('productid')
			this.location = this.navParams.get('location')
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManufacturerTransferPage');
  }
  	initCustomer(){
		let loader = this.loadingCtrl.create({
			content: "Customer Intialization Started"
		});
		loader.present();
		
		this.showSaveToast('Adding Customer...',3000);
		this.initCustomerArray = {
		 'crnumber': this.crnumber,
		 'productid': this.pid,
		 'dop': this.dop,
		 'location' : this.location
		 }

		 this.prodblkchainPvr.initCustomer(this.initCustomerArray)
		 .subscribe(res =>{
			 if(res == 'failure'){
				this.showSaveToast("Unable to link customer", 3000);
				let data = { 'linkcustomer': 'false' };
				loader.dismiss(data)
				this.viewCtrl.dismiss();
			 }
			 else{
				this.showSaveToast("Customer linked successfully", 3000);
				let data = { 'linkcustomer': 'true' };
				this.viewCtrl.dismiss(data);
				this.navCtrl.push(RetailerPage);
				
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
