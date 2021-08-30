import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {
    path : '',
    component : AppComponent,
    children : [
      {
        path : 'units',
        loadChildren: () => import('./units/units.module').then(m => m.UnitsModule)
      },
      {
        path : 'bosses',
        loadChildren: () => import('./bosses/bosses.module').then(m => m.BossesModule)
      },
      {
        path : 'items',
        loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
