package com.hypercompany.ecommerce.model.dto.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateAddressRequest {
    private Integer id;
    private String title;
    private String publicAddress;
    private int userId;
}
