import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    //declare variable -- global
    employees: Employee[]; //list of all emplyees
    formData: Employee = new Employee();     // store data in an employee

  constructor(private httpClient: HttpClient) { }

  getAlldetails(){
    this.httpClient.get(environment.apiUrl+'/api/flightdetails')
    .toPromise().then(response => this.employees = response as Employee[]);

  }
}
