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

export interface ProductParams{
    orderBy: string;
    searchTerm?: string;
    types: string[];
    brands: string[];
    pageNumber: number;
    pageSize:number;
}