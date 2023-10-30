import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WaiterComponent } from './waiter.component';
import { NewOrder, Product }  from 'src/app/models/products.interface';

fdescribe('WaiterComponent', () => {
  let component: WaiterComponent;
  let fixture: ComponentFixture<WaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaiterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(WaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Las pruebas existentes que has escrito son correctas y no es necesario modificarlas.

  it('should add the order to the orders array', () => {
    // Arrange
    const order: NewOrder = {
      userId: 1,
      client: 'Client Name',
      products: [], // Debe ser un array de productos en ProductInOrder
      status: 'pending',
      dateEntry: new Date(),
    };

    // Act
    component.onOrderCreated(order);

    // Assert
    expect(component.orders).toContain(order);
  });

  it('should reset the clientName property to an empty string', () => {
    // Arrange
    component.clientName = 'Client Name';

    // Act
    component.onOrderCreated({} as NewOrder);

    // Assert
    expect(component.clientName).toBe('');
  });

  it('should reset the tableNumber property to an empty string', () => {
    // Arrange
    component.tableNumber = 'Table 5';

    // Act
    component.onOrderCreated({} as NewOrder);

    // Assert
    expect(component.tableNumber).toBe('');
  });

  it('should reset the productOrderList property to an empty array', () => {
    // Arrange
    component.productOrderList = [{ product: {} as Product, qty: 1 }];

    // Act
    component.onOrderCreated({} as NewOrder);

    // Assert
    expect(component.productOrderList.length).toBe(0);
  });
});
