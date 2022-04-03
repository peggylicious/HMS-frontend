import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorsService } from 'src/app/services/doctors.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-time-slots',
  templateUrl: './time-slots.component.html',
  styleUrls: ['./time-slots.component.css']
})
export class TimeSlotsComponent implements OnInit {

  constructor(private stateService: StateService,
    private doctorService: DoctorsService, private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
   }
   doctor: any;
   selectedMonth: any;
   selectedYear: any;
   selectedDay: any;
   selectedDate: any;
   computeDate: string;
   doctAppointmentSchedule: any;
   appointmentDays: any;
   days_of_week: any[] = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
   days_array: any[] = [];
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
  ngOnInit(): void {
    // console.log(this.router.getCurrentNavigation());
    this.getTimeSlot()
    this.setAppointmentYear(this.selectedYear)
  }
  getTimeSlot(){
    console.log(JSON.parse(localStorage.getItem('appointmentDetails') || '{}').fullDate.split('-')[0])
    this.selectedYear = history.state.fullDate !== undefined ? history.state?.fullDate.split('-')[0] :  JSON.parse(localStorage.getItem('appointmentDetails') || '{}').fullDate.split('-')[0]
    this.selectedMonth = history.state.fullDate !== undefined? history.state?.fullDate.split('-')[1] : JSON.parse(localStorage.getItem('appointmentDetails') || '{}').fullDate.split('-')[1];
    this.selectedDay = history.state.fullDate !== undefined? history.state?.fullDate.split('-')[2] : JSON.parse(localStorage.getItem('appointmentDetails') || '{}').fullDate.split('-')[2];
    this.doctor = JSON.parse(localStorage.getItem('doctor') || '{}');
    // history.s
    console.log(this.selectedMonth)
    // this.selectedDate = new Date(`${this.selectedYear}-${this.selectedMonth}-`)
    this.selectedDate = history.state.fullDate || JSON.parse(localStorage.getItem('appointmentDetails') || '{}').fullDate
    this.computeDate = `${this.days_of_week[new Date(this.selectedDate).getDay()]} ${this.selectedDay}, ${this.mL[new Date(this.selectedDate).getMonth()]}`
    
  }


  setAppointmentYear(year: any) {
    this.selectedYear = year
    console.log(this.selectedYear, "Year", this.selectedMonth, "Months")
    this.doctorService
      .getAppointment(this.selectedMonth, this.selectedYear, this.doctor._id)
      .subscribe({
        next: (appo) => {
          console.log("Hello ", appo);
          this.doctAppointmentSchedule = appo;
          // this.appointmentDays = this.doctAppointmentSchedule.map((x: any) => {
          //   //Get day of appointment and put it in a new array
          //   let newObj = {
          //     // date: x.date,
          //     date: Number(x.date.split('-')[2]),
          //     day: new Date(x.date).getDay(),
          //   };
          //   return newObj;
          //   // return Number(x.date.split('-')[2]); // e.g. date is 2022-05-23 i.e yyyy-mm-dd
          // });
          // this.appointmentDays.sort(function (a: any, b: any) {
          //   //Sort array in ascending order
          //   return a.day - b.day; // Sort days by ascending number
          // });
          this.appointmentDays = this.doctAppointmentSchedule.filter((appointment:any ) => {
            console.log("App date ", history.state.fullDate, appointment.date)
            
            if(appointment.date === history.state.fullDate || appointment.date === JSON.parse(localStorage.getItem('appointmentDetails') || '{}').fullDate){
              console.log("App date ", appointment.date)
              return appointment
            }
          })

          console.log(this.appointmentDays);
        },
        error: (err) => console.log(err),
      });
  }
  chooseAppointmentTime(){
    console.log("Time")
  }
}
