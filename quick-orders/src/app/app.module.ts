import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module'; // Importa el archivo de rutas

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { WaiterComponent } from './component/waiter/waiter.component';
import { KitchenComponent } from './component/kitchen/kitchen.component';
import { AdminComponent } from './component/admin/admin.component';
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { AdminComponent } from './components/admin/admin.component';
>>>>>>> origin/main

// Crear constante de componentes 
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
<<<<<<< HEAD
    AppRoutingModule // Agrega el AppRoutingModule a los imports
=======
    AppRoutingModule
>>>>>>> origin/main
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

