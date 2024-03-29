package com.hypercompany.ecommerce.model.dto.responses;

import com.hypercompany.ecommerce.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetByUserDetails {
    private Long id;
    private String name;
    private String surname;
    private String username;
    private Set<Role> authorities;

}
