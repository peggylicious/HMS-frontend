import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private spinner: NgxSpinnerService, private router: Router, private activatedRoute: ActivatedRoute
    
  ) {}

  ngOnInit(): void {
    // this.spinner.show();
  }
  registerForm = this.fb.group({
    // firstname: [''],
    name: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });
  login() {
    let x = this.registerForm.value;
    // this.spinner.show();
    this.authService.login(x).subscribe({
      next: (a) => {
        console.log('A ', a);
        this.spinner.hide();
        this.router.navigate(['/login'])
      },
      error: (err) => {
        console.log(err.error.message);
        this.spinner.hide();
      },
    });
  }
}
