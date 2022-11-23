import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentComponent } from './components/appointment/appointment.component';
import { CheckAppoitmentComponent } from './components/check-appoitment/check-appoitment.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"appointment",component:AppointmentComponent,canActivate:[AuthGuard] },  
  // ,
  {path:"appointment-check",component:CheckAppoitmentComponent,canActivate:[AuthGuard]}
  // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
