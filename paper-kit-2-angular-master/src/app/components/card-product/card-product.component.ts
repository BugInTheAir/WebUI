import { Component, OnInit } from '@angular/core';
import { Product, ImgMV } from 'app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  product: Array<Product>;
  constructor(public router: Router) { }
  ngOnInit(): void {
    let temp = new Product();
    temp.ProductName = "Hewel 30VQ";
    temp.Price = 240000;
    let img = new ImgMV();
    temp.Imgs= new Array();
    this.product = new Array();
    img.ImgName = "https://ecogreen.com.vn/image/cache/catalog/product/eco-hewel-500x500.jpg";
    temp.Imgs.push(img);
    this.product.push(temp);
    let temp1 = new Product();
    temp1.ProductName = "30VQ";
    temp1.Price = 240000;
    let img1 = new ImgMV();
    temp1.Imgs= new Array();
    img1.ImgName = "https://ecogreen.com.vn/image/cache/catalog/product/eco-hewel-500x500.jpg";
    temp1.Imgs.push(img1);
    this.product.push(temp1);
    let temp2 = new Product();
    temp2.ProductName = "30VQ";
    temp2.Price = 240000;
    let img2 = new ImgMV();
    temp2.Imgs= new Array();
    img2.ImgName = "https://ecogreen.com.vn/image/cache/catalog/product/eco-hewel-500x500.jpg";
    temp2.Imgs.push(img2);
    this.product.push(temp2);
    let temp3 = new Product();
    temp3.ProductName = "30VQ";
    temp3.Price = 240000;
    let img3 = new ImgMV();
    temp3.Imgs= new Array();
    img3.ImgName = "https://ecogreen.com.vn/image/cache/catalog/product/eco-hewel-500x500.jpg";
    temp3.Imgs.push(img3);
    this.product.push(temp3);
  }
  RedirectToProductDetail(productCode){
  
  }
}
