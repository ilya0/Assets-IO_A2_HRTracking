import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';
/**
 * Generated class for the NewOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-orders',
  templateUrl: 'new-orders.html',
})
export class NewOrdersPage {
purchaseorders: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl : ViewController, private prodblkchainPvr: ProductBlockchainProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewOrdersPage');
	
				this.prodblkchainPvr.getPurchaseQuotes()
			.subscribe(response => {
				console.log("getPurchaseQuotes", response)
				if(response!=null){
					this.purchaseorders = response.items;
					
					
					
				}
				
				
			})
  }
  closeModal(data){
	  this.viewCtrl.dismiss(data);
  }

}
