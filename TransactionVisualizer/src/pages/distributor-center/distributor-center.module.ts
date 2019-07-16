import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistributorCenterPage } from './distributor-center';

@NgModule({
  declarations: [
    DistributorCenterPage,
  ],
  imports: [
    IonicPageModule.forChild(DistributorCenterPage),
  ],
})
export class DistributorCenterPageModule {}
