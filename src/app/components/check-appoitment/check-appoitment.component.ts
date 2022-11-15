import { Component, OnInit } from '@angular/core';
import { AppointmentComponent } from '../appointment/appointment.component';
import { IAppointment } from 'src/app/interfaces/userAppointment.interface';
import { ColDef, GridApi, GridReadyEvent,} from 'ag-grid-community';  
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { find } from 'rxjs';

@Component({
  selector: 'app-check-appoitment',
  templateUrl: './check-appoitment.component.html',
  styleUrls: ['./check-appoitment.component.css']
})
export class CheckAppoitmentComponent implements OnInit {

  public rowData:IAppointment[]=[];
  private gridApi!: GridApi;
  public rowSelection:"single"|"multiple"="single";
  
  constructor(private userService:UserService,private router:Router) { }
  ngOnInit(): void {
  }

  public defaultColDef: ColDef = {
    flex: 1,
    editable: true,
  };

  columns=[
    { "headerName":"ID", "field":"id",width: 90, 
     minWidth: 50},
    {"headerName":"Name","field":"name",width:90,minWidth:50},
    {"headerName":"Gender","field":"gender",width:90,minWidth:50},
    {"headerName":"Date_of_Birth","field":"dob",width:90,minWidth:50},
    {"headerName":"Email","field":"email",width:90,minwidth:50},
    {"headerName":"Department","field":"dept",width:90,minWidth:50},
    {"headerName":"Doctor","field":"doc",width:90,minWidth:50},
    {"headerName":"Date of Appointment","field":"doa",width:90,minWidth:50},
    {"headerName":"Status","field":"status",width:90,minWidth:50}   
]

// Show Appointments in  grid
onGridReady(params: GridReadyEvent){
  this.userService.getData().subscribe((respData)=>
  {
    this.rowData=respData;
  })
}

onNewBooking(){
this.router.navigate(["appointment"]);
}


onCheckAppointment(){
  // const email_check=this.
  // this.userService.getData().subscribe((checkData)=>
  // {
  //   const chk_usr=find((u:IAppointment)=>
  //   )
  // })
}



onSelectionChanged() {
  const selectedRows = this.gridApi.getSelectedRows();
  (document.querySelector('#selectedRows')as HTMLElement).innerHTML =
  selectedRows.length === 1 ? selectedRows[0].id : '';
}

onRemoveSelected() {
  var selectedRows = this.gridApi.getSelectedNodes();
  if (!selectedRows || selectedRows.length === 0) {
    return;
  }
  let selectedRow = selectedRows[0];
  let selectedRowId = selectedRow.data.id;
  this.userService.removeData(selectedRowId)
  .subscribe(() => {
   })
}


}
