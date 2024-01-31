package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.dto.requests.CreateCartItemRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllCartItemResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByUserDetails;
import com.hypercompany.ecommerce.service.CartItemService;
import lombok.AllArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@AllArgsConstructor
@CrossOrigin("*")
public class CartItemController {

    private final CartItemService cartService;

    @GetMapping("/get/{username}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    @Cacheable(value = "cartItems")
    public List<GetAllCartItemResponse> getByUsername(@PathVariable("username") int userid){
        return cartService.getAllCartItems(userid);
    }
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    @CacheEvict(value = "cartItems", allEntries = true)
    public void deleteCartItem(@PathVariable("id") int id){
        cartService.deleteCartItem(id);
    }
    @DeleteMapping("/delete/{userid}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    @CacheEvict(value = "cartItems", allEntries = true)
    public void deleteAllCartItems(@PathVariable("userid") int userid){
        cartService.deleteAllCartItems(userid);
    }
    @PostMapping("/add")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    @CacheEvict(value = "cartItems", allEntries = true)
    public void addCartItem(@RequestBody CreateCartItemRequest createCartItemRequest){
        cartService.addCartItem(createCartItemRequest);
    }

    @PostMapping("/increase")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    @CacheEvict(value = "cartItems", allEntries = true)
    public void increaseCartItemQuantity(@RequestParam int productId, @RequestParam int userId) {
        this.cartService.increaseCartItemQuantity(productId, userId);

    }

    @PostMapping("/decrease")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    @CacheEvict(value = "cartItems", allEntries = true)
    public void decreaseCartItemQuantity(@RequestParam int productId, @RequestParam int userId) {
        this.cartService.decreaseCartItemQuantity(productId, userId);
    }


}
