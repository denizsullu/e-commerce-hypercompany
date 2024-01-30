import {Component, Input, OnInit} from '@angular/core';
import {CurrencyPipe} from "@angular/common";


import {ToastrService} from "ngx-toastr";

import {MatIcon} from "@angular/material/icon";
import {TurkishLiraPipe} from "../../../../pipes/turkish-lira.pipe";
import {Product} from "../../../../models/product/product";
import {ProductService} from "../../../../services/product.service";
import {AuthService} from "../../../../services/auth/auth.service";
import {CartService} from "../../../../services/cart.service";
import {FavoriProductService} from "../../../../services/user/favori-product.service";


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatIcon,
    TurkishLiraPipe
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product: Product = {productId:1,productDescription:"",productImage:"",categoryName:"",
  productPrice:0,productName:"",brandName:""};

  constructor(private productService: ProductService
              ,private authService:AuthService
              ,private cartService:CartService
              ,private toastrService:ToastrService,
              private favoriteProductService:FavoriProductService
  ) {}

  //withComponentInputBinding
@Input() productId:number;
  ngOnInit(): void {
    this.getProductDetail(this.productId)
  }
  getProductDetail(productId: number) {
    this.productService.getProductDetail(productId).subscribe({
      next: (response) => {
        this.product = response;
      },
      error: (error) => {
        console.error('Ürün detayı yüklenirken bir hata oluştu:', error);
      },
      complete: () => {
      }
    });

  }

  addToCart(product: Product) {
    const userId = this.authService.getCurrentUserId();
    if (userId !== null) {
      const productToAdd = { ...product, userId: userId };
      this.cartService.addToCart(productToAdd).subscribe({
        next: (response) => {
          console.log("Ürün başarıyla sepete eklendi");
          this.toastrService.success("Ürün başarıyla sepete eklendi", product.productName);
          this.cartService.loadCartItems(userId);
        },
        error: (error) => {
          console.error("Sepete ekleme sırasında hata oluştu", error);
        }
      });
    } else {
      this.toastrService.info("Lütfen önce giriş yapın");
    }
  }


  addProductToFavorites(product: Product) {
    this.favoriteProductService.addFavoriteProduct(product).subscribe(
      response => {
        console.log('Ürün favorilere eklendi', response);
      },
      error => {
        console.error('Bir hata oluştu', error);
      }
    );
  }

}
