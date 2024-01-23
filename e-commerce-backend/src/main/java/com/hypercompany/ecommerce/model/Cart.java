package com.hypercompany.ecommerce.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Table(name = "cart")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


}
