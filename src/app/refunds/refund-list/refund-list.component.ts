import { SelectionModel } from '@angular/cdk/collections'
import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

import { Refund } from '@app/core'

@Component({
  selector: 'app-refund-list',
  templateUrl: './refund-list.component.html',
  styleUrls: ['./refund-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundListComponent {
  @Input() refunds: Refund[]
  displayedColumns = ['select', 'id', 'date', 'status', 'reason']
  selection = new SelectionModel<Refund>(true, [])

  isAllSelected() {
    const numSelected = this.selection.selected.length
    const numRows = this.refunds.length
    return numSelected === numRows
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.refunds.forEach(row => this.selection.select(row))
  }
}
