import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetailerPage } from './retailer';

@NgModule({
  declarations: [
    RetailerPage,
  ],
  imports: [
    IonicPageModule.forChild(RetailerPage),
  ],
})
export class RetailerPageModule {}
