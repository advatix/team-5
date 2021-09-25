import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { UploadinventoryComponent } from './uploadinventory/uploadinventory.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  declarations: [InventoryComponent, UploadinventoryComponent],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    InventoryRoutingModule,
    PipesModule
  ]
})
export class InventoryModule { }
