import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  patientDetails = this.fb.group({
    // firstname: [''],
    firstname: [''],
    lastname: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });

  bookAppointment(){
    
  }
}
