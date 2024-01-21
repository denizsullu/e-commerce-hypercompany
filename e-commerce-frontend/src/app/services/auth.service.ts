import {Injectable} from '@angular/core';
import {LoginModel} from "../models/loginModel";
import {HttpClient} from "@angular/common/http";
import {TokenModel} from "../models/TokenModel";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "http://localhost:8080/auth/";

  constructor(private httpClienService: HttpClient) {
  }

  login(user: LoginModel) {
    return this.httpClienService.post<TokenModel>(this.apiUrl + "login", user)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
