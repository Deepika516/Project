import { Component, OnInit } from '@angular/core';
import { IAppointment } from 'src/app/interfaces/userAppointment.interface';
import { ColDef, GridApi, GridReadyEvent,} from 'ag-grid-community';  

@Component({
  selector: 'app-check-appoitment',
  templateUrl: './check-appoitment.component.html',
  styleUrls: ['./check-appoitment.component.css']
})
export class CheckAppoitmentComponent implements OnInit {

  public rowData:IAppointment[]=[];
  private gridApi!: GridApi;
  constructor() { }

  ngOnInit(): void {
  }

  public defaultColDef: ColDef = {
    flex: 1,
    editable: true,
  };

  columns=[
    { "headerName":"ID", "field":"id",width: 90, 
     minWidth: 50},
    {"headerName":"Name","feild":"name",width:90,minWidth:50},
    {"headerName":"Gender","feild":"gender",width:90,minWidth:50},
    {"headerName":"Date_of_Birth","feild":"dob",width:90,minWidth:50},
    {"headerName":"Department","feild":"department",width:90,minWidth:50},
    {"headerName":"Date of Appointment","feild":"doa",width:90,minWidth:50},
]

}
