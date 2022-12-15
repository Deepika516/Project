export interface IDiagnosis {
  d_name: string;
  d_email: string;
  d_tests: string;
  d_service: string;
  d_subService: string;
  d_date: Date;
}

export interface ITest {
  test_id: number;
  test_name: string;
  test_img: string;
}

export interface IService {
  service_id: number;
  test_id: number;
  service_name: string;
}

export interface ISubService {
  subService_id: number;
  service_id: number;
  subService_name: string;
}
