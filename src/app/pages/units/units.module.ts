import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { UnitListPage } from './unit-list/unit-list.page';
import { UnitInfoPage } from './unit-info/unit-info.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UnitListPage,
    UnitInfoPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitsRoutingModule
  ]
})
export class UnitsModule { }
