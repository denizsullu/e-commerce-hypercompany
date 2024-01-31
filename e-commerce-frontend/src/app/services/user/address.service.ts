import {Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {BehaviorSubject, catchError, Observable, tap, throwError} from 'rxjs';
import {AddressModel} from "../../models/user/addressModel";
import {environment} from "../../../environments/environment";
import {CreateAddressModel} from "../../models/user/createAddressModel";

class Signal<T> {
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private userAddressesSubject = new BehaviorSubject<AddressModel[]>([]);
  public userAddresses$ = this.userAddressesSubject.asObservable();

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.loadUserAddresses();
  }

    loadUserAddresses(): void {
        const userId = this.authService.getCurrentUserId();
        if (userId !== null) {
            const url = environment.apiEndpoint + 'api/address/getall/' + userId;
            this.httpClient.get<AddressModel[]>(url).pipe(
                tap(addresses => {
                    this.userAddressesSubject.next(addresses);

                }),
                catchError(err => {
                    console.error('Adres yükleme sırasında bir hata oluştu', err);
                    return throwError(err);
                })
            ).subscribe();
        } else {
            this.userAddressesSubject.next([]);
        }
    }


  getUserAddresses(): Observable<AddressModel[]> {
    return this.userAddresses$;
  }

  refreshUserAddresses() {
    this.loadUserAddresses();
  }

  deleteAddress(addressId: number): Observable<any> {
    const url = environment.apiEndpoint + 'api/address/delete/' + addressId;
    return this.httpClient.delete(url).pipe(
      tap(() => {
        this.refreshUserAddresses();
      })
    );
  }

  addAddress(newAddress: CreateAddressModel): Observable<any> {
    const url = environment.apiEndpoint + 'api/address/save';
    return this.httpClient.post<AddressModel>(url, newAddress).pipe(
      tap(() => {
        this.refreshUserAddresses();
      })
    );
  }
}
