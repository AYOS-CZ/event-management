import { EventsModule } from './events/events.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    EventsModule
  ],
  declarations: []
})
export class AdminPanelModule { }
