package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.dto.requests.CreateAddressRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllAddressResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByIdBrandResponse;
import com.hypercompany.ecommerce.service.AddressService;
import lombok.AllArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/address")
@AllArgsConstructor
@CrossOrigin("*")
public class AddressController {
    private final AddressService addressService;

    @GetMapping("/getall/{userId}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    @Cacheable(value = "addresses")
    public List<GetAllAddressResponse> findAllByUser(@PathVariable int userId){
        return addressService.findAllByUser(userId);
    }

    @PostMapping("/save")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    @CacheEvict(value = "addresses", allEntries = true)
    public void saveAddress(@RequestBody CreateAddressRequest createAddressRequest){
        addressService.saveAddress(createAddressRequest);
    }

    @DeleteMapping("/delete/{addressId}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    @CacheEvict(value = "addresses", allEntries = true)
    public void deleteAddress(@PathVariable Integer addressId){
        addressService.deleteAddress(addressId);
    }

}
