import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { EntityState } from '../reducers'
import { Refund } from '../../core'
import * as RefundAction from '../actions'

@Injectable()
export class RefundDispatchers {
  constructor(private store: Store<EntityState>) {}

  deleteRefund(refund: Refund) {
    this.store.dispatch(RefundAction.deleteRefund({ refund }))
  }

  addRefund(refund: Refund) {
    this.store.dispatch(RefundAction.addRefund({ refund }))
  }

  updateRefund(refund: Refund) {
    this.store.dispatch(RefundAction.updateRefund({ refund }))
  }

  getRefunds() {
    this.store.dispatch(RefundAction.getRefunds())
  }
}
