import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { formErrors } from 'src/app/core/models/authFormError';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  formErrors: { param: string; msg: string }[];
  formError: { message: '' };
  userExists: boolean;
  registerForm = this.fb.group({
    // firstname: [''],
    firstname: [''],
    lastname: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });
  public firstNameErrorMsg = {hasFirstname: false, message: ''}
  public lastNameErrorMsg = {hasLastName: false, message: ''}
  public emailErrorMsg = { hasEmail: false, message: '' };
  public passwordErrorMsg = { hasPassword: false, message: '' };

  ngOnInit(): void {
    // this.spinner.show();
  }



  signup() {
    let signupPayload = this.registerForm.value;
    this.spinner.show();
    this.firstNameErrorMsg = {hasFirstname: false, message: ''};
    this.lastNameErrorMsg = {hasLastName: false, message: ''}
    this.passwordErrorMsg = { hasPassword: false, message: '' };
    this.emailErrorMsg = { hasEmail: false, message: '' };
    this.authService.signup(signupPayload).subscribe({
      next: (a) => {
        console.log('A ', a);
        this.spinner.hide();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.formErrors = err.error;
        // if(Object.keys(this.formErrors[0]).length > 0){ // If error is an array of objects
        if (this.formErrors.length > 0) {
          console.log(this.formErrors);
          // If error is an array of objects
          this.formErrors.forEach((element) => {
            if (element.param === 'firstname') {
              this.firstNameErrorMsg.hasFirstname = true;
              this.firstNameErrorMsg.message = element.msg;
            }else if(element.param === 'lastname'){
              this.lastNameErrorMsg.hasLastName = true;
              this.lastNameErrorMsg.message = element.msg;
            }else if(element.param === 'email'){
              this.emailErrorMsg.hasEmail = true;
              this.emailErrorMsg.message = element.msg;
            } else if (element.param === 'password') {
              this.passwordErrorMsg.hasPassword = true;
              this.passwordErrorMsg.message = element.msg;
            } else {
              console.log(err);
            }
          });
        } else {
          this.userExists = true;
          this.formError = err.error;
        }
        console.log(this.formErrors);
        this.spinner.hide();
      },
    });
  }
}
