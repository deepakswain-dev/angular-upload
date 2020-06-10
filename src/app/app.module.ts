import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {  FormsModule  }  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { APIUrlServices } from './services/api-url.services';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptor/JWTInterceptor';
import { ErrorInterceptor } from './interceptor/ErrorInterceptor';
import { EmployeeListComponent } from './employee/employee-list.component';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RequiredSelectValidatorDirective } from './shared/required-select-validator.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeListComponent,
    EmployeeViewComponent,
    RequiredSelectValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [APIUrlServices,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
