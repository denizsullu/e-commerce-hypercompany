package com.hypercompany.ecommerce.model.dto.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateProductCartRequest {
    private Integer productId;
    private Integer quantity;

}
