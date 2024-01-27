package com.hypercompany.ecommerce.model.dto.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllProductResponse {
    private int productId;
    private String productName;
    private String productDescription;
    private double productPrice;
    private String productImage;
    private String brandName;
    private int categoryId;
    private String categoryName;
}
