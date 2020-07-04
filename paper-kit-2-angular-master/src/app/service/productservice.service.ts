import { Injectable } from '@angular/core';
import { Product, ImgMV } from 'app/models/product';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { ProductType } from 'app/models/product-type';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  constructor(private http: HttpClient) { }
  products = new Array<Product>();
  categorys = new Array<ProductType>();
  newProducts = new Array<Product>();
  product: Product;
  product$;
  category$;
  getProduct(pivot , callback) {
    this.product$ = this.http.post('http://cpharma.southeastasia.cloudapp.azure.com/warehouse/api/medical/product', pivot);
    this.product$.subscribe((response) => {
      response.forEach((item) => {
        callback.From += 1;
        this.products.push(item);
      });
      callback.products = this.products;
    })
  }
  getProductbyType(pivot, callback) {
    this.product$ = this.http.post('http://cpharma.southeastasia.cloudapp.azure.com/warehouse/api/medical/product',pivot);
    this.product$.subscribe((response) => {
      response.forEach((item) => {
        callback.From += 1;
        this.newProducts.push(item);
      });
      callback.newProducts = this.newProducts;
    })
  }
  getCategory(callback){
    this.category$ = this.http.get('http://cpharma.southeastasia.cloudapp.azure.com/warehouse/api/medical/types');
    this.category$.subscribe((response) => {
      response.forEach((item) => {
        this.categorys.push(item);
      });
      callback.categorys = this.categorys;
    })
  }
  getProductbyId(id, callback) {
    this.product$ = this.http.get<Product>('http://cpharma.southeastasia.cloudapp.azure.com/warehouse/api/medical/product/' + id);
    this.product$.subscribe((response) => {
      this.product = response;
      callback.product = this.product;
    });
  }
}
