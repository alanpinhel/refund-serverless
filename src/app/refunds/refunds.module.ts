import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@app/shared'
import { RefundsRoutingModule } from './refunds-routing.module'
import { RefundsComponent } from './refunds/refunds.component'

@NgModule({
  declarations: [RefundsComponent],
  imports: [CommonModule, RefundsRoutingModule, SharedModule],
})
export class RefundsModule {}
