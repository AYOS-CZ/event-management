import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealingListComponent } from './healing-list/healing-list.component';
import { HealingDetailComponent } from './healing-detail/healing-detail.component';
import { HealingCreateComponent } from './healing-create/healing-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HealingListComponent, HealingDetailComponent, HealingCreateComponent]
})
export class HealingModule { }
