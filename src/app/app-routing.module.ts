import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'emp', component: EmployeeComponent},
  {path: 'admin' , component: AdminComponent, canActivate: [AuthGuard], data:{role:'1'}},
  {path: 'emplist', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
