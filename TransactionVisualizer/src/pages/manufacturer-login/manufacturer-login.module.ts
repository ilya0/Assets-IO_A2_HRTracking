import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManufacturerLoginPage } from './manufacturer-login';

@NgModule({
  declarations: [
    ManufacturerLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(ManufacturerLoginPage),
  ],
})
export class ManufacturerLoginPageModule {}
