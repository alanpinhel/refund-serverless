import { SelectionModel } from '@angular/cdk/collections'
import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

import { Refund } from '@app/core'

@Component({
  selector: 'app-refund-list',
  template: `
    <div class="wrapper-table">
      <table mat-table [dataSource]="refunds">
        <ng-container matColumnDef="select">
          <th mat-header-cell *matHeaderCellDef>
            <mat-checkbox
              (change)="$event ? masterToggle() : null"
              [checked]="selection.hasValue() && isAllSelected()"
              [indeterminate]="selection.hasValue() && !isAllSelected()"
            ></mat-checkbox>
          </th>
          <td mat-cell *matCellDef="let row">
            <mat-checkbox
              (click)="$event.stopPropagation()"
              (change)="$event ? selection.toggle(row) : null"
              [checked]="selection.isSelected(row)"
            ></mat-checkbox>
          </td>
        </ng-container>

        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>#</th>
          <td mat-cell *matCellDef="let r">{{ r.id }}</td>
        </ng-container>

        <ng-container matColumnDef="date">
          <th mat-header-cell *matHeaderCellDef>Date</th>
          <td mat-cell *matCellDef="let r">{{ r.date | date }}</td>
        </ng-container>

        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef>Status</th>
          <td mat-cell *matCellDef="let r">{{ r.status }}</td>
        </ng-container>

        <ng-container matColumnDef="reason">
          <th mat-header-cell *matHeaderCellDef>Reason</th>
          <td mat-cell *matCellDef="let r">{{ r.reason }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="columns"></tr>
        <tr mat-row *matRowDef="let row; columns: columns" (click)="selection.toggle(row)"></tr>
      </table>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundListComponent {
  @Input() refunds: Refund[]
  @Input() columns: string[]
  @Input() selection: SelectionModel<Refund>
  @Input() numSelected: number
  @Input() isAllSelected: () => number
  @Input() masterToggle: () => void
}
