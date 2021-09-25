import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddrequestComponent } from './addrequest/addrequest.component';

import { ConfigurationComponent } from './configuration.component';
import { ManagerequestComponent } from './managerequest/managerequest.component';
const routes: Routes = [
  { 
      path: '', component: ConfigurationComponent,children:[
      {
        path: 'add', component : AddrequestComponent,
      },
      {
        path: 'view', component : ManagerequestComponent,
      }
    ] 
  }
 ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
