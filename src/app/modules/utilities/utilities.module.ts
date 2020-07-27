import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

const IMPORTS = [
  CommonModule,
  MaterialModule
 ];

@NgModule({
  declarations: [],
  imports: IMPORTS,
  exports: []
})
export class UtilitiesModule { }
