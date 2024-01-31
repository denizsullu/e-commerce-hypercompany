package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.dto.requests.CreateFavoriProduct;
import com.hypercompany.ecommerce.model.dto.responses.GetFavoriProductByUser;
import com.hypercompany.ecommerce.service.FavoriProductService;
import lombok.AllArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favoriteProducts")
@AllArgsConstructor
@CrossOrigin("*")
public class FavoriProductController {
    private final FavoriProductService favoriProductService;

    @GetMapping("/getByUser/{userId}")
    @Cacheable(value = "favoriteProducts")
     public List<GetFavoriProductByUser> getByUser(@PathVariable(value = "userId") int userId){
       return this.favoriProductService.getFavoriProductByUser(userId);
    }
    @PostMapping("/add")
    @CacheEvict(value = "favoriteProducts", allEntries = true)
    public void add(@RequestBody CreateFavoriProduct createFavoriProduct){
        this.favoriProductService.addFavoriProduct(createFavoriProduct);
    }

    @DeleteMapping("/delete/{favoriProductId}")
    @CacheEvict(value = "favoriteProducts", allEntries = true)
    public void delete(@PathVariable(value = "favoriProductId") int favoriProductId){
        this.favoriProductService.deleteFavoriProduct(favoriProductId);
    }
}
