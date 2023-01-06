import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./admin/admin.module').then((mod) => mod.AdminModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('./components/appointment/appointment.module').then(
        (m) => m.AppointmentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
