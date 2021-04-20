export class Order {
    orderId: number;
    customer: Customer = new Customer();
    orderDate: number;
    shippingDate: number;
    totalPrice: number;
    orderStatus: number;
}

export class Customer {
    customerId: number;
}