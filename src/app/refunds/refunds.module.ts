import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@app/shared'
import { RefundsRoutingModule } from './refunds-routing.module'
import { RefundsComponent } from './refunds/refunds.component'
import { RefundListComponent } from './refund-list.component'
import { RefundFormComponent } from './refund-form.component'
import { RefundFilterComponent } from './refund-filter.component'
import { RefundActionComponent } from './refund-action.component'
import { RefundConfirmComponent } from './refund-confirm.component'

@NgModule({
  declarations: [
    RefundsComponent,
    RefundListComponent,
    RefundFormComponent,
    RefundFilterComponent,
    RefundActionComponent,
    RefundConfirmComponent,
  ],
  imports: [CommonModule, RefundsRoutingModule, SharedModule],
  entryComponents: [RefundFormComponent, RefundConfirmComponent],
})
export class RefundsModule {}
