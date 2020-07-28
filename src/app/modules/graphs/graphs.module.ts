import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsRoutingModule } from './graphs-routing.module';
import { GraphsComponent } from '../graphs/graphs-component/graphs.component';
import { UtilitiesModule } from '../utilities/utilities.module';


@NgModule({
  declarations: [GraphsComponent],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    UtilitiesModule
  ]
})
export class GraphsModule { }
