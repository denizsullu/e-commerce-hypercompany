package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.model.Order;
import com.hypercompany.ecommerce.model.dto.requests.CreateOrderRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllByUserOrder;
import com.hypercompany.ecommerce.model.dto.responses.GetAllOrder;

import java.util.List;
import java.util.Optional;

public interface OrderService {

    void createOrder(CreateOrderRequest request);

    List<GetAllByUserOrder> getAllOrdersByUserId(int userId);

    List<GetAllOrder> getAll();


}
