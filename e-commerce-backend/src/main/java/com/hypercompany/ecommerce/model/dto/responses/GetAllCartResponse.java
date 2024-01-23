package com.hypercompany.ecommerce.model.dto.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllCartResponse {
    private String productName;
    private Integer quantity;
    private Double price;
    private String productImage;
}
