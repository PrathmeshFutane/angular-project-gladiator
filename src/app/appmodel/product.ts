import { Category } from "./category";
import { Retailer } from "./retailer";

export class Product {
    retailer: Retailer = new Retailer();
    productName: string;
    productDescription: string;
    stock: number;
    unitPrice: number;
    image: string;
    category: Category = new Category();
}

