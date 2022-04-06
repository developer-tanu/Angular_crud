import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../user/listuser/listuser.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string="https://jsonplaceholder.cypress.io/";
  constructor( private http:HttpClient) { }
  listUser():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl +'users')
  }
  viewUser(id:string){
    return this.http.get(this.baseUrl + 'users/' +id)
  }
  adduser(userObject:any){
    return this.http.post(this.baseUrl + 'users/' , userObject)
  }
  deleteUser(id:any){
    return this.http.delete(this.baseUrl +'users/' +id)
  }
  updateUser( id:any,userObject:any){
    return this.http.put(this.baseUrl + 'users/'+id , userObject)
  }

}
