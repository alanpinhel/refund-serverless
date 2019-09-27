import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

import { Refund, MasterDetailCommands } from '@app/core'

@Component({
  selector: 'app-refund-detail',
  template: `
    <ng-container *ngIf="showActions(); else toolbarWithoutActions">
      <mat-toolbar class="refundDetail__toolbar" color="primary">
        <mat-toolbar-row class="refundDetail__toolbarRowActions">
          <button mat-icon-button (click)="handleBack()">
            <mat-icon>arrow_back</mat-icon>
          </button>
          <button mat-icon-button *ngIf="showActions()" (click)="handleDelete()">
            <mat-icon>delete</mat-icon>
          </button>
        </mat-toolbar-row>
      </mat-toolbar>

      <mat-toolbar class="refundDetail__toolbar refundDetail__toolbar--priority" color="primary">
        <mat-toolbar-row>
          <span class="refundDetail__toolbarTitle">Refund</span>
          <button mat-mini-fab *ngIf="showActions()" class="refundDetail__fabNewExpense" color="" aria-label="New Expense">
            <mat-icon>add</mat-icon>
          </button>
        </mat-toolbar-row>
      </mat-toolbar>
    </ng-container>

    <ng-template #toolbarWithoutActions>
      <mat-toolbar class="refundDetail__toolbar" color="primary">
        <mat-toolbar-row>
          <button mat-icon-button (click)="handleBack()">
            <mat-icon>arrow_back</mat-icon>
          </button>
          <span class="refundDetail__toolbarTitle--singleLine">Refund</span>
        </mat-toolbar-row>
      </mat-toolbar>
    </ng-template>

    <p *ngIf="refund?.expenses?.length" class="refundDetail__amountExpenses">{{ refund?.expenses?.length }} expenses in your refund</p>
    <p *ngIf="!refund?.expenses?.length" class="refundDetail__amountExpenses">refund without expenses</p>
    <mat-divider></mat-divider>

    <mat-action-list class="refundDetail__expenses">
      <mat-list-item *ngFor="let expense of refund.expenses">
        <img
          matListAvatar
          class="refundDetail__receipt refundDetail__receipt"
          src="https://nayrontoledo.files.wordpress.com/2014/04/dcd4c-comprovanteqnadacomprova.jpg"
        />
        <div mat-line class="refundDetail__expenseTypeValueWrapper">
          <span>{{ expense.type }}</span>
          <span>{{ expense.value | number: '.1-2' }}</span>
        </div>
        <span mat-line class="refundDetail__expenseDate">{{ expense.date | date }}</span>
        <mat-divider></mat-divider>
      </mat-list-item>
    </mat-action-list>

    <footer class="refundDetail__footer">
      <div class="refundDetail__descriptionWrapper">
        <div class="refundDetail__totalWrapper">
          <span class="refundDetail__totalLabel">Total</span>
          <span class="refundDetail__totalValue">{{ refund.total | number: '.1-2' }}</span>
        </div>

        <div class="refundDetail__infoWrapper">
          <span class="refundDetail__infoLabel">Date</span>
          <span class="refundDetail__infoValue">{{ refund.date | date }}</span>
        </div>

        <div class="refundDetail__infoWrapper">
          <span class="refundDetail__infoLabel">Status</span>
          <span class="refundDetail__infoValue">{{ refund.status }}</span>
        </div>

        <div class="refundDetail__infoWrapper">
          <span class="refundDetail__infoLabel">Reason</span>
          <span class="refundDetail__infoValue">{{ refund.reason }}</span>
        </div>
      </div>

      <button
        mat-flat-button
        class="refundDetail__confirmButton"
        color="primary"
        *ngIf="showActions()"
        [disabled]="disableActionConfirm()"
        (click)="handleConfirm()"
      >
        Confirm
      </button>
    </footer>
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
