import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisTabsPage } from './mis-tabs';
import { InicioPage } from '../inicio/inicio';

@NgModule({
  declarations: [
    MisTabsPage,
    InicioPage,
  ],
  imports: [
    IonicPageModule.forChild(MisTabsPage),
  ]
})
export class MisTabsPageModule {}
