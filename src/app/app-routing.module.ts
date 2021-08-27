import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'unit-list',
    loadChildren: () => import('./pages/units/unit-list/unit-list.module').then( m => m.UnitListPageModule)
  },
  {
    path: 'unit-info',
    loadChildren: () => import('./pages/units/unit-info/unit-info.module').then( m => m.UnitInfoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
