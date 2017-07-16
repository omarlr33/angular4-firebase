import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
//import {APP_BASE_HREF} from '@angular/common';

// Router
import {routing} from './app.routing';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth/auth-guard.service'

// firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

// Environments
import {environment} from '../environments/environment';
import { FontTitleDirective } from './directives/font-title.directive';


@NgModule({
  declarations: [
    AppComponent, NavComponent, PageNotFoundComponent, HomeComponent, FontTitleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
