import { Injectable } from '@angular/core';

import {Observable, of, switchMap, take, tap} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/services/auth.service";
import {AddressModel} from "../models/addressModel";
import {environment} from "../../../environments/environment";
import {PostAddress} from "../models/postAddress";



@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  getUserAddresses(): Observable<AddressModel[]> {
    return this.authService.currentUser$.pipe(
      take(1),
      switchMap(user => {
        if (user && user.id) {
          const url = environment.apiEndpoint + 'api/address/getall/' + user.id;
          return this.httpClient.get<AddressModel[]>(url);
        }
        return of([]);
      })
    );
  }
  deleteAddress(addressId: number): Observable<any> {
    const url = environment.apiEndpoint + 'api/address/delete/' + addressId;
    return this.httpClient.delete(url).pipe(
      tap(() => {
        this.getUserAddresses().subscribe();
      })
    );
  }

  addAddress(newAddress: PostAddress): Observable<AddressModel> {
    const url = environment.apiEndpoint + 'api/address/save';
    return this.httpClient.post<AddressModel>(url, newAddress);
  }
}
