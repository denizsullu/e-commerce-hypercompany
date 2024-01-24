import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDetail} from "../../user/models/userDetail";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:8080/auth/user/"
  constructor(private httpService:HttpClient) { }


getUserDetails(username:string):Observable<UserDetail>{
    let newPath = this.apiUrl +username;
    return this.httpService.get<UserDetail>(newPath);
}



}
