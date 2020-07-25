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
    this.http.post('http://cpharma.southeastasia.cloudapp.azure.com/crm/api/user', user).subscribe((response) => {
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
    const reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    this.http.post('http://cpharma.southeastasia.cloudapp.azure.com/crm/api/token', body, {headers: reqHeader}).subscribe((response) => {
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
  getUser(user){
    this.http.get('http://cpharma.southeastasia.cloudapp.azure.com/crm/api/')
  }
}
