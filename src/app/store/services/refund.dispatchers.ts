import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { Refund } from '@app/core'
import { EntityState } from '../reducers'
import * as RefundAction from '../actions'

@Injectable()
export class RefundDispatchers {
  constructor(private store: Store<EntityState>) {}

  getRefunds() {
    this.store.dispatch(RefundAction.getRefunds())
  }

  addRefund(refund: Refund) {
    this.store.dispatch(RefundAction.addRefund({ refund }))
  }

  updateHero(refund: Refund) {
    this.store.dispatch(RefundAction.updateRefund({ refund }))
  }

  deleteHero(refund: Refund) {
    this.store.dispatch(RefundAction.deleteRefund({ refund }))
  }
}
