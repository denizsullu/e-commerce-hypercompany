package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.core.utilities.mappers.ModelMapperService;
import com.hypercompany.ecommerce.model.Address;
import com.hypercompany.ecommerce.model.dto.requests.CreateAddressRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllAddressResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetAllCartItemResponse;
import com.hypercompany.ecommerce.repository.AddressRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AddressManager implements AddressService{

    private final AddressRepository addressRepository;
    private final ModelMapperService modelMapperService;
    @Override
    public List<GetAllAddressResponse> findAllByUser(int userId) {
        return addressRepository.findAllByUserId(userId).stream().map(address -> modelMapperService
                .forResponse().map(address, GetAllAddressResponse.class)).toList();
    }

    @Override
    public void saveAddress(CreateAddressRequest createAddressRequest) {
        addressRepository.save(modelMapperService.forRequest().map(createAddressRequest, Address.class));
    }

    @Override
    public void deleteAddress(Integer addressId) {
        addressRepository.deleteById(addressId);
    }
}
