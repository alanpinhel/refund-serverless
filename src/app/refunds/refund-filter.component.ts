import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core'

import { RefundFilter } from '@app/core'

@Component({
  selector: 'app-refund-filter',
  template: `
    <div class="header-row">
      <mat-chip-list [multiple]="true">
        <mat-chip *ngFor="let status of statusList" [selected]="status.selected" (click)="onFilter(status)">
          <mat-icon *ngIf="status.selected">check</mat-icon> {{ status.id }}
        </mat-chip>
      </mat-chip-list>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundFilterComponent {
  @Input() statusList: RefundFilter[]
  @Output() filter = new EventEmitter<RefundFilter[]>()

  onFilter(status: RefundFilter) {
    status.selected = !status.selected
    this.filter.emit()
  }
}
