import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { GraphDataComponent } from './graph-data/graph-data.component';
import { ChartsModule } from 'ng2-charts';

const IMPORTS = [
  CommonModule,
  MaterialModule,
  ChartsModule
 ];

@NgModule({
  declarations: [GraphDataComponent],
  imports: IMPORTS,
  exports: [GraphDataComponent]
})
export class UtilitiesModule { }
