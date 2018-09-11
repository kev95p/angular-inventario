import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
