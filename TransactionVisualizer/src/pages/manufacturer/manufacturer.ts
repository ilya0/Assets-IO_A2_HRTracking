import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, AlertController, LoadingController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CustomsDetailsPage } from '../customs-details/customs-details';
import { LoginPage } from '../login/login';
import { ManufacturerTransferPage } from '../manufacturer-transfer/manufacturer-transfer';
import { ProductBlockchainProvider } from '../../providers/product-blockchain/product-blockchain';
import { NewOrdersPage } from '../new-orders/new-orders';

/**
 * Generated class for the ManufacturerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-manufacturer',
	templateUrl: 'manufacturer.html',
})
export class ManufacturerPage {
	username: any;
	pname: any;
	pid: any;
	pmaterial: any;
	mdate: any;
	plocation: any;
	pbrand: any;
	color: any;
	create: any;
	createProductarr: any;
	transferProductarr: any;
	pquotearr: any;
	isDisabled: boolean = false;
	productFromBlkChain: any;
	poid: any;
	ordernumber: any;
	owner: any;
	buyerid: any;
	neworders: any;
	poorders: any;
	ponumber: any;
	arrlength: any;
	purchaseorders: any;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider,
		public modalCtrl: ModalController, public toastCtrl: ToastController,
		private prodblkchainPvr: ProductBlockchainProvider, private alertCtrl: AlertController, public loadingCtrl: LoadingController, public viewCtrl: ViewController) {

		this.owner = 'Givenchy';
		this.neworders = true;
		this.create = false;


	}

	presentAlert(item) {
		let alert = this.alertCtrl.create({
			title: 'Notification!',
			subTitle: 'You have a new order',
			buttons: [{
				text: 'Cick to View',
				role: 'click',
				handler: () => {
					this.openNewOrders(item);
				}
			}]
		});
		alert.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ManufacturerPage');
		this.username = this.auth.currentUser.name;


	}

	ionViewWillLoad() {
		let loader = this.loadingCtrl.create({
			content: "Please Wait...Loading Data.."
		});
		loader.present();

		console.log("retrieving manufacturer data")

		this.prodblkchainPvr.getProductDetailByOwner(this.owner)
			.subscribe(response => {
				console.log("Data retrieved Successfully", response)
				if (response != null) {

					this.productFromBlkChain = response;
					this.arrlength = Object.keys(this.productFromBlkChain);
					
				}

				loader.dismiss();
			})


	}

	showNewOrders() {
		this.openNewOrders(this.poorders);
	}

	openModal() {
		var modalPage = this.modalCtrl.create(CustomsDetailsPage, undefined, { cssClass: "modal-fullscreen" });
		modalPage.present();
	}

	public closeModal() {
		this.viewCtrl.dismiss();
	}

	openNewOrders(item) {

		var modalPage = this.modalCtrl.create(NewOrdersPage, { item: item }, { cssClass: "modal-screen" });
		modalPage.onDidDismiss(data => {
			this.ponumber = data;

		});
		modalPage.present();
	}

	logout() {
		this.auth.logout();
		this.navCtrl.push(LoginPage);
	}
	initProduct() {

		if (this.pname == undefined || this.pid == undefined || this.pbrand == undefined || this.mdate == undefined || this.pbrand == undefined || this.pmaterial == undefined || this.plocation == undefined || this.color == undefined) {
			let alert = this.alertCtrl.create({
				title: 'Error!',
				subTitle: 'Please fill all the required fields',
				buttons: ['OK']
			});
			alert.present();
		}
		else {


			let loader = this.loadingCtrl.create({
				content: "Creating Product"
			});
			loader.present();
			this.createProductarr = {
				'productid': this.pid,
				'poid': this.poid,
				'name': this.pname,
				'owner': this.owner,
				'pbrand': this.pbrand,
				'mfd': this.mdate,
				'pmaterial': this.pmaterial,
				'plocation': this.plocation,
				'color': this.color
			}

			loader.present().then(() => {
				this.prodblkchainPvr.createProduct(this.createProductarr)
					.subscribe(response => {

						console.log('creating data .....', response)
						if (response == 'failure') {
							this.showSaveToast("Error Saving Product. Check if Product ID exists", 3000);
							loader.dismiss();
						}
						else {
							this.create = false;
							this.isDisabled = false;
							console.log('created', response)
							//alert("created successfully")
							loader.dismiss();
							this.showSaveToast("Product Created", 3000);
							console.log('retrieving......')
							this.ionViewWillLoad();
							this.pname = "";
							this.pid = "";
							this.pmaterial = "";
							this.pbrand = "";
							this.color = "";
							this.plocation = "";
							this.mdate = "";
							this.ponumber = "";
							this.poid= "";
						}
					})
			})

		}
	}

	readPurchaseOrderfromERP(pquote) {
		let loader = this.loadingCtrl.create({
			content: "Please Wait...Loading Data.."
		});
		loader.present();

		this.prodblkchainPvr.readPurchaseOrderfromERP(pquote)
			.subscribe(response => {

				console.log('creating data .....', response.statusCode)
				if (response.statusCode == 500) {
					let alert = this.alertCtrl.create({
						title: 'Error!',
						subTitle: 'Order ID Not Found',
						buttons: ['OK']
					});
					alert.present();
				}
				else {
					this.purchaseorders = response.items;

					console.log("all orders ---" );
				}
				loader.dismiss();
			})
		
	}
	initPurchaseQuote(pquote) {
		console.log(pquote)
		this.pquotearr = {
			'ponumber': pquote.POHeaderId,
			'ordernumber': pquote.OrderNumber,
			'creationdate': pquote.CreationDate,
			'statuscode': pquote.StatusCode,
			'status': pquote.Status,
			'buyerid': pquote.BuyerId,
			'buyer': pquote.Buyer,
			'supplierid': pquote.SupplierId,
			'supplier': pquote.Supplier,
			'ordered': pquote.Ordered,
			'ccode': pquote.CurrencyCode,
			'currency': pquote.Currency,
			'totaltax': pquote.TotalTax,
			'total': pquote.Total,


		}
		let loader = this.loadingCtrl.create({
			content: "Please Wait...Loading Data.."
		});
		loader.present();
		this.prodblkchainPvr.initPurchaseQuote(this.pquotearr)
			.subscribe(response => {

				console.log('creating data .....', response)
				if (response == 'failure') {
					this.create = true;
					this.poid = this.pquotearr.ponumber;
				}
				else {
					this.create = true;
					this.poid = this.pquotearr.ponumber;
				}
				loader.dismiss();
			})
			

	}
	transferProduct(productTransferDetail) {
		//alert(this.ponumber);
		this.transferProductarr = {
			'productid': productTransferDetail.productid,
			'newowner': 'customs',
			'curowner': this.owner,
			'poheaderid': productTransferDetail.poheaderid,


		}
		var modalPage = this.modalCtrl.create(ManufacturerTransferPage, this.transferProductarr);
		modalPage.present();

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
}
