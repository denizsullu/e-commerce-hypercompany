package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.dto.requests.CreateAddressRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllAddressResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByIdBrandResponse;
import com.hypercompany.ecommerce.service.AddressService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/address")
@AllArgsConstructor
@CrossOrigin("*")
public class AddressController {
    private final AddressService addressService;

    @GetMapping("/getall/{userId}")
    public List<GetAllAddressResponse> findAllByUser(@PathVariable int userId){
        return addressService.findAllByUser(userId);
    }

    @PostMapping("/save")
    public void saveAddress(@RequestBody CreateAddressRequest createAddressRequest){
        addressService.saveAddress(createAddressRequest);
    }

    @DeleteMapping("/delete/{addressId}")
    public void deleteAddress(@PathVariable Integer addressId){
        addressService.deleteAddress(addressId);
    }

}
