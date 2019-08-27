import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'refunds' },
  {
    path: 'refunds',
    loadChildren: () =>
      import('./refunds/refunds.module').then(m => m.RefundsModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
