import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ProductDetailsPage } from '../product-details/product-details';
 import { DistributorPage  } from '../distributor/distributor';
import { RetailerPage } from '../retailer/retailer';
import { CustomsPage } from '../customs/customs';
import { ManufacturerPage } from '../manufacturer/manufacturer';
/**
 * Generated class for the ManufacturerLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manufacturer-login',
  templateUrl: 'manufacturer-login.html',
})
export class ManufacturerLoginPage {
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
 if(this.auth.currentUser.email == 'manufacturer@nordstorm.com'){	  
        this.nav.setRoot(ManufacturerPage);
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
