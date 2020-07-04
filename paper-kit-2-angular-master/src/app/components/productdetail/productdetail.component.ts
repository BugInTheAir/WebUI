import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductserviceService } from 'app/service/productservice.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Product } from 'app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'app/service/cart-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  allProduct = Array<Product>();
  id: Number;
  quants: number;
  private sub: any;
  product: Product;
  constructor(public cartSvc: CartServiceService , public prSvc: ProductserviceService, private route: ActivatedRoute,private snackBar: MatSnackBar, private router: Router) {  }
  public Add(product: Product): void {
    this.cartSvc.addItem(product, this.quants );
    window.location.reload();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.prSvc.getProductbyId(this.id, this);
    });
  }

}
