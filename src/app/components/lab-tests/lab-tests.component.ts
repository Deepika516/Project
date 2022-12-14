import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CellClickedEvent, SelectionChangedEvent } from 'ag-grid-community';
import { DropListener } from 'ag-grid-community/dist/lib/headerRendering/columnDrag/bodyDropTarget';
import {
  IDiagnosis,
  IService,
  ISubService,
  ITest,
} from 'src/app/interfaces/userTestBooing.interface';
import { TestService } from 'src/app/services/test.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lab-tests',
  templateUrl: './lab-tests.component.html',
  styleUrls: ['./lab-tests.component.css'],
})
export class LabTestsComponent implements OnInit {
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private testService: TestService,
    private formBuilder: FormBuilder
  ) {
    this.getAllDiagnosisData();
  }
  contentDropdown: boolean = false;
  public testForm!: FormGroup;
  public userName!: boolean;
  testList: ITest[] = [];
  serviceList: IService[] = [];
  subServiceList: ISubService[] = [];
  checkboxList = [];
  tempTestName = '';
  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      name: [''],
      email: [''],
      testName: [''],
      testService: [''],
      subService: [''],
      date: [''],
    });
  }

  // To get all the Test Name in Radio Buttons
  getAllDiagnosisData() {
    this.testList = this.testService.getTest();
    // this.serviceList=this.testService.getTestServices();
    console.log(this.testList);
  }

  //To change the test calling change event and shows dependent services in dropdown
  changeDiagnosis() {
    let testId = this.testForm.controls['testName'].value;
    this.serviceList = this.testService
      .getTestServices()
      .filter((t) => t.test_id == testId);
  }

  //to chnage the service   calling change event and shows dependent subservices in dropdown
  changeService(event: any) {
    debugger;
    let serviceId = event.target.value;
    this.subServiceList = this.testService
      .getSubService()
      .filter((u) => u.service_id == serviceId);
    console.log(this.subServiceList);
  }

  onCheckChange(event: any) {
    const checkid = event.target.value;
    console.log(checkid);
    this.subServiceList = this.subServiceList.filter(
      (e) => e.subService_id == checkid
    );

    const isChecked = event.target.checked;
    // console.log(checkname);
    console.log(this.testForm.controls['subService'].value);
  }

  onSubmitTest() {
    if (this.testForm.invalid) {
      return;
    }
    debugger;
    const user_t_name = this.testForm.value.name;
    const user_t_email = this.testForm.value.email;
    const user_t_testName =
      this.testList.find((e) => e.test_id == this.testForm.value.testName)
        ?.test_name || '';

    const user_t_testServiceName =
      this.serviceList.find(
        (e) => e.service_id == this.testForm.value.testService
      )?.service_name || '';
    const user_t_subserviceName =
      this.subServiceList.find(
        (e) => e.subService_id == this.testForm.value.subService
      )?.subService_name || '';
    const user_t_date = this.testForm.value.date;
    this.userService
      .getTestData(
        user_t_name,
        user_t_email,
        user_t_testName,
        user_t_testServiceName,
        user_t_subserviceName,
        user_t_date
      )
      .subscribe((respData: IDiagnosis[]) => {
        alert('Test Appointment Successfull');
        console.log(respData);
      });
  }
}
