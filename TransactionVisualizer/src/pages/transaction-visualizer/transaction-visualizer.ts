import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DistributorTransferPage } from '../distributor-transfer/distributor-transfer';
import { LoginPage } from '../login/login';
//import { CreateCustomerPage  } from '../create-customer/create-customer';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';
import { PrescriptionDetailsPage } from '../Prescription-details/Prescription-details';
import { PrescHistPage } from '../presc-hist/presc-hist';
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
  idType: string;
  selectOptions: any;
  showHealth: any;
  myInput: any;
  healthdata: any;
  showhealthdata: boolean = false;
  prescriptionData: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider, public modalCtrl: ModalController,
    private prodblkchainPvr: ProductBlockchainProvider, private loadingCtrl: LoadingController) {
    this.selectOptions = {
      title: 'Please Select',
      subTitle: '',
      mode: 'md'
    };
  }
  onSelectChange() {
    if (this.idType == "Health") {
      this.showHealth = false;
    }
  }
  ionViewDidLoad() {

    this.username = "Komal";


  }
  ionViewWillLoad() {

    //this.getHistoryForProduct();
    // let loader = this.loadingCtrl.create({
    //   content: "Please Wait...Loading Data.."
    // });
    // loader.present();
    // console.log("retrieving retailer data")
    // loader.present().then(() => {
    //   this.getHistoryForProduct();
    //   this.prodblkchainPvr.initPurchaseReciptNumber("300000172091034", "25112525")
    //     .subscribe(data => {
    //       console.log(data)
    //       this.productarray = data;
    //       this.arrlength = Object.keys(this.productarray);
    //       this.arrcount = this.arrlength.length;
    //       console.log(this.arrlength.length);
    //       loader.dismiss();
    //       // ;
    //     })
    // })
  }
getHistoryForProduct() {
    let loader = this.loadingCtrl.create({
      content: "Please Wait...Loading Data.."
    });
    loader.present();
    console.log("retrieving retailer data")
    loader.present().then(() => {
      this.prodblkchainPvr.getHistoryForProduct(this.myInput)
        .subscribe(data => {
          console.log(JSON.parse(data.payload));
          this.healthdata = JSON.parse(data.payload)[0].Value;
          this.showhealthdata = true;
          //  let temp = data.filter(element => element.Value.pnumber != "none");
          this.prescriptionData = JSON.parse(data.payload).map(element => {
              return {
                txId: element.TxId,
                lastName: element.Value.lastName,
                workEmail: element.Value.workEmail,
                address: element.Value.addressLine
              };
          }).reverse();
          console.log(this.prescriptionData);
          loader.dismiss();
          // ;
        })
    })
  }
  getHistoryForPrescription(id) {
    let loader = this.loadingCtrl.create({
      content: "Please Wait...Loading Data.."
    });
    loader.present();
    console.log("retrieving retailer data")
    loader.present().then(() => {
      this.prodblkchainPvr.getHistoryForProduct(id)
        .subscribe(data => {
          loader.dismiss();
          console.log(data);
          this.healthdata = data[0].Value;
          this.showhealthdata = true;
          let temp = data.filter(element => element.Value.pnumber != "none");
          this.prescriptionData = temp.map(element => {
              return {
                docType: element.Value.docType,
                healthID: element.Value.healthID,
                pname: element.Value.pname,
                age: element.Value.age,
                gender: element.Value.gender,
                pnumber: element.Value.pnumber,
                Timestamp: element.Timestamp
              };
          });
          
          // ;
        })
    })
  }
  openModal(id) {
    this.navCtrl.push(PrescHistPage, { pnumber: id });

   
  }

  logout() {
    this.auth.logout();
    this.navCtrl.push(LoginPage);
  }

}
