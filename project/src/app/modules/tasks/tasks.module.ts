import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDeatailComponent } from './task-deatail/task-deatail.component';
import { TaskCreateComponent } from './task-create/task-create.component';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskDeatailComponent,
    TaskCreateComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
