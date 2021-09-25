import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory.component';
import { UploadinventoryComponent } from './uploadinventory/uploadinventory.component';

const routes: Routes = [
  { 
      path: '', component: InventoryComponent,children:[
      {
        path: '', component : UploadinventoryComponent,
      },
    ] 
  }
 ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
