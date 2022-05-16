import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  constructor(private fb: FormBuilder, private doctorservice: DoctorsService) {}
  appointmentForm = this.fb.group({
    date: [''],
    time: [''],
    doctor_id:['']
  });
  doctor: any;
  ngOnInit(): void {
    this.getDoctor()
  }
  setAppointment() {
    this.appointmentForm.value.doctor_id = this.doctor._id
    console.log(this.appointmentForm.value)
    let appointmentPayload = this.appointmentForm.value
    this.doctorservice.setAppointment(appointmentPayload).subscribe({
      next: (result) => {console.log(result)},
      error: () => {},
    });
  }
  getDoctor(){
    this.doctor = JSON.parse(localStorage.getItem('doctor') || '{}');
  }
}
