export class Orders {
    Detail: OrderDetail[] = new Array<OrderDetail>();
    PaypalId: string;
    GrandTotal: number;
    OrderDate: string;
    Status: string;
    OrderId: string;
}
export class OrderDetail {
    ProductCode: string;
    SellPrice: number;
    Quants: number;
}
