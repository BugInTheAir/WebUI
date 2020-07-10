import { Component, OnInit } from '@angular/core';
import { ProductType } from 'app/models/product-type';
import { ProductserviceService } from 'app/service/productservice.service';
import { Product } from 'app/models/product';
import { PivotMV } from 'app/models/pivot-mv';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categorys = new Array<ProductType>();
  public isCollapsed = true;
  products = new Array<Product>();
  From = 0;
  Quants = 20;
  Id = null;
  search: string;
  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1) + 'k';
    }
    return value;
  }
  constructor( public prSvc: ProductserviceService ) { }
  ngOnInit(): void {
    this.prSvc.getCategory(this);
    this.prSvc.getProduct(this.getPivot(), this)
  }
  getPivot() {
    let pivot = new PivotMV();
    pivot.From = this.From;
    pivot.Quants = this.Quants;
    pivot.Id = this.Id;
    return pivot;
  }
  Search() {
    if(this.search !=""){
      this.products = this.products.filter(pr => {
        return pr.ProductName.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      })
    } else if (this.search ==""){
      window.location.reload();
    }
  }
}
