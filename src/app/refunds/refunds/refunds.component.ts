import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Observable } from 'rxjs'

import { Refund, MasterDetailCommands } from '@app/core'
import { RefundDispatchers, RefundSelectors } from '@app/store'
import { RefundFormComponent } from '../refund-form.component'
import { RefundDetailComponent } from '../refund-detail.component'

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundsComponent implements MasterDetailCommands<Refund>, OnInit {
  commands = this

  refunds$: Observable<Refund[]>
  loading$: Observable<boolean>

  constructor(private refundDispatchers: RefundDispatchers, private dialog: MatDialog, refundSelectors: RefundSelectors) {
    this.refunds$ = refundSelectors.refunds$
    this.loading$ = refundSelectors.loading$
  }

  ngOnInit() {
    this.refundDispatchers.getRefunds()
  }

  add(refund: Refund) {
    this.refundDispatchers.addRefund(refund)
  }

  delete(refund: Refund) {
    this.refundDispatchers.deleteRefund(refund)
  }

  select(refund: Refund) {
    this.dialog.open(RefundDetailComponent, {
      maxWidth: '393px',
      panelClass: 'full-dialog',
      data: { commands: this.commands, refund },
    })
  }

  update(refund: Refund) {
    this.refundDispatchers.updateRefund(refund)
  }

  openFormRefund() {
    this.dialog.open(RefundFormComponent, { data: { commands: this.commands } })
  }
}
