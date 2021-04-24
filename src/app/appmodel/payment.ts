
export class Payment {
    cardNumber: number;
    expiryMonth: number;
    expiryYear: number;
    cvv: number;
    nameOnCard: string;
    paymentMode: string;
    customer: Customer = new Customer();
    order: Order = new Order();
}

export class Customer {
    customerId: number;
}

export class Order {
    orderId: number;
}