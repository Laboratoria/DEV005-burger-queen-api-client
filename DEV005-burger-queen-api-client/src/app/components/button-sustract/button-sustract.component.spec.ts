import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSustractComponent } from './button-sustract.component';

describe('ButtonSustractComponent', () => {
  let component: ButtonSustractComponent;
  let fixture: ComponentFixture<ButtonSustractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSustractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSustractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
