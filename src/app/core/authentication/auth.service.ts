import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(data: any){
    console.log(data)
    return this.http.post('https://peggy-hms-api.herokuapp.com/user/patient/signup', data)
  }

  login(data: any){
    console.log(data)
    return this.http.post('https://peggy-hms-api.herokuapp.com/user/patient/login', data)
  }
}
