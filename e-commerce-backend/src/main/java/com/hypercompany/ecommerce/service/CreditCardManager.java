package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.core.utilities.mappers.ModelMapperService;
import com.hypercompany.ecommerce.model.CreditCard;
import com.hypercompany.ecommerce.model.dto.requests.CreateCreditCardRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllCreditCardByUser;
import com.hypercompany.ecommerce.repository.CreditCardRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class CreditCardManager implements CreditCardService{
    private final CreditCardRepository creditCardRepository;
    private final ModelMapperService modelMapperService;
    @Override
    public List<GetAllCreditCardByUser> getAllCreditCardByUser(Integer userId) {
        List<CreditCard> creditCardList = creditCardRepository.findByUserId(userId);
        return creditCardList.stream().map(creditCard -> modelMapperService
                .forResponse().map(creditCard, GetAllCreditCardByUser.class)).toList();
    }

    @Override
    public void deleteCreditCard(Integer creditCardId) {
        creditCardRepository.deleteById(creditCardId);

    }

    @Override
    public void addCreditCard(CreateCreditCardRequest createCreditCardRequest) {
        CreditCard creditCard = modelMapperService.forRequest().map(createCreditCardRequest, CreditCard.class);
        creditCardRepository.save(creditCard);
    }
}
