import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
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
  selectedSubServices: (ISubService | null)[] = [];
  subscription: Subscription = new Subscription();
  get subServices(): FormArray {
    return this.testForm.get('subService') as FormArray;
  }
  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      name: [''],
      email: [''],
      testName: [''],
      testService: [''],
      subService: this.formBuilder.array([]),
      date: [''],
    });

    const control = this.testForm.controls['subService'];
  }

  onChange(isChecked, subServiceName: string) {
    const formArray = <FormArray>this.testForm.get('subService');
    if (isChecked.checked) {
      formArray.push(new FormControl(subServiceName));
    } else {
      let index = formArray.controls.findIndex(
        (x) => x.value === subServiceName
      );
      formArray.removeAt(index);
    }
  }

  ngDestroy() {
    this.subscription.unsubscribe();
  }

  // To get all the Test Name in Radio Buttons
  getAllDiagnosisData() {
    this.testList = this.testService.getTest();
  }

  //To change the test calling change event and shows dependent services in dropdown
  changeDiagnosis() {
    let testId = this.testForm.controls['testName'].value;
    this.serviceList = this.testService
      .getTestServices()
      .filter((t) => t.test_id == testId);
  }

  //to chnage the service   calling change event and shows dependent subservices in dropdown
  changeService(event) {
    let serviceId = event.target.value;
    this.subServiceList = this.testService
      .getSubService()
      .filter((u) => u.service_id == serviceId);
  }

  onCheckChange(event) {
    const checkid = event.target.value;
    console.log(checkid);
    this.subServiceList = this.subServiceList.filter(
      (e) => e.subService_id == checkid
    );
    const isChecked = event.target.checked;
    console.log(this.testForm.controls['subService'].value);
  }

  onSubmitTest() {
    if (this.testForm.invalid) {
      return;
    }
    const user_t_name = this.testForm.value.name;
    const user_t_email = this.testForm.value.email;
    const user_t_testName =
      this.testList.find((e) => e.test_id == this.testForm.value.testName)
        ?.test_name || '';

    const user_t_testServiceName =
      this.serviceList.find(
        (e) => e.service_id == this.testForm.value.testService
      )?.service_name || '';
    const user_t_subserviceName = this.testForm.value.subService;

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
      });
  }
}
