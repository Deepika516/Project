import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
  ],
})
export class AdminModule {}
