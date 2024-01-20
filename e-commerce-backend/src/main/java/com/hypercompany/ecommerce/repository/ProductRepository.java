package com.hypercompany.ecommerce.repository;

import com.hypercompany.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    List<Product> findAllByCategory_CategoryIdOrderByProductIdDesc(int categoryId);


}
