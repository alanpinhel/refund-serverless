import { Component } from '@angular/core'
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

  constructor(private refundDispatchers: RefundDispatchers, private refundSelectors: RefundSelectors) {
    this.refunds$ = this.refundSelectors.refunds$
  }

  add() {
    this.refundDispatchers.addRefund({ date: 1, id: '1', reason: 'trip' })
  }

  update() {
    this.refundDispatchers.updateRefund({ date: 123, id: '1', reason: 'trip to Salvador' })
  }

  delete() {
    this.refundDispatchers.deleteRefund({ date: 1, id: '1', reason: 'trip' })
  }
}
