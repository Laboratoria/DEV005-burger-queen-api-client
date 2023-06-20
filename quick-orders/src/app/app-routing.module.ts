import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { WaiterComponent } from './component/waiter/waiter.component';
import { KitchenComponent } from './component/kitchen/kitchen.component';
import { AdminComponent } from './component/admin/admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'waiter', component: WaiterComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




  
