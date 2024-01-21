package com.hypercompany.ecommerce.model.dto.requests;



import lombok.Builder;

import java.util.Set;
@Builder
public record CreateUserRequest(
        String name,
        String surname,
        String username,
        String password
) {

}
