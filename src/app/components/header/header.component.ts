import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions'; 
import { NgxPermissionsService } from 'ngx-permissions/lib/service/permissions.service';
import { Observable } from 'rxjs/internal/Observable';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Role } from 'src/app/enums/roleEnum.enum';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn$!: Observable<boolean>;
  isLogin: boolean = false;
  


  constructor(private router:Router,private authorizationService:AuthorizationService) { }
  

  ngOnInit(): void {
    this.isUserLoggedIn$ = this.authorizationService.isLoggedIn;
    // this.getPermissions();
  }

  // getPermissions(){
  //   const roles=["Admin","User"]
  //   this.permissionService.loadPermissions(roles);
  // }

  onLogout()
  {
      // this.isLogin = false;
      this.authorizationService.logout();
      localStorage.removeItem("currentUser");
  }
}
