import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DistributorTransferPage } from '../distributor-transfer/distributor-transfer';
import { LoginPage } from '../login/login';
//import { CreateCustomerPage  } from '../create-customer/create-customer';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';
import { CreateCustomerPage } from '../create-customer/create-customer';

/**
 * Generated class for the TransactionVisualizerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-visualizer',
  templateUrl: 'transaction-visualizer.html',
})
export class TransactionVisualizerPage {
  username: any;
  productarray: any;
  arrlength: any;
  arrcount: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider, public modalCtrl: ModalController,
    private prodblkchainPvr: ProductBlockchainProvider, private loadingCtrl: LoadingController) {
  }
  ionViewDidLoad() {

    this.username = this.auth.currentUser.name;


  }
  ionViewWillLoad() {
    let loader = this.loadingCtrl.create({
      content: "Please Wait...Loading Data.."
    });
    loader.present();
    console.log("retrieving retailer data")
    loader.present().then(() => {
      this.getHistoryForProduct();
      this.prodblkchainPvr.initPurchaseReciptNumber("300000172091034", "25112525")
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
  getHistoryForProduct() {
    //   let loader = this.loadingCtrl.create({
    // 		content: "Please Wait...Loading Data.."
    // 	});
    //   loader.present();
    //   console.log("retrieving retailer data")
    // loader.present().then(()=>{
    this.prodblkchainPvr.getHistoryForProduct("11056")
      .subscribe(data => {
        console.log(data)
        // this.productarray = data;
        // this.arrlength = Object.keys(this.productarray);
        // this.arrcount = this.arrlength.length;
        // console.log(this.arrlength.length);
        //  loader.dismiss();
        // ;
      })
    //  })
  }
  openModal() {
    var modalPage = this.modalCtrl.create(DistributorTransferPage);

    modalPage.present();
  }

  logout() {
    this.auth.logout();
    this.navCtrl.push(LoginPage);
  }

}
