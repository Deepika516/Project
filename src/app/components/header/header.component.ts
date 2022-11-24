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
  isUserLoggedIn$ !: Observable<boolean>;
  
  constructor(private router:Router,private authorizationService:AuthorizationService) { }

  ngOnInit(): void {
    this.isUserLoggedIn$ = this.authorizationService.isLoggedIn;
  }
 
  onLogout()
  {
      this.authorizationService.logout();
      localStorage.removeItem("currentUser");
  }
}
