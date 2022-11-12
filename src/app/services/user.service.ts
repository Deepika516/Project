import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDept } from '../interfaces/dept.interface';
import { IAppointment } from '../interfaces/userAppointment.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  onAppointment(u_name:string,u_gender:string,u_dob:Date,u_dept:string,u_doc:string,u_doa:string
    ):Observable<IAppointment[]>{
    return this.http.post<IAppointment[]>("http://localhost:3000/appointment",{
        name:u_name,
        gender:u_gender,
        dob:u_dob,
        dept:u_dept,
        doc:u_doc,
        doa:u_doa
    })
  }

  getData():Observable<IAppointment[]>{
    return this.http.get<IAppointment[]>("http://localhost:3000/appointment")
  }

  // getDataById(id: number):Observable<IAppointment[]>{
  //   // return this.http.get<IAppointment[]>(`http://localhost:3000/appointment/${id}`);
  // }

  showDept():Observable<IDept>{
    return this.http.get<IDept>("http://localhost:3000/department")
  }
}
