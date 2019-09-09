import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'app-refund-action',
  template: `
    <div class="header-row selected">
      <span class="mat-body">{{ numSelected }} selected</span>
      <span class="spacer"></span>
      <button *ngIf="numSelected === 1" mat-icon-button>
        <mat-icon>visibility</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon>delete</mat-icon>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundActionComponent {
  @Input() numSelected: number
}
