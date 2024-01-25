package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.model.dto.requests.CreateCartItemRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllCartItemResponse;

import java.util.List;

public interface CartItemService {
   List<GetAllCartItemResponse> getAllCartItems(int userid);

   void deleteCartItem(int id);
   void deleteAllCartItems(int userid);
   void addCartItem(CreateCartItemRequest createCartItemRequest);

}
