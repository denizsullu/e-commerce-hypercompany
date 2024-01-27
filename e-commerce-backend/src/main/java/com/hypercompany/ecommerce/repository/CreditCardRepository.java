package com.hypercompany.ecommerce.repository;

import com.hypercompany.ecommerce.model.CreditCard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CreditCardRepository extends JpaRepository<CreditCard, Integer> {
    List<CreditCard> findByUserId(Integer userId);
}
