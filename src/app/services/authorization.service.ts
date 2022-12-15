import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  isUserLoggedIn: BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  
  constructor(private router:Router) { }

  get isLoggedIn(){
    return this.isUserLoggedIn.asObservable();
  }
// if the login user is authorized user it will navigate to appointment component
  login(cu:IUser){
    if(cu.email !== "" && cu.password !== "")
    {
      this.isUserLoggedIn.next(true);
      this.router.navigate(['/appointment']);
    }
  }
  logout(){
    this.isUserLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

}