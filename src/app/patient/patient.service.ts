import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}
  searchDoctor(data: any) {
    let params = new HttpParams().set("firstname",data.firstname)
    // params.append('firstname', data);
    return this.http.get('https://peggy-hms-api.herokuapp.com/doctors/doctor', {params: params});
  }
}
