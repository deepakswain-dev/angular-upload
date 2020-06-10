import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { AuthenticationGuard } from './guard/AuthenticationGuard';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';


const routes: Routes = [
  {path: 'view/:id', component:EmployeeViewComponent, canActivate:[AuthenticationGuard]},
  {path:'employeelist', component: EmployeeListComponent, canActivate:[AuthenticationGuard] },
  {path:'login', component:LoginComponent},
  {path: '', component: LoginComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
