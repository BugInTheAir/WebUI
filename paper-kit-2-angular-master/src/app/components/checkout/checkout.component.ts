// import { Component, OnInit } from '@angular/core';
// import {
//   IPayPalConfig,
//   ICreateOrderRequest, 
// } from 'ngx-paypal';
// import { Cart } from 'app/models/cart';
// import { CartServiceService } from 'app/service/cart-service.service';
// import { ProductItem, UnitAmount, Amount, BreakDown, PurchaseUnits } from 'app/models/purchase-units';
// @Component({
//   selector: 'app-checkout',
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css']
// })
// export class CheckoutComponent implements OnInit {
//     // defaultCode: 'USD';
//     // cart = new Cart();
//     // itemCount: number;
//     // public payPalConfig ?: IPayPalConfig;
//     // constructor(public cartSvc: CartServiceService) { }
//     ngOnInit(): void {
//         // this.cartSvc.get(this);
//         // this.itemCount = this.cart.item.map((x) => x.Quants).reduce((p , n) => p + n, 0);
//         // this.initConfig();
//     }
//     // getItemProduct(cart: Cart) {
//     //     let result = new Array<ProductItem>();
//     //     cart.item.forEach((item) => {
//     //         let temp = new ProductItem();
//     //         temp.name = item.ProductName;
//     //         temp.category = 'DIGITAL_GOODS';
//     //         temp.quantity = '1';
//     //         let unit_amount = new Amount();
//     //         unit_amount.currency_code = 'USD';
//     //         unit_amount.value = '1';
//     //         temp.unit_amount = unit_amount;
//     //         result.push(temp);
//     //     });
//     //     return result;
//     // }
//     // getAmount(cart: Cart) {
//     //     let sum = 0 ;
//     //     let result = new Amount();
//     //     cart.item.forEach((item) => {
//     //         sum += item.Price * item.Quants;
//     //     })
//     //     result.currency_code = 'USD';
//     //     result.value = '1';
//     //     let breakdown = new BreakDown();
//     //     let item_total = new Amount();
//     //     item_total.currency_code = 'USD';
//     //     item_total.value = '1';
//     //     breakdown.item_total = item_total;
//     //     result.breakdown = breakdown;
//     //     return result;
//     // }
//     // getPurchase(cart: Cart) {
//     //     let amount = this.getAmount(cart);
//     //     let items = this.getItemProduct(cart);
//     //     let purchase = new PurchaseUnits();
//     //     purchase.amount = amount;
//     //     purchase.items = items;
//     //     return purchase;
//     // }
//     // getListPurchase(cart: Cart) {
//     //     let purchase_units = new Array<PurchaseUnits>();
//     //     purchase_units .push(this.getPurchase(cart));
//     //     console.log('data', purchase_units);
//     //     return purchase_units ;
//     // }
//     // private initConfig(): void {
//     //     this.payPalConfig = {
//     //         currency: 'USD',
//     //         clientId: 'ARKvnV2rl0vvOPH8d-cb7qTXuUOnumiNCRUnjl2L5XjNYF_0iSc1fyElaG3AsvgXbcjRQQZAbUkx2WM0',
//     //         createOrderOnClient: (data) => <ICreateOrderRequest> {
//     //             intent: 'CAPTURE',
//     //             purchase_units: this.getListPurchase(this.cart),
//     //             // purchase_units: [{
//     //             //     amount: {
//     //             //         currency_code: 'USD',
//     //             //         value: '5',
//     //             //         breakdown: {
//     //             //             item_total: {
//     //             //                 currency_code: 'USD',
//     //             //                 value: '5'
//     //             //             }
//     //             //         }
//     //             //     },
//     //             //     items: [{
//     //             //         name: 'Enterprise Subscription',
//     //             //         quantity: '5',
//     //             //         category: 'DIGITAL_GOODS',
//     //             //         unit_amount: {
//     //             //             currency_code: 'USD',
//     //             //             value: '1',
//     //             //         },
//     //             //     }]
//     //             // }]             
//     //         },
//     //         advanced: {
//     //             commit: 'true'
//     //         },
//     //         style: {
//     //             label: 'paypal',
//     //             layout: 'vertical'
//     //         },
//     //         onApprove: (data, actions) => {
//     //             console.log('onApprove - transaction was approved, but not authorized', data, actions);
//     //             actions.order.get().then(details => {
//     //                 console.log('onApprove - you can get full order details inside onApprove: ', details);
//     //                 console.log('PayerID', details.payer.payer_id);
//     //             });
 
//     //         },
//     //         onClientAuthorization: (data) => {
//     //             console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
//     //         },
//     //         onCancel: (data, actions) => {
//     //             console.log('OnCancel', data, actions);
 
//     //         },
//     //         onError: err => {
//     //             console.log('OnError', err);
//     //         },
//     //         onClick: (data, actions) => {
//     //             console.log('onClick', data, actions);
//     //         },
//     //     };
//     // }

// }
