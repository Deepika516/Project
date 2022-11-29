import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private http:HttpClient,private authService:AuthService,private router:Router){

  }
 
  // to authorising the user
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean>|boolean{
     return this.authService.isAuthenticated()
      .then((authenticated)=>
      {
        if(authenticated){
          return true;
        }
        else{
         return this.router.navigate(['/login']);
        }
      })
    }
}
