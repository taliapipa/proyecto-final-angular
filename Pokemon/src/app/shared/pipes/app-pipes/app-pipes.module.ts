import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterNamesPipe } from './filter-names.pipe';



@NgModule({
  declarations: [
    FilterNamesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterNamesPipe
  ]
})
export class AppPipesModule { }
