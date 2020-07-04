import { Component, OnInit } from '@angular/core';
import { ProductType } from 'app/models/product-type';
import { ProductserviceService } from 'app/service/productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categorys = new Array<ProductType>();
  public isCollapsed = true;
  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1) + 'k';
    }

    return value;
  }
  constructor( public prSvc: ProductserviceService ) { }
  ngOnInit(): void {
    this.prSvc.getCategory(this);
  }

}
