import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/services/auth.service";
import {BehaviorSubject, catchError, Observable, tap, throwError} from 'rxjs';
import {AddressModel} from "../models/addressModel";
import {environment} from "../../../environments/environment";
import {PostAddress} from "../models/postAddress";

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private userAddressesSubject = new BehaviorSubject<AddressModel[]>([]);
  public userAddresses$ = this.userAddressesSubject.asObservable();

  constructor(private httpClient: HttpClient, private authService: AuthService) {
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

  addAddress(newAddress: PostAddress): Observable<AddressModel> {
    const url = environment.apiEndpoint + 'api/address/save';
    return this.httpClient.post<AddressModel>(url, newAddress).pipe(
      tap(() => {
        this.refreshUserAddresses();
      })
    );
  }
}
