import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDept } from 'src/app/interfaces/dept.interface';
import { IAppointment } from 'src/app/interfaces/userAppointment.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  public appointmentForm !: FormGroup
  department:any=[];
  constructor(private userServive:UserService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.department=this.userServive.showDept();
    console.log(this.department);
    this.appointmentForm=this.formBuilder.group({
      name:[""],
      gender:[""],
      dob:[""],
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
    const user_name=this.appointmentForm.value.name;
    const user_gen=this.appointmentForm.value.gender;
    const user_dob=this.appointmentForm.value.dob;
    const user_dept=this.appointmentForm.value.dept;
    const user_doc=this.appointmentForm.value.doc;
    const user_doa=this.appointmentForm.value.doa;
    this.userServive.onAppointment(user_name,user_gen,user_dob,user_dept,user_doc,user_doa).subscribe((respond:IAppointment[])=>
    {
      console.log(respond);
      alert("Booking Successful");
    })
  }
}

}
