import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hms-button',
  templateUrl: './hms-button.component.html',
  styleUrls: ['./hms-button.component.css']
})
export class HmsButtonComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() buttonText:String = "";
  @Output() clickedHmsBtn: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
  }
  onBtnClick(){
    this.clickedHmsBtn.emit(true)
  }
}
