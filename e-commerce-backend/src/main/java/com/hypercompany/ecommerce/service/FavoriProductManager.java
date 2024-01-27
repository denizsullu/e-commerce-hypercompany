package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.core.utilities.mappers.ModelMapperService;
import com.hypercompany.ecommerce.model.FavoriProduct;
import com.hypercompany.ecommerce.model.dto.requests.CreateFavoriProduct;
import com.hypercompany.ecommerce.model.dto.responses.GetFavoriProductByUser;
import com.hypercompany.ecommerce.repository.FavoriProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class FavoriProductManager implements FavoriProductService {

    private final FavoriProductRepository favoriProductRepository;
    private final ModelMapperService modelMapperService;


    @Override
    public void addFavoriProduct(CreateFavoriProduct createFavoriProduct) {
        int userId = createFavoriProduct.getUserId();
        String productName = createFavoriProduct.getProductName();


        if (!favoriProductRepository.existsByProductNameAndUserId(productName, userId)) {
            FavoriProduct favoriProduct = modelMapperService.forResponse().map(createFavoriProduct, FavoriProduct.class);
            favoriProductRepository.save(favoriProduct);
        } else {
            throw new RuntimeException("Bu ürün zaten favorilerinizde mevcut");
        }


    }

    @Override
    public List<GetFavoriProductByUser> getFavoriProductByUser(int userId) {
       List<FavoriProduct> favoriProductList = favoriProductRepository.findByUserId(userId);
         return favoriProductList.stream()
                 .map(favoriProduct -> modelMapperService.forResponse().map(favoriProduct, GetFavoriProductByUser.class)).toList();
    }

    @Override
    public void deleteFavoriProduct(int favoriProductId) {
        favoriProductRepository.deleteById(favoriProductId);
    }
}
