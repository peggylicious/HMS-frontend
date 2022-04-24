import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(data: any){
    console.log(data)
    return this.http.post('http://localhost:3000/user/patient/signup', data)
    // return this.http.post('https://peggy-hms-api.herokuapp.com/user/patient/signup', data)
  }

  login(data: any){
    let token = localStorage.getItem('token')
    const headers = new HttpHeaders({ "Authorization": "Bearer "+token});
    console.log(data)
    return this.http.post('http://localhost:3000/user/patient/login', data, {headers: {"Authorization": "Bearer "+token}})
    // return this.http.post('https://peggy-hms-api.herokuapp.com/user/patient/login', data)
  }
}
