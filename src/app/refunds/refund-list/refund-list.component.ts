import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core'

import { Refund } from '@app/core'

@Component({
  selector: 'app-refund-list',
  templateUrl: './refund-list.component.html',
  styleUrls: ['./refund-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundListComponent {
  @Input() refunds: Refund[]

  @Output() newRefund = new EventEmitter()
  @Output() selectRefund = new EventEmitter<Refund>()
}
