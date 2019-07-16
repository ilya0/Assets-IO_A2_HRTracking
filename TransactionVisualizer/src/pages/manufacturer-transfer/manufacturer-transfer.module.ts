import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManufacturerTransferPage } from './manufacturer-transfer';

@NgModule({
  declarations: [
    ManufacturerTransferPage,
  ],
  imports: [
    IonicPageModule.forChild(ManufacturerTransferPage),
  ],
})
export class ManufacturerTransferPageModule {}
