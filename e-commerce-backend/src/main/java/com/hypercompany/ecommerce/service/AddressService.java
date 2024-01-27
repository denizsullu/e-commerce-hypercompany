package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.model.dto.requests.CreateAddressRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllAddressResponse;

import java.util.List;

public interface AddressService {
    List<GetAllAddressResponse> findAllByUser(int userId);

    void saveAddress(CreateAddressRequest createAddressRequest);

    void deleteAddress(Integer addressId);
}
