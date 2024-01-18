import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  apiUrl = "http://localhost:8080/api/products/getAll";
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
   return this.httpClient.get<Product[]>(this.apiUrl);
  }
}
