import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDept, IDoc } from '../interfaces/dept.interface';
import { IAppointment } from '../interfaces/userAppointment.interface';
import {  IDiagnosis } from '../interfaces/userTestBooing.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
  // request to save the data on server for appoitment component
  onAppointment(u_name:string,u_gender:string,u_email:string,u_dob:Date,u_dept:string,u_doc:string,u_doa:string,
    ):Observable<IAppointment[]>{
    return this.http.post<IAppointment[]>("http://localhost:3000/appointment",
    {name:u_name,gender:u_gender,email:u_email,dob:u_dob,dept:u_dept,doc:u_doc,doa:u_doa
    })
  }
  //to show the appointment data we get the data from the server for appoitment check component
  getData():Observable<IAppointment[]>{
    return this.http.get<IAppointment[]>("http://localhost:3000/appointment")
  }

// to show the departments on the dropdown we send the get request
  showDept():Observable<IDept[]>{
    return this.http.get<IDept[]>("http://localhost:3000/department");
  }
  
// on the click on specific department it will show the doctors through departments id
  showDoc(deptId:number):Observable<IDoc[]>{
    return this.http.get<IDoc[]>(`http://localhost:3000/doctors?dept_id=${deptId}`);
  }

  getTestData(t_name:string,t_email:string,t_test:string,t_testService:string,t_testSubService:string, t_date:Date
    ):Observable<IDiagnosis[]>{
      debugger
    return this.http.post<IDiagnosis[]>("http://localhost:3000/tests",{
    name:t_name,
    email:t_email,
    testName:t_test,
    testService:t_testService,
    subservice:t_testSubService,
    date:t_date}) 
  }


  showTestData():Observable<IDiagnosis[]>{
    return this.http.get<IDiagnosis[]>("http://localhost:3000/tests");
}
}
