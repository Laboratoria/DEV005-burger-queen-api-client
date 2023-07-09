import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicComponent } from './mat-basic.component';

describe('MatBasicComponent', () => {
  let component: MatBasicComponent;
  let fixture: ComponentFixture<MatBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatBasicComponent]
    });
    fixture = TestBed.createComponent(MatBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
