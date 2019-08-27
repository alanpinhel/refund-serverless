import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RefundsRoutingModule } from './refunds-routing.module';
import { RefundsComponent } from './refunds/refunds.component'

@NgModule({
  declarations: [RefundsComponent],
  imports: [CommonModule, RefundsRoutingModule],
})
export class RefundsModule {}
