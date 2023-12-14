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
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// Interceptors
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ProductsComponent } from './components/admin/products/products.component';
import { UsersComponent } from './components/admin/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { DesayunoComponent } from './components/waiter/desayuno/desayuno.component';
import { AlmuerzoComponent } from './components/waiter/almuerzo/almuerzo.component';
import { PlaceOrderComponent } from './components/waiter/place-order/place-order.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// Crear constante de componentes 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WaiterComponent,
    KitchenComponent,
    AdminComponent,
    ProductsComponent,
    UsersComponent,
    DesayunoComponent,
    AlmuerzoComponent,
    PlaceOrderComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    MatIconModule,
    ScrollingModule,
    InfiniteScrollModule,
    FontAwesomeModule,
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



