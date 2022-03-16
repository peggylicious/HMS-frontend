import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { DoctorViewCardComponent } from './components/doctor-view-card/doctor-view-card.component';


@NgModule({
  declarations: [
    SharedComponent,
    DoctorViewCardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ], 
  exports: [
    DoctorViewCardComponent
  ]
})
export class SharedModule { }
