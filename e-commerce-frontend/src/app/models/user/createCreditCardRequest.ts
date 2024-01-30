export interface CreateCreditCardRequest {
    id?: number;
    userId: number;
    cardNumber: string;
    expiryDate: string;
    securityCode: string;
    cardHolderName: string;
}
