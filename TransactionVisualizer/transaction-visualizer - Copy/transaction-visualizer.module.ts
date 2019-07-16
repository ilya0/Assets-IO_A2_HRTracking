import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionVisualizerPage } from './transaction-visualizer';

@NgModule({
  declarations: [
    TransactionVisualizerPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionVisualizerPage),
  ],
})
export class TransactionVisualizerPageModule {}
