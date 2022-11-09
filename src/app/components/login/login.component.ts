import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform!:FormGroup
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router) { }

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
    const email_value=this.loginform.value.email;
    const password_value=this.loginform.value.password;
    this.authService.login().subscribe((respData:IUser[])=>
    {
        const check_user=respData.find((u:IUser)=>{
          return u.email===email_value && u.password===password_value
        })
        if(check_user)
        {
          alert("Login Successfull");
          this.router.navigate(["home"]);
        }
        else
        alert("User Not Found");
    }
    )
  }
}
}
