import {Component} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../../auth/services/auth.service";
import {FavoriProductService} from "../../service/favori-product.service";
import {FavoriteProducts} from "../../models/favoriteProducts";
import {MatIcon} from "@angular/material/icon";

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
