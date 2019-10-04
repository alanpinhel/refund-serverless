import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'refunds',
    loadChildren: () => import('./refunds/refunds.module').then(m => m.RefundsModule),
  },
  {
    path: '',
    redirectTo: 'refunds',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'refunds',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
