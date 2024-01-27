package com.hypercompany.ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "cartItem")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private int productId;
    private String productName;
    private String productDescription;
    private double productPrice;
    private String productImage;
    private int userProductQuantity;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
