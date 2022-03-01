import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, activatedRoute: ActivatedRoute) {}
  public authFailed: boolean = false;
  public authErrorMsg: string;
  ngOnInit(): void {}
  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });
  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/']);

      },
      error: (err) => {
        this.authFailed = false;
        this.authErrorMsg = ""
        if (err.error.length > 0) {
          this.authFailed = true;
          this.authErrorMsg = err.error[0].msg;
          console.log(this.authErrorMsg)
        }else{
          this.authFailed = true;
          this.authErrorMsg = err.error.message;
          console.log(err);
        }
        
      },
    });
  }
}
