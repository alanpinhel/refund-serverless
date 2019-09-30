import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Observable } from 'rxjs'
import { SubSink } from 'subsink'

import { Refund } from '@app/core'
import { RefundDispatchers, RefundSelectors } from '@app/store'
import { ConfirmDialogComponent } from '@app/shared'
import { RefundFormComponent } from '../refund-form/refund-form.component'

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundsComponent implements OnInit, OnDestroy {
  selected: Refund

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

  handleNewRefund() {
    this.subs.sink = this.dialog
      .open(RefundFormComponent)
      .afterClosed()
      .subscribe((reason: string) => {
        if (reason) {
          this.refundDispatchers.addRefund(<Refund>{ reason })
        }
      })
  }

  handleSelectRefund(refund: Refund) {
    this.selected = refund
  }

  get showActions() {
    return this.selected.status === 'draft'
  }

  get disableActionConfirm() {
    return !this.selected.expenses.length
  }

  handleUnselectRefund() {
    this.selected = null
  }

  handleDeleteRefund() {
    this.subs.sink = this.dialog
      .open(ConfirmDialogComponent, { data: { title: 'Refund Delete', content: 'Do you really want to delete?' } })
      .afterClosed()
      .subscribe((res: boolean) => {
        if (res) {
          this.refundDispatchers.deleteRefund(this.selected)
          this.selected = null
          this.cd.markForCheck()
        }
      })
  }

  handleConfirmRefund() {
    this.subs.sink = this.dialog
      .open(ConfirmDialogComponent, { data: { title: 'Refund Confirm', content: 'Do you really want to confirm?' } })
      .afterClosed()
      .subscribe((res: boolean) => {
        if (res) {
          this.refundDispatchers.updateRefund({ ...this.selected, status: 'confirmed' })
          this.selected = null
          this.cd.markForCheck()
        }
      })
  }
}
