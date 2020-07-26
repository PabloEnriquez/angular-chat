import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigUserComponent } from './config-user/config-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'config', pathMatch: 'full'},
  {
    path: 'config',
    component: ConfigUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
