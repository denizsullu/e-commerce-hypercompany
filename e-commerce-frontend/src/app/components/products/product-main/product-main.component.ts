import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product.service";
import {CurrencyPipe, TitleCasePipe} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {ToastrService} from "ngx-toastr";
import {CartService} from "../../../services/cart.service";
import {switchMap} from "rxjs";
import {response} from "express";


@Component({
  selector: 'app-product-main',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
    TitleCasePipe,
    MatIcon,

  ],
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.scss'
})
export class ProductMainComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private cartService: CartService) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => {
        if (params['categoryId']) {
          return this.productService.getProductsByCategory(params['categoryId']);
        } else {
          return this.productService.getProducts();
        }
      })
    ).subscribe( {
      next:(response) =>{
        this.products = response;
      },
      error:(error) =>{
        console.log("Kategoriler çekilirken hata meydana geldi")
      }
    });

  }


  addToCart(product: Product) {
    this.toastr.success("Sepete Eklendi", product.productName)
    this.cartService.addToCart(product)
  }

  addToFavorite(product: Product) {
    this.toastr.info("Favorilere eklendi", product.productName)
  }


}
