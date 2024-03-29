package com.hypercompany.ecommerce.repository;

import com.hypercompany.ecommerce.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends JpaRepository<CartItem,Integer> {
    List<CartItem> findAllByUserId(int id);
    @Transactional
    void deleteAllByUserId(int id);

    List<CartItem> findByUserIdAndProductName(int userId, String productName);

    CartItem findByUserIdAndProductId(int userId, int productId);
}
