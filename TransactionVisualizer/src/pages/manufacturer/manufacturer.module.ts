import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManufacturerPage } from './manufacturer';

@NgModule({
  declarations: [
    ManufacturerPage,
  ],
  imports: [
    IonicPageModule.forChild(ManufacturerPage),
  ],
})
export class ManufacturerPageModule {}
