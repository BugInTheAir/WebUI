import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product';
import {SelectItem} from 'primeng/api';
import { ProductserviceService } from 'app/service/productservice.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartServiceService } from 'app/service/cart-service.service';
import { DelegateServiceService } from 'app/service/delegate-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string;
  sub: any;
  products = new Array<Product>();
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;
  searchResult: boolean;
  constructor(public cartSvc: CartServiceService ,public productSvc: ProductserviceService,private delegate: DelegateServiceService, private route: ActivatedRoute, private spinner: NgxSpinnerService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.spinner.show();
    this.sub = this.route.params.subscribe((params) => {
      this.search = params['search'];
      this.productSvc.getSearchList(this.search, this);
    })
  }
  public Add(product: Product) {
    this.cartSvc.addItem(product, 1 );
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
