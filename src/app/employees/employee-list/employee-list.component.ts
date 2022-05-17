import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/employee';
import { EmployeeService } from 'src/app/shared/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {



  //declare
  filter: String;
  page: number=1;
  constructor(public employeeService: EmployeeService, private router: Router) {

   }

  ngOnInit(): void {
    //Life Cycle hook
    this.employeeService.getAlldetails();
    //this.employeeService.employees
  }
  //populate Employee Record
  populateEmployeeForm(emp: Employee){

    //changing the date format
    var datePipe = new DatePipe("en-Uk");
    let formatedDate: any = datePipe.transform(emp.depDate, 'yyyy-mm-dd')
    emp.depDate=formatedDate;
    this.employeeService.formData=Object.assign({},emp);

}
}