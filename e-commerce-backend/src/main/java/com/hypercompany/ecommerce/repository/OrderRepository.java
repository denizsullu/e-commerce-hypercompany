package com.hypercompany.ecommerce.repository;

import com.hypercompany.ecommerce.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Integer>{

    List<Order> findAllByUserId(int userId);

}
