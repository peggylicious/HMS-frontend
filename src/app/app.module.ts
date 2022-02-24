import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from 'ngx-spinner';

import { TryComponent } from './components/try/try.component';
@NgModule({
  declarations: [
    AppComponent,
    TryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    NgxSpinnerModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  exports: [NgxSpinnerModule]
})
export class AppModule { }
