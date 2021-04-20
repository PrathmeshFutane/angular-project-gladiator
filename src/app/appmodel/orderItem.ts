
export class OrderItem {

    orderItemId: number;
    quantity: number;
    order: Order = new Order();
    product: Product = new Product();

}

export class Order {
    orderId: number;
}

export class Product {
    productId: number;
}