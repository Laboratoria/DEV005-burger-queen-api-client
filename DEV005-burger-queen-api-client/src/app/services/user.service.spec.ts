import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './users.service';

fdescribe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Configura el módulo de pruebas con el HttpClientTestingModule
    });
    service = TestBed.inject(UserService); // Obtiene una instancia del servicio inyectando TestBed
    httpTestingController = TestBed.inject(HttpTestingController); // Obtiene el controlador de pruebas HTTP
  });

  afterEach(() => {
    httpTestingController.verify(); // Asegura que no haya solicitudes HTTP pendientes al final de cada prueba
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Prueba que el servicio haya sido creado y no sea nulo
  });

  it('should get token from local storage', () => {
    localStorage.removeItem('accessToken'); // Asegura que no hay valor inicial
    const token = service.getToken();  // Llama a la función para obtener el token
    expect(token).toBeNull(); // Verifica que el token sea nulo en este caso
  });

  it('should get token from local storage', () => {
    localStorage.setItem('accesToken', 'testToken' ); // Asegura hay valor inicial
    const token = service.getToken();  // Llama a la función para obtener el token
    expect(token).toBe('testToken'); // Verifica que que existe token
  });

  it('should login successfully', () => {
    // Datos simulados para la prueba
    const mockCredentials = { email: 'nati@burgerqueen.com', password: 'testpassword' };
    const mockResponse = {
      accessToken: 'mockToken',
      user: { email: 'nati@burgerqueen.com', role: 'admin', id: 1 },
    };

    // Llama a la función de inicio de sesión y verifica la respuesta
    service.loginByEmail(mockCredentials).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    // Captura una solicitud HTTP esperada y responde con mockResponse
    const req = httpTestingController.expectOne('http://127.0.0.1:8080/login');
    expect(req.request.method).toBe('POST'); // Verifica que se haya realizado una solicitud POST
    req.flush(mockResponse); // Envía la respuesta simulada a la solicitud
  });

  it('should handle login error', () => {
    // Datos simulados para la prueba
    const mockCredentials = { email: 'testuser', password: 'testpassword' };
    const mockErrorResponse = { status: 401, statusText: 'Unauthorized' };

    // Llama a la función de inicio de sesión y verifica el manejo del error
    service.loginByEmail(mockCredentials).subscribe(
      () => {
        // Aquí puedes realizar alguna acción si es necesario
      },
      (error) => {
        expect(error).toEqual(mockErrorResponse); // Verifica que el error coincida con el error simulado
      }
    );

    // Captura una solicitud HTTP esperada y simula un error en la solicitud
    const req = httpTestingController.expectOne('http://127.0.0.1:8080/login');
    expect(req.request.method).toBe('POST');
    req.error(new ErrorEvent('Unauthorized'), { status: 401, statusText: 'Unauthorized' });
  });
});






