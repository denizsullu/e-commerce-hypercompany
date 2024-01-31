package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.Order;
import com.hypercompany.ecommerce.model.dto.requests.CreateOrderRequest;
import com.hypercompany.ecommerce.model.dto.responses.ApiResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetAllByUserOrder;
import com.hypercompany.ecommerce.model.dto.responses.GetAllOrder;
import com.hypercompany.ecommerce.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
@AllArgsConstructor
@CrossOrigin("*")
public class OrderController {
    private final OrderService orderService;

  @GetMapping("/getallbyuserid/{userId}")
  @Cacheable(value = "orders")
    public List<GetAllByUserOrder> getAllByUserId(@PathVariable int userId){
        return this.orderService.getAllOrdersByUserId(userId);
    }
    @GetMapping("/getall")
    @Cacheable(value = "orders")
    public List<GetAllOrder> getAll(){
        return this.orderService.getAll();
    }

    @PostMapping("/create")
    @CacheEvict(value = "orders", allEntries = true)
    public ResponseEntity<ApiResponse> add(@RequestBody CreateOrderRequest createOrderRequest) {
        this.orderService.createOrder(createOrderRequest);
        ApiResponse response = new ApiResponse(true, "Order successfully created.");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PutMapping("/changeorderstatus/{orderId}/{status}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<ApiResponse> changeOrderStatus(@PathVariable int orderId, @PathVariable String status){
        this.orderService.changeOrderStatus(orderId,status);
        ApiResponse response = new ApiResponse(true,"Order status successfully changed.");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

}
