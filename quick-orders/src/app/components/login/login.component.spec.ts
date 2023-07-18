import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('loginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [FormBuilder,  AuthService, Router],
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have as varible called token', () => {
    expect(component.token).toEqual('');
  });

  it('should have empty username and password', () => {
    expect(component.authForm.value.username).toEqual('');
    expect(component.authForm.value.password).toEqual('');
  });

  fit('should login the user successfully', (done) => {
    component.authForm.value.email = 'grace.hopper@systers.xyz';
    component.authForm.value.password = '123456';

    //@ts-ignore
    spyOn(component.authService, 'login')
        .and.returnValue(
        of({
          accessToken: '1234567',
          user: { role: 'admin' },
          status: 400,
        })
        );
    //@ts-ignore
    spyOn(component.router, 'navigateByUrl');
    component.login();

    //@ts-ignore
    const method = component.router.navigateByUrl;
    setTimeout(() => {
        expect(method).toHaveBeenCalledWith('/admin');
        done();

    }, 200);
  });
});
