import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentComponent } from './components/appointment/appointment.component';
import { CheckAppointmentComponent } from './components/check-appoitment/check-appointment.component';
import { HomeComponent } from './components/home/home.component';
import { LabTestsComponent } from './components/lab-tests/lab-tests.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'appointment',
    component: AppointmentComponent,
    canActivate: [AuthGuard],
  },
  { path: 'labtests', component: LabTestsComponent }, // to protect these pages from not authorized user
  {
    path: 'appointment-check',
    component: CheckAppointmentComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
