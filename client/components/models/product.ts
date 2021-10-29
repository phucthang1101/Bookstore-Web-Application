export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    // make this type optional
    type?: string;
    brand: string;
    quantityInStock?: number;
}