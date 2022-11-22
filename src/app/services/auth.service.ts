
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http:HttpClient) { }
   isLoggedIn=false;
  onSignup(firstName:string,lastName:string,email_id:string,password:string):Observable<IUser[]>
  {
    return this.http.post<IUser[]>("http://localhost:3000/Users",
    {first_name:firstName,
      last_name:lastName,
      email:email_id,
      password:password}
  )}
  
  login():Observable<IUser[]>{
    this.isLoggedIn=true;
    return this.http.get<IUser[]>("http://localhost:3000/Users");
   
  }

  logout(){
   return this.isLoggedIn=false;
  }

  isAuthenticated(){
    const promise=new Promise(
      (resolve,reject)=>
    {
      setTimeout(()=>
      {
        resolve(this.isLoggedIn),800
      })
    })
    return promise;
  }
    
}

