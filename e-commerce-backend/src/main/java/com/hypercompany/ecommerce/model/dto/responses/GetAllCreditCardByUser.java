package com.hypercompany.ecommerce.model.dto.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllCreditCardByUser {
    private Integer id;
    private String cardNumber;
    private String cardHolderName;
    private String expiryDate;
    private String securityCode;

}
