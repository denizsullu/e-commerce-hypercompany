package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.model.dto.requests.CreateCreditCardRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllCreditCardByUser;

import java.util.List;

public interface CreditCardService {

    List<GetAllCreditCardByUser> getAllCreditCardByUser(Integer userId);
    void deleteCreditCard(Integer creditCardId);
    void addCreditCard(CreateCreditCardRequest createCreditCardRequest);
}
