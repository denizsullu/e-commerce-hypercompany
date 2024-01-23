import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {LoginModel} from "../models/loginModel";
import {HttpClient} from "@angular/common/http";
import {TokenModel} from "../models/TokenModel";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {RegisterModel} from "../models/registerModel";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  constructor(private httpClienService: HttpClient) {

  }

  login(user: LoginModel): Observable<TokenModel> {
    return this.httpClienService.post<TokenModel>(environment.apiEndpoint + "auth/login", user).pipe(
      tap((tokenModel: TokenModel) => {
        localStorage.setItem("token", tokenModel.token);
        this.isAuthenticatedSubject.next(true);
      })
    );
  }
  register(user: RegisterModel): Observable<any> {
    return this.httpClienService.post<any>(environment.apiEndpoint + "auth/register", user);
  }

  logout(): void {
    localStorage.removeItem("token");
    this.isAuthenticatedSubject.next(false);

  }

  isAuthenticated() {
    return localStorage.getItem("token") !== null;

  }
}

