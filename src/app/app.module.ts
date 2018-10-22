import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { AdalService } from 'adal-angular4';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule
  ],
  providers: [AdalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
