package com.hypercompany.ecommerce.repository;

import com.hypercompany.ecommerce.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressRepository extends JpaRepository<Address,Integer> {

    List<Address> findAllByUserId(Integer userId);

}
