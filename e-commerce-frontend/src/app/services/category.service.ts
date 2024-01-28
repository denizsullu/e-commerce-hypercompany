import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/product/category";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]> {
      let newPath = environment.apiEndpoint + "api/categories/getAll";
    return this.httpClient.get<Category[]>(newPath);
  }
}
