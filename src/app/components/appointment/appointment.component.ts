import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {  take } from 'rxjs';
import { IDept, IDoc } from 'src/app/interfaces/dept.interface';
import { IAppointment } from 'src/app/interfaces/userAppointment.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  
  public appointmentForm !: FormGroup
  department:IDept[]=[];
  doctors:IDoc[]=[];
  
  constructor(private userService:UserService,private formBuilder:FormBuilder ,private router:Router) { }

   
  ngOnInit(): void {
    this.getDept();
    this.appointmentForm=this.formBuilder.group({
      name:[""],
      dob:[""],
      gender:[""],
      email:[""],
      dept:[""],
      doc:[""],
      doa:[""]
    })
  }

  onSubmitAppointment(){
    {
      if (this.appointmentForm.invalid) {
        return;
    }
    debugger
    const user_name=this.appointmentForm.value.name;
    const user_gen=this.appointmentForm.value.gender;
    const user_dob=this.appointmentForm.value.dob;
    const user_email=this.appointmentForm.value.email;
    const user_dept=this.appointmentForm.value.dept;
    const user_doc=this.appointmentForm.value.doc;
    const user_doa=this.appointmentForm.value.doa;
    this.userService.onAppointment(user_name,user_gen,user_email,user_dob,user_dept,user_doc,user_doa).subscribe((respond:IAppointment[])=>
    {
      alert("Booking Successful");
      this.router.navigate(['/appointment-check'])

    })
  }
  }

  getDept()
  {
    this.userService.showDept().pipe(take(1)).subscribe((respData:IDept[])=>{
    this.department=respData;
    });
  }
 
  changeDept(event:any){
  let deptId=event.target.value;
    this.userService.showDoc(+deptId).pipe(take(1))
    .subscribe((docData:IDoc[])=>{
      this.doctors=docData.filter(e=>e.dept_id===+deptId)
  })
}
}

