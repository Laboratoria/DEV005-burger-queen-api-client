import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LoginComponent } from './login.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UserService } from 'src/app/services/users.service';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [LoginComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [UserService, HttpClient, HttpHandler]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a form to use for login', () => {
    const elementForm = fixture.debugElement.nativeElement.querySelector('form');
    expect(elementForm).toBeTruthy();
  });

  it('if password and email are empty, showPasswordMessage should return true', () => {
    // const elementForm = fixture.debugElement.nativeElement.querySelector('form');
    expect(component.showPasswordMessage()).toBeFalse();
  })

  // Buscar como probar que cuando ponen un correo y password en los elementos y se hace subtmit, si se llama la función que hace la petición a la API.

  it('should call onLogin when form is submited', () => {
    // Crear credenciales simuladas para llenar el formulario
    const credentials = { email: 'test@example.com', password: 'password' };
    // Crear un espía para la función onLogin y permitir que la llamada real pase a través (callThrough)
    const loginSpy = spyOn(component, 'onLogin').and.callThrough();
    // spyOn es una función proporcionada por el framework de pruebas Jasmine en Angular.
    // Se utiliza para crear "espías" (spies) en objetos y métodos, lo que permite controlar y observar su comportamiento durante las pruebas.
    // El callThrough() permite que la llamada real a la función pase a través del espía.

    // Establecer los valores de las credenciales en el formulario y marcar como enviado
    component.loginForm.setValue(credentials);
    component.formSubmitted = true;
    fixture.detectChanges();

    // Simular clic en el botón de envío del formulario
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    submitButton.click();
    fixture.detectChanges();

    // Verificar si la función onLogin se llamó con las credenciales adecuadas
    expect(loginSpy).toHaveBeenCalledWith(credentials);
  })

  // como simular un click, un submit (simular un evento)
  // Agregar test para probar que muestra mensaje de error
});
