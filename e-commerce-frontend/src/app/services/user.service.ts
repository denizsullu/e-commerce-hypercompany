import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {TokenServiceService} from "./token-service.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService:AuthService) { }





}
