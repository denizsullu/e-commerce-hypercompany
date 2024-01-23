package com.hypercompany.ecommerce.model.dto.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetByUserDetails {
    private String name;
    private String surname;
    private String username;
}
