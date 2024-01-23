package com.hypercompany.ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "products")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private int productId;

    private String productName;
    private String productDescription;
    private double productPrice;
    private String productImage;
    private int productQuantity;




    @ManyToOne()
    @JoinColumn(name = "brand_id")
    private Brand brand;

    @ManyToOne()
    @JoinColumn(name = "category_id")
    private Category category;
}
