
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
  // post request to save the data on server for signup 
  onSignup(firstName:string,lastName:string,email_id:string,password:string):Observable<IUser[]>
  {
    return this.http.post<IUser[]>("http://localhost:3000/Users",
    {first_name:firstName,
      last_name:lastName,
      email:email_id,
      password:password}
  )}
  // get request to check the data and get the filtered mail and password for login
  login():Observable<IUser[]>{
    this.isLoggedIn=true;
    return this.http.get<IUser[]>("http://localhost:3000/Users");
   
  }
// promise to check whether the user is authorized or not
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

