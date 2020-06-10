



import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { APIUrlServices } from '../services/api-url.services';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private messageSource = new BehaviorSubject<boolean>(false);
    currentMessage = this.messageSource.asObservable();

    constructor(private httpClient: HttpClient, private urlservice: APIUrlServices) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get CurrentUserValue(): User {
        return this.currentUserSubject.value;
    }
    
    changeMessage(message: boolean) {
        this.messageSource.next(message);
    }

    UserLogin(userName: string, password: string) {
        return this.httpClient.post<User>(this.urlservice.LoginTokenURL, { userName, password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                console.log(user);
                return user;
            }));
    }

    LogOut() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}