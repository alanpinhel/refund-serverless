import { ActionReducerMap } from '@ngrx/store'

import * as fromRefunds from './refund.reducer'

export interface EntityState {
  refunds: fromRefunds.RefundState
}

export const reducers: ActionReducerMap<EntityState> = {
  refunds: fromRefunds.reducer,
}
