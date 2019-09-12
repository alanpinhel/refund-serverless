import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@app/shared'
import { RefundsRoutingModule } from './refunds-routing.module'
import { RefundsComponent } from './refunds/refunds.component'
import { RefundListComponent } from './refund-list.component'
import { RefundFormComponent } from './refund-form.component'

@NgModule({
  declarations: [RefundsComponent, RefundListComponent, RefundFormComponent],
  imports: [CommonModule, RefundsRoutingModule, SharedModule],
  entryComponents: [RefundFormComponent],
})
export class RefundsModule {}
