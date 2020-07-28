import { Component, OnInit } from '@angular/core';
import { ProductType } from 'app/models/product-type';
import { ProductserviceService } from 'app/service/productservice.service';
import { Product } from 'app/models/product';
import { PivotMV } from 'app/models/pivot-mv';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartServiceService } from 'app/service/cart-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DelegateServiceService } from 'app/service/delegate-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  previousType = null;
  categorys = new Array<ProductType>();
  public isCollapsed = true;
  products = new Array<Product>();
  pivot = new PivotMV();
  From = 0;
  Quants = 8;
  Id = null;
  search: string;
  loading = true;
  loadingMore: boolean;
  maxLoad = false;
  isDesc: boolean = false;
  sortBy: string = 'ProductName';
  resultSearch: boolean;
  isLoading = false;
  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1) + 'k';
    }
    return value;
  }
  constructor( public prSvc: ProductserviceService, private spinner: NgxSpinnerService, public cartSvc: CartServiceService ,private snackBar: MatSnackBar, private delegate: DelegateServiceService ) { }
  ngOnInit() {
    this.prSvc.getCategory(this);
    this.spinner.show();
    this.prSvc.getProductbyType(this.getPivot(), this);
  }
  getPivot() {
    this.pivot.From = this.From;
    this.pivot.Quants = this.Quants;
    this.pivot.Id = null;
    return this.pivot;
  }
  Search(search: string) {
    if (search !== '') {
      this.products = this.products.filter(pr => {
        const result = pr.ProductName.toLocaleLowerCase().match(search.toLocaleLowerCase());
        if (result === null) {
          this.resultSearch = false;
        }
        else if (result !== null) {
          this.resultSearch = true;
        }
        return result;
      })
    } else if (search === '') {
      this.resultSearch = true;
      this.spinner.show();
      this.loading = true;
      this.From = 0;
      this.products = new Array<Product>();
      this.ngOnInit();
    }
  }
  hideSpinner() {
    this.spinner.hide();
  }
  getType(typeId: string) {
    if (this.isLoading) {
      return;
    }
    else{
      this.isLoading = true;
    }
    this.From = 0;
    this.pivot.Id = typeId;
    this.pivot.From = 0;
    this.pivot.Quants = this.Quants;
    this.spinner.show();
    this.loading = true;
    this.prSvc.getProductbyType(this.pivot, this);
  }
  loadMore() {
    this.loadingMore = true;
    this.spinner.show();
    this.pivot.From = this.From;
    this.pivot.Quants = this.pivot.Quants;
    this.prSvc.getProductbyType(this.pivot, this);
    if ((this.From + 8) % 8 !== 0) {
      this.loadingMore = false;
      this.maxLoad = true;
      this.spinner.hide();
    }
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
  sort(property) {
    this.isDesc = !this.isDesc;
    this.sortBy = property;
    let direction = this.isDesc ? 1 : -1;

    this.products.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };
}
