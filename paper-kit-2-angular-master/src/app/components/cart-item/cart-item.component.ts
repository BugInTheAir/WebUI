import { Component, OnInit } from '@angular/core';
import { Cart, ProductCart } from 'app/models/cart';
import { CartServiceService } from 'app/service/cart-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  total: number;
  cart = new Cart();
  private cartSubscription: Subscription;
  itemCount: number;
  constructor(public cartSvc: CartServiceService) { }
  ngOnInit(): void {
    this.cartSvc.get(this);
    this.itemCount = this.cart.item.map((x) => x.Quants).reduce((p , n) => p + n, 0);
    this.totalMoney();
    console.log(this.total);
  }
  totalMoney() {
    this.cart.item.forEach((item) => {
      this.total = (item.Quants * item.Price);
    })
  }
  plus(id) {
    this.cart.item.forEach((item) => {
      if (item.ProductCode === id) {
        item.Quants++;
      }
    })
    this.cartSvc.save(this.cart);
    window.location.reload();
  }
  subtract(id) {
    this.cart.item.forEach((item) => {
      if (item.ProductCode === id) {
        item.Quants--;
      }
    })
    this.cartSvc.save(this.cart);
    window.location.reload();
  }
  deleteone(id) {
    this.cart.item.forEach((item) => {
      if (item.ProductCode === id) {
        this.cart.item.splice(this.cart.item.indexOf(item), 1);
      }
    })
    this.cartSvc.save(this.cart);
    window.location.reload();
  }
}
