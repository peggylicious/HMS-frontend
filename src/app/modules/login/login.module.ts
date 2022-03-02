import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule, 
    ReactiveFormsModule, 
    NgxSpinnerModule
  ]
})
export class LoginModule { }
