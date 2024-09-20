import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { SharedModule } from '../../shared/shared.module';
import { ServicesService } from '../../shared/services/services.service';


@NgModule({
  declarations: [
    TaskViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [ServicesService]
})
export class TaskModule { }
