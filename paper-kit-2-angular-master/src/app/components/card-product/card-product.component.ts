import { Component, OnInit} from '@angular/core';
import { Product, ImgMV } from 'app/models/product';
import { Router } from '@angular/router';
import { ProductserviceService } from 'app/service/productservice.service';
import { PivotMV } from 'app/models/pivot-mv';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartServiceService } from 'app/service/cart-service.service';
import { DelegateServiceService } from 'app/service/delegate-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  products = new Array<Product>();
  pivot = new PivotMV();
  From = 0;
  Quants = 8;
  Id = null;
  previousType = null;
  responsiveOptions;
  constructor(public router: Router, public cartSvc: CartServiceService ,public prSvc: ProductserviceService,private delegate: DelegateServiceService ,private spinner: NgxSpinnerService, private snackBar: MatSnackBar) {
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
    this.pivot.From = this.From;
    this.pivot.Quants = this.Quants;
    this.pivot.Id = this.Id;
    this.previousType = this.pivot.Id;
    return this.pivot;
  }
  hideSpinner() {
    this.spinner.hide();
  }
  Add(product: Product) {
    this.cartSvc.addItem(product, 1);
    this.onQuantityChange();
  }
  onQuantityChange() {
    this.delegate.navbarFunction().updateCartCountUI();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
