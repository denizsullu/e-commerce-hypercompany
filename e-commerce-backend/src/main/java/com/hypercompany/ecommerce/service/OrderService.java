package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.model.dto.requests.CreateOrderRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllByUserOrder;
import com.hypercompany.ecommerce.model.dto.responses.GetAllOrder;

import java.util.List;

public interface OrderService {

    void createOrder(CreateOrderRequest request);

    List<GetAllByUserOrder> getAllOrdersByUserId(int userId);

    List<GetAllOrder> getAll();

    void changeOrderStatus(int orderId, String status);


}
