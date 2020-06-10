

import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    imports: [
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule 
    ],
    exports: [
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
    ]
  })
export class AngularMaterialModule {

}