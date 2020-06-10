import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../model/Interfaces/IUser';



@Injectable()
export class APIUrlServices {
    EmployeeListURL: string = environment.EmployeeBaseURL+'employee/getallemployee';
    EmployeeByIdURL: string = environment.EmployeeBaseURL+'employee/getemployeebyid/';
    LoginTokenURL =  environment.LoginBaseURL+'Authentication/token';
}