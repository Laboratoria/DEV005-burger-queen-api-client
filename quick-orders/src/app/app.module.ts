import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { AdminComponent } from './components/admin/admin.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
