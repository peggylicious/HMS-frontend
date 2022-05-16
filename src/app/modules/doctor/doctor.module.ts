import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule, 
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
