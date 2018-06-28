import { EventOperationComponent } from './event-operation/event-operation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListOperatorComponent } from './event-list/event-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventListOperatorComponent, EventOperationComponent]
})
export class OperatorPanelModule { }
