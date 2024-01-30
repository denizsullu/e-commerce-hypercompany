import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    private searchTerms = new BehaviorSubject<string>('');

    setSearchTerms(term: string) {
        this.searchTerms.next(term);
    }

    getSearchTerms() {
        return this.searchTerms.asObservable();
    }
}
