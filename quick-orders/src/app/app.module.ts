import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatTableModule } from '@angular/material/table';
// Interceptors
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ProductsComponent } from './components/admin/products/products.component';


// Crear constante de componentes 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WaiterComponent,
    KitchenComponent,
    AdminComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



