import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from 'app/service/productservice.service';
import { PivotMV } from 'app/models/pivot-mv';
import { Product } from 'app/models/product';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-card-new-product',
  templateUrl: './card-new-product.component.html',
  styleUrls: ['./card-new-product.component.css']
})
export class CardNewProductComponent implements OnInit {
  products = new Array<Product>();
  pivot = new PivotMV();
  From = 0;
  Quants = 8;
  Id = null;
  previousType = null;
  responsiveOptions;
  constructor(public router: Router, public prSvc: ProductserviceService, private spinner: NgxSpinnerService) {
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
    this.spinner.show();
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
}
