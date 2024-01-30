import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product/product";
import {Observable} from "rxjs";
import {ResponseModel} from "../models/responseModel";
import {environment} from "../../environments/environment";
import {CreateProductRequest} from "../models/product/createProductRequest";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  apiUrl = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    let newPath = environment.apiEndpoint + "api/products/getAll"
   return this.httpClient.get<Product[]>(newPath);
  }
  getProductsByCategory(categoryId:number): Observable<Product[]> {
    let newPath = environment.apiEndpoint + "api/products/getAllByCategoryId/"+categoryId;
    return this.httpClient.get<Product[]>(newPath);
  }

  getProductDetail(productId:number): Observable<Product> {
    let newPath = environment.apiEndpoint + "api/products/" + productId;
    return this.httpClient.get<Product>(newPath);
  }

  add(product:CreateProductRequest):Observable<ResponseModel>{
      let newPath = environment.apiEndpoint + "api/products/add";
    return this.httpClient.post<ResponseModel>(newPath,product)
  }

    delete(productId: number): Observable<ResponseModel> {
        let newPath = environment.apiEndpoint + "api/products/" + productId;
        return this.httpClient.delete<ResponseModel>(newPath);
    }



}
