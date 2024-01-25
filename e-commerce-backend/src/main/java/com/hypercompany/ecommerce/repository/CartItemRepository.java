package com.hypercompany.ecommerce.repository;

import com.hypercompany.ecommerce.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem,Integer> {
    List<CartItem> findAllByUserId(int id);
    void deleteAllByUserId(int id);
}
