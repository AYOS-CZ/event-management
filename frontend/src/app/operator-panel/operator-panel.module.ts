import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventOperationComponent } from './event-operation/event-operation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventListComponent, EventOperationComponent]
})
export class OperatorPanelModule { }
