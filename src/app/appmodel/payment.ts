
export class Payment {
    cardNumber: number;
    expiryMonth: number;
    expiryYear: number;
    cvv: number;
    customer: Customer = new Customer();
    order: Order = new Order();
}

export class Customer{
    customerId: number;
}

export class Order{
    orderId: number;
}