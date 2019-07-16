import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomsPage } from './customs';

@NgModule({
  declarations: [
    CustomsPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomsPage),
  ],
})
export class CustomsPageModule {}
