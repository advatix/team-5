import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { ManagerequestComponent } from './managerequest/managerequest.component';
import { AddrequestComponent } from './addrequest/addrequest.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ConfigurationComponent, ManagerequestComponent, AddrequestComponent],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
