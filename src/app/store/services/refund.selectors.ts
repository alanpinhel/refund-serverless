import { Injectable } from '@angular/core'
import { Store, createSelector, createFeatureSelector } from '@ngrx/store'

import { EntityState } from '../reducers'
import { RefundState } from '../reducers/refund.reducer'

const getEntityState = createFeatureSelector<EntityState>('entityCache')

const getRefundState = createSelector(
  getEntityState,
  (state: EntityState) => state.refunds
)

const getAllRefunds = createSelector(
  getRefundState,
  (state: RefundState) => state.refunds
)

const getRefundsLoading = createSelector(
  getRefundState,
  (state: RefundState) => state.loading
)

@Injectable()
export class RefundSelectors {
  constructor(private store: Store<EntityState>) {}
  refunds$ = this.store.select(getAllRefunds)
  refundState$ = this.store.select(getRefundState)
  loading$ = this.store.select(getRefundsLoading)
}
