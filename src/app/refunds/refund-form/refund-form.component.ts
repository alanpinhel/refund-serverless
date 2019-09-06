import { Component, ChangeDetectionStrategy } from '@angular/core'
import { MatDialogRef } from '@angular/material'

import { Refund } from '@app/core'

@Component({
  templateUrl: './refund-form.component.html',
  styleUrls: ['./refund-form.component.scss'],
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

    if (reason) {
      const newRefund: Refund = { date: new Date().getTime(), id: null, status: 'Draft', reason }
      this.dialogRef.close(newRefund)
    }
  }
}
