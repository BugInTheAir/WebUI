import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'app/service/user-service.service';
import { Product } from 'app/models/product';
import { User } from 'app/models/user';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  private sub: any;
  id: string;
  products = new Array<Product>();
  user = new User();
  constructor(private route: ActivatedRoute, public userSvc: UserServiceService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.userSvc.getOrderDetail(this.id, this);
      this.userSvc.getUser(this);
    });
  }

}
