import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrescHistPage } from './presc-hist';

@NgModule({
  declarations: [
    PrescHistPage,
  ],
  imports: [
    IonicPageModule.forChild(PrescHistPage),
  ],
})
export class PrescriptionHistoryPageModule {}
