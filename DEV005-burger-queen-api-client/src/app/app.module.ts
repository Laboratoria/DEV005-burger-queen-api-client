import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// No es necesario importar Router, ActivatedRoute, ni ParamMap aquí
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookComponent } from './views/cook/cook.component';
import { WaiterComponent } from './views/waiter/waiter.component';
import { AdminComponent } from './views/admin/admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './components/logo/logo.component';
import { AuthGuard } from './guards/auth.guard';
import { WaiterGuard } from './guards/waiter.guard';
import { CookGuard } from './guards/cook.guard';
import { AdminGuard } from './guards/admin.guard';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ButtonSustractComponent } from './components/button-sustract/button-sustract.component';
import { ButtonSendOrderComponent } from './components/button-send-order/button-send-order.component';
import { InputClientComponent } from './components/input-client/input-client.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { ProductsOrderComponent } from './components/products-order/products-order.component';
import { PendingOrdersComponent } from './components/pending-orders/pending-orders.component';
import { OrdersReadyComponent } from './components/orders-ready/orders-ready.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    CookComponent,
    WaiterComponent,
    AdminComponent,
    LoginComponent,
    LogoComponent,
    TabBarComponent,
    OrdersComponent,
    ButtonSustractComponent,
    ButtonSendOrderComponent,
    InputClientComponent,
    MenuComponent,
    ButtonAddComponent,
    ProductsOrderComponent,
    PendingOrdersComponent,
    OrdersReadyComponent,
    OrderStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [ AuthGuard, WaiterGuard, CookGuard, AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
