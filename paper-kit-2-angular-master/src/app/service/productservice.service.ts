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
  // lazyloadProduct(pivot, callback){
  //   this.product$ = this.http.post('http://52.163.93.79/ware_svc/api/medical/product', pivot);
  //   this.product$.subscribe((response) => {
  //     callback.initProduct(response);
  //     callback.totalRecord;
  //   })
  // }
  getProduct(pivot , callback) {
      this.http.post('http://52.163.93.79/ware_svc/api/medical/product', pivot).subscribe((response) => {
      const temp = response as Array<Product>;
      temp.forEach((item) => {
        callback.From += 1;
      let flag = false;
      callback.products.forEach((itemPr) => {
        if (itemPr.ProductCode === item.ProductCode) {
          flag = true;
        }
      });
      if (!flag) {
        callback.products.push(item);
      }
      callback.hideSpinner();
      callback.loading = false;
      callback.loadingMore = false;
      });
    });
  }
  getProductbyType(pivot, callback) {
    if (callback.previousType !== pivot.Id) {
      callback.previousType = pivot.Id;
      callback.products = new Array<Product>();
      callback.From = 0;
    }
     this.http.post('http://52.163.93.79/ware_svc/api/medical/product', pivot).subscribe((response) => {
     const temp = response as Array<Product>;
     temp.forEach((item) => {
      callback.From += 1;
      let flag = false;
      callback.products.forEach((itemPr) => {
        if (itemPr.ProductCode === item.ProductCode) {
          flag = true;
        }
      });
      if (!flag) {
        callback.products.push(item);
      }
      callback.hideSpinner();
      callback.loading = false;
      callback.loadingMore = false;
      callback.isLoading = false;
      });
    });
  }
  getCategory(callback) {
    this.category$ = this.http.get('http://52.163.93.79/ware_svc/api/medical/types').subscribe((response) => {
      const temp = response as Array<ProductType>;
      temp.forEach((item) => {
        let flag = false;
        callback.categorys.forEach((itemCategory) => {
          if (itemCategory.TypeId === item.TypeId) {
            flag = true;
          }
        });
        if (!flag) {
          callback.categorys.push(item);
        }
      });
    })
  }
  getProductbyId(id, callback) {
    this.product$ = this.http.get<Product>('http://52.163.93.79/ware_svc/api/medical/product/' + id).subscribe((response) => {
      callback.product = response;
    });
  }
}
