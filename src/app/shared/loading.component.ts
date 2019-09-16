import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-loading',
  template: `
    <div class="wrapper-loading">
      <mat-card class="rounded-card">
        <mat-spinner diameter="16"></mat-spinner>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .wrapper-loading {
        position: fixed;
        top: 16px;
        left: 50%;
        transform: translateX(-18px);
        z-index: 999;
      }

      .rounded-card {
        display: inline-block;
        border-radius: 100%;
        padding: 0.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {}
