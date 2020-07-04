import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'app/models/user';
import { IStatus } from 'app/models/istatus';
import { UserToken } from 'app/models/user-token';
import { env } from "./enviroment";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private path = "user";
  private storage: Storage;
  StatusDecription: string;
  constructor(private http: HttpClient) { }
  Register(user: User, callback) {
    this.http.post('http://cpharma.southeastasia.cloudapp.azure.com/crm/api/user', user).subscribe((response) => {
      let status = response as IStatus;
      if (status.StatusCode === 201) {
        callback.RegisterSucess(status.StatusDescription);
      }
      else {
        callback.RegisterFail(status.StatusDescription);
      }
      console.log("Description", status.StatusDescription);
    });
  }
  Authentication(userName, password, callback) {
    var log = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    this.http.post('http://cpharma.southeastasia.cloudapp.azure.com/crm/api/token', log, {headers: reqHeader}).subscribe((response) => {
      let token = response as UserToken;
      console.log(response);
      this.setToken(token.access_token);
      console.log(token.access_token);
      if (token.access_token === null) {
        callback.Log(false);
      }
      callback.Log(true);
    })
  }
  setToken(token) {
    localStorage.setItem('token', token);
  }
  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
}
