import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { EntityState } from '../reducers'
import * as RefundAction from '../actions'

@Injectable()
export class RefundDispatchers {
  constructor(private store: Store<EntityState>) {}

  getRefunds() {
    this.store.dispatch(RefundAction.getRefunds())
  }
}
