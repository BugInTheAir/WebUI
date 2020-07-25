import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public getToken(): string {
    return sessionStorage.getItem('token');
  }
  public setToken(token: string) {
    sessionStorage.setItem('token', token);
  }
  constructor() { }
}
