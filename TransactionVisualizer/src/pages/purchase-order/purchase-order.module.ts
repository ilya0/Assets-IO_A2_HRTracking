import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseOrderPage } from './purchase-order';

@NgModule({
  declarations: [
    PurchaseOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseOrderPage),
  ],
})
export class PurchaseOrderPageModule {}
