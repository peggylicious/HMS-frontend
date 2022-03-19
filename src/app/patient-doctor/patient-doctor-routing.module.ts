import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDoctorComponent } from './patient-doctor.component';

const routes: Routes = [{ path: '', component: PatientDoctorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientDoctorRoutingModule { }
