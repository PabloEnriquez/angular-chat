import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphsComponent } from '../graphs/graphs-component/graphs.component';

const routes: Routes = [{ path: '', component: GraphsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule { }
