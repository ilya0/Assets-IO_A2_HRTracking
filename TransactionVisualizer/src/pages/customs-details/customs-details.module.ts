import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomsDetailsPage } from './customs-details';

@NgModule({
  declarations: [
    CustomsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomsDetailsPage),
  ],
})
export class CustomsDetailsPageModule {}
