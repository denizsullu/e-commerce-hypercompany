package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.model.dto.responses.GetByUserDetails;
import com.hypercompany.ecommerce.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class CustomerService {
    private final UserRepository customerRepository;
    private final ModelMapper modelMapper;

    public GetByUserDetails getByUsername(String username){
        return modelMapper.map(customerRepository.findByUsername(username), GetByUserDetails.class);
    }


}
