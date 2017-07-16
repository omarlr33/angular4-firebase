import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {AuthGuard} from './auth/auth-guard.service'


// hacer merge del router del dashboard
export const appRoutes: Routes = [
//  { path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', loadChildren: './+dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
  {path: '**', component: PageNotFoundComponent}

];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })

// export class AppRoutingModule {}
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });

// tslint:disable-next-line:max-line-length
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}); //Estrategia Lazy loading ////para cargar todos los modulos si se garnatiza siempre su utilida
