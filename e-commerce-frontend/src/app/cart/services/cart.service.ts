import {Injectable} from '@angular/core';
import {CartItem} from "../model/cartItem";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {Product} from "../../products/models/product";



@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();
  constructor(private httpClient: HttpClient) { }


  loadCartItems(userId: number) {
    let newPath = environment.apiEndpoint + "api/cart/get/" + userId;
    this.httpClient.get<CartItem[]>(newPath).subscribe(cartItems => {
      this.cartItemsSubject.next(cartItems);
    });
  }

  addToCart(product:Product){
    let newPath: string = environment.apiEndpoint + "api/cart/add";
    return this.httpClient.post(newPath,product);
  }

  deleteCartItem(cartItemId: number) {
    let deletePath = environment.apiEndpoint + "api/cart/" + cartItemId;
    return this.httpClient.delete(deletePath);
  }
  deleteAllCartItems(userId: number): Observable<any> {
    let deleteAllPath = environment.apiEndpoint + 'api/cart/delete/' + userId;
    return this.httpClient.delete(deleteAllPath);
  }




}
