import { HealingModule } from './healing/healing.module';
import { LectureModule } from './lecture/lecture.module';
import { EventsModule } from './events/events.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    EventsModule,
    LectureModule,
    HealingModule
  ],
  exports: [
    EventsModule,
    LectureModule,
    HealingModule
  ],
  declarations: []
})
export class AdminPanelModule { }
