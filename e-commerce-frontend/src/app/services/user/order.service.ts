import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CreateOrder} from "../../models/createOrder";
import {Observable} from "rxjs";
import {ResponseModel} from "../../models/responseModel";
import {GetAllUserResponse} from "../../models/user/getAllUserResponse";
import {GetAllByUserOrder} from "../../models/user/getAllByUserOrder";
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpService:HttpClient) { }

    createOrder(order:CreateOrder):Observable<any>{
        let newPath = environment.apiEndpoint + "api/orders/create";
        return this.httpService.post<ResponseModel>(newPath,order);
    }
    getAllOrdersByUser(userId:number):Observable<GetAllByUserOrder[]>{
        let newPath = environment.apiEndpoint + "api/orders/getallbyuserid/"+userId;
        return this.httpService.get<GetAllByUserOrder[]>(newPath);
    }
    getAllOrders():Observable<GetAllByUserOrder[]>{
        let newPath = environment.apiEndpoint + "api/orders/getall";
        return this.httpService.get<GetAllByUserOrder[]>(newPath);
    }

    updateOrder(orderId:number,status:string):Observable<any>{
        let newPath = environment.apiEndpoint + "api/orders/changeorderstatus/"+orderId+"/"+status;
        return this.httpService.put<ResponseModel>(newPath,{});
    }
}
