import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCustomerPage } from './create-customer';

@NgModule({
  declarations: [
    CreateCustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateCustomerPage),
  ],
})
export class CreateCustomerPageModule {}
