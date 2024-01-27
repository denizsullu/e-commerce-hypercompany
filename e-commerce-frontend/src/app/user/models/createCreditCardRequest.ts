export interface CreateCreditCardRequest {
  id?: number;
  userId: number;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  cardHolderName: string;
}
