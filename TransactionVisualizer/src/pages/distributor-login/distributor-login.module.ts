import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistributorLoginPage } from './distributor-login';

@NgModule({
  declarations: [
    DistributorLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(DistributorLoginPage),
  ],
})
export class DistributorLoginPageModule {}
