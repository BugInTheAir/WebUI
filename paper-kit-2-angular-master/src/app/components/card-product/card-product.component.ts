import { Component, OnInit } from '@angular/core';
import { Product, ImgMV } from 'app/models/product';
import { Router } from '@angular/router';
import { ProductserviceService } from 'app/service/productservice.service';
import { PivotMV } from 'app/models/pivot-mv';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  products = new Array<Product>();
  From = 0;
  Quants = 20;
  Id = null;
  constructor(public router: Router, public prSvc: ProductserviceService) { }
  ngOnInit(): void {
    this.prSvc.getProduct(this.getPivot(), this);
  }
  getPivot() {
    let pivot = new PivotMV();
    pivot.From = this.From;
    pivot.Quants = this.Quants;
    pivot.Id = this.Id;
    return pivot;
  }
}
