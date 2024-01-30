import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable, of, switchMap, take} from "rxjs";
import {environment} from "../../../environments/environment";
import {FavoriteProducts} from "../../models/product/favoriteProducts";
import {Product} from "../../models/product/product";
import {CreateFavoriProduct} from "../../models/product/createFavoriProduct";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class FavoriProductService {

  constructor(private httpClient: HttpClient, private authService: AuthService,private toasService:ToastrService) {}

  getFavoriteProducts(): Observable<FavoriteProducts[]> {
    return this.authService.currentUser$.pipe(
      take(1),
      switchMap(user => {
        if (user && user.id) {
          const url = environment.apiEndpoint + 'api/favoriteProducts/getByUser/' + user.id;
          return this.httpClient.get<FavoriteProducts[]>(url);
        }
        return of([]);
      })
    );
  }

  addFavoriteProduct(product: Product): Observable<any> {
    return this.authService.currentUser$.pipe(
      take(1),
      switchMap(user => {
        if (user && user.id) {
          const url = environment.apiEndpoint + 'api/favoriteProducts/add';
          const favoriProductData: CreateFavoriProduct = {
            productId: product.productId,
            productName: product.productName,
            productDescription: product.productDescription,
            productPrice: product.productPrice,
            productImage: product.productImage,
            userId: user.id
          };
          this.toasService.success("Favorilere eklendi",product.productName);
          return this.httpClient.post(url, favoriProductData);
        }
        this.toasService.error("Favorilere eklemek için giriş yapmalısınız");
        return of({ error: 'Kullanıcı Giriş yapmadı' });
      })
    );
  }

  deleteFavoriteProduct(favoriteProductId: number): Observable<any> {
    const url = environment.apiEndpoint + 'api/favoriteProducts/delete/' + favoriteProductId;
    console.log(favoriteProductId)
    this.toasService.success("Favorilerden silindi");
    return this.httpClient.delete(url);
  }

}
