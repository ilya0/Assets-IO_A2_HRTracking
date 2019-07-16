import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ViewController,ToastController,AlertController,LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { LoginPage } from '../login/login';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';
import { CustomsPage } from '../customs/customs';


/**
 * Generated class for the CustomsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customs-details',
  templateUrl: 'customs-details.html',
})
export class CustomsDetailsPage {
  username: any;
  pname: any;
  pid: any;
  pmaterial: any;
  mdate: any;
  plocation: any;
  pbrand: any;
  mot: any;
  nata: any;
  createProductarr: any;
  transferProductarr: any;
  productDetail: any
  casenumner: any;
  status: any;
  casenum: any;
  autoManufacturers: any;
  approved: any;
  location:any;
  poheaderid: any;
  typeofshipment: any;
  quantity:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public toastCtrl: ToastController,
    private prodblkchainPvr: ProductBlockchainProvider, private alertCtrl: AlertController,
    public loadingCtrl: LoadingController, private auth: AuthServiceProvider) {

    console.log('Transferring----------------------',this.navParams.get('name'))
    this.casenum = this.navParams.get('case')
    this.pname = this.navParams.get('name')
    this.pid = this.navParams.get('productid')
    this.pmaterial = this.navParams.get('pmaterial')
    this.pbrand = this.navParams.get('brand')
    this.mdate = this.navParams.get('mfd')
	this.location = this.navParams.get('location')
	this.nata = this.navParams.get('nameoftransportagency')
	this.mot = this.navParams.get('modeoftransport')
	this.poheaderid = this.navParams.get('poheaderid')
	this.quantity = this.navParams.get('quantity')
	this.typeofshipment = this.navParams.get('typeofshipment')
	
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomsDetailsPage');
	this.username = this.auth.currentUser.name;
//	 this.approved = true;
  }
  
      savedetails() {
    this.showSaveToast('Saving Data', 3000);
   
    console.log('status', this.autoManufacturers)
    this.prodblkchainPvr.initCustomsForStatusUpdate(this.pid, this.autoManufacturers)
      .subscribe(data => {
        console.log(data)
        if(this.autoManufacturers=='Approved'){
          this.status = true;
		 
		   this.approved = true;
        }
        else{
          this.viewCtrl.dismiss();
        }
      })

  }
cancel(){
	let data = { 'status': this.autoManufacturers };
this.viewCtrl.dismiss(data);
  }
  
  
      logout(){
  this.auth.logout();
  this.navCtrl.push(LoginPage);
  }
transfer() {
    let loader = this.loadingCtrl.create({
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
					this.navCtrl.push(CustomsPage);
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

}
