import { Component, ChangeDetectionStrategy, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

import { Refund, MasterDetailCommands } from '@app/core'

interface DataDialog {
  refund: Refund
  commands: MasterDetailCommands<Refund>
}

@Component({
  template: `
    <h1 mat-dialog-title>New Refund</h1>
    <div mat-dialog-content>
      <p>To create a refund draft, enter the reason.</p>
      <mat-form-field class="refundForm__formField">
        <input matInput required placeholder="Reason" (keyup.enter)="handleSave()" [(ngModel)]="reason" />
        <mat-error>You must enter a value</mat-error>
      </mat-form-field>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button color="primary" class="refundForm__button" (click)="handleCancel()">Cancel</button>
      <button mat-button color="primary" class="refundForm__button" (click)="handleSave()">Save</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundFormComponent {
  reason: string

  constructor(private dialogRef: MatDialogRef<RefundFormComponent>, @Inject(MAT_DIALOG_DATA) public data: DataDialog) {}

  handleCancel() {
    this.dialogRef.close()
  }

  handleSave() {
    const {
      reason,
      data: { commands },
    } = this

    if (reason) {
      commands.add(<Refund>{ reason })
      this.dialogRef.close()
    }
  }
}
