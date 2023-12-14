import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { DesayunoComponent } from './components/waiter/desayuno/desayuno.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'waiter', component: WaiterComponent},
  { path: 'kitchen', component: KitchenComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'products', component: ProductsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  //{ path: 'desayuno', component: DesayunoComponent },
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
