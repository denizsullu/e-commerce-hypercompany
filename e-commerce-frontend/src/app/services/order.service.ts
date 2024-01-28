import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CreateOrder} from "../models/createOrder";
import {Observable} from "rxjs";
import {ResponseModel} from "../models/responseModel";
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpService:HttpClient) { }

    createOrder(order:CreateOrder):Observable<any>{
        let newPath = environment.apiEndpoint + "api/orders/create";
        return this.httpService.post<ResponseModel>(newPath,order);
    }
}
