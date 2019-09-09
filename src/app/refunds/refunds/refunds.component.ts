import { SelectionModel } from '@angular/cdk/collections'
import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core'
import { MatDialog } from '@angular/material'
import { SubSink } from 'subsink'

import { Refund, RefundFilter } from '@app/core'
import { RefundDispatchers, RefundSelectors } from '@app/store'
import { RefundFormComponent } from '../refund-form.component'
import { RefundConfirmComponent } from '../refund-confirm.component'

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundsComponent implements OnInit, OnDestroy {
  refunds: Refund[] = []
  allRefunds: Refund[] = []
  subs = new SubSink()
  columns = ['select', 'id', 'date', 'status', 'reason']
  selection = new SelectionModel<Refund>(true, [])
  statusList: RefundFilter[] = [
    { id: 'Draft', selected: true },
    { id: 'Confirmed', selected: false },
    { id: 'Approved', selected: false },
    { id: 'Authorized', selected: false },
    { id: 'Paid out', selected: false },
  ]

  constructor(
    private refundDispatchers: RefundDispatchers,
    private refundSelectors: RefundSelectors,
    private dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subs.sink = this.refundSelectors.refunds$.subscribe(refunds => {
      this.allRefunds = refunds
      this.handleFilter()
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  get numSelected() {
    return this.selection.selected.length
  }

  isAllSelected() {
    const numRows = this.refunds.length
    return this.numSelected === numRows
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.refunds.forEach(row => this.selection.select(row))
  }

  handleFilter() {
    const selectedStatusList = this.statusList.filter(s => s.selected).map(s => s.id)
    this.refunds = this.allRefunds.filter(r => selectedStatusList.includes(r.status))
    this.cd.detectChanges()
  }

  add() {
    this.subs.sink = this.dialog
      .open(RefundFormComponent)
      .afterClosed()
      .subscribe((refund: Refund) => refund && this.refundDispatchers.addRefund(refund))
  }

  delete() {
    this.subs.sink = this.dialog
      .open(RefundConfirmComponent)
      .afterClosed()
      .subscribe(
        (res: boolean) =>
          res &&
          this.selection.selected.forEach(r => {
            this.selection.deselect(r)
            this.refundDispatchers.deleteRefund(r)
          })
      )
  }
}
