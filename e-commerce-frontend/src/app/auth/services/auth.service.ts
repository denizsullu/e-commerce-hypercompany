import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, switchMap, tap} from 'rxjs';
import {LoginModel} from "../models/loginModel";
import {TokenModel} from "../models/TokenModel";
import {RegisterModel} from "../models/registerModel";
import {environment} from "../../../environments/environment";
import {TokenService} from "./token.service";
import {UserService} from "../../admin/services/user.service";
import {UserDetail} from "../../user/models/userDetail";
import {CartService} from "../../cart/services/cart.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.checkToken());
  private currentUserSubject = new BehaviorSubject<UserDetail | null>(null);

  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
    private userService: UserService,
    private cartService: CartService,
  ) {
    this.loadUserFromLocalStorage();
  }

  login(user: LoginModel): Observable<UserDetail> {
    return this.httpClient.post<TokenModel>(environment.apiEndpoint + "auth/login", user).pipe(
      switchMap(tokenModel => {
        this.setSession(tokenModel.token);
        return this.userService.getUserDetails(this.tokenService.getUserDetailsFromToken().sub);
      }),
      tap(userData => {
        this.updateUserState(userData);
      })
    );
  }

  getCurrentUserId(): number | null {
    const currentUser = this.currentUserSubject.value;
    return currentUser ? currentUser.id : null;
  }

  private setSession(token: string): void {
    localStorage.setItem("token", token);
    const tokenDetails = this.tokenService.getUserDetailsFromToken();
    localStorage.setItem("role", tokenDetails.authorities[0]);
  }

  private updateUserState(userData: UserDetail): void {
    localStorage.setItem("username", userData.username);
    this.currentUserSubject.next(userData);
    this.isAuthenticatedSubject.next(true);
    this.cartService.loadCartItems(userData.id);
  }


  private loadUserFromLocalStorage(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
      return;
    }

    const userDetails = this.tokenService.getUserDetailsFromToken();
    if (!userDetails || !userDetails.sub) {
      this.logout();
      return;
    }

    this.userService.getUserDetails(userDetails.sub).subscribe({
      next: (userData) => {
        this.currentUserSubject.next(userData);
        this.isAuthenticatedSubject.next(true);
        this.cartService.loadCartItems(userData.id);
      },
      error: (error) => {
        console.error('Kullanıcı detayları yüklenirken hata oluştu', error);
        this.logout();
      }
    });
  }


  register(user: RegisterModel): Observable<any> {
    return this.httpClient.post<any>(environment.apiEndpoint + "auth/register", user);
  }

  logout(): void {
    localStorage.clear();
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }

  private checkToken(): boolean {
    return !!localStorage.getItem("token");
  }
}
