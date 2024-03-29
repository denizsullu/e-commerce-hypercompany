package com.hypercompany.ecommerce.model.dto.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateOrderRequest {
    private Integer id;
    private Double totalAmount;
    private String status;
    private Integer userId;
    private Integer addressId;
    private Integer creditCardId;
}
