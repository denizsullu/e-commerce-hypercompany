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
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CartItemManager implements CartItemService {
    private final CartItemRepository cartItemRepository;
    private final ModelMapperService modelMapper;

    @Override
    public List<GetAllCartItemResponse> getAllCartItems(int userid) {
        List<CartItem> cartItems = cartItemRepository.findAllByUserId(userid);

        double total = cartItems.stream()
                .mapToDouble(CartItem::getTotalPrice)
                .sum();

        return cartItems.stream()
                .map(cartItem -> modelMapper
                        .forResponse()
                        .map(cartItem, GetAllCartItemResponse.class))
                .peek(response -> response.setProductTotalPrice(total))
                .collect(Collectors.toList());
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
        List<CartItem> existingCartItems = cartItemRepository.findByUserIdAndProductName(
                createCartItemRequest.getUserId(), createCartItemRequest.getProductName());

        if (!existingCartItems.isEmpty()) {
            CartItem cartItem = existingCartItems.get(0);
            cartItem.setUserProductQuantity(cartItem.getUserProductQuantity() + 1);
            cartItem.setTotalPrice(cartItem.getProductPrice() * cartItem.getUserProductQuantity());
            cartItemRepository.save(cartItem);
        } else {

            CartItem newCartItem = modelMapper.forRequest().map(createCartItemRequest, CartItem.class);
            newCartItem.setUserProductQuantity(1);
            newCartItem.setTotalPrice(newCartItem.getProductPrice() * newCartItem.getUserProductQuantity());
            cartItemRepository.save(newCartItem);
        }
    }

    @Override
    public void increaseCartItemQuantity(int productId, int userId) {
        CartItem cartItem = this.cartItemRepository.findByUserIdAndProductId(userId, productId);
        if (cartItem != null) {
            cartItem.setUserProductQuantity(cartItem.getUserProductQuantity() + 1);
            cartItem.setTotalPrice(cartItem.getProductPrice() * cartItem.getUserProductQuantity());
            cartItemRepository.save(cartItem);
        } else {

        }
    }

    @Override
    public void decreaseCartItemQuantity(int productId, int userId) {
        CartItem cartItem = this.cartItemRepository.findByUserIdAndProductId(userId, productId);
        if (cartItem != null) {
            int currentQuantity = cartItem.getUserProductQuantity();
            if (currentQuantity > 1) {
                cartItem.setUserProductQuantity(currentQuantity - 1);
                cartItem.setTotalPrice(cartItem.getProductPrice() * cartItem.getUserProductQuantity());
                cartItemRepository.save(cartItem);
            } else {

                cartItemRepository.delete(cartItem);
            }
        }
    }


}
