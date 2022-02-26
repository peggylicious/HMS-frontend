import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}
  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });
  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },error: (err)=>{
        console.log(err)
      }
    });
  }
}
