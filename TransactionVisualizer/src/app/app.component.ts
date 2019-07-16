import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { DistributorPage  } from '../pages/distributor/distributor';
import { RetailerPage } from '../pages/retailer/retailer';
import { DistributorTransferPage } from '../pages/distributor-transfer/distributor-transfer';
import { CustomsPage } from '../pages/customs/customs';
import { CustomsDetailsPage } from '../pages/customs-details/customs-details';
import { ManufacturerPage  } from '../pages/manufacturer/manufacturer';
import { ManufacturerTransferPage   } from '../pages/manufacturer-transfer/manufacturer-transfer';
import { CreateCustomerPage  } from '../pages/create-customer/create-customer';
import { DistributorCenterPage } from '../pages/distributor-center/distributor-center';
import { TransactionVisualizerPage  } from '../pages/transaction-visualizer/transaction-visualizer';
import { NewOrdersPage } from '../pages/new-orders/new-orders';
import { DistributionCenterTransferPage } from '../pages/distribution-center-transfer/distribution-center-transfer';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TransactionVisualizerPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
