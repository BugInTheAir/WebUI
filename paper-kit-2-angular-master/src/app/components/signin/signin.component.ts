import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'app/service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  caption: string;
  UserName: string;
  Password: string;
  constructor( public userSvc: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  Login() {
    this.userSvc.Authentication(this.UserName, this.Password, this);
  }
  Log(bool) {
    if (bool === true) {
      this.router.navigate(['/home']);
    }
    else {
      this.caption = 'Failed!';
    }
  }
}
