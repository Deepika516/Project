import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform!:FormGroup
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private authorizationService:AuthorizationService,private router:Router) { }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
      email:[""],
      password:[""]
    })
  }

  onSubmitLogin(){
    {
      if (this.loginform.invalid) {
        return;
    }
    else if(this.loginform.valid)
    {
      this.authorizationService.login(this.loginform.value);
    }
    
    this.authService.login().pipe(take(1)).subscribe((respData:IUser[])=>
    {
     const email_value=this.loginform.value.email;
     const password_value=this.loginform.value.password;
     localStorage.setItem("currentUser",email_value)
        const check_user=respData.find((u:IUser)=>{
          return u.email===email_value && u.password===password_value
        })
        if(check_user)
        {
          alert("Login Successfull");
        }
        else
        alert("User Not Found");
    })
  }
  }

}
