import { Component, ChangeDetectionStrategy } from '@angular/core'
import { MatDialogRef } from '@angular/material'

@Component({
  template: `
    <h1 mat-dialog-title>Delete Refund</h1>
    <div mat-dialog-content>
      <p>Do you really want to delete?</p>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button color="primary" class="uppercase" (click)="no()">No</button>
      <button mat-button color="primary" class="uppercase" (click)="yes()">Yes</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundConfirmComponent {
  constructor(private dialogRef: MatDialogRef<RefundConfirmComponent>) {}

  no() {
    this.dialogRef.close()
  }

  yes() {
    this.dialogRef.close(true)
  }
}
