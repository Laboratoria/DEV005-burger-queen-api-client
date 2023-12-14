import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatProductsComponent } from './mat-products.component';

describe('MatProductsComponent', () => {
  let component: MatProductsComponent;
  let fixture: ComponentFixture<MatProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatProductsComponent]
    });
    fixture = TestBed.createComponent(MatProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
