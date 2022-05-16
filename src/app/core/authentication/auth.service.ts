import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}
  isAuthenticated(): boolean {
    const token:any = localStorage.getItem('access_token');
    // Check if token is expired and return
    // true or false
    console.log("Helper is ", !this.jwtHelper.isTokenExpired(token))
    return !this.jwtHelper.isTokenExpired(token);
  }
  signup(data: any) {
    console.log(data);
    return this.http.post('http://localhost:3000/user/signup', data);
    // return this.http.post('https://peggy-hms-api.herokuapp.com/user/patient/signup', data)
  }

  login(data: any) {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + token });
    console.log(data);
    console.log(!this.jwtHelper.decodeToken());

    return this.http.post('http://localhost:3000/user/login', data);
    // return this.http.post('https://peggy-hms-api.herokuapp.com/user/patient/login', data)
  }
}
