import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup

  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      first_name:[""],
      last_name:[""],
      email:[""],
      password:[""]
    })
  }

  onSubmit(form:NgForm){
    
   
    const firstname=form.value.first_name;
    const lastname=form.value.last_name;
    const email=form.value.email;
    const password=form.value.password;
    
    this.authService.onSignup(firstname,lastname,email,password).subscribe((resp:IUser[])=>
    {
    alert('SIGNIN SUCCESFUL');
    this.router.navigate(["login"])
    }
    )
  }

}
