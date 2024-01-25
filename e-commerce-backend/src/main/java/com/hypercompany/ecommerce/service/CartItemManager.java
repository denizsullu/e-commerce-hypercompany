package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.core.utilities.mappers.ModelMapperService;
import com.hypercompany.ecommerce.model.CartItem;
import com.hypercompany.ecommerce.model.dto.requests.CreateCartItemRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllCartItemResponse;
import com.hypercompany.ecommerce.repository.CartItemRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class CartItemManager implements CartItemService{
        private final CartItemRepository cartItemRepository;
        private final ModelMapperService modelMapper;
    @Override
    public List<GetAllCartItemResponse> getAllCartItems(int userid) {
       return cartItemRepository.findAllByUserId(userid).stream().map(cartItem -> modelMapper
               .forResponse().map(cartItem,GetAllCartItemResponse.class)).toList();
    }

    @Override
    public void deleteCartItem(int id) {
        cartItemRepository.deleteById(id);

    }

    @Override
    public void deleteAllCartItems(int userid) {
        cartItemRepository.deleteAllByUserId(userid);
    }

    @Override
    public void addCartItem(CreateCartItemRequest createCartItemRequest) {
        cartItemRepository.save(modelMapper.forRequest().map(createCartItemRequest, CartItem.class));
    }
}
