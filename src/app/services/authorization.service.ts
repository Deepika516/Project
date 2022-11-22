import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { delay, tap } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  isUserLoggedIn: boolean = false;
  constructor(private http:HttpClient) { }

  login(userMail:string,password:string):Observable<any>{
  
    console.log(userMail);
    console.log(password);
    this.isUserLoggedIn = userMail== "admin" && password=="admin123";
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

    return of(this.isUserLoggedIn).pipe(
      delay(500),
      tap(val=>{
        console.log("is user Authentication is successful:" + val);
      })
    )

    // return (this.isUserLoggedIn).pipe(
    //   delay(1000),
    //   tap(val => { 
    //      console.log("Is User Authentication is successful: " + val); 
    //   })
    
  }

  logout():void {
      this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn');
  }
}
