

export class CartItem {

    cartItemId: number;
    quantity: number;
    cart: Cart = new Cart();
    product: Product = new Product();

}

export class Cart {
    cartId: number;
}

export class Product {
    productId: number;
}