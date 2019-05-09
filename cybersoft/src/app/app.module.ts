import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Demo2Module } from './demo2/demo2.module';



@NgModule({
  declarations: [
    AppComponent
 
  ],
  imports: [
    BrowserModule,
    Demo2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
