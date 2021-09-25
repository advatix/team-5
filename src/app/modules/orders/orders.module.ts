import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { InventoryconfigurationComponent } from './inventoryconfiguration/inventoryconfiguration.component';
import { LayoutModule } from '../layout/layout.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [OrdersComponent, InventoryconfigurationComponent],
  imports: [
    CommonModule,
    LayoutModule,
    OrdersRoutingModule,
    NgxPaginationModule,
    PipesModule
  ]
})
export class OrdersModule { }
