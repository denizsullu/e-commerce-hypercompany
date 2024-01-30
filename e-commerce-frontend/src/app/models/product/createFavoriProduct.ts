export interface CreateFavoriProduct {
    id?: number;
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
  userId: number;
}
