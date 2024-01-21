package com.hypercompany.ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Table(name = "creditCard")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class CreditCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String cardNumber;
    private String cardHolderName;
    private LocalDate expiryDate;
    private String securityCode;

    @ManyToOne
    @JoinColumn(name = "user_id",nullable = false)
    private User user;


}
