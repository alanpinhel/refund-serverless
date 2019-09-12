import { Component, ChangeDetectionStrategy, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

export interface DialogData {
  title: string
  content: string
}

@Component({
  template: `
    <h1 mat-dialog-title>{{ data.title }}</h1>
    <div mat-dialog-content>
      <p>{{ data.content }}</p>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button color="primary" class="uppercase" (click)="no()">No</button>
      <button mat-button color="primary" class="uppercase" (click)="yes()">Yes</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  no() {
    this.dialogRef.close()
  }

  yes() {
    this.dialogRef.close(true)
  }
}
