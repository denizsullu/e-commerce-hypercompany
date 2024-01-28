export interface CartItem {
  cartItemId: number;
  productId: number
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
  productQuantity: number;
  productTotalPrice: number;
  userId: number;
}
