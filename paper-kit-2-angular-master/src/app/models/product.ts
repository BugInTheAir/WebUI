import {ProductType} from './product-type'
export class Product {
    public ProductCode: string;
    public ProductName: string;
    public VendorName: string;
    public VendorId: string;
    public Status: string;
    public Price: number;
    public Des: string;
    public Type: ProductType;
    public Imgs: Array<ImgMV>;
    isExistInStore(): boolean {
        if (this.Status === 'Còn hàng')
        {
            return true;
        } else {
            return false;
        }
    }
}
export class ImgMV {
    public IsMain: boolean;
    public ImgName: string;
}
