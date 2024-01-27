package com.hypercompany.ecommerce.repository;

import com.hypercompany.ecommerce.model.FavoriProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavoriProductRepository extends JpaRepository<FavoriProduct, Integer> {
    List<FavoriProduct> findByUserId(int userId);
    boolean existsByProductNameAndUserId(String productName, int userId);
}
