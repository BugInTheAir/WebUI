import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'app/service/user-service.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  caption: string;
  UserName: string;
  Password: string;
  checkLog: string;
  loading: false;
  constructor( public userSvc: UserServiceService, public authSvc: AuthService, private spinner: NgxSpinnerService) {
   }

  ngOnInit() {
  }
  Login() {
    this.spinner.show();
    this.userSvc.Authentication(this.UserName, this.Password, this);
    if (this.authSvc.getToken() !== null) {
      this.Log();
    } else {
      this.caption = 'Tài khoản hoặc mật khẩu không đúng';
    }
  }
  hideSpinner() {
    this.spinner.hide();
  }
  Log() {
      window.location.replace('/home');
  }
  getCaption() {
    return this.caption;
  }
}
