import { Component, ChangeDetectionStrategy } from '@angular/core'
import { MatDialogRef } from '@angular/material'

import { Refund } from '@app/core'

@Component({
  template: `
    <h1 mat-dialog-title>New Refund</h1>
    <div mat-dialog-content>
      <p>To create a refund draft, enter the reason.</p>
      <mat-form-field class="full">
        <input matInput required placeholder="Reason" (keyup.enter)="save()" [(ngModel)]="reason" />
        <mat-error>You must enter a value</mat-error>
      </mat-form-field>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button color="primary" class="uppercase" (click)="cancel()">Cancel</button>
      <button mat-button color="primary" class="uppercase" (click)="save()">Save</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundFormComponent {
  reason: string

  constructor(private dialogRef: MatDialogRef<RefundFormComponent>) {}

  cancel() {
    this.dialogRef.close()
  }

  save() {
    const { reason } = this
    reason && this.dialogRef.close({ reason } as Refund)
  }
}
