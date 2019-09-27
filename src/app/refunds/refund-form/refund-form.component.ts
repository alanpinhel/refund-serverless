import { Component, ChangeDetectionStrategy, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

import { Refund, MasterDetailCommands } from '@app/core'

interface DataDialog {
  refund: Refund
  commands: MasterDetailCommands<Refund>
}

@Component({
  templateUrl: './refund-form.component.html',
  styleUrls: ['./refund-form.component.scss'],
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
