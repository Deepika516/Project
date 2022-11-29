import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthorizationService } from 'src/app/services/authorization.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn$ !: Observable<boolean>; //  To check hte user is logged in or not
  
  constructor(private router:Router,private authorizationService:AuthorizationService) { }

  ngOnInit(): void {
    this.isUserLoggedIn$ = this.authorizationService.isLoggedIn;
  }
 
  // on the click of logout it remove the currentuser from local storage and navigate user to login in page 
  onLogout()
  {
      this.authorizationService.logout();
      localStorage.removeItem("currentUser");
  }
}
