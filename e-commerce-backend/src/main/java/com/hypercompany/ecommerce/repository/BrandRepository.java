package com.hypercompany.ecommerce.repository;

import com.hypercompany.ecommerce.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BrandRepository extends JpaRepository<Brand, Integer> {

    boolean existsByName(String name);
}
