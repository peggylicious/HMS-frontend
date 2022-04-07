import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  show: boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  bookAppointment(x: any){
    console.log("From Appointments Component", x)
    this.show = x
  }
}
