import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { UserServiceService } from 'app/service/user-service.service';
import { Orders } from 'app/models/orders';
import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user = new User();
  orders = new Array<Orders>();
  displayModal: boolean;
  temp = new User();
  constructor(private userSvc: UserServiceService, public authSvc: AuthService) { }

  ngOnInit(): void {
    this.userSvc.getUser(this);
    this.userSvc.getOrders(this);
    console.log(this.user);
  }
  showModalDialog() {
    this.displayModal = true;
  }
  changeProfile() {
    if (this.temp.FullName === undefined) {
      this.temp.FullName = this.user.FullName;
    }
    if (this.temp.Address === undefined) {
      this.temp.Address = this.user.Address;
    }
    if (this.temp.PhoneNumber === undefined) {
      this.temp.PhoneNumber = this.user.PhoneNumber;
    }
    console.log(this.temp);
    this.userSvc.changeInfor(this.temp, this);
  }
}
