import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatereplacePipe } from './datereplace.pipe';


@NgModule({
  declarations: [DatereplacePipe],
  imports: [
    CommonModule
  ],
  exports : [
    DatereplacePipe
  ]
})
export class PipesModule { }
