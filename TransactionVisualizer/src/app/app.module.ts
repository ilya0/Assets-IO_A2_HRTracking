import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { DistributorPage } from '../pages/distributor/distributor';
import { RetailerPage } from '../pages/retailer/retailer';
import { DistributorTransferPage } from '../pages/distributor-transfer/distributor-transfer';
import { CustomsPage } from '../pages/customs/customs';
import { CustomsDetailsPage } from '../pages/customs-details/customs-details';
import { ManufacturerPage } from '../pages/manufacturer/manufacturer';
import { ManufacturerTransferPage } from '../pages/manufacturer-transfer/manufacturer-transfer';
import { CreateCustomerPage } from '../pages/create-customer/create-customer';
import { DistributorCenterPage } from '../pages/distributor-center/distributor-center';
import { TransactionVisualizerPage } from '../pages/transaction-visualizer/transaction-visualizer';
import { NewOrdersPage } from '../pages/new-orders/new-orders';
import { DistributionCenterTransferPage } from '../pages/distribution-center-transfer/distribution-center-transfer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ProductBlockchainProvider } from '../providers/product-blockchain/product-blockchain';

import { PrescriptionDetailsPage } from '../pages/Prescription-details/Prescription-details';
import { PrescHistPage } from '../pages/presc-hist/presc-hist';
@NgModule({
	declarations: [
		MyApp,
		HomePage,
		ListPage,
		LoginPage,
		DistributorPage,
		RetailerPage,
		DistributorTransferPage,
		CustomsPage,
		CustomsDetailsPage,
		ManufacturerPage,
		ManufacturerTransferPage,
		CreateCustomerPage,
		DistributorCenterPage,
		TransactionVisualizerPage,
		NewOrdersPage,
		DistributionCenterTransferPage,
		PrescriptionDetailsPage,
		PrescHistPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp, {
			scrollPadding: false
		}),
		HttpClientModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		ListPage,
		LoginPage,
		DistributorPage,
		RetailerPage,
		DistributorTransferPage,
		CustomsPage,
		CustomsDetailsPage,
		ManufacturerPage,
		ManufacturerTransferPage,
		CreateCustomerPage,
		DistributorCenterPage,
		TransactionVisualizerPage,
		NewOrdersPage,
		DistributionCenterTransferPage,
		PrescriptionDetailsPage,
		PrescHistPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		AuthServiceProvider,
		ProductBlockchainProvider
	]
})
export class AppModule { }
