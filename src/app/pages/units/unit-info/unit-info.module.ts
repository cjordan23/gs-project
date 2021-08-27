import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitInfoPageRoutingModule } from './unit-info-routing.module';

import { UnitInfoPage } from './unit-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitInfoPageRoutingModule
  ],
  declarations: [UnitInfoPage]
})
export class UnitInfoPageModule {}
