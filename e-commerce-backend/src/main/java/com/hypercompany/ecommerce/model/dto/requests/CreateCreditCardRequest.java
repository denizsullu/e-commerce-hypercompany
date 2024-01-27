package com.hypercompany.ecommerce.model.dto.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateCreditCardRequest {
    private Integer id;
    private String cardNumber;
    private String cardHolderName;
    private String expiryDate;
    private String securityCode;
    private Integer userId;
}
