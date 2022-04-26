import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient) { }
  getDoctors(){
    // console.log(data)
    return this.http.get('http://localhost:3000/doctors/all')
  }
  getAppointment(month:string, year:string, id:string){
    return this.http.get(`https://peggy-hms-api.herokuapp.com/doctors/my-appointment/${id}/?year=${year}&month=${month}`)
  }

}
