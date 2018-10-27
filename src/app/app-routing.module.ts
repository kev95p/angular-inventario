import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from 'app/modules/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminLayoutComponent } from './modules/plantilla/admin-layout/admin-layout.component';
import { ProductsComponent } from './modules/products/products.component';

const routes: Routes = [
  {path: '', 
  component: AdminLayoutComponent, 
  canActivate: [AuthGuard],
  children: [
    {path:'',component: DashboardComponent},
    {path:'products',component: ProductsComponent}
  ]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
