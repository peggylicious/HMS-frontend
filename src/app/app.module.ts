import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from 'ngx-spinner';
import { CoreModule } from './core/core.module';

import { TryComponent } from './components/try/try.component';
import { SharedModule } from './shared/shared.module';
// import { DoctorViewCardComponent } from './shared/components/doctor-view-card/doctor-view-card.component';
@NgModule({
  declarations: [
    AppComponent,
    TryComponent,
    // DoctorViewCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    NgxSpinnerModule, 
    BrowserAnimationsModule, 
    CoreModule, 
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  exports: [NgxSpinnerModule]
})
export class AppModule { }
