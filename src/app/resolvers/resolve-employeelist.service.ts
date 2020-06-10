import { Injectable } from '@angular/core';
import { IEmployee } from '../model/Interfaces/IUser';



@Injectable({ providedIn: 'root' })
export class ResoveEmployeeList {
    constructor(public employeeList: IEmployee[], public error: any = null) {

    }
}