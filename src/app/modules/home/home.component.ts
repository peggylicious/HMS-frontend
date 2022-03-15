import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/patient/patient.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private patientService: PatientService,
    private fb: FormBuilder
  ) {}
  searchForm = this.fb.group({
    firstname: [''],
  });
  doctors: { firstname: String; lastname: String }[];
  showDoctorSearch: boolean = true;
  selectedDoctor: any;
  ngOnInit(): void {}

  searchDoctor(event: {firstname: String}) {
    if(event.firstname === ""){
      console.log("Str")
      this.showDoctorSearch = false;
      // event = new Error("No")
      return
    }
    this.patientService.searchDoctor(event).subscribe({
      next: (response: any) => {
        console.log(response);
        this.doctors = response.doctors;
        this.showDoctorSearch = true;

        // localStorage.setItem('token', response.token);
        // this.spinner.hide();
        // this.router.navigate(['/home']);
      },
      error: (err) => {
        // this.authFailed = false;
        // this.authErrorMsg = '';
        // if (err.error.length > 0) {
        //   this.authFailed = true;
        //   this.authErrorMsg = err.error[0].msg;
        //   console.log(this.authErrorMsg);
        // } else {
        //   this.authFailed = true;
        //   this.authErrorMsg = err.error.message;
        //   console.log(err);
        // }
        // this.spinner.hide();
      },
    });
  }
  displayDoctorDetails(x: any) {
    console.log('hi');
    this.showDoctorSearch = !this.showDoctorSearch;
    this.selectedDoctor = x;
  }
}
