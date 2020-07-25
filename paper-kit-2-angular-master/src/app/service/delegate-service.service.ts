import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DelegateServiceService {

  constructor() { }
  private reserveResource = new BehaviorSubject<any>(null);
  private checkoutResource = new BehaviorSubject<any>(null);
  changeCheckout(callback) {
    this.checkoutResource.next(callback);
  }
  changeReserve(callback) {
    this.reserveResource.next(callback);
  }
  navbarFunction() {
    return this.reserveResource.getValue();
  }
  checkoutFunction() {
    return this.checkoutResource.getValue();
  }
}
