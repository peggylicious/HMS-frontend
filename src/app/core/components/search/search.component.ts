import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  searchForm = this.fb.group({
    firstname: [''],
  });
  @Output() searchEvent = new EventEmitter();
  ngOnInit(): void {
  }
  // onSearch(event: string){
  onSearch(){
    console.log(this.searchForm.value)
    this.searchEvent.emit(this.searchForm.value)
  }
}
