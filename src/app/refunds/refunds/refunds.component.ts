import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs'

import { Refund } from '@app/core'
import { RefundDispatchers, RefundSelectors } from '@app/store'

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundsComponent implements OnInit {
  columns = ['date', 'status', 'reason']

  refunds$: Observable<Refund[]>
  loading$: Observable<boolean>

  constructor(private refundDispatchers: RefundDispatchers, refundSelectors: RefundSelectors) {
    this.refunds$ = refundSelectors.refunds$
    this.loading$ = refundSelectors.loading$
  }

  ngOnInit() {
    this.refundDispatchers.getRefunds()
  }
}
