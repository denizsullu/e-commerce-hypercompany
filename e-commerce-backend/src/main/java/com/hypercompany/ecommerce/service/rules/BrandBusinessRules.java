package com.hypercompany.ecommerce.service.rules;

import com.hypercompany.ecommerce.core.exceptions.BusinessExceptions;
import com.hypercompany.ecommerce.repository.BrandRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class BrandBusinessRules {

    private BrandRepository brandRepository;
    public void checkIfBrandNameExists(String name){
        if(this.brandRepository.existsByName(name)){
            throw new BusinessExceptions("Brand name already exists");
        }
    }
}
