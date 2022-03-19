import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDoctorRoutingModule } from './patient-doctor-routing.module';
import { PatientDoctorComponent } from './patient-doctor.component';


@NgModule({
  declarations: [
    PatientDoctorComponent
  ],
  imports: [
    CommonModule,
    PatientDoctorRoutingModule
  ]
})
export class PatientDoctorModule { }
