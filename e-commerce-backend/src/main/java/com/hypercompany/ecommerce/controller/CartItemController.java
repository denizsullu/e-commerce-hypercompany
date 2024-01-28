package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.dto.requests.CreateCartItemRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllCartItemResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByUserDetails;
import com.hypercompany.ecommerce.service.CartItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@AllArgsConstructor
@CrossOrigin("*")
public class CartItemController {

    private final CartItemService cartService;

    @GetMapping("/get/{username}")
    public List<GetAllCartItemResponse> getByUsername(@PathVariable("username") int userid){
        return cartService.getAllCartItems(userid);
    }
    @DeleteMapping("/{id}")
    public void deleteCartItem(@PathVariable("id") int id){
        cartService.deleteCartItem(id);
    }
    @DeleteMapping("/delete/{userid}")
    public void deleteAllCartItems(@PathVariable("userid") int userid){
        cartService.deleteAllCartItems(userid);
    }
    @PostMapping("/add")
    public void addCartItem(@RequestBody CreateCartItemRequest createCartItemRequest){
        cartService.addCartItem(createCartItemRequest);
    }

    @PostMapping("/increase")
    public void increaseCartItemQuantity(@RequestParam int productId, @RequestParam int userId) {
        this.cartService.increaseCartItemQuantity(productId, userId);

    }

    @PostMapping("/decrease")
    public void decreaseCartItemQuantity(@RequestParam int productId, @RequestParam int userId) {
        this.cartService.decreaseCartItemQuantity(productId, userId);
    }


}
