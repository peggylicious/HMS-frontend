import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TryComponent } from './components/try/try.component';

const routes: Routes = [
  {
    path: 'patient',
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
    component: TryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
