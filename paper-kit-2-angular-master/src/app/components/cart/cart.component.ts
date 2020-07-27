import { Component, OnInit } from '@angular/core';
import { ProductCart, Cart } from 'app/models/cart';
import { CartServiceService } from 'app/service/cart-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { ProductItem, Amount, BreakDown, PurchaseUnits } from 'app/models/purchase-units';
import { Orders, OrderDetail } from 'app/models/orders';
import { DelegateServiceService } from 'app/service/delegate-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  sum = 0;
  usdValue = 23606;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  cart = new Cart();
  orders = new Orders();
  public payPalConfig ?: IPayPalConfig;
  constructor(public cartSvc: CartServiceService, private _formBuilder: FormBuilder, private delegate: DelegateServiceService) { }
  ngOnInit(): void {
    this.updateCart();
    this.delegate.changeCheckout(this);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.initConfig();
  }
  updateCart() {
    this.cartSvc.get(this);
  }
  totalMoney() {
      let total= 0;
    this.cart.item.forEach((item) => {
      total += (item.Quants * item.Price);
    });
    return total;
  }
  getItemProduct(cart: Cart) {
    this.sum = 0;
    let result = new Array<ProductItem>();
    cart.item.forEach((item) => {
        let temp = new ProductItem();
        temp.name = item.ProductName;
        temp.category = 'DIGITAL_GOODS';
        temp.quantity = item.Quants.toString();
        let unit_amount = new Amount();
        unit_amount.currency_code = 'USD';
        unit_amount.value = ((item.Price / this.usdValue).toFixed(2)).toString();
        console.log('price VND item', item.Price);
        console.log('price USD item', (((item.Price * item.Quants) / this.usdValue).toFixed(2)));
        temp.unit_amount = unit_amount;
        this.sum += parseFloat(unit_amount.value)*item.Quants;
        console.log("unit_amount: ",unit_amount.value);
        result.push(temp);
    });
    this.sum = parseFloat(this.sum.toFixed(2));
    return result;
}
getAmount(cart: Cart) {
    let result = new Amount();
    result.currency_code = 'USD';
    result.value = this.sum.toString();
    let breakdown = new BreakDown();
    let item_total = new Amount();
    item_total.currency_code = 'USD';
    item_total.value = this.sum.toString();
    breakdown.item_total = item_total;
    result.breakdown = breakdown;
    return result;
}
getPurchase(cart: Cart) {
    let items = this.getItemProduct(cart);
    let amount = this.getAmount(cart);
    let purchase = new PurchaseUnits();
    purchase.amount = amount;
    purchase.items = items;
    return purchase;
}
getListPurchase(cart: Cart) {
    let purchase_units = new Array<PurchaseUnits>();
    purchase_units.push(this.getPurchase(cart));
    return purchase_units ;
}
getOrder(cart: Cart){
    let order = new Array<OrderDetail>();
    cart.item.forEach((item) => {
        let temp = new OrderDetail();
        temp.ProductCode = item.ProductCode;
        temp.SellPrice = item.Price;
        temp.Quants = item.Quants;
        order.push(temp);
    })
    console.log('itemOrder', order );
    return order;
}
private initConfig(): void {
    this.payPalConfig = {
        currency: 'USD',
        clientId: 'sb',
        createOrderOnClient: (data) => <ICreateOrderRequest> {
            intent: 'CAPTURE',
            purchase_units: this.getListPurchase(this.cart),
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then(details => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
                console.log('PayerID', details.payer.payer_id);
                this.orders.PaypalId = details.payer.payer_id;
                this.orders.Detail = this.getOrder(this.cart)
                console.log(this.orders);
                this.cartSvc.createOrder(this.orders);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);

        },
        onError: err => {
            console.log('OnError', err);
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
            console.log('paypal', this.getListPurchase(this.cart));
        },
    };
}

}
