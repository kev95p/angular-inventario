import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
      DatatableComponent
  ],
  declarations: [DatatableComponent],
  entryComponents:[DatatableComponent]
})
export class SharedModule { }
