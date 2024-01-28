import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth/auth.service";
import {BehaviorSubject, Observable, tap} from "rxjs";
import { environment } from "../../../environments/environment";
import { CreditCardModel } from "../../models/user/creditCard";
import { CreateCreditCardRequest } from "../../models/user/createCreditCardRequest";

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  private userCreditCardsSubject = new BehaviorSubject<CreditCardModel[]>([]);
  public userCreditCards$ = this.userCreditCardsSubject.asObservable();

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  loadUserCreditCards(userId: number): void {
    const url = environment.apiEndpoint + 'api/creditcard/getall/' + userId;
    this.httpClient.get<CreditCardModel[]>(url).subscribe(cards => {
      this.userCreditCardsSubject.next(cards);
    });
  }

  getUserCreditCards(): Observable<CreditCardModel[]> {
    return this.userCreditCards$;
  }

  refreshUserCreditCards() {
    const userId = this.authService.getCurrentUserId();
    if (userId !== null) {
      this.loadUserCreditCards(userId);
    }
  }

  addCreditCard(creditCardRequest: CreateCreditCardRequest): Observable<any> {
    return this.httpClient.post<any>(environment.apiEndpoint + 'api/creditcard/add', creditCardRequest).pipe(
      tap(() => {
        this.refreshUserCreditCards();
      })
    );
  }

  deleteCreditCard(creditCardId: number): Observable<any> {
    return this.httpClient.delete<any>(environment.apiEndpoint + 'api/creditcard/delete/' + creditCardId).pipe(
      tap(() => {
        this.refreshUserCreditCards();
      })
    );
  }
}
