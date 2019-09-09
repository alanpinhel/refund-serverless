import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './material.module'
import { AdjustPositionFABDirective } from './directives/adjust-position-fab.directive'

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [AdjustPositionFABDirective],
  exports: [FormsModule, ReactiveFormsModule, MaterialModule, AdjustPositionFABDirective],
})
export class SharedModule {}
