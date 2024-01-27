package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.dto.requests.CreateCreditCardRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllCreditCardByUser;
import com.hypercompany.ecommerce.service.CreditCardService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/creditcard")
@AllArgsConstructor
@CrossOrigin("*")
public class CreditCardController {
    private final CreditCardService creditCardService;

    @GetMapping("/getall/{userId}")
    public List<GetAllCreditCardByUser> getAllCreditCardByUser(@PathVariable(name = "userId") Integer userId) {
        return creditCardService.getAllCreditCardByUser(userId);
    }
    @DeleteMapping("/delete/{creditCardId}")
    public void deleteCreditCard(@PathVariable(name = "creditCardId") Integer creditCardId) {
        creditCardService.deleteCreditCard(creditCardId);
    }
    @PostMapping("/add")
    public void addCreditCard(@RequestBody CreateCreditCardRequest createCreditCardRequest) {
        creditCardService.addCreditCard(createCreditCardRequest);
    }
}
