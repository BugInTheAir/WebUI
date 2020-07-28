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
  user = new User();
  private path = 'user';
  private storage: Storage;
  StatusDecription: string;
  constructor(private http: HttpClient, private auth: AuthService) { }
  Register(user: User, callback) {
    this.http.post('http://52.163.93.79/user_svc/api/user', user).subscribe((response) => {
      const status = response as IStatus;
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
      this.auth.setToken(token.access_token);
      if (token.access_token.length == null) {
        callback.SetState();
      }
      callback.Log();
    });
  }
  getUser(callback) {
    this.http.get('http://52.163.93.79/user_svc/api/user/profile').subscribe((response) => {
      callback.user = response;
    });
  }
  getOrders(callback) {
    this.http.get('http://52.163.93.79/user_svc/api/user/orders').subscribe((response) => {
      console.log(response);
      callback.orders = response;
    })
  }
  getOrderDetail(id, callback) {
    this.http.get('http://52.163.93.79/user_svc/api/user/' + id + '/detail').subscribe((response) => {
      console.log(response);
    })
  }
  changeInfor(user: User, callback) {
    this.http.put('http://52.163.93.79/user_svc/api/user', user).subscribe((response) => {
      console.log(response);
      callback.displayModal = false;
    })
  }
}
