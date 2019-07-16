import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ProductDetailsPage } from '../product-details/product-details';
 import { DistributorPage  } from '../distributor/distributor';
import { RetailerPage } from '../retailer/retailer';
import { CustomsPage } from '../customs/customs';
import { ManufacturerPage } from '../manufacturer/manufacturer';
import { DistributorCenterPage } from '../distributor-center/distributor-center';
import { TransactionVisualizerPage  } from '../transaction-visualizer/transaction-visualizer';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
 
  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 
  public createAccount() {
    this.nav.push('RegisterPage');
  }
 
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
		console.log(this.auth.currentUser);
      if (allowed) {   
if(this.auth.currentUser.email == 'distributor@winsupply.com'){	  
        this.nav.setRoot(DistributorPage);
}
else if(this.auth.currentUser.email == 'retailer@nordstorm.com'){	  
        this.nav.setRoot(RetailerPage);
}
else if(this.auth.currentUser.email == 'customs@nationalwide.com'){	  
        this.nav.setRoot(CustomsPage);
}
else if(this.auth.currentUser.email == 'manufacturer@givenchy.com'){	  
        this.nav.setRoot(ManufacturerPage);
}
else if(this.auth.currentUser.email == 'distributorcenter@prologis.com'){	  
        this.nav.setRoot(DistributorCenterPage);
}
else if(this.auth.currentUser.email == 'admin@hhs.com'){	  
        this.nav.setRoot(TransactionVisualizerPage);
}
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    
  }
}