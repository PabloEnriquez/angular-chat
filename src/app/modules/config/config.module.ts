import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigRoutingModule } from './config-routing.module';
import { ConfigUserComponent } from './config-user/config-user.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ConfigUserComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ConfigModule { }
