export class ProductCart {
    ProductCode: string;
    ProductName: string;
    Price: number;
    Image: string;
    ProductType: string;
    Quants: number = 0 ;
}
export class Cart {
    public item: ProductCart[] = new Array<ProductCart>();
    public updateFrom(src: Cart) {
        this.item = src.item;
      }
}


