import { Component, ChangeDetectionStrategy, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

interface DialogData {
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
      <button mat-button color="primary" class="confirmDialog__button" (click)="handleNo()">No</button>
      <button mat-button color="primary" class="confirmDialog__button" (click)="handleYes()">Yes</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  handleNo() {
    this.dialogRef.close()
  }

  handleYes() {
    this.dialogRef.close(true)
  }
}
