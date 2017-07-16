import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from './services/api.service';

// Componentes
import { DashboardComponent } from './dashboard.component';
import { PhotoComponent } from './photo/photo.component';

// Modules
import {routing} from './dashboard.routing';

// Angular Material
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

// Firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';

//pipes
import {ListOrderPipe} from '../pipes/list-order.pipe';

//moment
import {MomentModule} from 'angular2-moment'


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    AngularFireDatabaseModule,
    MomentModule
  ],
  declarations: [DashboardComponent, PhotoComponent,ListOrderPipe],
  providers : [ApiService]
})
export class DashboardModule { }
