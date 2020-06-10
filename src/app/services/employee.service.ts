import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { APIUrlServices } from './api-url.services';
import { IEmployee } from '../model/Interfaces/IUser';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class EmployeeService {

    constructor(private http: HttpClient, private urlService: APIUrlServices) {

    }
    GetEployees(): Observable<IEmployee[]> {
        return this.http.get<IEmployee[]>(this.urlService.EmployeeListURL).pipe(
            retry(1),
            catchError(this.HandleError)
        );
    }

    GetEmployeeById(id: number): Observable<IEmployee> {
        console.log(this.urlService.EmployeeByIdURL+id)
        return this.http.get<IEmployee>(this.urlService.EmployeeByIdURL+id).pipe(
            retry(1),
            catchError(this.HandleError)
        );
        
    }

    private HandleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.log("This is a client side error", errorResponse.error.message);
        }
        else {
            console.log("This is a server side error", errorResponse);
        }
        return throwError('This is problem in server');
    }


}