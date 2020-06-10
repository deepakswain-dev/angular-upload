import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { IEmployee, IDepartment } from 'src/app/model/Interfaces/IUser';
import { APIUrlServices } from 'src/app/services/api-url.services';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  private _id: number;
  employee: IEmployee;
  isEdit: boolean = false;
  isDisplay: boolean = true;
  department = 'IT';
  ddlDepartment: IDepartment[] = [
    { id: 1, name: "IT" },
    { id: 2, name: "HR" },
    { id: 3, name: "HelpDesk" },
  ];

  registerForm: FormGroup;
  submited = false;
  fileData: File = null;
  uploadedFilePath: string = null;
  previewUrl: any = null;

  constructor(private formBuilder: FormBuilder, private _activatedRoute: ActivatedRoute, private _employeeService: EmployeeService, private _urlService: APIUrlServices) {
  }

  ngOnInit(): void {


    this._activatedRoute.paramMap.subscribe(param => {
      this._id = +param.get('id');
      this.GetEmployeeByEmployeeId(this._id);
    })
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      department: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }
  EditEmployee() {
    this.GetEmployeeByEmployeeId(this._id);
    this.isEdit = !this.isEdit;
    this.isDisplay = !this.isDisplay;
  }

  OnImageUpload(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.ImagePreview();
    console.log('called OnImageUpload');

  }

  ImagePreview() {
    var mineType = this.fileData.type;
    if (mineType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.employee.photoPath = reader.result;
    }
    console.log('called ImagePreview');

  }


  GetEmployeeByEmployeeId(id: number) {
    this._employeeService.GetEmployeeById(id).subscribe(x => {
      this.employee = x;
      // this.employee.department = this.employee.department.trim();
      console.log(this.employee)
    });
  }
  OnUpdateEmployee(){
    console.log(this.employee);
  }

}
