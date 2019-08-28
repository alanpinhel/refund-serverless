import { ActionReducerMap } from '@ngrx/store'

import { RefundState } from './refund.reducer'
import * as fromRefunds from './refund.reducer'

export interface EntityState {
  refunds: RefundState
}

export const reducers: ActionReducerMap<EntityState> = {
  refunds: fromRefunds.reducer,
}
