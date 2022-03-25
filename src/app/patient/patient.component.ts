import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
dateForm = this.fb.group({
  date: [""], 
  time: ["",]
})
myDate:any = {
  date: "",
  time: []
};
// Backend logic
dateTime: any[] = [{year: "", month: "", day: ""}];
  ngOnInit(): void {
  }
  sendDate(){
    if(this.dateForm.value.date === "2022-03-21"){
      this.myDate.time.push(this.dateForm.value.time) 
    }else{
      this.myDate = {date:this.dateForm.value.date, time: this.dateForm.value.time }
    }
    
    console.log(this.dateForm.value)
    console.log(this.myDate)
  }
}
