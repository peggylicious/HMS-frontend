import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { DoctorViewCardComponent } from './components/doctor-view-card/doctor-view-card.component';
import { HmsButtonComponent } from './components/hms-button/hms-button.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';


@NgModule({
  declarations: [
    SharedComponent,
    DoctorViewCardComponent,
    HmsButtonComponent,
    HeaderComponent, 
    SharedHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ], 
  exports: [
    DoctorViewCardComponent, 
    HmsButtonComponent,
    SharedHeaderComponent
  ]
})
export class SharedModule { }
