import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Form } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  constructor( private fb: FormBuilder, private patientservice:PatientService) { }
  selectFemale: Boolean = false;
  selectMale: Boolean = false;
  doctor:any = localStorage.getItem('user_id')
  @Output() openBookAppointment = new EventEmitter();
  patientDetails = this.fb.group({
    // firstname: [''],
    firstname: [''],
    lastname: [''],
    date:[''],
    time: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
    gender: [''], 
    age: [''], 
    genderfemale: [''],
    phone: [''],
    appointment_date: [''],
    appointment_time: [''],
    requestedBy: localStorage.getItem('user_id'), 
    preferredDoctor: JSON.parse(localStorage.getItem('doctor') || '{}')
  });
  ngOnInit(): void {
  }
  addAge(age:string){
    this.patientDetails.controls["age"].patchValue(age);
  }

  bookAppointment(){
    this.patientservice.bookAppointmet(this.patientDetails.value).subscribe({
      next: (result) => {
        console.log(result)
      }, 
      error: () => {

      }
    })
  }
  checkBox(e: any){
    console.log(e.target.value)
    if (e.target.value === "female") {
      this.selectFemale = true;
      this.selectMale = false
    }else{
      this.selectFemale = false;
      this.selectMale = true
    }
  }
  bookAppointmentTime(){
    console.log("Hello")

  }
  goToTimeSlot(){
    this.openBookAppointment.emit(true)

  }
}
