import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryconfigurationComponent } from './inventoryconfiguration/inventoryconfiguration.component';

import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { 
      path: '', component: OrdersComponent,children:[
      {
        path: '', component : InventoryconfigurationComponent,
      }
    ] 
  }
 ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
