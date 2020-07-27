import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart, ProductCart } from 'app/models/cart';
import { Product } from 'app/models/product';
import { Observer, Observable } from 'rxjs';
import { LocalstorageServiceService } from './localstorage-service.service';
import { Orders } from 'app/models/orders';
const CART_KEY = "cart";
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  bag = new Array<ProductCart>();
  private storage: Storage;
  cart: Cart;
  private subscriptionObservable: Observable<Cart>;
  private subscribers: Array<Observer<Cart>> = new Array<Observer<Cart>>();
  constructor(private http: HttpClient, private localStorage: LocalstorageServiceService) {
    this.storage = this.localStorage.get();
  }
  addItem(product: Product, quantity: number): void {
    const cart = this.retrieve();
    let item = cart.item.find((p) => p.ProductCode === product.ProductCode);
    if (item === undefined) {
      item = new ProductCart();
      item.ProductCode = product.ProductCode;
      item.ProductName = product.ProductName;
      item.Price = product.Price;
      item.Image = product.Imgs[0].ImgName;
      item.ProductType = product.Type.TypeName;
      cart.item.push(item);
    }
    item.Quants += quantity;
    this.save(cart);
    this.dispatch(cart);
  }
  retrieve(): Cart {
    const cart = new Cart();
    const storedCart = this.storage.getItem(CART_KEY);
    if (storedCart) {
      cart.updateFrom(JSON.parse(storedCart));
    }
    return cart;
  }
  save(cart: Cart): void {
    this.storage.setItem(CART_KEY, JSON.stringify(cart));
  }
  dispatch(cart: Cart): void {
    this.subscribers
        .forEach((sub) => {
          try {
            sub.next(cart);
          } catch (e) {
          }
        });
  }
  get(callback) {
    callback.cart = this.retrieve();
  }
  totalMoney() {
    let sum = 0;
    const cart = this.retrieve();
    cart.item.forEach((item) => {
      sum += item.Quants * item.Price;
    })
    return sum;
  }
  createOrder(orders: Orders) {
    this.http.post('http://52.163.93.79/user_svc/api/order', orders).subscribe((response) => {
      console.log(response);
    })
  }
}
