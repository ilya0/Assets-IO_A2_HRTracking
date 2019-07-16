import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
 @ViewChild(Slides) slides: Slides;
 imageslides: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	 this.imageslides = [{ image: "../../assets/imgs/ProductImages/_103401668.jpg" },{ image: "../../assets/imgs/ProductImages/_103401989.jpg" },{ image: "../../assets/imgs/ProductImages/_103402004.jpg" }] 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

}
