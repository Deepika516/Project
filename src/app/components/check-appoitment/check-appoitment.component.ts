import { Component, OnInit } from '@angular/core';
import { IAppointment } from 'src/app/interfaces/userAppointment.interface';
import { ColDef, GridApi, GridReadyEvent,} from 'ag-grid-community';  
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-appoitment',
  templateUrl: './check-appoitment.component.html',
  styleUrls: ['./check-appoitment.component.css']
})
export class CheckAppoitmentComponent implements OnInit {

  public rowData:IAppointment[]=[];
  hideTable = false;
  private gridApi!: GridApi;
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
    {"headerName":"Department","field":"dept",width:90,minWidth:50},
    {"headerName":"Doctor","field":"doc",width:90,minWidth:50},
    {"headerName":"Date of Appointment","field":"doa",width:90,minWidth:50},
    {"headerName":"Status","field":"status",width:90,minWidth:50}    
]

onGridReady(params: GridReadyEvent){
  this.userService.getData().subscribe((respData)=>
  {
    debugger
    console.log(respData)
    this.rowData=respData;
  })
}
onClick(){
  this.hideTable=true;
}

onNewBooking(){
this.router.navigate(["appointment"]);
}

}
