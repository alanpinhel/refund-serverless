import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { Refund } from '@app/core'
import { RefundDispatchers, RefundSelectors } from '@app/store'

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss'],
})
export class RefundsComponent {
  refunds$: Observable<Refund[]>
  loading$: Observable<boolean>

  constructor(private refundDispatchers: RefundDispatchers, private refundSelectors: RefundSelectors) {
    this.refunds$ = this.refundSelectors.refunds$
    this.loading$ = this.refundSelectors.loading$
  }

  add() {
    this.refundDispatchers.addRefund({ id: '1', date: 123, reason: 'Trip' })
  }
}
