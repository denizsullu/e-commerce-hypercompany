export interface CreateProductRequest {
    productName: string;
    productDescription: string;
    productPrice: number;
    productImage: string;
    stock: number;
    brandId: number;
    categoryId: number;
}
