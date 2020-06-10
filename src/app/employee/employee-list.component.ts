import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/User';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { EmployeeService } from '../services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import { IEmployee } from '../model/Interfaces/IUser';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  currentUser: User;

  employeeList: IEmployee[];
  selectedRow: Number;
  showLoadingIndecator: boolean = false;


  displayedColumns: string[] = ['id', 'name', 'contactPreference', 'dateOfBirth', 'department', 'email', 'gender', 'isActive', 'phoneNumber'];
  dataSource = new MatTableDataSource<IEmployee>(this.employeeList);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private authenticationService: AuthenticationService, private employeeService: EmployeeService, private route: Router) {
    this.currentUser = this.authenticationService.CurrentUserValue;
    console.log(this.currentUser);

  }

  ngOnInit() {
    this.showLoadingIndecator = true;
    this.employeeService.GetEployees().subscribe(x => {
      this.employeeList = x;
      this.dataSource = new MatTableDataSource<IEmployee>(this.employeeList);
      this.showLoadingIndecator = false;
    },error=>{
      this.showLoadingIndecator = false;
    });
    
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.dataSource.sort = this.sort;
  }

  ShowAllEmployee() {

  }

  ApplyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue);
    console.log(this.dataSource.filter);

  }

  rowClick(rowId) {
    this.selectedRow = rowId;
    this.route.navigate(['/view', this.selectedRow]);
  }
}
export interface PeriodicElement {
  name: string;
  id: number;
  contactPreference: string;
  dateOfBirth: string;
  department: string;
  email: string;
  gender: string;
  isActive: boolean;
  phoneNumber: string;
}



