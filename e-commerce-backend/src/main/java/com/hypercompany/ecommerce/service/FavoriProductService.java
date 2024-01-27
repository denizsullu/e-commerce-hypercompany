package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.model.dto.requests.CreateFavoriProduct;
import com.hypercompany.ecommerce.model.dto.responses.GetFavoriProductByUser;

import java.util.List;

public interface FavoriProductService {

    void addFavoriProduct(CreateFavoriProduct createFavoriProduct);
    List<GetFavoriProductByUser> getFavoriProductByUser(int userId);

    void deleteFavoriProduct(int favoriProductId);
}
