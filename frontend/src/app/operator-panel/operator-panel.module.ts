import { SharedModule } from './../shared/shared.module';
import { EventOperationComponent } from './event-operation/event-operation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListOperatorComponent } from './event-list/event-list.component';
import { UserModule } from '../user/user.module';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    TableModule
  ],
  declarations: [EventListOperatorComponent, EventOperationComponent]
})
export class OperatorPanelModule { }
