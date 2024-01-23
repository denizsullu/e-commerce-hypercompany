package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.model.dto.responses.GetAllCartResponse;

import java.util.List;

public interface CartService {
    List<GetAllCartResponse> getAllCartByUsername(Long userId);
}
