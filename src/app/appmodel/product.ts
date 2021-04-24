import { Category } from "./category";
import { Retailer } from "./retailer";

export class Product {
    productId: number;
    productName: string;
    productDescription: string;
    stock: number;
    unitPrice: number;
    image: string;
    category: Category = new Category();
    retailer: Retailer = new Retailer();

}

