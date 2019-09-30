import { Component, ChangeDetectionStrategy } from '@angular/core'
import { MatDialogRef } from '@angular/material'

@Component({
  templateUrl: './refund-form.component.html',
  styleUrls: ['./refund-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundFormComponent {
  reason: string

  constructor(public dialogRef: MatDialogRef<RefundFormComponent>) {}
}
