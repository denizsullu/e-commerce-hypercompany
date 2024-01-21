//package com.hypercompany.ecommerce.model;
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Table(name = "address")
//@Getter
//@Setter
//@AllArgsConstructor
//@NoArgsConstructor
//@Entity
//public class Address {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//
//    private String street;
//    private String city;
//    private String state;
//    private String postalCode;
//    private String country;
//
//
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;
//}
