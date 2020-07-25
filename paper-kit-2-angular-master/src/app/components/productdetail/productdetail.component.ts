import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductserviceService } from 'app/service/productservice.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Product } from 'app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'app/service/cart-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DelegateServiceService } from 'app/service/delegate-service.service';
import { PivotMV } from 'app/models/pivot-mv';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  id: Number;
  quants = 1;
  private sub: any;
  product = new Product();
  products = new Array<Product>();
  typeId;
  responsiveOptions;
  constructor(public cartSvc: CartServiceService , public prSvc: ProductserviceService, private route: ActivatedRoute, private snackBar: MatSnackBar, private router: Router, private delegate: DelegateServiceService) { 
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
  getType(TypeId) {
    this.typeId = TypeId;
  }
  getPivot() {
    let pivot = new PivotMV();
    pivot.From = 0;
    pivot.Quants = 8;
    pivot.Id = null;
    console.log('pivot', pivot);
    return pivot;
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.prSvc.getProductbyId(this.id, this);
    });
    this.prSvc.getProduct(this.getPivot(), this);
  }
  public Add(product: Product) {
    this.cartSvc.addItem(product, this.quants );
    this.onQuantityChange();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onQuantityChange() {
    this.delegate.navbarFunction().updateCartCountUI();
  }
  plus() {
    this.quants++;
  }
  subtract() {
    this.quants--;
  }
}
