import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Observable } from 'rxjs'
import { SubSink } from 'subsink'

import { Refund, Expense } from '@app/core'
import { RefundDispatchers, RefundSelectors } from '@app/store'
import { ConfirmDialogComponent } from '@app/shared'
import { RefundFormComponent } from '../refund-form/refund-form.component'

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundsComponent implements OnInit, OnDestroy {
  selectedRefund: Refund
  selectedExpense: Expense

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

  get showActions() {
    return this.selectedRefund.status === 'draft'
  }

  get disableActionConfirm() {
    return !this.selectedRefund.expenses.length
  }

  get expenseInEditMode() {
    return this.selectedRefund.expenses.includes(this.selectedExpense)
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
    this.selectedRefund = refund
  }

  handleUnselectRefund() {
    this.selectedRefund = null
  }

  handleDeleteRefund() {
    this.subs.sink = this.dialog
      .open(ConfirmDialogComponent, { data: { title: 'Refund Delete', content: 'Do you really want to delete?' } })
      .afterClosed()
      .subscribe((res: boolean) => {
        if (res) {
          this.refundDispatchers.deleteRefund(this.selectedRefund)
          this.selectedRefund = null
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
          const updatedRefund = { ...this.selectedRefund, status: 'confirmed' }
          this.refundDispatchers.updateRefund(updatedRefund)
          this.selectedRefund = updatedRefund
        }
      })
  }

  handleSelectExpense(expense: Expense) {
    this.selectedExpense = expense
  }

  handleUnselectExpense() {
    this.selectedExpense = null
  }

  handleDeleteExpense() {
    const updatedExpenses = this.selectedRefund.expenses.filter(e => e !== this.selectedExpense)
    const updatedRefund = { ...this.selectedRefund, expenses: updatedExpenses, total: updatedExpenses.reduce((acc, e) => acc + e.value, 0) }
    this.refundDispatchers.updateRefund(updatedRefund)
    this.selectedRefund = updatedRefund
    this.selectedExpense = null
  }

  handleSaveExpense() {
    const updatedExpenses = this.expenseInEditMode
      ? this.selectedRefund.expenses.map(e => (e === this.selectedExpense ? this.selectedExpense : e))
      : this.selectedRefund.expenses.concat([this.selectedExpense])
    const updatedRefund = { ...this.selectedRefund, expenses: updatedExpenses, total: updatedExpenses.reduce((acc, e) => acc + e.value, 0) }
    this.refundDispatchers.updateRefund(updatedRefund)
    this.selectedRefund = updatedRefund
    this.selectedExpense = null
  }
}
