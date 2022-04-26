import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { 
  AuthGuardService as AuthGuard 
} from "../../core/authentication/auth-guard.service"
const routes: Routes = [{ path: '', component: HomeComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
