import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { MatDialog } from '@angular/material'

import { Refund, MasterDetailCommands } from '@app/core'
import { RefundFormComponent } from './refund-form.component'

@Component({
  selector: 'app-refund-list',
  template: `
    <mat-toolbar color="primary">
      Refunds
    </mat-toolbar>

    <mat-action-list class="refundList__refunds">
      <mat-list-item *ngFor="let refund of refunds" (click)="commands.select(refund)">
        <img matListAvatar [src]="'assets/' + refund.status + '.svg'" [alt]="refund.status" />
        <h4 mat-line>{{ refund.reason }}</h4>
        <p mat-line>{{ refund.date | date }}</p>
      </mat-list-item>
    </mat-action-list>

    <button mat-fab appAdjustPositionFAB class="refundList__fabNewRefund" aria-label="New Refund" (click)="openFormRefund()">
      <mat-icon>add</mat-icon>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundListComponent {
  @Input() refunds: Refund[]
  @Input() commands: MasterDetailCommands<Refund>

  constructor(private dialog: MatDialog) {}

  openFormRefund() {
    this.dialog.open(RefundFormComponent, { data: { commands: this.commands } })
  }
}
