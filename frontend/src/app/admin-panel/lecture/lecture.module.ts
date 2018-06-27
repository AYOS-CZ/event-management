import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLectureComponent } from './create-lecture/create-lecture.component';
import { LectureListComponent } from './lecture-list/lecture-list.component';
import { LectureDetailComponent } from './lecture-detail/lecture-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateLectureComponent, LectureListComponent, LectureDetailComponent]
})
export class LectureModule { }
