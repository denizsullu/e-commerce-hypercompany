package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.core.utilities.mappers.ModelMapperService;
import com.hypercompany.ecommerce.model.Order;
import com.hypercompany.ecommerce.model.dto.requests.CreateOrderRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllByUserOrder;
import com.hypercompany.ecommerce.model.dto.responses.GetAllOrder;
import com.hypercompany.ecommerce.repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.checkerframework.checker.units.qual.A;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor

public class OrderManager implements OrderService{
    private final OrderRepository orderRepository;
    private final ModelMapperService modelMapperService;
    @Override
    public void createOrder(CreateOrderRequest request) {
        Order order = modelMapperService.forRequest().map(request,Order.class);
        orderRepository.save(order);
    }

    @Override
    public List<GetAllByUserOrder> getAllOrdersByUserId(int userId) {
        List<Order> orders = orderRepository.findAllByUserId(userId);
        return orders.stream().map(order -> modelMapperService.forResponse().map(order,GetAllByUserOrder.class)).toList();
    }

    @Override
    public List<GetAllOrder> getAll() {
        List<Order> orders = orderRepository.findAll();
        return orders.stream().map(order -> modelMapperService.forResponse().map(order,GetAllOrder.class)).toList();
    }

    @Override
    public void changeOrderStatus(int orderId, String status) {
        Optional<Order> order = orderRepository.findById(orderId);
        if (order.isPresent()){
            order.get().setStatus(status);
            orderRepository.save(order.get());
        }
    }
}
