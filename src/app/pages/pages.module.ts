import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AppComponent } from '../app.component';
import { UnitsModule } from './units/units.module';
import { BossesModule } from './bosses/bosses.module';
import { ItemsModule } from './items/items.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UnitsModule,
    BossesModule,
    ItemsModule,
  ]
})
export class PagesModule { }
