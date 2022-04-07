import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { TimeSlotsComponent } from './pages/time-slots/time-slots.component';
import { ViewDoctorDetailsComponent } from './pages/view-doctor-details/view-doctor-details.component';
import { PatientDoctorComponent } from './patient-doctor.component';

const routes: Routes = [{ path: '', component: PatientDoctorComponent, children: [
  { path: 'view-doctor-details', component: ViewDoctorDetailsComponent },
  {path: 'set-appointment', component: TimeSlotsComponent}, 
  {path: 'book-appointment', component: PatientDetailsComponent},
  {path: 'create-appointment', component: AppointmentsComponent}

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientDoctorRoutingModule { }
