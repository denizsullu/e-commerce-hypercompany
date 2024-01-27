import {Component, Input, OnInit} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {take} from "rxjs";
import {AuthService} from "../../../auth/services/auth.service";
import {CartService} from "../../../cart/services/cart.service";
import {ToastrService} from "ngx-toastr";
import {FavoriProductService} from "../../../user/service/favori-product.service";
import {MatIcon} from "@angular/material/icon";
import {TurkishLiraPipe} from "../../../shared/pipes/turkish-lira.pipe";


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
    this.authService.currentUser$.pipe(take(1)).subscribe({
      next: (user) => {
        if (user && user.id) {
          const productToAdd = { ...product, userId: user.id };
          this.cartService.addToCart(productToAdd).subscribe({
            next: (response) => {
              console.log("Ürün başarıyla sepete eklendi");
              this.toastrService.success("Ürün başarıyla sepete eklendi",product.productName)
              this.cartService.loadCartItems(user.id)
            },
            error: (error) => {
              console.log("Sepete ekleme sırasında hata oluştu");

            }
          });
        } else {
          this.toastrService.info("Lütfen önce giriş yapın");

        }
      },
      error: (error) => {
        console.error("Kullanıcı bilgisi alınırken hata oluştu", error);

      }
    });
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
