import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { GraphDataComponent } from './graph-data/graph-data.component';
import { ChartsModule } from 'ng2-charts';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);

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
