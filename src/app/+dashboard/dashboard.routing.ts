import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardComponent} from './dashboard.component';

export const dashboardRoutes: Routes = [
  {path: '', component: DashboardComponent}
];


// @NgModule({
//   imports: [RouterModule.forChild(dashboardRoutes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}

export const routing: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);

/* Estrategia Lazy loading
para cargar todos los modulos si se garnatiza siempre su utilida*/

