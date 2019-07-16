import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrescriptionDetailsPage } from './Prescription-details';

@NgModule({
  declarations: [
    PrescriptionDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PrescriptionDetailsPage),
  ],
})
export class PrescriptionDetailsPageModule {}
