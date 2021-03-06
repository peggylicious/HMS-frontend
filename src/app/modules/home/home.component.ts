import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/patient/patient.service';
import { DoctorsService } from 'src/app/services/doctors.service';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private patientService: PatientService,
    private fb: FormBuilder, 
    private location: Location, 
    private doctorService: DoctorsService, 
    private stateService: StateService
  ) {}
  searchForm = this.fb.group({
    firstname: [''],
  });
  doctors: { firstname: String; lastname: String }[];
  allDoctors: any;
  showDoctorSearch: boolean = false;
  selectedDoctor: any;
  categories = [
    {
      title: 'Cardiology',
      pic: '../../../assets/images/home-categories/cardio.png',
    },
    {
      title: 'Orthopaedic',
      pic: '../../../assets/images/home-categories/ortho.png',
    },
    {
      title: "Dentist", 
      pic: "../../../assets/images/home-categories/dentist.png"
    }
  ];
  ngOnInit(): void {
    this.getDoctors()
  }

  searchDoctor(event: { firstname: String }) {
    
    // try {
      if (event.firstname === '') {
        console.log('Str');
        this.showDoctorSearch = !this.showDoctorSearch;
        let errorMsg = new Error("Empty search field");
        errorMsg.message = "New message"
        throw errorMsg
        return;
      }
    // } catch (error) {
    //   this.showDoctorSearch = !this.showDoctorSearch;
    //   return
    // }
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
        console.log(err)
        this.showDoctorSearch = false;

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
  changeLocation(){
    this.location.replaceState('/login');
  }

  getDoctors(){
    this.doctorService.getDoctors().subscribe({
      next: (x:any)=>{
        console.log(x)
        this.allDoctors = x.doctors
      }, 
      error: (err:any) =>{
        console.log(err)
      }
    })
  }
}
