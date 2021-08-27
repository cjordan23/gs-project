import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitInfoPage } from './unit-info.page';

const routes: Routes = [
  {
    path: '',
    component: UnitInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitInfoPageRoutingModule {}
