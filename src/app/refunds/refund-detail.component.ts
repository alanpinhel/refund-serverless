import { Component, ChangeDetectionStrategy, Inject, OnDestroy } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material'
import { SubSink } from 'subsink'

import { Refund, MasterDetailCommands } from '@app/core'
import { ConfirmDialogComponent } from '@app/shared'

interface DataDialog {
  refund: Refund
  commands: MasterDetailCommands<Refund>
}

@Component({
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="handleCancel()"><mat-icon>close</mat-icon></button>
      <span class="title-toolbar">Refund</span>
      <span class="spacer"></span>
      <button mat-button (click)="handleSave()">SAVE</button>
    </mat-toolbar>
    <div class="content-full-dialog">
      <span class="spacer"></span>
      <button mat-flat-button class="full" color="warn" (click)="handleDelete()">DELETE</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundDetailComponent implements OnDestroy {
  subs = new SubSink()

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<RefundDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog
  ) {}

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  handleCancel() {
    this.dialogRef.close()
  }

  handleSave() {
    const { commands, refund } = this.data
    commands.update(refund)
    this.dialogRef.close()
  }

  handleDelete() {
    const { commands, refund } = this.data
    this.subs.sink = this.dialog
      .open(ConfirmDialogComponent, { data: { title: 'Refund Delete', content: 'Do you really want to delete?' } })
      .afterClosed()
      .subscribe((res: boolean) => {
        if (res) {
          commands.delete(refund)
          this.dialogRef.close()
        }
      })
  }
}
