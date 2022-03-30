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
  days_of_week: any[] = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
  days_array: any[] = [];
  days_array_obj: any[] = [];
  mL = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  appointmentCalendar: any = {};
  yL = ['2021', '2022'];
  ngOnInit(): void {
    // this.doctor = JSON.parse(localStorage.getItem('doctor'))
    this.getItem();
    this.getSunday();
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
          console.log(appo);
          this.doctAppointmentSchedule = appo;
          this.appointmentDays = this.doctAppointmentSchedule.map((x: any) => {
            //Get day of appointment and put it in a new array
            let newObj = {
              // date: x.date,
              date: Number(x.date.split('-')[2]),
              day: new Date(x.date).getDay(),
            };
            return newObj;
            // return Number(x.date.split('-')[2]); // e.g. date is 2022-05-23 i.e yyyy-mm-dd
          });
          this.appointmentDays.sort(function (a: any, b: any) {
            //Sort array in ascending order
            return a.day - b.day; // Sort days by ascending number
          });

          console.log(this.appointmentDays);
        },
        error: (err) => console.log(err),
      });
  }

  getSunday() {
    // get month
    this.appointmentCalendar.month = this.mL[new Date().getMonth()];
    this.appointmentCalendar.year = new Date().getFullYear() + '';
    console.log(this.appointmentCalendar);
    // let days_of_week = [];
    for (let i = 0; i <= 6; i++) {
      let currentDay = new Date();
      //let days_of_week = [];
      if (i < currentDay.getDay()) {
        //let getNext = currentDay.getDate() - (currentDay.getDay() - i)
        let getPrev = new Date(
          currentDay.setDate(currentDay.getDate() - (i + 1))
        );
        this.days_array.push(getPrev);
        this.days_array_obj.push({
          date: getPrev.getDate(),
          day: getPrev.getDay(),
          fullDate: `${getPrev.getFullYear()}-${
            (getPrev.getMonth() + 1 < 10 ? '0' + getPrev.getMonth() : getPrev.getMonth())
          }-${getPrev.getDate() < 10 ? '0'+ getPrev.getDate() : getPrev.getDate()}}`, //yy-mm-dd
        });
      } else if (i > currentDay.getDay()) {
        let getNext = new Date(
          currentDay.setDate(currentDay.getDate() + (i - currentDay.getDay()))
        );
        this.days_array.push(getNext);
        this.days_array_obj.push({
          date: getNext.getDate(),
          day: getNext.getDay(),
          fullDate: `${getNext.getFullYear()}-${
            getNext.getMonth() + 1 < 10
              ? '0' + (getNext.getMonth() + 1)
              : getNext.getMonth() + 1
          }-${getNext.getDate() < 10 ? '0'+ getNext.getDate() : getNext.getDate()}}`,
        });
      } else {
        this.days_array.push(currentDay);
        // this.days_array_obj.push({date: currentDay.getDate(), day: this.days_of_week[currentDay.getDay()]})
        this.days_array_obj.push({
          date: currentDay.getDate(),
          day: currentDay.getDay(),
          fullDate: `${currentDay.getFullYear()}-${
            (currentDay.getMonth() + 1 < 10 ? '0' + currentDay.getMonth() : currentDay.getMonth())
          }-${currentDay.getDate() < 10 ? '0'+ currentDay.getDate() : currentDay.getDate()}}`,
        });
      }
      this.days_array_obj.sort(function (a: any, b: any) {
        //Sort array in ascending order
        return a.day - b.day; // Sort days by ascending number
      });
    }
    console.log(this.days_array_obj);
  }
}
