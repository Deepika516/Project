import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDiagnosis, IService, ISubService, ITest } from 'src/app/interfaces/userTestBooing.interface';
import { TestService } from 'src/app/services/test.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lab-tests',
  templateUrl: './lab-tests.component.html',
  styleUrls: ['./lab-tests.component.css']
})
export class LabTestsComponent implements OnInit {

  constructor(private userService:UserService,private http:HttpClient,private testService:TestService, private formBuilder: FormBuilder) {
    this.getAllDiagnosisData();
   }
   contentDropdown:boolean=false;
  public testForm!:FormGroup
  public userName!:boolean
  testList:ITest[]=[];
  serviceList:IService[]=[];
  subServiceList:ISubService[]=[];
  checkboxList=[]
  ngOnInit(): void {
    this.testForm=this.formBuilder.group((
      {
        name:[""],
        email:[""],
        testName:[""],
        testService:[""],
        subService:[""],
        date:[""]
      }
    ))
    }

    onCheckboxChange(event:any){
      // this.checkboxList=this.testForm.value.subService
      const checkId=event.target.value;
      const isChecked=event.target.checked;
      console.log(checkId);
    }

    getAllDiagnosisData(){
      this.testList=this.testService.getTest();
      // this.serviceList=this.testService.getTestServices();
       console.log(this.testList);
    }

    changeDiagnosis(event:any){
      debugger
      let testId=event.target.value;
      this.serviceList=this.testService.getTestServices().filter(t=>t.test_id==testId)
    }

    changeService(event:any){
      debugger
      let serviceId=event.target.value;
      this.subServiceList=this.testService.getSubService().filter(u=>u.service_id==serviceId)
    }

    onSubmitTest(){
      if(this.testForm.invalid)
      {
        return;
      }
      debugger
      const user_t_name=this.testForm.value.name;
      const user_t_email=this.testForm.value.email;
      const user_t_testName=this.testForm.value.testName;
      const user_t_testServiceName=this.testForm.value.testService;
      const user_t_subserviceName=this.testForm.value.testService;
      const user_t_date=this.testForm.value.date;
      this.userService.getTestData(user_t_name,user_t_email,user_t_testName,user_t_testServiceName,user_t_subserviceName,user_t_date).subscribe((respData:IDiagnosis[])=>
      {
        alert("Test Appointment Successfull")
      console.log(respData);
      }
      )

  }
}
