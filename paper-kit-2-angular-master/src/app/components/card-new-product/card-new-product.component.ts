import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from 'app/service/productservice.service';
import { PivotMV } from 'app/models/pivot-mv';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-card-new-product',
  templateUrl: './card-new-product.component.html',
  styleUrls: ['./card-new-product.component.css']
})
export class CardNewProductComponent implements OnInit {

  newProducts = new Array<Product>();
  productDe = new Product();
  From = 0;
  Quants = 8;
  Id = 'TP001';
  constructor(public router: Router, public prSvc: ProductserviceService) { }
  ngOnInit(): void {
    this.prSvc.getProductbyType(this.getPivot(), this);
  }
  getPivot() {
    let pivot = new PivotMV();
    pivot.From = this.From;
    pivot.Quants = this.Quants;
    pivot.Id = this.Id;
    return pivot;
  }

}
