import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomsLoginPage } from './customs-login';

@NgModule({
  declarations: [
    CustomsLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomsLoginPage),
  ],
})
export class CustomsLoginPageModule {}
