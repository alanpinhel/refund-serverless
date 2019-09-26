import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Observable } from 'rxjs'
import { SubSink } from 'subsink'

import { Refund, MasterDetailCommands } from '@app/core'
import { RefundDispatchers, RefundSelectors } from '@app/store'
import { ConfirmDialogComponent } from '@app/shared'
import { RefundFormComponent } from '../refund-form.component'

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundsComponent implements MasterDetailCommands<Refund>, OnInit, OnDestroy {
  selected: Refund
  commands = this

  refunds$: Observable<Refund[]>
  loading$: Observable<boolean>

  subs = new SubSink()

  constructor(
    private refundSelectors: RefundSelectors,
    private refundDispatchers: RefundDispatchers,
    private dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.refunds$ = this.refundSelectors.refunds$
    this.loading$ = this.refundSelectors.loading$
    this.refundDispatchers.getRefunds()
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  close() {
    this.selected = null
  }

  add(refund: Refund) {
    this.refundDispatchers.addRefund(refund)
  }

  delete(refund: Refund) {
    this.subs.sink = this.dialog
      .open(ConfirmDialogComponent, { data: { title: 'Refund Delete', content: 'Do you really want to delete?' } })
      .afterClosed()
      .subscribe((res: boolean) => {
        if (res) {
          this.close()
          this.refundDispatchers.deleteRefund(refund)
          this.cd.markForCheck()
        }
      })
  }

  select(refund: Refund) {
    this.selected = refund
  }

  update(refund: Refund) {
    this.refundDispatchers.updateRefund(refund)
  }

  openFormRefund() {
    this.dialog.open(RefundFormComponent, { data: { commands: this.commands } })
  }
}
