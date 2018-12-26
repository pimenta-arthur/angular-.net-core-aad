import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DataService } from '../services/data.service';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Router } from './app.router';
import { Adal5HTTPService, Adal5Service } from 'adal-angular5';
import { LoggedInGuard } from './authentication/loggedInGuard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Router,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    DataService,
    Adal5Service,
    LoggedInGuard,
    { 
      provide: Adal5HTTPService, 
      useFactory: Adal5HTTPService.factory, 
      deps: [HttpClient, Adal5Service] 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
