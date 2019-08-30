import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Observable } from 'rxjs'
import ResizeObserver from 'resize-observer-polyfill'

import { Refund } from '@app/core'
import { RefundDispatchers, RefundSelectors } from '@app/store'
import { RefundFormComponent } from '../refund-form/refund-form.component'

const maxWidthBody = 425
const spacingFAB = 16

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss'],
})
export class RefundsComponent implements OnInit {
  refunds$: Observable<Refund[]>
  rightFAB = 1

  constructor(
    private refundDispatchers: RefundDispatchers,
    private refundSelectors: RefundSelectors,
    private dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) {
    this.refunds$ = this.refundSelectors.refunds$
  }

  ngOnInit() {
    const ro = new ResizeObserver(entries => {
      const { width } = entries[0].contentRect
      if (width > maxWidthBody) {
        this.rightFAB = (width - maxWidthBody) / 2 + spacingFAB
      } else {
        this.rightFAB = spacingFAB
      }
      this.cd.detectChanges()
    })
    ro.observe(document.querySelector('html'))
  }

  add() {
    this.dialog
      .open(RefundFormComponent)
      .afterClosed()
      .subscribe(refund => {
        refund && this.refundDispatchers.addRefund(refund)
      })
  }

  update() {
    this.refundDispatchers.updateRefund({ date: 123, id: '1', reason: 'trip to Salvador', status: 'draft' })
  }

  delete() {
    this.refundDispatchers.deleteRefund({ date: 1, id: '1', reason: 'trip', status: 'draft' })
  }
}
