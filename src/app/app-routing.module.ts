import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateStandardDeviationComponent } from './calculate-standard-deviation/calculate-standard-deviation.component';

const routes: Routes = [
  {
    path: 'calc-standard-deviation',
    component: CalculateStandardDeviationComponent,
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
