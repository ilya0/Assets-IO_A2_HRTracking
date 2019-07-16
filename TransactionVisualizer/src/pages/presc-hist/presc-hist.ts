import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { LoginPage } from '../login/login';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';
import { DistributorPage } from '../distributor/distributor';
import { PrescriptionDetailsPage } from '../Prescription-details/Prescription-details';

/**
 * Generated class for the PrescHistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presc-hist',
  templateUrl: 'presc-hist.html',
})
// export class PrescHistPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad PrescHistPage');
//   }

// }


export class PrescHistPage {
	curdate: any;
	username: any;
	pname: any;
    pid: any;
  	temp1: any;
 	temp2: any;
  	temp3: any;
  	temp4: any;
	pmaterial: any;
	mdate: any;
	plocation: any;
	pbrand: any;
	createProductarr: any;
	transferProductarr: any;
	productarray: any;
	transportation: any;
	logistics: any;
	location: any;
	poheaderid: any;
	typeofshipment: any;
	motOptions: any;
	nataOptions: any;
	locationOptions: any;
	quantity: any;
	prescriptionData: any[];

	healthdata: any;
	showhealthdata: boolean = false;
	pnumber: any;
	constructor(public navCtrl: NavController, public navParams: NavParams,
		public viewCtrl: ViewController, private loadingCtrl: LoadingController,
		public toastCtrl: ToastController, private prodblkchainPvr: ProductBlockchainProvider, private alertCtrl: AlertController) {

		this.pname = this.navParams.get('name')
		this.pmaterial = this.navParams.get('pmaterial')
		this.pbrand = this.navParams.get('brand')
		this.mdate = this.navParams.get('mfd')
		this.poheaderid = this.navParams.get('poheaderid')
		this.pid = this.navParams.get('productid')
		this.quantity = this.navParams.get('quantity')
		this.typeofshipment = this.navParams.get('typeofshipment')
		this.pnumber = this.navParams.get('pnumber')
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
	ionViewWillLoad() {
		let loader = this.loadingCtrl.create({
			content: "Please Wait...Loading Data.."
		});
		loader.present();
		console.log("retrieving retailer data")
		loader.present().then(() => {
			this.prodblkchainPvr.getHistoryForProduct(this.pnumber)
				.subscribe(data => {
					this.healthdata = data[0].Value;
					this.showhealthdata = true;
          let temp = data.filter(element => element.Value.healthID != "none");
          // let temp1 = temp.filter(element => element.Value.pnumber != );
          let saveIndex = 0;
					this.prescriptionData = temp.map( (element ,index) => {
            element.Value.doctorid ? saveIndex = index : '';
						let tempObj = {
							docType: element.Value.docType,
							healthID: element.Value.healthID,
							pname: element.Value.pname,
							pdata: element.Value.pdata || temp[saveIndex]['Value']['pdata'],
							gender: element.Value.gender,
							pnumber: element.Value.pnumber,
							medicinedelivered: element.Value.medicinedelivered,
							doctorid: element.Value.doctorid || temp[saveIndex]['Value']['doctorid'],
							loc: element.Value.loc ,
							dname: element.Value.dname || temp[saveIndex]['Value']['dname'],
              				docOrg: element.Value.docOrg || temp[saveIndex]['Value']['docOrg'],
              				pharmacyname: element.Value.pharmacyname,
							Timestamp: element.Timestamp
            };
            return tempObj;
          }).reverse();
          console.log(this.prescriptionData)
          // localStorage.setItem('docid',this.prescriptionData[1].doctorid);
          // this.temp1= localStorage.getItem('docid');
          // localStorage.setItem('dnam',this.prescriptionData[1].dname);
          // this.temp2= localStorage.getItem('dnam');
          // localStorage.setItem('docOr',this.prescriptionData[1].docOrg);
          // this.temp3= localStorage.getItem('docOr');
          // localStorage.setItem('pdat',this.prescriptionData[1].pdata);
          // this.temp4= localStorage.getItem('pdat');
					loader.dismiss();
					
				})
		})
	}
	savedetails() {
		if (this.transportation == undefined || this.logistics == undefined || this.location == undefined) {
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
				.subscribe(res => {
					if (res == 'failure') {
						//alert("Unable to transfer")
						this.showSaveToast("Unable to transfer", 3000);
						loader.dismiss()
						this.viewCtrl.dismiss();
					}
					else {	//	alert('transferred suceesfully')
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
  openModal(pdata) {
		this.navCtrl.push(PrescriptionDetailsPage, { pdata: pdata });
	
	   
	  }
	closeModal() {
		this.viewCtrl.dismiss();
	}

}
