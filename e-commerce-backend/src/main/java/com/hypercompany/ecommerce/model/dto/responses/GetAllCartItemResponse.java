package com.hypercompany.ecommerce.model.dto.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllCartItemResponse {
    private int cartItemId;
    private String productName;
    private int productId;
    private String productDescription;
    private double productPrice;
    private String productImage;
    private int productQuantity;
    private double productTotalPrice;
    private int userId;

}
