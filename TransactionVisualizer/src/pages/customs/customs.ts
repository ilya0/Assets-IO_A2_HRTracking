import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DistributorTransferPage } from '../distributor-transfer/distributor-transfer';
import { LoginPage } from '../login/login';
import { CustomsDetailsPage } from '../customs-details/customs-details';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';


/**
 * Generated class for the CustomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customs',
  templateUrl: 'customs.html',
})
export class CustomsPage {
  username: any;
  productarray: any;
  productnewarray: any;
  casenumber: any;
  approved: any;
  productdistributorarray: any;
  timestamp: any;
   arrlength: any;
   arrcount: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private auth: AuthServiceProvider, public modalCtrl: ModalController, 
    private loadingCtrl : LoadingController, private prodblkchainPvr: ProductBlockchainProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomsPage');
	this.username = this.auth.currentUser.name;
	 this.casenumber = "CASE_"+Math.floor(Math.random() * 21)+"_"+Math.floor(Math.random() * 21);
  }


  ionViewWillLoad(){
	  
	  let loader = this.loadingCtrl.create({
			content: "Please Wait...Loading Data.."
		});
		loader.present();
		loader.present().then(()=>{
		this.prodblkchainPvr.getProductDetailByOwner('customs')
      .subscribe(data => {
        console.log(data)
        this.productarray = data;
		this.arrlength = Object.keys(this.productarray);
		this.arrcount = this.arrlength.length;
        this.approved = false;
        for (var i = 0; i < this.productarray.length; i++) {

          this.productarray[i].Record.case = "CASE_" + Math.floor(Math.random() * 21) + "_" + Math.floor(Math.random() * 21)
		 
		}
		loader.dismiss();
	  });
	  
	  });
  }
  

  
    openModal(productDetail){

  var modalPage = this.modalCtrl.create(CustomsDetailsPage, productDetail,{ cssClass: "modal-fullscreen" }); 
  modalPage.onDidDismiss(data => {
     
   });
  modalPage.present(); 

  }
  
      logout(){
  this.auth.logout();
  this.navCtrl.push(LoginPage);
  }

}
