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
  getMonthlyAppointment(month:any, year:any, id:string){
    return this.http.get<any[]>(`https://peggy-hms-api.herokuapp.com/doctors/my-appointment/${id}/?year=${year}&month=${month}`)
  }
  setAppointment(appointment:any){
    return this.http.post('http://localhost:3000/doctors/appointment', appointment)
  }

}
