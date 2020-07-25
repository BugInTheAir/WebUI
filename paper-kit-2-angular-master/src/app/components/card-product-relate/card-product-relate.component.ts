import { Component, OnInit, Input} from '@angular/core';
import { Product, ImgMV } from 'app/models/product';
import { Router } from '@angular/router';
import { ProductserviceService } from 'app/service/productservice.service';
import { PivotMV } from 'app/models/pivot-mv';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartServiceService } from 'app/service/cart-service.service';
import { DelegateServiceService } from 'app/service/delegate-service.service';
@Component({
  selector: 'app-card-product-relate',
  templateUrl: './card-product-relate.component.html',
  styleUrls: ['./card-product-relate.component.css']
})
export class CardProductRelateComponent implements OnInit {
  @Input() Id: string;
  products = new Array<Product>();
  From = 0;
  Quants = 20;
  responsiveOptions;
  constructor(public router: Router, public prSvc: ProductserviceService, public cartSvc: CartServiceService ,private snackBar: MatSnackBar, private delegate: DelegateServiceService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
   }
  ngOnInit() {
    this.prSvc.getProductbyType(this.getPivot(), this);
  }
  getPivot() {
    let pivot = new PivotMV();
    pivot.From = this.From;
    pivot.Quants = this.Quants;
    pivot.Id = this.Id;
    console.log(pivot.Id);
    return pivot;
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  Add(product: Product) {
    this.cartSvc.addItem(product, 1);
    this.onQuantityChange();
  }
  onQuantityChange() {
    this.delegate.navbarFunction().updateCartCountUI();
  }
}
