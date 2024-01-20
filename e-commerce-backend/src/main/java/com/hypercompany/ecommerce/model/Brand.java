package com.hypercompany.ecommerce.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@Table(name = "brands")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "brand_id")
    private int brandId;

    @Column(name = "brand_name")
    private String name;

    @OneToMany(mappedBy = "brand")
    private List<Product> products;

}
