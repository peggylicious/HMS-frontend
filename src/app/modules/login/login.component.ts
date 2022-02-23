import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }
  loginForm = this.fb.group({
    firstName: ['',]
  })
  // login(){
  //   this.authService.login().subscribe(d=> console.log(d))
  // }
}
