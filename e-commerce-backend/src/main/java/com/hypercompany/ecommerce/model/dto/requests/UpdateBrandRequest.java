package com.hypercompany.ecommerce.model.dto.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateBrandRequest {
    @NotEmpty
    private int id;
    @NotEmpty
    @Size(min = 2, max = 30)
    private String name;
}
