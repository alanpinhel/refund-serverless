import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs'

import { Refund, MasterDetailCommands } from '@app/core'
import { RefundDispatchers, RefundSelectors } from '@app/store'

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundsComponent implements MasterDetailCommands<Refund>, OnInit {
  selected: Refund
  commands = this

  refunds$: Observable<Refund[]>
  loading$: Observable<boolean>

  constructor(private refundSelectors: RefundSelectors, private refundDispatchers: RefundDispatchers) {
    this.refunds$ = this.refundSelectors.refunds$
    this.loading$ = this.refundSelectors.loading$
  }

  ngOnInit() {
    this.refundDispatchers.getRefunds()
  }

  close() {
    this.selected = null
  }

  add(refund: Refund) {
    this.refundDispatchers.addRefund(refund)
  }

  delete(refund: Refund) {
    this.refundDispatchers.deleteRefund(refund)
  }

  select(refund: Refund) {
    this.selected = refund
  }

  update(refund: Refund) {
    this.refundDispatchers.updateRefund(refund)
  }

  enableAddMode() {
    this.selected = <any>{}
  }
}
