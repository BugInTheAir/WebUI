import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { UserServiceService } from 'app/service/user-service.service';
import { Orders } from 'app/models/orders';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user = new User();
  orders = new Array<Orders>();
  constructor(private userSvc: UserServiceService) { }

  ngOnInit(): void {
    this.userSvc.getUser(this);
    this.userSvc.checkingOrders(this);
    console.log(this.user);
  }

}
