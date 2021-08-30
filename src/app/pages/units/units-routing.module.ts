import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitInfoPage } from './unit-info/unit-info.page';
import { UnitListPage } from './unit-list/unit-list.page';

const routes: Routes = [
  {
    path : '',
    component : UnitListPage,
  },
  {
    path : 'unit-info/:unitId',
    component : UnitInfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitsRoutingModule { }
