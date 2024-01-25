package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.model.dto.requests.UpdateUserRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetByUserDetails;

public interface CustomerService {

   GetByUserDetails getByUsername(String username);
    void updateCustomer(String username, UpdateUserRequest request);

}
