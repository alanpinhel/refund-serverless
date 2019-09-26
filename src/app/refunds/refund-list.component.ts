import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

import { Refund, MasterDetailCommands } from '@app/core'

@Component({
  selector: 'app-refund-list',
  template: `
    <mat-toolbar color="primary">
      Refunds
    </mat-toolbar>

    <mat-action-list>
      <mat-list-item *ngFor="let refund of refunds" (click)="commands.select(refund)">
        <img matListAvatar [src]="'assets/' + refund.status + '.svg'" [alt]="refund.status" />
        <h4 mat-line>{{ refund.reason }}</h4>
        <p mat-line>{{ refund.date | date }}</p>
      </mat-list-item>
    </mat-action-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundListComponent {
  @Input() refunds: Refund[]
  @Input() commands: MasterDetailCommands<Refund>
}
