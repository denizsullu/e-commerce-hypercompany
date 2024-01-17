package com.hypercompany.ecommerce.model.dto.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateProductRequest {
    private int productId;
    private String productName;
    private String productDescription;
    private double productPrice;
    private String productImage;
    private int productQuantity;
    private int brandId;
    private int categoryId;
}
