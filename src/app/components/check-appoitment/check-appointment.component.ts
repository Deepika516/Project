import { Component, OnInit } from '@angular/core';
import { IAppointment } from 'src/app/interfaces/userAppointment.interface';
import {
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  RowNodeTransaction,
} from 'ag-grid-community';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-appointment',
  templateUrl: './check-appointment.component.html',
  styleUrls: ['./check-appointment.component.css'],
})
export class CheckAppointmentComponent implements OnInit {
  public rowData: IAppointment[] = [];
  private gridApi!: GridApi;
  public rowSelection: 'single' | 'multiple' = 'single';
  private data = localStorage.getItem('currentUser');

  // to show the email address on currentuser which we store when we logged in
  constructor(private userService: UserService, private router: Router) {
    localStorage.getItem('currentUser');
  }
  ngOnInit(): void {}

  public defaultColDef: ColDef = {
    flex: 1,
    editable: true,
  };

  columns = [
    { headerName: 'ID', field: 'id', width: 90, minWidth: 50 },
    { headerName: 'Name', field: 'name', width: 90, minWidth: 50 },
    { headerName: 'Gender', field: 'gender', width: 90, minWidth: 50 },
    { headerName: 'Date_of_Birth', field: 'dob', width: 90, minWidth: 50 },
    { headerName: 'Email', field: 'email', width: 90, minWidth: 50 },
    { headerName: 'Department', field: 'dept', width: 90, minWidth: 50 },
    { headerName: 'Doctor', field: 'doc', width: 90, minWidth: 50 },
    {
      headerName: 'Date of Appointment',
      field: 'doa',
      width: 90,
      minWidth: 50,
    },
  ];

  // Show Appointments in  grid
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.userService.getData().subscribe((respData) => {
      this.rowData = this.getData(respData);
    });
  }

  //filter data for the current user so that user get the specific data
  getData(respData: IAppointment[]) {
    return respData.filter((e) => e.email == this.data);
  }

  onNewBooking() {
    this.router.navigate(['appointment']);
  }

  // single Row Selection
  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();
  }

  //on the of click of delete button delete the specific row
  onDelete() {
    const selectedData = this.gridApi.getSelectedRows();
    const res = this.gridApi.applyTransaction({ remove: selectedData })!;
  }
}
