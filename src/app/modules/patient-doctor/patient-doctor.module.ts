import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDoctorRoutingModule } from './patient-doctor-routing.module';
import { PatientDoctorComponent } from './patient-doctor.component';
import { ViewDoctorDetailsComponent } from './pages/view-doctor-details/view-doctor-details.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimeSlotsComponent } from './pages/time-slots/time-slots.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';

@NgModule({
  declarations: [
    PatientDoctorComponent,
    ViewDoctorDetailsComponent,
    TimeSlotsComponent,
    PatientDetailsComponent,
  ],
  imports: [
    CommonModule,
    PatientDoctorRoutingModule, 
    CoreModule,
    SharedModule
  ]
})
export class PatientDoctorModule { }
