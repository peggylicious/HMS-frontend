import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }
  bookAppointmet(appointment: any){
    // console.log(data)
    return this.http.post('http://localhost:3000/patient/book-appointment', appointment)
  }
}
