import {Component, Inject, Input, OnInit} from '@angular/core';
import {CurrencyPipe, TitleCasePipe} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {ToastrService} from "ngx-toastr";

import {switchMap, take} from "rxjs";
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../../cart/services/cart.service";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {AuthService} from "../../../auth/services/auth.service";
import {FavoriProductService} from "../../../user/service/favori-product.service";


@Component({
  selector: 'app-product-main',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
    TitleCasePipe,
    MatIcon,
    MatProgressSpinner,

  ],
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.scss'
})
export class ProductMainComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService,
    private authService:AuthService,
    private favoriteProductService:FavoriProductService
    ) {
  }

@Input() categoryId:number;
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
