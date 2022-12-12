import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IDiagnosis,
  IService,
  ISubService,
  ITest,
} from '../interfaces/userTestBooing.interface';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}

  getTest(): ITest[] {
    return [
      {
        test_id: 5001,
        test_name: 'Cardiology Services',
        test_img: '../../assets/img/ecg.png',
      },
      {
        test_id: 5002,
        test_name: 'Neurology Services',
        test_img: '../../assets/img/mri screenshot.JPG',
      },
      {
        test_id: 5003,
        test_name: 'Radiology Services',
        test_img: '../../assets/img/xray.png',
      },
    ];
  }

  getTestServices(): IService[] {
    return [
      { service_id: 111, test_id: 5001, service_name: 'ECG' },
      { service_id: 112, test_id: 5001, service_name: 'Echo' },
      { service_id: 113, test_id: 5002, service_name: 'EEG' },
      { service_id: 114, test_id: 5002, service_name: 'MRI' },
      { service_id: 115, test_id: 5003, service_name: 'X-RAY' },
      { service_id: 116, test_id: 5003, service_name: 'CT-SCAN' },
    ];
  }

  getSubService(): ISubService[] {
    return [
      {
        subService_id: 1501,
        service_id: 115,
        select: false,
        subService_name: 'X-RAY both Kneen',
      },
      {
        subService_id: 1502,
        service_id: 115,
        select: false,
        subService_name: 'X-RAY chest',
      },
      {
        subService_id: 1503,
        service_id: 115,
        select: false,
        subService_name: 'X-RAY spine',
      },
      {
        subService_id: 1504,
        service_id: 115,
        select: false,
        subService_name: 'X-RAY neck',
      },
      {
        subService_id: 1505,
        service_id: 116,
        select: false,
        subService_name: 'CT-SCAN spine',
      },
      {
        subService_id: 1506,
        service_id: 116,
        select: false,
        subService_name: 'CT-SCAN whole body',
      },
      {
        subService_id: 1507,
        service_id: 116,
        select: false,
        subService_name: 'CT-SCAN nesk',
      },
      {
        subService_id: 1508,
        service_id: 116,
        select: false,
        subService_name: 'CT-SCAN cervical spine',
      },
    ];
  }
}
