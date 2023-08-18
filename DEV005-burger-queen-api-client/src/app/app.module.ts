import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// No es necesario importar Router, ActivatedRoute, ni ParamMap aquí

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookComponent } from './components/cook/cook.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { AdminComponent } from './components/admin/admin.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './components/logo/logo.component';
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
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
