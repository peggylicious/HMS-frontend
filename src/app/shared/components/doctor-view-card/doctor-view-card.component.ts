import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-doctor-view-card',
  templateUrl: './doctor-view-card.component.html',
  styleUrls: ['./doctor-view-card.component.css']
})
export class DoctorViewCardComponent implements OnInit {

  constructor(private router: Router, private stateService: StateService) { }
  @Input() doctorDetails: any;
  ngOnInit(): void {
    // localStorage.setItem("doctor", JSON.parse(this.doctorDetails))
  }
  viewDocDetails(){
    this.stateService.doctor = this.doctorDetails;
    console.log(this.stateService.doctor)
    localStorage.setItem("doctor", JSON.stringify(this.stateService.doctor))
    this.router.navigate(['/patient/view-doctor-details'])
    console.log("Hello")
  }
 
}
