package com.hypercompany.ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "favoriProducts")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class FavoriProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int productId;
    private String productName;
    private String productDescription;
    private double productPrice;
    private String productImage;

    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User user;



}
