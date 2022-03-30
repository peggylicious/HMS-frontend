import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeSlotsComponent } from './pages/time-slots/time-slots.component';
import { ViewDoctorDetailsComponent } from './pages/view-doctor-details/view-doctor-details.component';
import { PatientDoctorComponent } from './patient-doctor.component';

const routes: Routes = [{ path: '', component: PatientDoctorComponent, children: [
  { path: 'view-doctor-details', component: ViewDoctorDetailsComponent },
  {path: 'set-appointment', component: TimeSlotsComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientDoctorRoutingModule { }
