import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MissaoPage } from './missao';

@NgModule({
  declarations: [
    MissaoPage,
  ],
  imports: [
    IonicPageModule.forChild(MissaoPage),
  ],
})
export class MissaoPageModule {}
