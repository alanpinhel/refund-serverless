import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './material.module'
import { AdjustPositionFABDirective } from './adjust-position-fab.directive'
import { ConfirmDialogComponent } from './confirm-dialog.component'

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [AdjustPositionFABDirective, ConfirmDialogComponent],
  exports: [FormsModule, ReactiveFormsModule, MaterialModule, AdjustPositionFABDirective, ConfirmDialogComponent],
})
export class SharedModule {}
