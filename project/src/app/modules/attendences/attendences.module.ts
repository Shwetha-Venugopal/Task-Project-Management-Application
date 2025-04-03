import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendencesRoutingModule } from './attendences-routing.module';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceApproveComponent } from './attendance-approve/attendance-approve.component';


@NgModule({
  declarations: [
    AttendanceListComponent,
    AttendanceApproveComponent
  ],
  imports: [
    CommonModule,
    AttendencesRoutingModule
  ]
})
export class AttendencesModule { }
