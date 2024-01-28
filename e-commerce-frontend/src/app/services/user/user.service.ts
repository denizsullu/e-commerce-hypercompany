import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDetail} from "../../models/user/userDetail";
import {environment} from "../../../environments/environment";
import {GetAllUserResponse} from "../../models/user/GetAllUserResponse";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpClient) { }


getUserDetails(username:string):Observable<UserDetail>{
    let newPath = environment.apiEndpoint+"auth/user/" +username;
    return this.httpService.get<UserDetail>(newPath);
}

getAllUserDetails():Observable<GetAllUserResponse[]>{
    let newPath = environment.apiEndpoint+"auth/user/all";
    return this.httpService.get<GetAllUserResponse[]>(newPath);
}



}
