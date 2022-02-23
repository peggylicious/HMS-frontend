import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', ]
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }
  registerForm = this.fb.group({
    // firstname: [''],
    name: [""], 
    email: [''],
    password: [''],
    confirmPassword: ['']
  })
  login(){
    let x = this.registerForm.value
    console.log(x)
    // this.authService.login(x).subscribe(d=> console.log(d));
    this.authService.login(x).subscribe({next: (a) => {console.log("A ",a)}, error: err => console.log(err.error.message)})
  }
}
