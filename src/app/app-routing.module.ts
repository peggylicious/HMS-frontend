import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TryComponent } from './components/try/try.component';
import { ViewDoctorDetailsComponent } from './modules/patient-doctor/pages/view-doctor-details/view-doctor-details.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'fix-appointment',
    loadChildren: () =>
      import('./patient/patient.module').then((m) => m.PatientModule),
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'try',
    component: PatientComponent
  },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  {path: 'appointments', component: TryComponent},
  { path: 'patient', loadChildren: () => import('./modules/patient-doctor/patient-doctor.module').then(m => m.PatientDoctorModule) },
  { path: 'doctor', loadChildren: () => import('./modules/doctor/doctor.module').then(m => m.DoctorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
