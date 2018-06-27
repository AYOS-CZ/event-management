import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListOperatorComponent } from './event-list/event-list.component';
import { EventOperationComponent } from './event-operation/event-operation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventListOperatorComponent, EventOperationComponent]
})
export class OperatorPanelModule { }
