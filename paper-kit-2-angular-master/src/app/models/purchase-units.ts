export class PurchaseUnits {
    amount: Amount;
    items: Array<ProductItem>;
}
export class Amount {
    currency_code: string;
    value: string;
    breakdown: BreakDown;
}
export class BreakDown {
    item_total: Amount;
}
export class UnitAmount {
    currency_code: string;
    value: string;
}
export class ProductItem {
    name: string;
    quantity: string;
    category: string;
    unit_amount: Amount;
}
