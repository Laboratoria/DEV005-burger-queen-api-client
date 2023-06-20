import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // Importa el archivo de rutas

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { WaiterComponent } from './component/waiter/waiter.component';
import { KitchenComponent } from './component/kitchen/kitchen.component';
import { AdminComponent } from './component/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WaiterComponent,
    KitchenComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Agrega el AppRoutingModule a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

