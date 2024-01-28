import {Injectable} from '@angular/core';
import {CartItem} from "../models/cart/cartItem";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {environment} from "../../environments/environment";
import {Product} from "../models/product/product";


@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
    public cartItems$ = this.cartItemsSubject.asObservable();


    constructor(private httpClient: HttpClient) {
    }


    loadCartItems(userId: number) {
        let newPath = environment.apiEndpoint + "api/cart/get/" + userId;
        this.httpClient.get<CartItem[]>(newPath).subscribe(cartItems => {
            this.cartItemsSubject.next(cartItems);
        });
    }

    getCartItems(): Observable<CartItem[]> {
        return this.cartItems$;
    }

    addToCart(product: Product) {
        let newPath: string = environment.apiEndpoint + "api/cart/add";
        return this.httpClient.post(newPath, product);
    }

    deleteCartItem(cartItemId: number) {
        let deletePath = environment.apiEndpoint + "api/cart/" + cartItemId;
        return this.httpClient.delete(deletePath);
    }

    deleteAllCartItems(userId: number): Observable<any> {
        let deleteAllPath = environment.apiEndpoint + 'api/cart/delete/' + userId;
        return this.httpClient.delete(deleteAllPath).pipe(
            tap(() => this.loadCartItems(userId))
        );
    }


    increaseCartItemQuantity(productId: number, userId: number): Observable<any> {
        return this.httpClient.post(`${environment.apiEndpoint}api/cart/increase`, null, {
            params: {productId: productId.toString(), userId: userId.toString()}
        }).pipe(
            tap(() => this.loadCartItems(userId))
        );
    }

    decreaseCartItemQuantity(productId: number, userId: number): Observable<any> {
        return this.httpClient.post(`${environment.apiEndpoint}api/cart/decrease`, null, {
            params: {productId: productId.toString(), userId: userId.toString()}
        }).pipe(
            tap(() => this.loadCartItems(userId))
        );
    }




}
