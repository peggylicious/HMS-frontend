import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-view-doctor-details',
  templateUrl: './view-doctor-details.component.html',
  styleUrls: ['./view-doctor-details.component.css'],
})
export class ViewDoctorDetailsComponent implements OnInit {
  constructor(
    private stateService: StateService,
    private doctorService: DoctorsService
  ) {}
  doctor: any;
  selectedMonth: any;
  selectedYear: any;
  doctAppointmentSchedule: any;
  appointmentDays: any;
  days_of_week: any[] = ['sun', 'mon', 'tue','wed', 'thur', 'fri', 'sat']
  ngOnInit(): void {
    // this.doctor = JSON.parse(localStorage.getItem('doctor'))
    this.getItem();
  }
  getItem() {
    this.doctor = JSON.parse(localStorage.getItem('doctor') || '{}');
  }
  bookAppointment() {
    console.log('book appointment');
  }
  setApppointmentMonth(month: any) {
    this.selectedMonth = month.value;
  }
  setAppointmentYear(year: any) {
    this.selectedYear = year.value;
    this.doctorService
      .getAppointment(this.selectedMonth, this.selectedYear, this.doctor._id)
      .subscribe({
        next: (appo) => {
          console.log(appo)
          this.doctAppointmentSchedule = appo;
          this.appointmentDays = this.doctAppointmentSchedule.map((x: any) => { //Get day of appointment and put it in a new array
            let newObj = {
              // date: x.date,
              date: Number(x.date.split('-')[2]),
              day: new Date(x.date).getDay()
            }
            return newObj
            // return Number(x.date.split('-')[2]); // e.g. date is 2022-05-23 i.e yyyy-mm-dd
          });
          this.appointmentDays.sort(function (a:any, b:any) {//Sort array in ascending order
            return a.day - b.day; // Sort days by ascending number
          });

          console.log(this.appointmentDays);
        },
        error: (err) => console.log(err),
      });
  }
}
