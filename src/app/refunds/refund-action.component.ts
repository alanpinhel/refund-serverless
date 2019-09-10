import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-refund-action',
  template: `
    <div class="header-row selected">
      <span class="mat-body">{{ numSelected }} selected</span>
      <span class="spacer"></span>
      <button *ngIf="numSelected === 1" mat-icon-button (click)="view.emit()">
        <mat-icon>visibility</mat-icon>
      </button>
      <button mat-icon-button (click)="delete.emit()">
        <mat-icon>delete</mat-icon>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundActionComponent {
  @Input() numSelected: number
  @Output() view = new EventEmitter()
  @Output() delete = new EventEmitter()
}
