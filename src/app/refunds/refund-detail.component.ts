import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

import { Refund, MasterDetailCommands } from '@app/core'

@Component({
  selector: 'app-refund-detail',
  template: `
    <div class="wrapper">
      <mat-toolbar color="primary">
        <button mat-icon-button (click)="handleBack()">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <span class="title-toolbar">Refund</span>
        <span class="spacer"></span>
        <button mat-icon-button (click)="handleDelete()">
          <mat-icon>delete</mat-icon>
        </button>
      </mat-toolbar>

      <div class="main">
        <p *ngIf="refund?.expenses?.length">{{ refund.items.length }} expenses in your refund</p>
        <p *ngIf="!refund?.expenses?.length">refund without expenses</p>
        <mat-divider></mat-divider>
      </div>

      <div class="actions">
        <button *ngIf="showActionConfirm()" mat-flat-button class="full uppercase" color="primary" (click)="handleConfirm()">
          Confirm
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundDetailComponent {
  @Input() refund: Refund
  @Input() commands: MasterDetailCommands<Refund>

  showActionConfirm() {
    return this.refund.status === 'draft'
  }

  handleBack() {
    this.commands.close()
  }

  handleDelete() {
    this.commands.delete(this.refund)
  }

  handleConfirm() {
    this.commands.close()
    this.commands.update({ ...this.refund, status: 'confirmed' })
  }
}
