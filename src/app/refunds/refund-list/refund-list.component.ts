import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { MatDialog } from '@angular/material'

import { Refund, MasterDetailCommands } from '@app/core'
import { RefundFormComponent } from '../refund-form/refund-form.component'

@Component({
  selector: 'app-refund-list',
  templateUrl: './refund-list.component.html',
  styleUrls: ['./refund-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundListComponent {
  @Input() refunds: Refund[]
  @Input() commands: MasterDetailCommands<Refund>

  constructor(private dialog: MatDialog) {}

  openFormRefund() {
    this.dialog.open(RefundFormComponent, { data: { commands: this.commands } })
  }
}
