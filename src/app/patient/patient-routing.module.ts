import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';

const routes: Routes = [{ path: '', component: PatientComponent }, {
  path: 'shared',
  loadChildren: () =>
    import('../shared/shared.module').then((m) => m.SharedModule),
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
