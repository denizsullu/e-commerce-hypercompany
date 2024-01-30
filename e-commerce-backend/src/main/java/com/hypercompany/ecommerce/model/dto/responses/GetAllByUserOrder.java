package com.hypercompany.ecommerce.model.dto.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllByUserOrder {
    private Integer id;
    private Double totalAmount;
    private String status;
    private Integer userId;
    private String userName;
    private String addressDetail;
    private String creditCardLastFour;
}
