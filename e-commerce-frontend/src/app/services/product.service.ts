import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {Observable} from "rxjs";
import * as dgram from "dgram";
import {ResponseModel} from "../models/responseModel";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  apiUrl = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    let newPath = this.apiUrl + "products/getAll"
   return this.httpClient.get<Product[]>(newPath);
  }
  getProductsByCategory(categoryId:number): Observable<Product[]> {
    let newPath = this.apiUrl + "products/getAllByCategoryId/"+categoryId;
    return this.httpClient.get<Product[]>(newPath);
  }

  getProductDetail(productId:number): Observable<Product> {
    let newPath = this.apiUrl + "products/" + productId;
    return this.httpClient.get<Product>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
  }


}
