import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDetail} from "../../user/models/userDetail";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpClient) { }


getUserDetails(username:string):Observable<UserDetail>{
    let newPath = environment.apiEndpoint+"auth/user/" +username;
    return this.httpService.get<UserDetail>(newPath);
}



}
