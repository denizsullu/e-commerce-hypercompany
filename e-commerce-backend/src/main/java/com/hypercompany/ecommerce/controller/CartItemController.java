package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.dto.requests.CreateCartItemRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllCartItemResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByUserDetails;
import com.hypercompany.ecommerce.service.CartItemService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@AllArgsConstructor
@CrossOrigin("*")
public class CartItemController {

    private final CartItemService customerService;

    @GetMapping("/get/{username}")
    public List<GetAllCartItemResponse> getByUsername(@PathVariable("username") int userid){
        return customerService.getAllCartItems(userid);
    }
    @DeleteMapping("/{id}")
    public void deleteCartItem(@PathVariable("id") int id){
        customerService.deleteCartItem(id);
    }
    @DeleteMapping("/delete/{userid}")
    public void deleteAllCartItems(@PathVariable("userid") int userid){
        customerService.deleteAllCartItems(userid);
    }
    @PostMapping("/add")
    public void addCartItem(@RequestBody CreateCartItemRequest createCartItemRequest){
        customerService.addCartItem(createCartItemRequest);
    }

}
