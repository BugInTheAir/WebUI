export class Orders {
    item: OrderDetail[] = new Array<OrderDetail>();
    paypalId: string;
}
export class OrderDetail {
    ProductCode: string;
    Price: number;
    Quants: number;
}
