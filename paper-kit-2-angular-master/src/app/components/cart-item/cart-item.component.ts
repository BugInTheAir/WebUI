import { Component, OnInit } from '@angular/core';
import { Cart, ProductCart } from 'app/models/cart';
import { CartServiceService } from 'app/service/cart-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DelegateServiceService } from 'app/service/delegate-service.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  cart = new Cart();
  private cartSubscription: Subscription;
  itemCount: number;
  constructor(public cartSvc: CartServiceService, private route: Router, private delegate: DelegateServiceService) { }
  ngOnInit(): void {
    this.cartSvc.get(this);
  }
  totalMoney() {
    let total = 0;
    this.cart.item.forEach((item) => {
      total += (item.Quants * item.Price);
    })
    return total;
  }
  plus(id) {
    this.cart.item.forEach((item) => {
      if (item.ProductCode === id) {
        item.Quants++;
      }
    })
    this.cartSvc.save(this.cart);
    this.onQuantityChange();
    this.onCartChange();
  }
  subtract(id) {
    this.cart.item.forEach((item) => {
      if (item.ProductCode === id) {
        item.Quants--;
        if (item.Quants < 1) {
          item.Quants++;
        }
      }
    })
    this.cartSvc.save(this.cart);
    this.onQuantityChange();
    this.onCartChange();
  }
  deleteone(id) {
    this.cart.item.forEach((item) => {
      if (item.ProductCode === id) {
        this.cart.item.splice(this.cart.item.indexOf(item), 1);
      }
    })
    this.cartSvc.save(this.cart);
    this.onQuantityChange();
    this.onCartChange();
  }
  onQuantityChange() {
    this.delegate.navbarFunction().updateCartCountUI();
  }
  onCartChange(){
    this.delegate.checkoutFunction().updateCart();
  }
  onTotalNumber() {
    this.itemCount = this.cart.item.map((x) => x.Quants).reduce((p , n) => p + n, 0);
    return this.itemCount;
  }
}
