package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.Order;
import com.hypercompany.ecommerce.model.dto.requests.CreateOrderRequest;
import com.hypercompany.ecommerce.model.dto.responses.ApiResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetAllByUserOrder;
import com.hypercompany.ecommerce.model.dto.responses.GetAllOrder;
import com.hypercompany.ecommerce.service.OrderService;
import lombok.AllArgsConstructor;
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
    public List<GetAllByUserOrder> getAllByUserId(@PathVariable int userId){
        return this.orderService.getAllOrdersByUserId(userId);
    }
    @GetMapping("/getall")
    public List<GetAllOrder> getAll(){
        return this.orderService.getAll();
    }

    @PostMapping("/create")
    public ResponseEntity<ApiResponse> add(@RequestBody CreateOrderRequest createOrderRequest) {
        this.orderService.createOrder(createOrderRequest);
        ApiResponse response = new ApiResponse(true, "Order successfully created.");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

}
