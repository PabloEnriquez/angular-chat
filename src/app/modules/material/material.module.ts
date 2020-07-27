import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MATERIALMODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatSnackBarModule
];

const IMPORTS = [
  CommonModule,
  ...MATERIALMODULES
];

@NgModule({
  declarations: [],
  imports: IMPORTS,
  exports: MATERIALMODULES
})
export class MaterialModule { }
