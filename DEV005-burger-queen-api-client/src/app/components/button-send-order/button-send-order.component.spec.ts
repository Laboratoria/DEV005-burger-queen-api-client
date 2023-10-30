import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSendOrderComponent } from './button-send-order.component';

describe('ButtonSendOrderComponent', () => {
  let component: ButtonSendOrderComponent;
  let fixture: ComponentFixture<ButtonSendOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSendOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSendOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
