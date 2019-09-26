import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

import { Refund, MasterDetailCommands } from '@app/core'

@Component({
  selector: 'app-refund-detail',
  template: `
    <div class="wrapper">
      <mat-toolbar color="primary">
        <mat-toolbar-row>
          <button mat-icon-button (click)="handleBack()">
            <mat-icon>arrow_back</mat-icon>
          </button>
          <span class="spacer"></span>
          <button mat-icon-button *ngIf="showActions()" (click)="handleDelete()">
            <mat-icon>delete</mat-icon>
          </button>
        </mat-toolbar-row>

        <mat-toolbar-row style="position: relative;">
          <span style="margin-left: 56px;">Refund</span>
          <button mat-mini-fab color="" style="position: absolute; bottom: -20px;" aria-label="New Expense">
            <mat-icon>add</mat-icon>
          </button>
        </mat-toolbar-row>
      </mat-toolbar>

      <div class="main">
        <div class="amount-expenses uppercase">
          <p *ngIf="refund?.expenses?.length">{{ refund.expenses.length }} expenses in your refund</p>
          <p *ngIf="!refund?.expenses?.length">refund without expenses</p>
        </div>

        <mat-action-list>
          <mat-divider></mat-divider>
          <mat-list-item *ngFor="let expense of refund.expenses">
            <img matListAvatar src="https://nayrontoledo.files.wordpress.com/2014/04/dcd4c-comprovanteqnadacomprova.jpg" />
            <div mat-line style="display: flex">
              <span>{{ expense.type }}</span>
              <span class="spacer"></span>
              <span>{{ expense.value | currency }}</span>
              <mat-divider></mat-divider>
            </div>
            <p mat-line>{{ expense.date | date }}</p>
          </mat-list-item>
        </mat-action-list>
      </div>

      <div class="actions">
        <p style="text-align: right;">Total {{ refund.total | currency }}</p>
        <p>{{ refund.date | date }}</p>
        <p>{{ refund.status }}</p>
        <p>{{ refund.reason }}</p>

        <button
          mat-flat-button
          class="full uppercase"
          color="primary"
          *ngIf="showActions()"
          [disabled]="disableActionConfirm()"
          (click)="handleConfirm()"
        >
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

  showActions() {
    return this.refund.status === 'draft'
  }

  disableActionConfirm() {
    return !this.refund.expenses.length
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
