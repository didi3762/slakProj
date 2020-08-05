import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChetComponent } from './comps/chet/chet.component';
import { SigininComponent } from './comps/siginin/siginin.component';
import { CanActivate } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SlakServiceService } from './services/slak-service.service';
import { HomeComponent } from './comps/home/home.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';

import { ReactiveFormsModule } from '@angular/forms';
import { reducerUser } from './services/ngrx/event';

@NgModule({
  declarations: [
    AppComponent,
    ChetComponent,
    SigininComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    StoreModule.forRoot( 
      {users:reducerUser},
       {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })

  ],
  providers: [
   SlakServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


