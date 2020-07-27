import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'app/models/user';
import { IStatus } from 'app/models/istatus';
import { UserToken } from 'app/models/user-token';
import { env } from "./enviroment";
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private path = 'user';
  private storage: Storage;
  StatusDecription: string;
  constructor(private http: HttpClient, private auth: AuthService) { }
  Register(user: User, callback) {
    this.http.post('http://52.163.93.79/user_svc/api/user', user).subscribe((response) => {
      console.log(response);
      console.log(user);
      let status = response as IStatus;
      if (status.StatusCode === 201) {
        callback.RegisterSucess(status.StatusDescription);
      }
      else {
        callback.RegisterFail(status.StatusDescription);
      }
      console.log('Description', status.StatusDescription);
    });
  }
  Authentication(userName, password, callback) {
    const body = 'username=' + userName + '&password=' + password + '&grant_type=password';
    this.http.post('http://52.163.93.79/user_svc/api/token', body).subscribe((response) => {
      const token = response as UserToken;
      console.log(response);
      this.auth.setToken(token.access_token);
      console.log(token.access_token);
      if (token.access_token === null) {
        callback.Log(false);
      }
      callback.Log(true);
    })
  }
  getUser(callback) {
    this.http.get('http://52.163.93.79/user_svc/api/user/profile').subscribe((response) => {
      callback.user = response;
    })
  }
  checkingOrders(callback) {
    this.http.get('http://52.163.93.79/user_svc/api/user/orders').subscribe((response) => {
      console.log(response);
      callback.orders = response;
    })
  }
}
