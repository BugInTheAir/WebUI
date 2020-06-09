import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductsComponent } from './products/products.component';
import { ProductTypeComponent } from './product_type/product-type.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductTypeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class ViewsModule { }
