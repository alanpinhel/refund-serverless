import { Component } from '@angular/core'
import { Store, select } from '@ngrx/store'

import { RefundState, addRefund, addRefundSuccess } from '@app/store'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss'],
})
export class RefundsComponent {
  refunds$: Observable<RefundState>

  constructor(private store: Store<{ refunds: RefundState }>) {
    this.refunds$ = store.pipe(select('refunds'))
    this.refunds$.subscribe(console.log)
  }

  add() {
    this.store.dispatch(addRefund())
    this.store.dispatch(
      addRefundSuccess({ refund: { date: 1, id: 'as', reason: 'trip' } })
    )
  }
}
