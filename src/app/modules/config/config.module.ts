import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigUserComponent } from './config-user/config-user.component';


@NgModule({
  declarations: [ConfigUserComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }
