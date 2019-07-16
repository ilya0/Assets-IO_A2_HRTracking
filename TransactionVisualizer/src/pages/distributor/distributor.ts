import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DistributorTransferPage } from '../distributor-transfer/distributor-transfer';
import { LoginPage } from '../login/login';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';

/**
 * Generated class for the DistributorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-distributor',
  templateUrl: 'distributor.html',
})
export class DistributorPage {
  username: any;
  productarray: any;
  arrlength: any;
  arrcount: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider, public modalCtrl: ModalController,
    private loadingCtrl: LoadingController, private prodblkchainPvr: ProductBlockchainProvider) {
  }


   ionViewWillLoad() {
    let loader = this.loadingCtrl.create({
      content: "Please Wait...Loading Data.."
    });
    loader.present();

    console.log("retrieving didtributor data")
    this.username = this.auth.currentUser.name;
loader.present().then(()=>{
    this.prodblkchainPvr.getProductDetailByOwner('distributor')
      .subscribe(data => {
        console.log(data)
        this.productarray = data;
		 this.arrlength = Object.keys(this.productarray);
		 this.arrcount = this.arrlength.length;
		 console.log("this"+this.arrlength);
        loader.dismiss();
      })
	  })
  }

  openModal(prodDetails) {
    var modalPage = this.modalCtrl.create(DistributorTransferPage, prodDetails);
    modalPage.present();
  }


  logout() {
    this.auth.logout();
    this.navCtrl.push(LoginPage);
  }


}
