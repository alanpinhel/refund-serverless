import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './material.module'
import { AdjustPositionFABDirective } from './adjust-position-fab.directive'
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component'
import { LoadingComponent } from './loading/loading.component'

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [AdjustPositionFABDirective, ConfirmDialogComponent, LoadingComponent],
  exports: [FormsModule, ReactiveFormsModule, MaterialModule, AdjustPositionFABDirective, ConfirmDialogComponent, LoadingComponent],
  entryComponents: [ConfirmDialogComponent],
})
export class SharedModule {}
