import {Component} from '@angular/core';
import {ToastrService} from "ngx-toastr";

import {MatIcon} from "@angular/material/icon";
import {FavoriteProducts} from "../../../../models/product/favoriteProducts";
import {FavoriProductService} from "../../../../services/user/favori-product.service";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-favorite-product',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './favorite-product.component.html',
  styleUrl: './favorite-product.component.scss'
})
export class FavoriteProductComponent {
  favoriteProducts: FavoriteProducts[] = [];

  constructor(private favoriteProductService: FavoriProductService,
              private toastrService: ToastrService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.loadFavoriteProducts();
  }

  loadFavoriteProducts() {
    this.favoriteProductService.getFavoriteProducts().subscribe(favoriteProducts => {
      this.favoriteProducts = favoriteProducts;
    });
  }

  removeProductFromFavorites(favoriteProductId: number) {
    this.favoriteProductService.deleteFavoriteProduct(favoriteProductId).subscribe(
      response => {
        console.log('Favori ürün silindi', response);
       this.loadFavoriteProducts();
      },
      error => {
        console.error('Favori ürünü silme işlemi sırasında hata oluştu', error);
      }
    );
  }
}
